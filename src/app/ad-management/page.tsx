import type { Metadata } from "next";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import TestimonialCard from "@/components/TestimonialCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Facebook & Instagram Ad Management — Unconventional Group",
  description:
    "Paid ads that actually book jobs. Facebook and Instagram ad management for Canadian businesses. We set it up, run it, and optimize it monthly.",
};

const whatWeHandle = [
  "Full campaign setup — audiences, creatives, copy, targeting",
  "We write the ads. We design the creatives. You approve.",
  "Ongoing optimization — we cut what's not working, scale what is",
  "Monthly reporting so you always know exactly what your money did",
  "Facebook and Instagram — wherever your customers spend time",
];

const results = [
  { stat: "$70", label: "ad spend" },
  { stat: "5", label: "booked jobs" },
  { stat: "1", label: "week" },
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
              YOUR COMPETITORS ARE RUNNING ADS. ARE YOU?
            </h1>
            <p className="text-white/70 text-xl max-w-2xl mx-auto">
              Facebook and Instagram ads that book real jobs. We handle the setup, the creative,
              the targeting, and the ongoing optimization — so you can focus on the work.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Proof strip */}
      <section className="bg-neon py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <AnimateOnScroll>
            <p className="font-display text-bg/70 text-xs tracking-[0.3em] text-center mb-8">REAL RESULT FROM A REAL CLIENT</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
              {results.map((r, i) => (
                <div key={i} className="text-center">
                  <p className="font-display text-6xl text-bg">{r.stat}</p>
                  <p className="text-bg/70 text-sm mt-1">{r.label}</p>
                </div>
              ))}
            </div>
            <p className="text-bg/60 text-sm text-center mt-8 max-w-md mx-auto">
              One of our clients spent $70 in their first week and booked 5 additional jobs.
              That&apos;s the math that makes paid ads worth it.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* What we handle */}
      <section className="bg-bg py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <AnimateOnScroll>
            <h2 className="font-display text-4xl md:text-5xl text-white mb-3">
              HERE&apos;S EXACTLY WHAT WE DO.
            </h2>
            <p className="text-white/50 mb-12">You hand us the budget. We handle the rest.</p>
          </AnimateOnScroll>

          <div className="flex flex-col gap-4">
            {whatWeHandle.map((item, i) => (
              <AnimateOnScroll key={i} delay={i * 0.08}>
                <div className="flex items-start gap-4 bg-surface border border-white/10 rounded-xl p-5 card-hover-border">
                  <span className="text-neon font-display text-xl mt-0.5 shrink-0">✓</span>
                  <p className="text-white/80 text-base leading-snug">{item}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section
        className="bg-neon py-40 px-6"
        style={{ clipPath: "polygon(0 6%, 100% 0%, 100% 94%, 0% 100%)" }}
      >
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll>
            <h2 className="font-display text-4xl md:text-5xl text-bg text-center mb-14">
              HOW IT WORKS
            </h2>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "Free Call",
                body: "We learn your business, your offer, and who you're trying to reach. Then we build the strategy.",
              },
              {
                num: "02",
                title: "We Launch",
                body: "Campaigns go live. We monitor daily — cutting underperformers, scaling winners.",
              },
              {
                num: "03",
                title: "Monthly Report + Optimize",
                body: "Every month you see exactly what your ad spend did. We adjust and keep pushing.",
              },
            ].map((step, i) => (
              <AnimateOnScroll key={step.num} delay={i * 0.12}>
                <div className="bg-bg rounded-xl p-8">
                  <p className="font-display text-5xl text-neon/30 mb-3">{step.num}</p>
                  <h3 className="font-display text-2xl text-white mb-3">{step.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{step.body}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Price anchor */}
      <section className="bg-bg py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <AnimateOnScroll>
            <h2 className="font-display text-4xl md:text-5xl text-white mb-10">
              SIMPLE PRICING. NO SURPRISES.
            </h2>
            <div className="bg-surface border border-white/10 rounded-2xl p-10">
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
                <div className="text-center">
                  <p className="text-white/50 text-sm mb-2">Hiring a freelance ads manager</p>
                  <p className="font-display text-4xl text-white/30 line-through">$1,500–$3,000/mo</p>
                  <p className="text-white/40 text-xs mt-1">plus unpredictable results</p>
                </div>
                <div className="text-3xl text-white/30 font-display">VS</div>
                <div className="text-center">
                  <p className="text-white/50 text-sm mb-2">Our management fee</p>
                  <p className="font-display text-5xl text-neon glow">$500/mo</p>
                  <p className="text-white/40 text-xs mt-1">+ your ad spend (you control the budget)</p>
                </div>
              </div>
              <p className="text-white/50 text-sm">
                Month-to-month. No contracts. Cancel anytime. You own all the ad accounts.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-surface py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <AnimateOnScroll>
            <h2 className="font-display text-3xl text-white text-center mb-8">FROM AN AD CLIENT</h2>
            <TestimonialCard
              name="John Rwihangana"
              company="Google Review"
              quote="We've been working with Haruun and UMedia on setting up our ads for Facebook and Instagram. Over the past week with $70 in ad spend, they have been able to help us book 5 additional jobs! I would highly recommend them for managing your ads!"
            />
          </AnimateOnScroll>
        </div>
      </section>

      {/* Price + CTA */}
      <section className="bg-bg py-16 px-6">
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

      <CTASection headline="READY TO TURN AD SPEND INTO BOOKED JOBS?" />
    </>
  );
}
