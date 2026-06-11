import { generateText } from "ai";
import { anthropic } from "@ai-sdk/anthropic";
import { Resend } from "resend";
import { rateLimit, clientIp, originAllowed } from "@/lib/api-guard";

export const runtime = "nodejs";
export const maxDuration = 60;

// Abuse caps — every run costs real Anthropic credits.
const IP_HOURLY_LIMIT = 3;
const IP_DAILY_LIMIT = 6;
const GLOBAL_DAILY_LIMIT = 60;

const LEAD_TO = process.env.CONTACT_TO || "haruun@unconventionalgroup.ca";
const LEAD_FROM = process.env.CONTACT_FROM || "Unconventional Group <onboarding@resend.dev>";

const AUTOMATE_GOAL = "Automate repetitive work";
const BESPOKE_URL = "https://bespokeautomations.ca";

// The recommendable UGroup services. The model may only return these slugs.
const SERVICES: Record<string, { name: string; href: string }> = {
  websites: { name: "Websites", href: "/websites" },
  "social-media": { name: "Social Media Management", href: "/social-media" },
  videography: { name: "Videography & Photography", href: "/videography" },
  "ad-management": { name: "Ad Management", href: "/ad-management" },
  "lead-generation": { name: "Lead Generation", href: "/lead-generation" },
  "funnels-cro": { name: "Funnels & CRO", href: "/funnels-cro" },
  "ai-visibility": { name: "AI Visibility (AEO/GEO)", href: "/ai-visibility" },
  ecommerce: { name: "E-Commerce Growth", href: "/ecommerce" },
};

const SYSTEM_PROMPT = `You are the Solution Finder for Unconventional Group — an Edmonton-based marketing & sales team (never an "agency") serving businesses across Canada. A business owner describes what's slowing them down, and you recommend the most relevant Unconventional Group services. Your tone is precise, professional, and consultative — like a sharp strategist, never pushy.

Available services (use these exact slugs):
- websites — custom and template websites and online stores, built to convert
- social-media — done-for-you social content, scheduling, and strategy
- videography — brand films, reels, product shoots, photography
- ad-management — Facebook & Instagram ads built to book real jobs
- lead-generation — multi-channel campaigns that fill the calendar with qualified jobs
- funnels-cro — turn existing traffic into more booked work (landing pages, offers, conversion optimization)
- ai-visibility — get recommended by ChatGPT, Gemini, and Google AI when customers ask who to hire
- ecommerce — full-funnel growth for online stores

Sister company:
- Bespoke Automations (a subsidiary, separate from the services above) builds custom AI systems and business automation. Recommend it ONLY when the person's pain is a repetitive, manual, or time-consuming internal task — e.g. manual data entry, copy-pasting between tools, chasing follow-ups by hand, manual scheduling, repetitive admin. If the "Automate repetitive work" goal is selected OR the free text describes that kind of manual/repetitive work, you MUST include a bespoke recommendation.

Rules:
- Recommend 1 to 3 services maximum — the best matches, highest-impact first. Do not list everything.
- Tie each recommendation specifically to what THEY said. The "why" must reference their actual situation, not generic copy.
- NEVER mention prices, costs, estimates, or dollar amounts. The next step is always a free 20-minute call.
- If their problem is vague or "not sure", recommend a sensible starting point (often websites or lead-generation) and keep the summary encouraging.
- Be specific and honest. Do not invent services beyond the list.

Respond with ONLY valid JSON, no markdown fences, in exactly this shape:
{
  "summary": "1-2 sentence consultative read of their core bottleneck, addressed to them",
  "recommendations": [
    { "slug": "one-of-the-slugs-above", "why": "one specific sentence tying it to their situation" }
  ],
  "bespoke": null
}
If Bespoke applies, set "bespoke" to { "why": "one specific sentence on the repetitive task you'd automate for them" }.`;

type ModelRec = { slug: string; why: string };
type ModelOut = {
  summary: string;
  recommendations: ModelRec[];
  bespoke: { why: string } | null;
};

function parseOutput(raw: string): ModelOut | null {
  const cleaned = raw.replace(/```json|```/g, "").trim();
  const start = cleaned.indexOf("{");
  const end = cleaned.lastIndexOf("}");
  if (start === -1 || end === -1) return null;
  try {
    const obj = JSON.parse(cleaned.slice(start, end + 1));
    const summary = typeof obj.summary === "string" ? obj.summary.slice(0, 600) : "";
    if (!summary) return null;
    const recs: ModelRec[] = Array.isArray(obj.recommendations)
      ? obj.recommendations
          .filter((r: unknown): r is ModelRec => {
            const rr = r as ModelRec;
            return rr && typeof rr.slug === "string" && typeof rr.why === "string" && rr.slug in SERVICES;
          })
          .map((r: ModelRec) => ({ slug: r.slug, why: r.why.slice(0, 300) }))
          .slice(0, 3)
      : [];
    // Dedupe by slug
    const seen = new Set<string>();
    const deduped = recs.filter((r) => (seen.has(r.slug) ? false : (seen.add(r.slug), true)));
    const bespoke =
      obj.bespoke && typeof obj.bespoke.why === "string"
        ? { why: obj.bespoke.why.slice(0, 300) }
        : null;
    return { summary, recommendations: deduped, bespoke };
  } catch {
    return null;
  }
}

