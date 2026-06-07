import type { Metadata } from "next";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import TestimonialCard from "@/components/TestimonialCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Videography & Photography — Unconventional Group",
  description:
    "Brand films, reels, product photography and social content for Canadian businesses. Starting from $1,200/mo.",
  alternates: {
    canonical: "/videography",
  },
};

const tags = [
  "Brand Films",
  "Promo Reels",
  "Social Content",
  "Team Photography",
  "Product Shoots",
  "Event Coverage",
  "Headshots",
  "Behind the Scenes",
];

const steps = [
  {
    num: "01",
    title: "We Plan the Shoot",
    body: "We work through what you need — content calendar, formats, goals. No showing up and winging it.",
  },
  {
    num: "02",
    title: "We Show Up and Shoot",
    body: "Our team handles everything on shoot day. You just show up and look like you own the place.",
  },
  {
    num: "03",
    title: "You Get Edited, Ready-to-Use Files",
    body: "Colour graded, cut for every format, delivered to you ready to post. Not raw footage you have to figure out.",
  },
];

export default function VideographyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-bg pt-32 pb-24 px-6 grid-bg">
        <div className="max-w-4xl mx-auto text-center">
          <AnimateOnScroll>
            <p className="font-display text-sm text-neon tracking-widest mb-4">VIDEO & PHOTO</p>
            <h1 className="font-display text-6xl md:text-8xl text-white leading-tight mb-6">
              YOUR PHONE CAMERA ISN&apos;T A BRAND STRATEGY.
            </h1>
            <p className="text-white/60 text-xl max-w-2xl mx-auto">
              We shoot and edit content that looks like you spent 10x what you did.
              Reels, brand films, product shots, headshots — delivered ready to post.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* What we shoot */}
      <section className="bg-surface py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll>
            <h2 className="font-display text-4xl md:text-5xl text-white text-center mb-12">
              WHAT WE SHOOT
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <div className="flex flex-wrap gap-3 justify-center">
              {tags.map((tag, i) => (
                <span
                  key={tag}
                  className="border border-neon text-neon font-display text-sm tracking-widest px-5 py-2.5 rounded-full"
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </AnimateOnScroll>
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
            {steps.map((step, i) => (
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
            <h2 className="font-display text-4xl md:text-5xl text-white mb-6">
              THE REAL COST COMPARISON.
            </h2>
            <div className="bg-surface border border-white/10 rounded-2xl p-10">
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
                <div className="text-center">
                  <p className="text-white/50 text-sm mb-2">Hiring separately for a day</p>
                  <p className="font-display text-4xl text-white/40 line-through">$2,000–$4,000</p>
                  <p className="text-white/40 text-xs mt-1">one shoot, one time</p>
                </div>
                <div className="font-display text-3xl text-white/30">VS</div>
                <div className="text-center">
                  <p className="text-white/50 text-sm mb-2">Our monthly retainer</p>
                  <p className="font-display text-5xl text-neon glow">$1,200/mo</p>
                  <p className="text-white/40 text-xs mt-1">content pipeline, year-round</p>
                </div>
              </div>
              <p className="text-white/50 text-sm">
                Your content pipeline stays full. Your feed never goes dry.
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
              FROM A VIDEO CLIENT
            </h2>
            <TestimonialCard
              name="Brian Manuel"
              company="Local Business Owner"
              quote="I hired Ugroup to create our website. Great team, great ideas and easy to work with. I highly recommend them for all website needs."
            />
          </AnimateOnScroll>
        </div>
      </section>

      {/* Price + CTA */}
      <section className="bg-bg py-12 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <AnimateOnScroll>
            <p className="font-display text-5xl text-neon glow mb-2">$1,200/mo</p>
            <p className="text-white/50 mb-8">Keep your content pipeline full, year-round.</p>
            <Link
              href="/book"
              className="inline-block bg-neon text-bg font-bold px-10 py-4 rounded text-base hover:opacity-90 transition-colors"
            >
              Book a Free Call
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      <CTASection headline="READY TO LOOK LIKE YOU BELONG AT THE TOP?" />
    </>
  );
}
