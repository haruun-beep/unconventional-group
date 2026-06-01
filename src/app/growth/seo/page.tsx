import type { Metadata } from "next";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "SEO Services — Unconventional Group",
  description:
    "Search engine optimization for Canadian businesses. Get found on Google, rank higher, and turn organic traffic into real customers.",
};

const whatWeHandle = [
  {
    num: "01",
    title: "On-Page Optimization",
    body: "We audit every page — titles, meta descriptions, headings, internal links. Everything tuned so Google knows exactly what your business does and who it serves.",
  },
  {
    num: "02",
    title: "Local SEO",
    body: "If you serve a specific city or region, local SEO is the single highest-ROI move you can make. Google Business Profile, citations, local keyword targeting — we handle all of it.",
  },
  {
    num: "03",
    title: "Technical SEO",
    body: "Site speed, mobile usability, crawlability, structured data. The behind-the-scenes work that most businesses never touch — and most agencies skip.",
  },
  {
    num: "04",
    title: "Content Strategy",
    body: "We identify what your customers are actually searching for and build content that captures that traffic. Not filler — pages built to rank and convert.",
  },
];

const whySEO = [
  {
    stat: "#1",
    label: "Google result gets 28% of all clicks",
    sub: "Position 2 gets 15%. Position 3 gets 11%. The drop-off is brutal.",
  },
  {
    stat: "68%",
    label: "of online experiences start with a search engine",
    sub: "Your customers are searching. The question is whether they find you or your competitor.",
  },
  {
    stat: "0¢",
    label: "per click once you rank",
    sub: "Unlike ads, SEO traffic compounds. You don't pay every time someone finds you.",
  },
];

export default function SEOPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-bg pt-32 pb-24 px-6 grid-bg">
        <div className="max-w-4xl mx-auto text-center">
          <AnimateOnScroll>
            <p className="font-display text-sm text-neon tracking-widest mb-4">SEO</p>
            <h1 className="font-display text-6xl md:text-8xl text-white leading-tight mb-6">
              GET FOUND.<br />GET CHOSEN.
            </h1>
            <p className="text-white/70 text-xl max-w-2xl mx-auto">
              Your competitors are on page one. If you&apos;re not, you don&apos;t exist to the customers searching right now. We fix that.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book"
                className="inline-block bg-neon text-bg font-bold px-10 py-4 rounded text-base hover:opacity-90 transition-opacity"
              >
                Book a Free SEO Audit
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Why SEO stats */}
      <section className="bg-surface border-y border-white/10 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {whySEO.map((item, i) => (
              <AnimateOnScroll key={i} delay={i * 0.1}>
                <p className="font-display text-5xl md:text-6xl text-neon glow mb-2">{item.stat}</p>
                <p className="text-white font-semibold mb-2 leading-snug">{item.label}</p>
                <p className="text-white/40 text-sm">{item.sub}</p>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* What we do */}
      <section
        className="bg-neon py-44 px-6"
        style={{ clipPath: "polygon(0 6%, 100% 0%, 100% 94%, 0% 100%)" }}
      >
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll>
            <h2 className="font-display text-4xl md:text-5xl text-bg text-center mb-4">
              WHAT WE ACTUALLY DO.
            </h2>
            <p className="text-bg/60 text-center mb-14 max-w-xl mx-auto">
              SEO isn&apos;t magic. It&apos;s a checklist most businesses never work through. We work through it.
            </p>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 gap-6">
            {whatWeHandle.map((step, i) => (
              <AnimateOnScroll key={step.num} delay={i * 0.1}>
                <div className="bg-bg rounded-xl p-8 h-full">
                  <p className="font-display text-5xl text-neon/25 mb-3">{step.num}</p>
                  <h3 className="font-display text-2xl text-white mb-3">{step.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{step.body}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Ads vs SEO */}
      <section className="bg-bg py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <AnimateOnScroll>
            <h2 className="font-display text-4xl md:text-5xl text-white mb-10 text-center">
              ADS STOP. SEO COMPOUNDS.
            </h2>
            <div className="bg-surface border border-white/10 rounded-2xl p-10">
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
                <div className="text-center">
                  <p className="text-white/50 text-sm mb-2">Paid ads</p>
                  <p className="font-display text-3xl text-white/40">Traffic while you pay</p>
                  <p className="text-white/30 text-sm mt-2">Stop paying → stop getting traffic</p>
                </div>
                <div className="text-3xl text-white/30 font-display">VS</div>
                <div className="text-center">
                  <p className="text-white/50 text-sm mb-2">SEO</p>
                  <p className="font-display text-3xl text-neon">Traffic that builds</p>
                  <p className="text-white/40 text-sm mt-2">Rankings stay even when you&apos;re not spending</p>
                </div>
              </div>
              <p className="text-white/40 text-sm text-center">
                The two work best together — but SEO is the only channel that builds lasting equity in your business.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <AnimateOnScroll>
            <h2 className="font-display text-4xl text-white mb-4">READY TO RANK?</h2>
            <p className="text-white/50 mb-8">
              We start with a free audit — no pitch, no fluff. Just an honest look at where you stand and what it would take to move up.
            </p>
            <Link
              href="/book"
              className="inline-block bg-neon text-bg font-bold px-10 py-4 rounded text-base hover:opacity-90 transition-opacity"
            >
              Book a Free SEO Audit
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      <CTASection headline="READY TO OWN PAGE ONE?" />
    </>
  );
}
