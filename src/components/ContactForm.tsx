"use client";

import { useState } from "react";

const services = [
  "Websites",
  "Social Media Management",
  "Ad Management",
  "Videography & Photography",
  "Not sure yet",
];

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, service, message }),
      });
      const data = await res.json() as { ok?: boolean; error?: string };

      if (!res.ok || !data.ok) {
        setErrorMsg(data.error ?? "Something went wrong.");
        setStatus("error");
      } else {
        setStatus("success");
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-surface border border-white/10 rounded-2xl p-12 text-center">
        <p className="font-display text-4xl text-neon mb-4">GOT IT.</p>
        <p className="text-white/60 text-lg">
          We&apos;ll be in touch within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-surface border border-white/10 rounded-2xl p-8 md:p-10 flex flex-col gap-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label className="font-display text-xs tracking-[0.2em] text-white/40">YOUR NAME</label>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Jane Smith"
            className="bg-bg border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-neon transition-colors"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-display text-xs tracking-[0.2em] text-white/40">EMAIL</label>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="jane@yourcompany.com"
            className="bg-bg border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-neon transition-colors"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-display text-xs tracking-[0.2em] text-white/40">WHAT ARE YOU INTERESTED IN?</label>
        <select
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="bg-bg border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-neon transition-colors appearance-none"
        >
          <option value="">Select a service...</option>
          {services.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-display text-xs tracking-[0.2em] text-white/40">TELL US ABOUT YOUR BUSINESS</label>
        <textarea
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="What do you do, what are you looking for, anything we should know..."
          rows={5}
          className="bg-bg border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-neon transition-colors resize-none"
        />
      </div>

      {status === "error" && (
        <p className="text-red-400 text-sm">
          {errorMsg}{" "}
          <a href="mailto:hello@unconventionalgroup.ca" className="text-neon underline">
            hello@unconventionalgroup.ca
          </a>
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="bg-neon text-bg font-bold px-8 py-4 rounded text-base hover:opacity-90 transition-colors disabled:opacity-50 self-start"
      >
        {status === "loading" ? "Sending..." : "Send Message →"}
      </button>

      <p className="text-white/30 text-xs">
        Or email us directly at{" "}
        <a href="mailto:hello@unconventionalgroup.ca" className="text-white/50 hover:text-neon transition-colors">
          hello@unconventionalgroup.ca
        </a>
      </p>
    </form>
  );
}
