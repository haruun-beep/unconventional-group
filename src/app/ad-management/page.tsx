import type { Metadata } from "next";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import TestimonialCard from "@/components/TestimonialCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Facebook & Instagram Ad Management — Unconventional Group",
  description:
    "Facebook and Instagram ad management for Canadian businesses. We build, run, and optimize your campaigns so you get booked jobs — not just impressions.",
};

const whatWeHandle = [
  {
    num: "01",
    title: "Strategy & Setup",
    body: "We audit your business, define your offer, and build campaigns from the ground up. Audiences, creative, copy — all done by us. You approve before anything goes live.",
  },
  {
    num: "02",
    title: "Creative That Converts",
    body: "We write the ads and design the graphics. No stock-photo nonsense. Ads that speak to your actual customer and make them stop scrolling.",
  },
  {
    num: "03",
    title: "Daily Management",
    body: "We watch the campaigns every day. What's underperforming gets cut. What's working gets scaled. Your budget doesn't sit on a bad ad.",
  },
  {
    num: "04",
    title: "Monthly Reporting",
    body: "Every month you get a plain-English breakdown: what we spent, what it returned, what we're changing. No jargon. No smoke and mirrors.",
  },
];

const platforms = [
  "Facebook Ads",
  "Instagram Ads",
  "Retargeting Campaigns",
  "Lead Generation Ads",
  "Conversion Campaigns",
  "Local Awareness Ads",
];

export default function AdManagementPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-bg pt-32 pb-24 px-6 grid-bg">
        <div className="max-w-4xl mx-auto text-center">
          <AnimateOnScroll>
            <p className="font-display text-sm text-neon tracking-widest mb-4">AD MANAGEMENT</p>
            <h1 className="font-display text-6xl md:text-8xl text-white leading-tight mb-6">
              ADS THAT BOOK JOBS. NOT JUST LIKES.
            </h1>
            <p className="text-white/70 text-xl max-w-2xl mx-auto">
              We manage your Facebook and Instagram campaigns end-to-end. Strategy, creative,
              targeting, optimization, reporting. You handle the work. We fill your pipeline.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* What we run */}
      <section className="bg-surface py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll>
            <div className="flex flex-wrap gap-3 justify-center">
              {platforms.map((p) => (
                <span
                  key={p}
                  className="border border-neon text-neon font-display text-sm tracking-widest px-5 py-2.5 rounded-full"
                >
                  {p}
                </span>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Process — full breakdown */}
      <section
        className="bg-neon py-44 px-6"
        style={{ clipPath: "polygon(0 6%, 100% 0%, 100% 94%, 0% 100%)" }}
      >
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll>
            <h2 className="font-display text-4xl md:text-5xl text-bg text-center mb-4">
              HERE&apos;S EXACTLY HOW WE DO IT.
            </h2>
            <p className="text-bg/60 text-center mb-14 max-w-xl mx-auto">
              Most ad managers take your money and send you a dashboard you don&apos;t understand.
              We do it differently.
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

      {/* Why it works */}
      <section className="bg-bg py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <AnimateOnScroll>
            <h2 className="font-display text-4xl md:text-5xl text-white mb-10 text-center">
              WHY MOST ADS FAIL.
            </h2>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                problem: "Wrong audience",
                fix: "We build targeting around who actually buys from you — not generic interest categories.",
              },
              {
                problem: "Weak creative",
                fix: "Nobody clicks a boring ad. We write copy and design graphics that make people stop.",
              },
              {
                problem: "Set and forget",
                fix: "Ads die if nobody watches them. We optimize daily — cutting losers, scaling winners.",
              },
            ].map((item, i) => (
              <AnimateOnScroll key={i} delay={i * 0.1}>
                <div className="bg-surface border border-white/10 rounded-xl p-6 card-hover-border">
                  <p className="text-white/30 text-xs font-display tracking-widest mb-2">THE PROBLEM</p>
                  <p className="font-display text-xl text-neon mb-4">{item.problem}</p>
                  <p className="text-white/30 text-xs font-display tracking-widest mb-2">OUR FIX</p>
                  <p className="text-white/70 text-sm leading-relaxed">{item.fix}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Price anchor */}
      <section className="bg-surface py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <AnimateOnScroll>
            <h2 className="font-display text-4xl md:text-5xl text-white mb-10">
              SIMPLE PRICING. NO SURPRISES.
            </h2>
            <div className="bg-bg border border-white/10 rounded-2xl p-10">
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
                <div className="text-center">
                  <p className="text-white/50 text-sm mb-2">Typical freelance ads manager</p>
                  <p className="font-display text-4xl text-white/30 line-through">$1,500–$3,000/mo</p>
                  <p className="text-white/40 text-xs mt-1">for management alone</p>
                </div>
                <div className="text-3xl text-white/30 font-display">VS</div>
                <div className="text-center">
                  <p className="text-white/50 text-sm mb-2">Our management fee</p>
                  <p className="font-display text-5xl text-neon glow">$500/mo</p>
                  <p className="text-white/40 text-xs mt-1">+ your ad spend (you control the budget)</p>
                </div>
              </div>
              <p className="text-white/50 text-sm">
                Month-to-month. No lock-in. You own all your ad accounts. Cancel anytime.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-bg py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <AnimateOnScroll>
            <TestimonialCard
              name="John Rwihangana"
              company="Mesh Moving Services"
              quote="We've been working with Haruun and UMedia on setting up our ads for Facebook and Instagram. Over the past week with $70 in ad spend, they have been able to help us book 5 additional jobs! I would highly recommend them for managing your ads!"
            />
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <AnimateOnScroll>
            <p className="font-display text-6xl text-neon glow mb-2">$500/mo</p>
            <p className="text-white/50 mb-2">+ your ad spend</p>
            <p className="text-white/30 text-sm mb-8">Month-to-month. No lock-in. Cancel anytime.</p>
            <Link
              href="/book"
              className="inline-block bg-neon text-bg font-bold px-10 py-4 rounded text-base hover:opacity-90 transition-opacity"
            >
              Book a Free Call
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      <CTASection headline="READY TO FILL YOUR PIPELINE WITH PAID ADS?" />
    </>
  );
}
