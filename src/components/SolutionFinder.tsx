"use client";

import { useState } from "react";
import Link from "next/link";

type Rec = { name: string; href: string; why: string };
type Bespoke = { why: string; href: string };
type Result = { summary: string; recommendations: Rec[]; bespoke: Bespoke | null };

const BUSINESS_TYPES = [
  "Contractor & Trades",
  "Professional Services",
  "Home & Local Services",
  "Restaurant / Food",
  "Real Estate",
  "E-Commerce / Online Store",
  "Other",
];

const GOALS = [
  "More leads & calls",
  "A better website",
  "Get found on Google & AI",
  "Social media management",
  "Run ads",
  "Sell online",
  "Automate repetitive work",
  "Not sure yet",
];

export default function SolutionFinder() {
  const [businessType, setBusinessType] = useState("");
  const [goals, setGoals] = useState<string[]>([]);
  const [problem, setProblem] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [honeypot, setHoneypot] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<Result | null>(null);

  function toggleGoal(g: string) {
    setGoals((prev) => (prev.includes(g) ? prev.filter((x) => x !== g) : [...prev, g]));
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (loading) return;
    setError(null);
    setResult(null);
    setLoading(true);
    try {
      const res = await fetch("/api/recommend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ businessType, goals, problem, name, email, phone, company: honeypot }),
      });
      const data = await res.json().catch(() => null);
      if (!res.ok || !data?.summary) {
        setError(data?.error ?? "Something went wrong. Try again in a minute.");
        return;
      }
      setResult(data);
    } catch {
      setError("Couldn't reach us. Check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-surface border border-neon/20 rounded-2xl p-7 md:p-10">
      {!result && (
        <form onSubmit={submit} className="flex flex-col gap-7">
          {/* Business type */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="sf-type" className="text-white/70 text-sm font-medium">
              What kind of business do you run?
            </label>
            <select
              id="sf-type"
              value={businessType}
              onChange={(e) => setBusinessType(e.target.value)}
              className="bg-bg border border-white/15 rounded-lg px-4 py-3.5 text-white focus:border-neon focus:outline-none transition-colors appearance-none"
            >
              <option value="">Select one…</option>
              {BUSINESS_TYPES.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          {/* Goals */}
          <div className="flex flex-col gap-2.5">
            <p className="text-white/70 text-sm font-medium">What are you trying to fix?</p>
            <div className="flex flex-wrap gap-2.5">
              {GOALS.map((g) => {
                const on = goals.includes(g);
                return (
                  <button
                    type="button"
                    key={g}
                    onClick={() => toggleGoal(g)}
                    className={`text-sm px-3.5 py-2 rounded-lg border transition-colors ${
                      on
                        ? "bg-neon/15 border-neon/50 text-neon"
                        : "bg-bg border-white/15 text-white/60 hover:border-white/30 hover:text-white"
                    }`}
                  >
                    {g}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Problem */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="sf-problem" className="text-white/70 text-sm font-medium">
              What&apos;s the single biggest thing slowing you down right now?
            </label>
            <textarea
              id="sf-problem"
              value={problem}
              onChange={(e) => setProblem(e.target.value)}
              rows={3}
              placeholder="e.g. We get website visitors but barely any calls — and I spend hours every week manually following up with quotes."
              className="bg-bg border border-white/15 rounded-lg px-4 py-3.5 text-white placeholder:text-white/30 focus:border-neon focus:outline-none transition-colors resize-none leading-relaxed"
            />
          </div>

          {/* Contact */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="sf-name" className="text-white/70 text-sm font-medium">
                Your name
              </label>
              <input
                id="sf-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="name"
                className="bg-bg border border-white/15 rounded-lg px-4 py-3.5 text-white placeholder:text-white/30 focus:border-neon focus:outline-none transition-colors"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="sf-email" className="text-white/70 text-sm font-medium">
                Your email
              </label>
              <input
                id="sf-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                className="bg-bg border border-white/15 rounded-lg px-4 py-3.5 text-white placeholder:text-white/30 focus:border-neon focus:outline-none transition-colors"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1.5 -mt-2">
            <label htmlFor="sf-phone" className="text-white/55 text-sm">
              Phone <span className="text-white/30">(optional)</span>
            </label>
            <input
              id="sf-phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              autoComplete="tel"
              className="bg-bg border border-white/15 rounded-lg px-4 py-3.5 text-white placeholder:text-white/30 focus:border-neon focus:outline-none transition-colors max-w-xs"
            />
          </div>

          {/* Honeypot */}
          <input
            type="text"
            name="company"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="absolute -left-[9999px] h-0 w-0 opacity-0"
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-neon text-bg font-bold px-8 py-4 rounded text-sm tracking-wide hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Matching you…" : "Find My Solution"}
          </button>

          {loading && (
            <p className="text-neon/80 text-sm animate-pulse">Reading your situation and matching the right fit…</p>
          )}
          {error && <p className="text-red-400 text-sm">{error}</p>}

          <p className="text-white/35 text-xs leading-relaxed">
            Free, in about 30 seconds. We&apos;ll point you to the right fit — no pressure, no obligation.
          </p>
        </form>
      )}

      {result && (
        <div className="flex flex-col gap-7">
          <div>
            <p className="font-display text-xs text-neon tracking-[0.35em] mb-3">YOUR RECOMMENDATION</p>
            <p className="text-white/75 text-lg leading-relaxed">{result.summary}</p>
          </div>

          <div className="flex flex-col gap-4">
            {result.recommendations.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="group block bg-bg border border-white/10 hover:border-neon/30 rounded-xl p-6 transition-colors"
              >
                <div className="flex items-center justify-between gap-4 mb-1.5">
                  <h3 className="font-display text-xl text-white group-hover:text-neon transition-colors">
                    {r.name}
                  </h3>
                  <span className="text-neon text-sm shrink-0 group-hover:translate-x-1 transition-transform">→</span>
                </div>
                <p className="text-white/55 text-sm leading-relaxed">{r.why}</p>
              </Link>
            ))}

            {result.bespoke && (
              <a
                href={result.bespoke.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-bg border border-neon/30 rounded-xl p-6 transition-colors hover:border-neon/60"
              >
                <div className="flex items-center justify-between gap-4 mb-1.5">
                  <div className="flex items-center gap-2.5">
                    <span className="text-neon">★</span>
                    <h3 className="font-display text-xl text-white group-hover:text-neon transition-colors">
                      Bespoke Automations
                    </h3>
                  </div>
                  <span className="text-neon text-sm shrink-0 group-hover:translate-x-1 transition-transform">↗</span>
                </div>
                <p className="text-white/55 text-sm leading-relaxed mb-2">{result.bespoke.why}</p>
                <p className="text-white/35 text-xs">Our sister company — custom AI & automation systems.</p>
              </a>
            )}
          </div>

          <div className="bg-bg border border-neon/20 rounded-xl p-4">
            <p className="text-white/55 text-sm leading-relaxed">
              <span className="text-neon">✓</span> Our team will follow up at{" "}
              <span className="text-white/80">{email || "your email"}</span> to map this out with you.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <Link
              href="/book"
              className="inline-block bg-neon text-bg font-bold px-8 py-4 rounded text-sm tracking-wide hover:opacity-90 transition-opacity shrink-0"
            >
              Book a Free Call
            </Link>
            <p className="text-white/40 text-sm leading-relaxed">
              A complimentary 20-minute call — we&apos;ll go deeper on exactly how we&apos;d do it.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
