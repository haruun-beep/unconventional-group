import type { Metadata } from "next";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import TestimonialCard from "@/components/TestimonialCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Social Media Management — Unconventional Group",
  description:
    "Done-for-you social media management for Canadian businesses. Instagram, Facebook, LinkedIn. Starting from $800/mo.",
};

const whatWeHandle = [
  "Content creation — graphics and captions",
  "Scheduled and published on time, every time",
  "Instagram, Facebook, and LinkedIn",
  "Monthly performance recap",
  "Strategy adjustments based on data each month",
];

export default function SocialMediaPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-bg pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <AnimateOnScroll>
            <p className="font-display text-sm text-neon tracking-widest mb-4">SOCIAL MEDIA</p>
            <h1 className="font-display text-6xl md:text-8xl text-white leading-tight mb-6">
              NEVER THINK ABOUT WHAT TO POST AGAIN.
            </h1>
            <p className="text-muted text-xl max-w-2xl mx-auto">
              The businesses winning on social aren&apos;t the ones with the biggest budgets —
              they&apos;re the ones who show up every single day. We make that happen for you.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* What we handle */}
      <section
        className="bg-neon py-40 px-6"
        style={{ clipPath: "polygon(0 6%, 100% 0%, 100% 94%, 0% 100%)" }}
      >
        <div className="max-w-3xl mx-auto">
          <AnimateOnScroll>
            <h2 className="font-display text-4xl md:text-5xl text-bg mb-12 text-center">
              HERE&apos;S EVERYTHING WE HANDLE.
            </h2>
          </AnimateOnScroll>

          <div className="flex flex-col gap-4">
            {whatWeHandle.map((item, i) => (
              <AnimateOnScroll key={i} delay={i * 0.1}>
                <div className="flex items-start gap-4 bg-bg/10 rounded-xl p-5">
                  <span className="font-display text-3xl text-bg/40 shrink-0 w-8">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-bg text-lg font-medium">{item}</p>
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
            <h2 className="font-display text-4xl md:text-5xl text-white mb-6">
              THE REAL COST COMPARISON.
            </h2>
            <div className="bg-surface border border-white/10 rounded-2xl p-10">
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
                <div className="text-center">
                  <p className="text-muted text-sm mb-2">Full-time social media manager</p>
                  <p className="font-display text-4xl text-white/40 line-through">$3,500–$5,000/mo</p>
                  <p className="text-muted text-xs mt-1">one person</p>
                </div>
                <div className="text-3xl text-muted">vs</div>
                <div className="text-center">
                  <p className="text-muted text-sm mb-2">Our retainer</p>
                  <p className="font-display text-5xl text-neon glow">$800/mo</p>
                  <p className="text-muted text-xs mt-1">a whole team</p>
                </div>
              </div>
              <p className="text-muted text-sm">
                Month-to-month. No long-term lock-in. Stay because the work is good.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-surface py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <AnimateOnScroll>
            <h2 className="font-display text-3xl text-white text-center mb-8">
              FROM A SOCIAL MEDIA CLIENT
            </h2>
            <TestimonialCard
              name="CLIENT NAME"
              company="Company Name"
              quote="Add a testimonial from a social media client here. Describe the consistency, growth, or relief of having it handled."
            />
          </AnimateOnScroll>
        </div>
      </section>

      {/* Price + CTA */}
      <section className="bg-bg py-12 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <AnimateOnScroll>
            <p className="font-display text-5xl text-neon glow mb-2">$800/mo</p>
            <p className="text-muted mb-8">Month-to-month. No long-term lock-in.</p>
            <Link
              href="/book"
              className="inline-block bg-neon text-bg font-bold px-10 py-4 rounded text-base hover:bg-neon-dim transition-colors"
            >
              Book a Free Call
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      <CTASection headline="READY TO SHOW UP EVERY DAY WITHOUT LIFTING A FINGER?" />
    </>
  );
}
