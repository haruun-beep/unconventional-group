import type { Metadata } from "next";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import TestimonialCard from "@/components/TestimonialCard";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import ServiceSchema from "@/components/ServiceSchema";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  alternates: { canonical: "/ad-management" },
  title: "Facebook & Instagram Ad Management — Unconventional Group",
  description:
    "Facebook and Instagram ad management for Canadian businesses. We build, run, and optimize your campaigns so you get booked jobs — not just impressions.",
};

const HERO_BG =
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&q=80";

const PROCESS_BG =
  "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1920&q=80";

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

const faqs = [
  {
    q: "What ad budget do I need to get results?",
    a: "Less than you'd think. One of our clients booked 5 additional jobs in a single week on just $70 of ad spend. You control the budget, you own the ad accounts, and we make every dollar work — cutting what underperforms and scaling what's working, daily.",
  },
  {
    q: "What's included in ad management, and what does it cost?",
    a: "Management is a flat $500/month — most agencies charge $1,500–$3,000 for the same scope. That covers everything end-to-end: strategy and campaign setup, ad copy and graphics, audience targeting, daily optimization, and a plain-English monthly report. Ad spend is separate and you control it. You approve everything before it goes live.",
  },
  {
    q: "Do I own my ad accounts and data?",
    a: "Yes — always. The ad accounts, the audiences, the data, all of it stays yours. It's month-to-month with no lock-in, so if you ever leave, you keep everything we built.",
  },
  {
    q: "How fast will I see results from Facebook and Instagram ads?",
    a: "Lead campaigns can start producing within the first week or two — one client booked 5 jobs in their first week. That said, the first month is also about learning what your market responds to, so results compound as we optimize.",
  },
  {
    q: "How are you different from a typical ads agency?",
    a: "We're a team, not an agency. No dashboard you don't understand, no jargon, no lock-in contracts. We watch your campaigns daily, report in plain English, and you talk directly to the people running your ads. 50+ businesses served across Canada from our Edmonton base.",
  },
];

export default function AdManagementPage() {
  return (
    <>
      <ServiceSchema
        name="Facebook & Instagram Ad Management"
        description="Facebook and Instagram ad management for Canadian businesses. We build, run, and optimize your campaigns so you get booked jobs — not just impressions."
        path="/ad-management"
      />
      <PageHero
        badge="AD MANAGEMENT"
        headline="ADS THAT BOOK JOBS. NOT JUST LIKES."
        subhead="We manage your Facebook and Instagram campaigns end-to-end. Strategy, creative, targeting, optimization, reporting. You handle the work. We fill your pipeline."
        bgUrl={HERO_BG}
        cta={{ label: "Get Started", href: "/book" }}
      />

      {/* Platform tags */}
      <section className="bg-surface py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll>
            <div className="flex flex-wrap gap-3 justify-center">
              {platforms.map((p) => (
                <span
                  key={p}
                  className="border border-neon/40 text-neon font-display text-sm tracking-[0.2em] px-5 py-2.5 rounded-full hover:bg-neon/8 transition-colors cursor-default"
                >
                  {p}
                </span>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Process — photo bg */}
      <section
        className="relative py-28 px-6 overflow-hidden"
        style={{
          backgroundImage: `url('${PROCESS_BG}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/88" />
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-neon/35 to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <AnimateOnScroll>
            <p className="font-display text-xs text-neon tracking-[0.35em] text-center mb-3">
              THE PROCESS
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-white text-center mb-4 leading-[0.93]">
              HERE&apos;S EXACTLY HOW WE DO IT.
            </h2>
            <p className="text-white/35 text-center text-sm mb-14 max-w-lg mx-auto">
              Most ad managers take your money and send you a dashboard you don&apos;t understand.
              We do it differently.
            </p>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 gap-5">
            {whatWeHandle.map((step, i) => (
              <AnimateOnScroll key={step.num} delay={i * 0.1}>
                <div className="bg-white/5 border border-white/8 rounded-xl p-8 h-full hover:border-neon/25 transition-colors">
                  <p className="font-display text-5xl text-neon/20 mb-3">{step.num}</p>
                  <h3 className="font-display text-2xl text-white mb-3 leading-snug">{step.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{step.body}</p>
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
            <h2 className="font-display text-4xl md:text-5xl text-white mb-10 text-center leading-[0.93]">
              WHY MOST ADS FAIL.
            </h2>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-3 gap-5">
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
                <div className="bg-surface border border-white/8 rounded-xl p-6 card-hover-border h-full">
                  <p className="text-white/25 text-xs font-display tracking-widest mb-2">THE PROBLEM</p>
                  <p className="font-display text-xl text-neon mb-4">{item.problem}</p>
                  <p className="text-white/25 text-xs font-display tracking-widest mb-2">OUR FIX</p>
                  <p className="text-white/65 text-sm leading-relaxed">{item.fix}</p>
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
            <h2 className="font-display text-4xl md:text-5xl text-white mb-10 leading-[0.93]">
              SIMPLE PRICING. NO SURPRISES.
            </h2>
            <div className="bg-bg border border-white/8 rounded-2xl p-10">
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
                <div className="text-center">
                  <p className="text-white/45 text-sm mb-2">Typical freelance ads manager</p>
                  <p className="font-display text-4xl text-white/25 line-through">$1,500–$3,000/mo</p>
                  <p className="text-white/35 text-xs mt-1">for management alone</p>
                </div>
                <div className="text-3xl text-white/25 font-display">VS</div>
                <div className="text-center">
                  <p className="text-white/45 text-sm mb-2">Our management fee</p>
                  <p className="font-display text-5xl text-neon glow">$500/mo</p>
                  <p className="text-white/35 text-xs mt-1">+ your ad spend (you control the budget)</p>
                </div>
              </div>
              <p className="text-white/40 text-sm">
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
            <p className="text-white/40 text-sm mb-1">+ your ad spend</p>
            <p className="text-white/25 text-xs mb-8">Month-to-month. No lock-in. Cancel anytime.</p>
            <Link
              href="/book"
              className="inline-block bg-neon text-bg font-bold px-10 py-4 rounded text-sm tracking-wide hover:opacity-90 transition-opacity"
            >
              Book a Free Call
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      <FAQ items={faqs} heading="AD MANAGEMENT QUESTIONS." />

      <CTASection bgUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&q=80" headline="READY TO FILL YOUR PIPELINE WITH PAID ADS?" />
    </>
  );
}
