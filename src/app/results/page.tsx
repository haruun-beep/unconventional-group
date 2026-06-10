import type { Metadata } from "next";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  alternates: { canonical: "/results" },
  title: "Real Results — Unconventional Group",
  description:
    "Real, verified client results from Unconventional Group — like 5 booked jobs in one week on $70 of ad spend. No inflated case studies, no invented numbers.",
};

const HERO_BG = "/team-growth.jpg";

type Result = {
  tag: string;
  metric: string;
  metricLabel: string;
  title: string;
  body: string;
  details: { label: string; value: string }[];
  href: string;
  linkLabel: string;
};

const results: Result[] = [
  {
    tag: "AD MANAGEMENT",
    metric: "5 JOBS / $70",
    metricLabel: "Booked in one week",
    title: "Local Services Client — Facebook Ads",
    body: "A local services client came to us with no paid traffic running. We built an offer-first campaign with tight geo-targeting and same-day lead follow-up. In the first week, $70 of ad spend produced 5 booked jobs.",
    details: [
      { label: "Ad spend", value: "$70" },
      { label: "Booked jobs", value: "5" },
      { label: "Timeframe", value: "1 week" },
    ],
    href: "/ad-management",
    linkLabel: "See Ad Management →",
  },
];

export default function ResultsPage() {
  return (
    <>
      <PageHero
        badge="RESULTS"
        headline="REAL NUMBERS. REAL CLIENTS."
        subhead="No inflated case studies, no invented metrics. Only results we can stand behind — published as our clients let us share them."
        bgUrl={HERO_BG}
        cta={{ label: "Book a Free Call", href: "/book" }}
        secondaryCta={false}
      />

      {/* Featured results */}
      <section className="bg-surface py-28 px-6 border-t border-white/8">
        <div className="max-w-5xl mx-auto">
          <AnimateOnScroll>
            <p className="font-display text-xs text-neon tracking-[0.35em] text-center mb-3">
              PUBLISHED RESULTS
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-white text-center mb-14 leading-[0.93]">
              WHAT THE WORK PRODUCED.
            </h2>
          </AnimateOnScroll>

          <div className="flex flex-col gap-6">
            {results.map((r, i) => (
              <AnimateOnScroll key={r.title} delay={i * 0.1}>
                <div className="bg-bg border border-neon/20 rounded-2xl p-8 md:p-12 grid md:grid-cols-[1fr_1.4fr] gap-8 items-center">
                  <div>
                    <p className="font-display text-xs text-neon tracking-[0.3em] mb-4">{r.tag}</p>
                    <p className="font-display text-[clamp(2.6rem,5vw,4rem)] text-white leading-[0.95] mb-2">
                      {r.metric}
                    </p>
                    <p className="text-white/50 text-sm tracking-wide">{r.metricLabel}</p>
                  </div>
                  <div>
                    <h3 className="font-display text-2xl text-white mb-3 leading-snug">{r.title}</h3>
                    <p className="text-white/60 text-base leading-relaxed mb-6">{r.body}</p>
                    <div className="flex flex-wrap gap-6 mb-6">
                      {r.details.map((d) => (
                        <div key={d.label}>
                          <p className="font-display text-2xl text-neon">{d.value}</p>
                          <p className="text-white/40 text-xs tracking-wide uppercase">{d.label}</p>
                        </div>
                      ))}
                    </div>
                    <Link
                      href={r.href}
                      className="inline-block border border-neon text-neon font-bold px-6 py-3 rounded text-sm tracking-wide hover:bg-neon hover:text-bg transition-all duration-200"
                    >
                      {r.linkLabel}
                    </Link>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Honest "more coming" section */}
      <section className="bg-bg py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <AnimateOnScroll>
            <div className="bg-surface border border-white/8 rounded-2xl p-10 text-center">
              <div className="w-12 h-[3px] bg-neon mx-auto mb-8 glow-line" />
              <h2 className="font-display text-3xl md:text-4xl text-white mb-4 leading-[0.95]">
                MORE RESULTS BEING WRITTEN UP.
              </h2>
              <p className="text-white/55 text-lg leading-relaxed mb-4">
                We&apos;ve served 50+ businesses across Canada, and we&apos;re documenting more
                client wins right now — with their permission, with real numbers. We&apos;d rather
                publish one result we can prove than ten we can&apos;t.
              </p>
              <p className="text-white/55 text-lg leading-relaxed mb-8">
                Want to see examples relevant to your industry before they hit this page? Book a
                free call and we&apos;ll walk you through the work we&apos;ve done for businesses
                like yours.
              </p>
              <Link
                href="/book"
                className="inline-block bg-neon text-bg font-bold px-8 py-4 rounded text-sm tracking-wide hover:opacity-90 transition-opacity"
              >
                Book a Free Call
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <CTASection
        headline="WANT TO BE THE NEXT RESULT ON THIS PAGE?"
        subhead="Free 20-minute call. We look at your business and tell you exactly what we'd do — no pitch, no obligation."
      />
    </>
  );
}
