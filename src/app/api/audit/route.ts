import { generateText } from "ai";
import { anthropic } from "@ai-sdk/anthropic";
import { Resend } from "resend";
import { rateLimit, clientIp, originAllowed } from "@/lib/api-guard";

export const runtime = "nodejs";
export const maxDuration = 60;

// Abuse caps — every run costs real Anthropic credits.
const IP_HOURLY_LIMIT = 2;
const IP_DAILY_LIMIT = 4;
const GLOBAL_DAILY_LIMIT = 40;
const FETCH_TIMEOUT_MS = 10_000;
const MAX_HTML_BYTES = 600_000;
const MAX_PAGE_TEXT_CHARS = 3000;

const LEAD_TO = process.env.CONTACT_TO || "haruun@unconventionalgroup.ca";
const LEAD_FROM = process.env.CONTACT_FROM || "Unconventional Group <onboarding@resend.dev>";

// ---------- URL validation (SSRF guard) ----------

function validateTargetUrl(raw: string): URL | null {
  let input = raw.trim();
  if (!input) return null;
  if (!/^https?:\/\//i.test(input)) input = `https://${input}`;
  let url: URL;
  try {
    url = new URL(input);
  } catch {
    return null;
  }
  if (url.protocol !== "http:" && url.protocol !== "https:") return null;
  if (url.port && url.port !== "80" && url.port !== "443") return null;
  if (!hostnameAllowed(url.hostname)) return null;
  return url;
}

function hostnameAllowed(hostname: string): boolean {
  const host = hostname.toLowerCase();
  if (!host.includes(".")) return false; // bare names like "localhost", "intranet"
  if (host === "localhost" || host.endsWith(".local") || host.endsWith(".internal")) return false;
  // Reject IP-literal hosts entirely (covers private ranges, link-local, etc.)
  if (/^\d{1,3}(\.\d{1,3}){3}$/.test(host)) return false;
  if (host.includes(":") || host.startsWith("[")) return false; // IPv6
  // Don't audit ourselves.
  if (host === "unconventionalgroup.ca" || host.endsWith(".unconventionalgroup.ca")) return false;
  return true;
}

// ---------- Page fetch + signal extraction ----------

type PageSignals = {
  finalUrl: string;
  https: boolean;
  status: number;
  title: string;
  metaDescription: string;
  hasViewport: boolean;
  h1s: string[];
  ldJsonCount: number;
  hasOgTags: boolean;
  imgCount: number;
  imgsMissingAlt: number;
  hasPhoneLink: boolean;
  hasForm: boolean;
  platform: string;
  textSample: string;
  wordCount: number;
};

function extractAttr(tag: string, attr: string): string {
  const m = tag.match(new RegExp(`${attr}\\s*=\\s*["']([^"']*)["']`, "i"));
  return m ? m[1] : "";
}

function detectPlatform(html: string): string {
  const h = html.toLowerCase();
  if (h.includes("wix.com") || h.includes("wixstatic")) return "Wix";
  if (h.includes("wp-content") || h.includes("wordpress")) return "WordPress";
  if (h.includes("squarespace")) return "Squarespace";
  if (h.includes("cdn.shopify")) return "Shopify";
  if (h.includes("godaddy")) return "GoDaddy";
  if (h.includes("weebly")) return "Weebly";
  if (h.includes("_next/static")) return "Next.js";
  return "unknown";
}

async function fetchSignals(target: URL): Promise<PageSignals | { error: string }> {
  let res: Response;
  try {
    res = await fetch(target.toString(), {
      redirect: "follow",
      signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
      headers: {
        "User-Agent":
          "Mozilla/5.0 (compatible; OdinAudit/1.0; +https://www.unconventionalgroup.ca/odin)",
        Accept: "text/html,application/xhtml+xml",
      },
    });
  } catch {
    return { error: "unreachable" };
  }

  // Re-check the landing hostname after redirects.
  let finalUrl: URL;
  try {
    finalUrl = new URL(res.url || target.toString());
  } catch {
    return { error: "unreachable" };
  }
  if (!hostnameAllowed(finalUrl.hostname)) return { error: "unreachable" };

  const contentType = res.headers.get("content-type") || "";
  if (!contentType.includes("html")) return { error: "not-html" };

  // Read at most MAX_HTML_BYTES.
  let html = "";
  try {
    const reader = res.body?.getReader();
    if (!reader) return { error: "unreachable" };
    const decoder = new TextDecoder();
    let bytes = 0;
    while (bytes < MAX_HTML_BYTES) {
      const { done, value } = await reader.read();
      if (done) break;
      bytes += value.byteLength;
      html += decoder.decode(value, { stream: true });
    }
    reader.cancel().catch(() => {});
  } catch {
    return { error: "unreachable" };
  }

  const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  const metaDescTag = html.match(/<meta[^>]+name\s*=\s*["']description["'][^>]*>/i)?.[0] ?? "";
  const h1Matches = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)]
    .map((m) => m[1].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim())
    .filter(Boolean)
    .slice(0, 5);
  const imgs = html.match(/<img\b[^>]*>/gi) ?? [];

  const text = html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z#0-9]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();

  return {
    finalUrl: finalUrl.toString(),
    https: finalUrl.protocol === "https:",
    status: res.status,
    title: titleMatch ? titleMatch[1].replace(/\s+/g, " ").trim().slice(0, 200) : "",
    metaDescription: extractAttr(metaDescTag, "content").slice(0, 300),
    hasViewport: /<meta[^>]+name\s*=\s*["']viewport["']/i.test(html),
    h1s: h1Matches,
    ldJsonCount: (html.match(/application\/ld\+json/gi) ?? []).length,
    hasOgTags: /property\s*=\s*["']og:/i.test(html),
    imgCount: imgs.length,
    imgsMissingAlt: imgs.filter((t) => !/alt\s*=\s*["'][^"']+["']/i.test(t)).length,
    hasPhoneLink: /href\s*=\s*["']tel:/i.test(html),
    hasForm: /<form\b/i.test(html),
    platform: detectPlatform(html),
    textSample: text.slice(0, MAX_PAGE_TEXT_CHARS),
    wordCount: text ? text.split(" ").length : 0,
  };
}

// ---------- The Odin audit ----------

const AUDIT_SYSTEM = `You are Odin, the website-audit system for Unconventional Group — an Edmonton-based marketing & sales team (never call it an "agency") serving businesses across Canada. You analyze a business's homepage from extracted signals and produce a precise, specific, professional assessment.

Scoring: rate each dimension 1-5 (5 = excellent, no action needed):
- mobile: viewport configuration, signs of responsive design
- modernity: platform, page weight signals, overall technical foundation
- conversion: clear calls-to-action, visible phone (tel: link), contact form, persuasive structure
- seo: title quality, meta description, H1 structure, schema (JSON-LD), OG tags, image alt coverage
- trust: reviews/testimonials present, specific proof vs generic filler, HTTPS, professional presentation

Rules:
- Be SPECIFIC and TRUE to the actual signals given. Reference their real title/H1 when relevant. Never invent facts about the site.
- If the site is genuinely strong, say so and score it high — do not manufacture problems. Credibility is the entire value of this assessment.
- NEVER mention prices, costs, estimates, or dollar amounts of any kind. The recommended next step is always a complimentary 20-minute call.
- Write in a professional, consultative tone — clear and accessible to a business owner, technical only where it adds precision. Avoid slang, hype, and dramatic phrasing.
- The signals cover the homepage only — assess what is observable; do not claim to have reviewed inner pages or measured page-load performance.

Respond with ONLY valid JSON, no markdown fences, in exactly this shape:
{
  "scores": { "mobile": 1-5, "modernity": 1-5, "conversion": 1-5, "seo": 1-5, "trust": 1-5 },
  "working": ["up to 3 specific strengths"],
  "problems": ["up to 3 specific issues, highest-impact first"],
  "verdict": "2-3 measured, consultative sentences: the overall assessment + the likely business impact (in terms of lost leads or conversions, never dollars) + whether the priorities are best addressed through refinement or a rebuild"
}`;

type AuditReport = {
  scores: { mobile: number; modernity: number; conversion: number; seo: number; trust: number };
  working: string[];
  problems: string[];
  verdict: string;
};

function parseReport(raw: string): AuditReport | null {
  const cleaned = raw.replace(/```json|```/g, "").trim();
  const start = cleaned.indexOf("{");
  const end = cleaned.lastIndexOf("}");
  if (start === -1 || end === -1) return null;
  try {
    const obj = JSON.parse(cleaned.slice(start, end + 1));
    const cats = ["mobile", "modernity", "conversion", "seo", "trust"] as const;
    const scores: Record<string, number> = {};
    for (const c of cats) {
      const v = Number(obj?.scores?.[c]);
      if (!Number.isFinite(v) || v < 1 || v > 5) return null;
      scores[c] = Math.round(v);
    }
    const strArr = (v: unknown) =>
      Array.isArray(v) ? v.filter((s) => typeof s === "string").map((s) => s.slice(0, 300)).slice(0, 3) : [];
    const verdict = typeof obj.verdict === "string" ? obj.verdict.slice(0, 1000) : "";
    if (!verdict) return null;
    return {
      scores: scores as AuditReport["scores"],
      working: strArr(obj.working),
      problems: strArr(obj.problems),
      verdict,
    };
  } catch {
    return null;
  }
}

// ---------- Route ----------

export async function POST(req: Request) {
  if (!originAllowed(req)) {
    return Response.json({ error: "Forbidden." }, { status: 403 });
  }

  const ip = clientIp(req);
  const hourOk = await rateLimit(`audit:h:${ip}`, IP_HOURLY_LIMIT, 60 * 60 * 1000);
  const dayOk = await rateLimit(`audit:d:${ip}`, IP_DAILY_LIMIT, 24 * 60 * 60 * 1000);
  if (!hourOk || !dayOk) {
    return Response.json(
      { error: "You've reached the audit limit for now. Please try again later — or book a free call for a deeper, human-led review." },
      { status: 429 }
    );
  }
  if (!(await rateLimit("audit:global", GLOBAL_DAILY_LIMIT, 24 * 60 * 60 * 1000))) {
    return Response.json(
      { error: "The audit service is at capacity today. Please try again tomorrow, or book a free call to review your site with our team." },
      { status: 429 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot
  if (typeof body.company === "string" && body.company) {
    return Response.json({ ok: true });
  }

  const rawUrl = typeof body.url === "string" ? body.url.trim().slice(0, 500) : "";
  const email = typeof body.email === "string" ? body.email.trim().slice(0, 320) : "";

  if (!rawUrl || !email) {
    return Response.json({ error: "Please enter your website and your email." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "That email doesn't look right." }, { status: 400 });
  }
  const target = validateTargetUrl(rawUrl);
  if (!target) {
    return Response.json(
      { error: "That doesn't look like a public website address. Try something like yourbusiness.ca" },
      { status: 400 }
    );
  }

  if (!process.env.ANTHROPIC_API_KEY) {
    return Response.json(
      { error: "The audit service is temporarily unavailable. Please book a free call and we'll review your site personally." },
      { status: 503 }
    );
  }

  const signals = await fetchSignals(target);
  if ("error" in signals) {
    const msg =
      signals.error === "not-html"
        ? "That address didn't return a standard webpage. Please check the URL and try again."
        : "We couldn't reach that site. Please check the address and try again.";
    return Response.json({ error: msg }, { status: 422 });
  }

  let report: AuditReport | null = null;
  try {
    const { text } = await generateText({
      model: anthropic("claude-sonnet-4-6"),
      system: AUDIT_SYSTEM,
      prompt: `Audit this homepage.\n\nSignals (extracted from the live page):\n${JSON.stringify(
        { requestedUrl: rawUrl, ...signals, textSample: undefined },
        null,
        2
      )}\n\nFirst ${MAX_PAGE_TEXT_CHARS} characters of visible page text:\n"""\n${signals.textSample}\n"""`,
      maxOutputTokens: 1500,
    });
    report = parseReport(text);
    if (!report) console.error("audit: unparseable model output:", text.slice(0, 500));
  } catch (err) {
    console.error("audit: model call failed:", err);
    report = null;
  }

  if (!report) {
    return Response.json(
      { error: "The analysis didn't complete. Please try again in a moment — or book a free call for a human-led review." },
      { status: 502 }
    );
  }

  // Lead notification to Haruun — never block the user's report on it.
  const apiKey = process.env.RESEND_API_KEY;
  if (apiKey) {
    const s = report.scores;
    const overall = ((s.mobile + s.modernity + s.conversion + s.seo + s.trust) / 5).toFixed(1);
    try {
      await new Resend(apiKey).emails.send({
        from: LEAD_FROM,
        to: [LEAD_TO],
        replyTo: email,
        subject: `Odin lead — ${target.hostname} (${overall}/5)`,
        text: [
          `Email:    ${email}`,
          `Website:  ${signals.finalUrl}`,
          `Platform: ${signals.platform}`,
          ``,
          `Scores: mobile ${s.mobile} · modernity ${s.modernity} · conversion ${s.conversion} · seo ${s.seo} · trust ${s.trust} (overall ${overall}/5)`,
          ``,
          `Working:`,
          ...report.working.map((w) => `  + ${w}`),
          ``,
          `Problems:`,
          ...report.problems.map((p) => `  - ${p}`),
          ``,
          `Verdict: ${report.verdict}`,
          ``,
          `— Odin, unconventionalgroup.ca/odin`,
        ].join("\n"),
      });
    } catch {
      // Lead email failing should never break the audit response.
    }
  }

  return Response.json({ report, site: { url: signals.finalUrl, title: signals.title, platform: signals.platform } });
}
