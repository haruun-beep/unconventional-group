export const runtime = "edge";

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return Response.json({ error: "Email service not configured." }, { status: 500 });
  }

  const body = await req.json() as { name: string; email: string; message: string; service?: string };
  const { name, email, message, service } = body;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return Response.json({ error: "Please fill in all required fields." }, { status: 400 });
  }

  const html = `
    <h2>New message from ${name}</h2>
    <p><strong>Email:</strong> ${email}</p>
    ${service ? `<p><strong>Interested in:</strong> ${service}</p>` : ""}
    <p><strong>Message:</strong></p>
    <p>${message.replace(/\n/g, "<br>")}</p>
  `;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Unconventional Group <onboarding@resend.dev>",
      to: ["hello@unconventionalgroup.ca"],
      reply_to: email,
      subject: `New inquiry from ${name}`,
      html,
    }),
  });

  if (!res.ok) {
    const error = await res.text();
    console.error("Resend error:", error);
    return Response.json({ error: "Failed to send. Please email us directly." }, { status: 500 });
  }

  return Response.json({ ok: true });
}
