import type { Metadata } from "next";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import TestimonialCard from "@/components/TestimonialCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Website Design & Development — Unconventional Group",
  description:
    "Custom websites, WordPress/Squarespace builds, and ecommerce stores for Canadian businesses. Starting from $750.",
};

const tiers = [
  {
    name: "WordPress / Squarespace",
    price: "From $750",
    priceNote: "one-time",
    pitch: "You need to look legit online — fast. This is the fastest way to get there.",
    features: [
      "Template customised to your brand — not just a stock theme dropped in",
      "Mobile responsive",
      "Contact forms & basic SEO setup",
      "Up to 3 rounds of revisions",
      "Delivered in 7–10 business days",
    ],
    best: "Best for businesses that need a clean, professional presence without the wait.",
  },
  {
    name: "Custom Website",
    price: "From $1,500",
    priceNote: "one-time",
    pitch: "Your business isn't like everyone else's. Your website shouldn't be either.",
    features: [
      "Built from scratch — zero templates involved",
      "Custom layout designed around how your business actually works",
      "Copywriting guidance included",
      "Mobile & SEO ready from day one",
      "Up to 5 rounds of revisions",
      "Delivered in 14 business days",
    ],
    best: "Best for businesses that want to fully own their online presence.",
    highlight: true,
  },
  {
    name: "Ecommerce",
    price: "From $2,000",
    priceNote: "one-time",
    pitch: "Ready to sell online? We'll build a store that actually converts.",
    features: [
      "Full store build from the ground up",
      "Product pages, cart & checkout",
      "Payment gateway setup",
      "Inventory management integration",
      "Mobile optimised",
      "Delivered in 21 business days",
    ],
    best: "Best for businesses ready to sell online and need it done properly.",
  },
];

export default function WebsitesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-bg pt-32 pb-24 px-6 grid-bg">
        <div className="max-w-4xl mx-auto text-center">
          <AnimateOnScroll>
            <p className="font-display text-sm text-neon tracking-widest mb-4">WEBSITES</p>
            <h1 className="font-display text-6xl md:text-8xl text-white leading-tight mb-6">
              YOUR WEBSITE IS EITHER WINNING TRUST OR LOSING IT.
            </h1>
            <p className="text-white/60 text-xl max-w-2xl mx-auto">
              Visitors decide in 3 seconds whether you&apos;re legit. Make those 3 seconds count.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Pricing tiers */}
      <section className="bg-surface py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll>
            <h2 className="font-display text-4xl md:text-5xl text-white text-center mb-3">PICK YOUR BUILD</h2>
            <p className="text-white/50 text-center mb-14">
              Every tier includes optional ongoing maintenance from $200/mo.
            </p>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-3 gap-6">
            {tiers.map((tier, i) => (
              <AnimateOnScroll key={tier.name} delay={i * 0.1}>
                <div
                  className={`rounded-xl p-8 flex flex-col h-full card-hover-border ${
                    tier.highlight
                      ? "bg-neon/5 border border-neon"
                      : "bg-bg border border-white/10"
                  }`}
                >
                  {tier.highlight && (
                    <span className="inline-block bg-neon text-bg text-xs font-display tracking-widest px-3 py-1 rounded mb-4 self-start">
                      MOST POPULAR
                    </span>
                  )}
                  <p className="font-display text-white/40 text-xs tracking-[0.3em] mb-2">{tier.name.toUpperCase()}</p>
                  <p className="text-white/60 text-sm mb-6 italic leading-snug">{tier.pitch}</p>

                  <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-white/70">
                        <span className="text-neon mt-0.5 shrink-0">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    <p className="text-white/40 text-xs mb-3 leading-snug">{tier.best}</p>
                    <div className="border-t border-white/10 pt-4 flex items-end justify-between">
                      <div>
                        <p className="font-display text-3xl text-neon">{tier.price}</p>
                        <p className="text-white/40 text-xs">{tier.priceNote}</p>
                      </div>
                      <Link
                        href="/book"
                        className={`px-5 py-2 rounded text-sm font-semibold transition-colors ${
                          tier.highlight
                            ? "bg-neon text-bg hover:opacity-90"
                            : "border border-neon text-neon hover:bg-neon hover:text-bg"
                        }`}
                      >
                        Get Started
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          {/* Maintenance add-on */}
          <AnimateOnScroll>
            <div className="mt-8 bg-bg/60 border border-white/10 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <p className="font-display text-white text-lg">+ MAINTENANCE RETAINER</p>
                <p className="text-white/50 text-sm">Ongoing updates, changes, and support for any build. Nothing sits broken.</p>
              </div>
              <p className="font-display text-neon text-2xl shrink-0">From $200/mo</p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Risk reversal */}
      <section
        className="bg-neon py-28 px-6"
        style={{ clipPath: "polygon(0 6%, 100% 0%, 100% 94%, 0% 100%)" }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <AnimateOnScroll>
            <h2 className="font-display text-4xl md:text-5xl text-bg mb-4">WE STAND BEHIND THE WORK.</h2>
            <p className="text-bg/75 text-lg leading-relaxed">
              Every build comes with revision rounds built in — we go until you&apos;re happy.
              If we build it and you don&apos;t love it, we fix it. That&apos;s not a policy.
              That&apos;s just how we operate.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-surface py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <AnimateOnScroll>
            <h2 className="font-display text-3xl text-white text-center mb-8">FROM A WEBSITE CLIENT</h2>
            <TestimonialCard
              name="Matt Nicklasson"
              company="Matt Nicklasson Construction"
              quote="We recently had our website built by Haruun and the entire experience was exceptional from start to finish. He was professional, creative, and highly responsive to our needs. Communication was clear throughout the process, and any changes we requested were handled quickly. Highly recommend Unconventional Media for anyone looking for a reliable and talented web development team!"
            />
          </AnimateOnScroll>
        </div>
      </section>

      <CTASection headline="READY TO BUILD SOMETHING THAT ACTUALLY WORKS?" />
    </>
  );
}
