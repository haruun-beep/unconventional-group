import type { Metadata } from "next";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import TestimonialCard from "@/components/TestimonialCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Social Media Management — Unconventional Group",
  description:
    "Done-for-you social media management for Canadian businesses. Instagram, Facebook, LinkedIn. Starting from $1,500/mo.",
  alternates: {
    canonical: "/social-media",
  },
};

const whatWeHandle = [
  "Content creation — graphics and captions built around your brand",
  "Scheduled and published on time, every time — no chasing anyone",
  "Instagram, Facebook, and LinkedIn covered",
  "Monthly performance recap so you always know what's working",
  "Strategy adjustments based on data every single month",
];

export default function SocialMediaPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-bg pt-32 pb-24 px-6 grid-bg">
        <div className="max-w-4xl mx-auto text-center">
          <AnimateOnScroll>
            <p className="font-display text-sm text-neon tracking-widest mb-4">SOCIAL MEDIA MANAGEMENT</p>
            <h1 className="font-display text-6xl md:text-8xl text-white leading-tight mb-6">
              NEVER THINK ABOUT WHAT TO POST AGAIN.
            </h1>
            <p className="text-white/70 text-xl max-w-2xl mx-auto">
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
            <h2 className="font-display text-4xl md:text-5xl text-bg mb-3 text-center">
              HERE&apos;S EVERYTHING WE HANDLE.
            </h2>
            <p className="text-bg/70 text-center mb-12">You don&apos;t touch a single thing.</p>
          </AnimateOnScroll>

          <div className="flex flex-col gap-4">
            {whatWeHandle.map((item, i) => (
              <AnimateOnScroll key={i} delay={i * 0.1}>
                <div className="flex items-start gap-4 bg-bg/10 rounded-xl p-5">
                  <span className="font-display text-3xl text-bg/30 shrink-0 w-8 leading-none pt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-bg text-lg font-medium leading-snug">{item}</p>
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
              THE MATH IS EMBARRASSINGLY OBVIOUS.
            </h2>
            <div className="bg-surface border border-white/10 rounded-2xl p-10">
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
                <div className="text-center">
                  <p className="text-white/50 text-sm mb-2">Hiring a full-time social media manager</p>
                  <p className="font-display text-4xl text-white/30 line-through">$3,500–$5,000/mo</p>
                  <p className="text-white/40 text-xs mt-1">one person, one skill set</p>
                </div>
                <div className="text-3xl text-white/30 font-display">VS</div>
                <div className="text-center">
                  <p className="text-white/50 text-sm mb-2">Our full-service retainer</p>
                  <p className="font-display text-5xl text-neon glow">$1,500/mo</p>
                  <p className="text-white/40 text-xs mt-1">a whole team behind your brand</p>
                </div>
              </div>
              <p className="text-white/50 text-sm">
                Month-to-month. No contracts. No lock-in. Stay because the results are there.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-surface py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <AnimateOnScroll>
            <h2 className="font-display text-3xl text-white text-center mb-8">FROM A SOCIAL MEDIA CLIENT</h2>
            <TestimonialCard
              name="Zebra Landscaping"
              company="Zebra Landscaping"
              quote="Great service, good communication, and works quickly. He took care of our social media channels and we are satisfied with the work so far!"
            />
          </AnimateOnScroll>
        </div>
      </section>

      {/* Price + CTA */}
      <section className="bg-bg py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <AnimateOnScroll>
            <p className="font-display text-6xl text-neon glow mb-2">$1,500/mo</p>
            <p className="text-white/50 mb-8">Month-to-month. No lock-in. Cancel anytime.</p>
            <Link
              href="/book"
              className="inline-block bg-neon text-bg font-bold px-10 py-4 rounded text-base hover:opacity-90 transition-colors"
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
