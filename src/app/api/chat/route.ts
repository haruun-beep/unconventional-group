import { streamText, convertToModelMessages } from "ai";
import { anthropic } from "@ai-sdk/anthropic";
import type { UIMessage } from "ai";
import { after } from "next/server";
import { Resend } from "resend";
import { rateLimit, clientIp, originAllowed } from "@/lib/api-guard";
import { sendLeadToCrm } from "@/lib/crm";

// Node runtime (not edge) so the CRM helper's node:crypto HMAC signing works.
export const runtime = "nodejs";

// Abuse caps — this endpoint spends real API credits.
const MAX_MESSAGES = 30;
const MAX_MESSAGE_CHARS = 2000;
const MAX_TOTAL_CHARS = 16000;
const RATE_LIMIT = 20; // requests per IP
const RATE_WINDOW_MS = 5 * 60 * 1000; // per 5 minutes

function totalChars(messages: UIMessage[]): number {
  let total = 0;
  for (const m of messages) {
    for (const part of m.parts ?? []) {
      if (part.type === "text") total += part.text.length;
    }
  }
  return total;
}

function messageText(m: UIMessage): string {
  return (m.parts ?? [])
    .filter((p): p is Extract<typeof p, { type: "text" }> => p.type === "text")
    .map((p) => p.text)
    .join(" ");
}

// Same env pattern as the contact route, so both notify the same inbox/sender.
const LEAD_TO = process.env.CONTACT_TO || "haruun@unconventionalgroup.ca";
const LEAD_FROM =
  process.env.CONTACT_FROM || "Unconventional Group <onboarding@resend.dev>";

