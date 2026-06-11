"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Report = {
  scores: { mobile: number; modernity: number; conversion: number; seo: number; trust: number };
  working: string[];
  problems: string[];
  verdict: string;
};

type Site = { url: string; title: string; platform: string };

const SCORE_LABELS: { key: keyof Report["scores"]; label: string }[] = [
  { key: "mobile", label: "Mobile Experience" },
  { key: "modernity", label: "Performance & Build" },
  { key: "conversion", label: "Conversion" },
  { key: "seo", label: "Search Visibility" },
  { key: "trust", label: "Credibility" },
];

const LOADING_LINES = [
  "Fetching your homepage…",
  "Analyzing mobile responsiveness…",
  "Evaluating conversion paths…",
  "Assessing search visibility…",
  "Reviewing credibility signals…",
  "Compiling your report…",
];

function scoreColor(n: number) {
  if (n >= 4) return "bg-neon";
  if (n === 3) return "bg-yellow-400";
  return "bg-red-500";
}

export default function OdinAudit() {
  const [url, setUrl] = useState("");
  const [email, setEmail] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [loading, setLoading] = useState(false);
  const [lineIdx, setLineIdx] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [report, setReport] = useState<Report | null>(null);
  const [site, setSite] = useState<Site | null>(null);

  useEffect(() => {
    if (!loading) return;
    setLineIdx(0);
    const t = setInterval(() => setLineIdx((i) => Math.min(i + 1, LOADING_LINES.length - 1)), 4000);
    return () => clearInterval(t);
  }, [loading]);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (loading) return;
    setError(null);
    setReport(null);
    setSite(null);
    setLoading(true);
    try {
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, email, company: honeypot }),
      });
      const data = await res.json().catch(() => null);
      if (!res.ok || !data?.report) {
        setError(data?.error ?? "Something went wrong. Try again in a minute.");
        return;
      }
      setReport(data.report);
      setSite(data.site ?? null);
    } catch {
      setError("Couldn't reach Odin. Check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  const overall = report
    ? (
        (report.scores.mobile +
          report.scores.modernity +
          report.scores.conversion +
          report.scores.seo +
          report.scores.trust) /
        5
      ).toFixed(1)
    : null;

  return (
    <div className="bg-surface border border-neon/20 rounded-2xl p-7 md:p-10">
      {!report && (
        <form onSubmit={submit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="odin-url" className="text-white/70 text-sm font-medium">
              Your website
            </label>
            <input
              id="odin-url"
              type="text"
              required
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="yourbusiness.ca"
              autoComplete="url"
              className="bg-bg border border-white/15 rounded-lg px-4 py-3.5 text-white placeholder:text-white/30 focus:border-neon focus:outline-none transition-colors"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="odin-email" className="text-white/70 text-sm font-medium">
              Your email
            </label>
            <input
              id="odin-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@yourbusiness.ca"
              autoComplete="email"
              className="bg-bg border border-white/15 rounded-lg px-4 py-3.5 text-white placeholder:text-white/30 focus:border-neon focus:outline-none transition-colors"
            />
          </div>
          {/* Honeypot — humans never see this */}
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
            className="bg-neon text-bg font-bold px-8 py-4 rounded text-sm tracking-wide hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed mt-2"
          >
            {loading ? "Analyzing…" : "Run the Audit"}
          </button>

          {loading && (
            <p className="text-neon/80 text-sm animate-pulse">{LOADING_LINES[lineIdx]}</p>
          )}
          {error && <p className="text-red-400 text-sm">{error}</p>}

          <p className="text-white/35 text-xs leading-relaxed">
            Free, in approximately 30 seconds. The Odin system reads your live homepage only —
            nothing is installed or modified. Limited to a few analyses per visitor.
          </p>
        </form>
      )}

      {report && (
        <div className="flex flex-col gap-8">
          <div>
            <p className="font-display text-xs text-neon tracking-[0.35em] mb-2">ODIN SYSTEM · REPORT</p>
            <h3 className="font-display text-2xl md:text-3xl text-white leading-tight">
              {site?.title || site?.url || "Your site"}
            </h3>
            {site?.platform && site.platform !== "unknown" && (
              <p className="text-white/40 text-sm mt-1">Built on {site.platform}</p>
            )}
          </div>

          <div className="flex items-center gap-5">
            <div className="shrink-0 w-24 h-24 rounded-full border-2 border-neon/40 flex flex-col items-center justify-center">
              <span className="font-display text-3xl text-neon leading-none">{overall}</span>
              <span className="text-white/40 text-[10px] tracking-widest mt-1">/ 5</span>
            </div>
            <div className="flex-1 flex flex-col gap-2.5">
              {SCORE_LABELS.map(({ key, label }) => (
                <div key={key} className="flex items-center gap-3">
                  <span className="text-white/55 text-xs w-32 shrink-0">{label}</span>
                  <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${scoreColor(report.scores[key])}`}
                      style={{ width: `${(report.scores[key] / 5) * 100}%` }}
                    />
                  </div>
                  <span className="text-white/70 text-xs w-6 text-right">{report.scores[key]}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {report.working.length > 0 && (
              <div>
                <p className="font-display text-sm text-white tracking-wide mb-3">STRENGTHS</p>
                <ul className="flex flex-col gap-2.5">
                  {report.working.map((w, i) => (
                    <li key={i} className="text-white/60 text-sm leading-relaxed flex gap-2.5">
                      <span className="text-neon shrink-0">✓</span> {w}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {report.problems.length > 0 && (
              <div>
                <p className="font-display text-sm text-white tracking-wide mb-3">ISSUES TO ADDRESS</p>
                <ul className="flex flex-col gap-2.5">
                  {report.problems.map((p, i) => (
                    <li key={i} className="text-white/60 text-sm leading-relaxed flex gap-2.5">
                      <span className="text-red-400 shrink-0">✕</span> {p}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="bg-bg border border-white/10 rounded-xl p-6">
            <p className="font-display text-xs text-neon tracking-[0.35em] mb-3">SUMMARY</p>
            <p className="text-white/70 leading-relaxed">{report.verdict}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <Link
              href="/book"
              className="inline-block bg-neon text-bg font-bold px-8 py-4 rounded text-sm tracking-wide hover:opacity-90 transition-opacity shrink-0"
            >
              Book a Strategy Call
            </Link>
            <p className="text-white/40 text-sm leading-relaxed">
              A complimentary 20-minute call. We&apos;ll review these findings in detail and outline
              exactly what we&apos;d do — no obligation.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
