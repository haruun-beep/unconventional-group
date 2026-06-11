"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    // Honeypot — bots fill hidden fields
    if (data.company) return;

    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j.error || "Something went wrong.");
      }
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "sent") {
    return (
      <div className="bg-surface border border-neon/30 rounded-2xl p-10 text-center">
        <p className="font-display text-4xl text-neon glow mb-3">MESSAGE SENT.</p>
        <p className="text-white/60">
          Thanks — we&apos;ll get back to you within one business day. In a hurry? Book a call above.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-surface border border-white/10 rounded-2xl p-8 flex flex-col gap-5">
      {/* Honeypot */}
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="cf-name" className="block font-display text-xs tracking-[0.2em] text-white/50 mb-2">NAME *</label>
          <input
            id="cf-name"
            name="name"
            required
            className="w-full bg-bg border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-neon transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="cf-email" className="block font-display text-xs tracking-[0.2em] text-white/50 mb-2">EMAIL *</label>
          <input
            id="cf-email"
            name="email"
            type="email"
            required
            className="w-full bg-bg border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-neon transition-colors"
            placeholder="you@business.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="cf-phone" className="block font-display text-xs tracking-[0.2em] text-white/50 mb-2">PHONE</label>
        <input
          id="cf-phone"
          name="phone"
          className="w-full bg-bg border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-neon transition-colors"
          placeholder="(optional)"
        />
      </div>

      <div>
        <label htmlFor="cf-message" className="block font-display text-xs tracking-[0.2em] text-white/50 mb-2">WHAT DO YOU NEED? *</label>
        <textarea
          id="cf-message"
          name="message"
          required
          rows={5}
          className="w-full bg-bg border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-neon transition-colors resize-none"
          placeholder="Tell us about your business and what you're after."
        />
      </div>

      {status === "error" && (
        <p className="text-red-400 text-sm">{error || "Couldn't send — try again or email us directly."}</p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-neon text-bg font-bold px-8 py-4 rounded text-sm tracking-wide hover:opacity-90 transition-opacity disabled:opacity-50 w-fit"
      >
        {status === "sending" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