const EMAIL_RE = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/i;
// North-American-ish phone; validated by digit count below to avoid matching
// random number runs (prices, dates, etc.).
const PHONE_RE = /(?:\+?1[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/;

function extractEmail(text: string): string | null {
  return text.match(EMAIL_RE)?.[0]?.toLowerCase() ?? null;
}

function extractPhone(text: string): string | null {
  const m = text.match(PHONE_RE)?.[0];
  if (!m) return null;
  return m.replace(/\D/g, "").length >= 10 ? m.trim() : null;
}

// Fire a CRM lead the first time a visitor drops an email or phone into Rex.
// Returns true if a capture was scheduled (so we don't double-send).
function captureRexLead(messages: UIMessage[]): void {
  const userTexts = messages
    .filter((m) => m.role === "user")
    .map(messageText);
  if (userTexts.length === 0) return;

  const latest = userTexts[userTexts.length - 1];
  const prior = userTexts.slice(0, -1).join(" ");

  const email = extractEmail(latest);
  const phone = extractPhone(latest);
  if (!email && !phone) return;

  // Only on first appearance — if earlier turns already had contact info, the
  // lead was captured on that request.
  if (extractEmail(prior) || extractPhone(prior)) return;

  // A short transcript of what they typed, so the lead is actionable.
  const context = userTexts.join(" | ").replace(/\s+/g, " ").slice(0, 500);

  after(async () => {
    // CRM queue first (best-effort, no-ops if the secret isn't set yet).
    await sendLeadToCrm({
      company: "Rex chat lead",
      email,
      phone,
      source: "rex_chat",
      source_query: context,
      consent: "implied_inquiry",
    });

    // Email backup so the lead lands even if the CRM secret isn't wired.
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) return;
    try {
      await new Resend(apiKey).emails.send({
        from: LEAD_FROM,
        to: [LEAD_TO],
        replyTo: email ?? undefined,
        subject: `New Rex chat lead — ${email || phone}`,
        text: [
          `A visitor shared their contact info in the Rex chat widget.`,
          ``,
          `Email: ${email || "—"}`,
          `Phone: ${phone || "—"}`,
          ``,
          `What they said:`,
          context,
          ``,
          `— Sent from the Rex chat widget on unconventionalgroup.ca`,
        ].join("\n"),
      });
    } catch {
      /* best-effort — CRM remains the primary record */
    }
  });
}

const SYSTEM_PROMPT = `You are Rex, the AI assistant for Unconventional Group — a marketing & sales team based in Edmonton, AB that serves businesses across Canada. Never refer to Unconventional Group as an "agency" — it's a team.

Your personality: direct, confident, a bit of personality. Not corporate. Not stiff. You sound like a smart friend who knows the business inside out. Never say "certainly!" or "great question!"

## Core services (the creative work)
- **Websites** — from clean template builds to fully custom sites and online stores. Built to convert; most sites delivered in under 5 days on average.
- **Social Media Management** — done-for-you content, scheduling, and strategy across Instagram, Facebook, and LinkedIn. We support your team, we don't replace it.
- **Videography & Photography** — brand films, reels, product shoots, headshots, event coverage. We become your content team.
- **Ad Management** — Facebook & Instagram campaigns: setup, creative, targeting, daily optimization, reporting. (Real result: one client booked 5 jobs in a week on $70 of ad spend.)

## Growth systems (higher-leverage, revenue-focused)
- **Lead Generation** — multi-channel campaigns engineered to fill the calendar with qualified, ready-to-buy jobs.
- **Funnels & CRO** — turn the traffic they already have into more booked work; landing pages, offers, and conversion optimization.
- **AI Visibility (AEO/GEO)** — get recommended by ChatGPT, Gemini, and Google AI when customers ask who to hire. New and unconventional.
- **E-Commerce Growth** — full-funnel growth for online stores: profitable traffic, email/SMS revenue, conversion, bigger average order.

## Industries we know well
Contractors & trades, professional services (lawyers, clinics, accountants, consultants), home & local services (movers, cleaners, landscapers), and real estate.

## Pricing
Do NOT quote specific prices or numbers. Every business is different, so pricing is scoped on a quick call. If asked about cost, say it depends on what they need and steer them to a free call where we'll give them a straight answer — no obligation.

## Objection handling
- "How much?" → It depends on scope; the free call is where we give real numbers. Ask what they're trying to accomplish.
- "I'll think about it" → Ask what specifically they're unsure about.
- "We handle it in-house" → Ask if they're happy with the results. Consistency and follow-through are the hard parts.

## Goal
Always steer toward the free 20-minute call at unconventionalgroup.ca/book (or sending a message via that same page). Zero risk — they learn exactly what we'd do.

## Lead capture
When someone shows real interest or asks to be contacted, ask for their name and the best email or phone for the team to reach them — then confirm you've passed it along and they'll hear back within a business day. Don't be pushy about it or ask on every message; only when they're clearly interested.

Keep answers short and punchy. Never invent services or prices not listed above.`;

export async function POST(req: Request) {
  if (!originAllowed(req)) {
    return Response.json({ error: "Forbidden." }, { status: 403 });
  }
  if (!(await rateLimit(`chat:${clientIp(req)}`, RATE_LIMIT, RATE_WINDOW_MS))) {
    return Response.json(
      { error: "Slow down a bit — try again in a few minutes." },
      { status: 429 }
    );
  }

  let body: { messages?: UIMessage[] };
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const messages = body.messages;
  if (!Array.isArray(messages) || messages.length === 0 || messages.length > MAX_MESSAGES) {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }
  const last = messages[messages.length - 1];
  const lastLen = (last.parts ?? []).reduce(
    (n, p) => n + (p.type === "text" ? p.text.length : 0),
    0
  );
  if (lastLen > MAX_MESSAGE_CHARS || totalChars(messages) > MAX_TOTAL_CHARS) {
    return Response.json({ error: "Message is too long." }, { status: 400 });
  }

  // Capture the lead if this turn introduced an email/phone (fires after the
  // response streams, so it never delays Rex's reply).
  captureRexLead(messages);

  const result = streamText({
    model: anthropic("claude-sonnet-4-6"),
    system: SYSTEM_PROMPT,
    messages: await convertToModelMessages(messages),
    maxOutputTokens: 1024,
  });

  return result.toUIMessageStreamResponse();
}