function buildLeadText(
  payload: { businessType: string; goals: string[]; problem: string; name: string; email: string; phone: string },
  out: ModelOut & { bespoke: { why: string } | null }
): string {
  const lines: string[] = [
    "SOLUTION FINDER — NEW LEAD",
    "══════════════════════════",
    "",
    `Prospect:   ${payload.name} <${payload.email}>`,
  ];
  if (payload.phone) lines.push(`Phone:      ${payload.phone}`);
  lines.push(
    `Business:   ${payload.businessType || "—"}`,
    "",
    `Goals:      ${payload.goals.length ? payload.goals.join(", ") : "—"}`,
    "",
    "Problem:",
    `  "${payload.problem}"`,
    "",
    "RECOMMENDED",
    "───────────",
    ...out.recommendations.map((r) => `  → ${SERVICES[r.slug].name} — ${r.why}`),
    ...(out.bespoke ? [`  ★ Bespoke Automations — ${out.bespoke.why}`] : []),
    "",
    "Summary:",
    `  ${out.summary}`,
    "",
    "Book a call:  https://www.unconventionalgroup.ca/book",
  );
  return lines.join("\n");
}

const str = (v: unknown, max: number) => (typeof v === "string" ? v : "").trim().slice(0, max);

export async function POST(req: Request) {
  if (!originAllowed(req)) {
    return Response.json({ error: "Forbidden." }, { status: 403 });
  }

  const ip = clientIp(req);
  const hourOk = await rateLimit(`rec:h:${ip}`, IP_HOURLY_LIMIT, 60 * 60 * 1000);
  const dayOk = await rateLimit(`rec:d:${ip}`, IP_DAILY_LIMIT, 24 * 60 * 60 * 1000);
  if (!hourOk || !dayOk) {
    return Response.json(
      { error: "You've reached the limit for now. Please try again later — or book a free call and we'll map it out with you." },
      { status: 429 }
    );
  }
  if (!(await rateLimit("rec:global", GLOBAL_DAILY_LIMIT, 24 * 60 * 60 * 1000))) {
    return Response.json(
      { error: "This tool is at capacity today. Please try again tomorrow, or book a free call with our team." },
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

  const businessType = str(body.businessType, 80);
  const goals = Array.isArray(body.goals)
    ? body.goals.filter((g): g is string => typeof g === "string").map((g) => g.slice(0, 80)).slice(0, 12)
    : [];
  const problem = str(body.problem, 1500);
  const name = str(body.name, 100).replace(/[\r\n]+/g, " ");
  const email = str(body.email, 320);
  const phone = str(body.phone, 40);

  if (!name || !email) {
    return Response.json({ error: "Please enter your name and email." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "That email doesn't look right." }, { status: 400 });
  }
  if (!problem && goals.length === 0) {
    return Response.json(
      { error: "Tell us a bit about what you're trying to fix — pick a goal or describe it." },
      { status: 400 }
    );
  }

  if (!process.env.ANTHROPIC_API_KEY) {
    return Response.json(
      { error: "This tool is briefly offline. Please book a free call and we'll map out your solution personally." },
      { status: 503 }
    );
  }

  let out: ModelOut | null = null;
  try {
    const { text } = await generateText({
      model: anthropic("claude-sonnet-4-6"),
      system: SYSTEM_PROMPT,
      prompt: `A business owner submitted the Solution Finder.\n\nBusiness type: ${businessType || "(not specified)"}\nGoals selected: ${goals.length ? goals.join(", ") : "(none selected)"}\nBiggest thing slowing them down (their words): "${problem || "(not provided)"}"\n\nRecommend the best-fit services.`,
      maxOutputTokens: 1200,
    });
    out = parseOutput(text);
    if (!out) console.error("recommend: unparseable model output:", text.slice(0, 500));
  } catch (err) {
    console.error("recommend: model call failed:", err);
    out = null;
  }

  if (!out) {
    return Response.json(
      { error: "Something went wrong building your recommendations. Try again in a moment — or book a free call." },
      { status: 502 }
    );
  }

  // Safety net: if they explicitly asked to automate repetitive work but the
  // model didn't surface Bespoke, add it so the intent is never dropped.
  if (!out.bespoke && goals.includes(AUTOMATE_GOAL)) {
    out.bespoke = {
      why: "You flagged repetitive work that's eating your time — our sister company Bespoke Automations builds custom systems to take that off your plate.",
    };
  }

  // Ensure there's always at least one recommendation to show.
  if (out.recommendations.length === 0 && !out.bespoke) {
    out.recommendations = [{ slug: "websites", why: "A strong, conversion-focused website is the foundation everything else builds on." }];
  }

  // Internal lead email — clean text, never blocks the response.
  const apiKey = process.env.RESEND_API_KEY;
  if (apiKey) {
    try {
      await new Resend(apiKey).emails.send({
        from: LEAD_FROM,
        to: [LEAD_TO],
        replyTo: email,
        subject: `Solution Finder lead — ${name}${businessType ? ` (${businessType})` : ""}`,
        text: buildLeadText({ businessType, goals, problem, name, email, phone }, out),
      });
    } catch {
      // ignore — lead email must not break the response
    }
  }

  // Shape the response for the client (resolve slugs to names/hrefs).
  return Response.json({
    summary: out.summary,
    recommendations: out.recommendations.map((r) => ({
      name: SERVICES[r.slug].name,
      href: SERVICES[r.slug].href,
      why: r.why,
    })),
    bespoke: out.bespoke ? { why: out.bespoke.why, href: BESPOKE_URL } : null,
  });
}
