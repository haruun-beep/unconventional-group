import { Resend } from "resend";
import { rateLimit, clientIp, originAllowed } from "@/lib/api-guard";
import { sendLeadToCrm } from "@/lib/crm";

export const runtime = "nodejs";

const TO = process.env.CONTACT_TO || "haruun@unconventionalgroup.ca";
// Until the domain is verified in Resend, the test sender below works for
// emails to the Resend account owner. After verifying unconventionalgroup.ca,
// set CONTACT_FROM to e.g. "Unconventional Group <hello@unconventionalgroup.ca>".
const FROM = process.env.CONTACT_FROM || "Unconventional Group <onboarding@resend.dev>";

export async function POST(req: Request) {
  if (!originAllowed(req)) {
    return Response.json({ error: "Forbidden." }, { status: 403 });
  }
  if (!(await rateLimit(`contact:${clientIp(req)}`, 5, 10 * 60 * 1000))) {
    return Response.json(
      { error: "Too many messages — try again in a few minutes." },
      { status: 429 }
    );
  }

  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const str = (v: unknown, max: number) =>
    (typeof v === "string" ? v : "").trim().slice(0, max);

  // Name goes into the email subject — keep it to a single line.
  const name = str(body.name, 100).replace(/[\r\n]+/g, " ");
  const email = str(body.email, 320);
  const phone = str(body.phone, 40);
  const message = str(body.message, 5000);

  // Honeypot
  if (body.company) return Response.json({ ok: true });

  if (!name || !email || !message) {
    return Response.json({ error: "Please fill in name, email, and message." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "That email doesn't look right." }, { status: 400 });
  }

  // Log to the CRM queue first (best-effort) so the lead is captured even if
  // email delivery isn't configured or fails below.
  await sendLeadToCrm({
    company: name,
    contact_name: name,
    email,
    phone,
    source: "site_contact_form",
    consent: "implied_inquiry",
  });

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return Response.json(
      { error: "Email isn't configured yet. Please email us directly." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: FROM,
      to: [TO],
      replyTo: email,
      subject: `New website lead — ${name}`,
      text: [
        `Name:  ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "—"}`,
        ``,
        `Message:`,
        message,
        ``,
        `— Sent from the unconventionalgroup.ca contact form`,
      ].join("\n"),
    });

    if (error) {
      return Response.json({ error: "Couldn't send right now. Try again shortly." }, { status: 502 });
    }
    return Response.json({ ok: true });
  } catch {
    return Response.json({ error: "Couldn't send right now. Try again shortly." }, { status: 502 });
  }
}
