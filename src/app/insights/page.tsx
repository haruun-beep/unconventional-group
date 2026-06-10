import type { Metadata } from "next";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  alternates: { canonical: "/insights" },
  title: "Marketing Insights for Canadian Businesses — Unconventional Group",
  description:
    "Straight answers on websites, Facebook ads, and AI visibility for Canadian business owners. No fluff — just what actually works, from the Unconventional Group team.",
};

const articles = [
  {
    slug: "how-much-does-a-website-cost-in-edmonton",
    title: "How Much Does a Website Cost in Edmonton? (2026 Straight Answer)",
    teaser:
      "Real market ranges, what actually drives the price up, and the warning signs of a cheap build that costs you more later.",
    date: "June 9, 2026",
    readTime: "7 min read",
    tag: "WEBSITES",
  },
  {
    slug: "facebook-ads-for-contractors-alberta",
    title: "Facebook Ads for Contractors in Alberta: What Actually Books Jobs",
    teaser:
      "Offer-first creative, tight geo-targeting, and speed-to-lead — the playbook that turned $70 of ad spend into 5 booked jobs.",
    date: "June 9, 2026",
    readTime: "8 min read",
    tag: "AD MANAGEMENT",
  },
  {
    slug: "ai-visibility-aeo-geo-guide",
    title: "AI Visibility: How to Get ChatGPT and Google AI to Recommend Your Business",
    teaser:
      "AI assistants are already answering 'who should I hire?' — here's how they pick their recommendations, and how to become one.",
    date: "June 9, 2026",
    readTime: "8 min read",
    tag: "AI VISIBILITY",
  },
];

export default function InsightsPage() {
  return (
    <>
      {/* Header */}
      <section className="relative bg-bg pt-44 md:pt-56 pb-20 px-6 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 70% 0%, rgba(57,255,20,0.05) 0%, transparent 70%)",
          }}
        />
        <div className="relative z-10 max-w-5xl mx-auto">
          <p className="font-display text-neon text-xs tracking-[0.35em] mb-5">INSIGHTS</p>
          <h1 className="font-display text-[clamp(2.8rem,7vw,5.2rem)] text-white leading-[0.92] tracking-tight max-w-4xl mb-4">
            STRAIGHT ANSWERS. NO FLUFF.
          </h1>
          <div className="w-16 h-[3px] bg-neon mb-7 glow-line" />
          <p className="text-white/65 text-lg md:text-xl max-w-2xl leading-relaxed">
            What we&apos;ve learned building websites, running ads, and getting businesses found
            across Canada — written for owners, not marketers.
          </p>
        </div>
      </section>

      {/* Article grid */}
      <section className="bg-surface py-24 px-6 border-t border-white/8">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-5">
            {articles.map((a, i) => (
              <AnimateOnScroll key={a.slug} delay={i * 0.1}>
                <Link href={`/insights/${a.slug}`} className="group block h-full">
                  <article className="bg-bg border border-white/8 rounded-xl p-8 h-full flex flex-col hover:border-neon/25 transition-colors">
                    <p className="font-display text-xs text-neon tracking-[0.3em] mb-4">{a.tag}</p>
                    <h2 className="font-display text-2xl text-white mb-3 leading-snug group-hover:text-neon transition-colors">
                      {a.title}
                    </h2>
                    <p className="text-white/55 text-sm leading-relaxed mb-6 flex-1">{a.teaser}</p>
                    <p className="text-white/35 text-xs tracking-wide">
                      {a.date} · {a.readTime}
                    </p>
                  </article>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline="RATHER JUST ASK US DIRECTLY?"
        subhead="Free 20-minute call. We look at your business and tell you exactly what we'd do — no pitch, no obligation."
      />
    </>
  );
}
