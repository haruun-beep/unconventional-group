import type { Metadata } from "next";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import TestimonialCard from "@/components/TestimonialCard";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About — Unconventional Group",
  description:
    "Edmonton-based creative agency. 50+ businesses served across Canada. Websites, social media, and video.",
};

const services = [
  {
    icon: "🌐",
    title: "Websites",
    body: "From template customisation to fully custom builds. Every site is built to convert.",
  },
  {
    icon: "📱",
    title: "Social Media",
    body: "Strategy, content, scheduling. Full management so you never have to think about posting.",
  },
  {
    icon: "🎬",
    title: "Videography",
    body: "Brand films, reels, product shoots. We shoot and edit — you post.",
  },
  {
    icon: "📈",
    title: "Ad Management",
    body: "Facebook & Instagram ads that actually book jobs. We set it up, run it, optimize it monthly.",
  },
];

const steps = [
  {
    num: "01",
    title: "Free Call",
    body: "We learn your business, your goals, and what's not working. No pitch. Just clarity.",
  },
  {
    num: "02",
    title: "We Build, Manage & Shoot",
    body: "You stay focused on running your business. We handle the creative output.",
  },
  {
    num: "03",
    title: "Monthly — We Report, Adjust, and Keep Delivering",
    body: "Every month we share what's working, what's not, and where we're going next.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-bg pt-32 pb-20 px-6 grid-bg">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll>
            <p className="font-display text-sm text-neon tracking-widest mb-4">ABOUT US</p>
            <h1 className="font-display text-6xl md:text-8xl text-white leading-tight mb-6">
              WE&apos;RE UNCONVENTIONAL GROUP.
            </h1>
            <p className="text-white/60 text-xl max-w-2xl mb-8">
              Edmonton-based creative agency. We build websites, run social media, and shoot content
              for businesses that are tired of agencies that disappear after the invoice.
            </p>
            <div className="flex flex-wrap gap-4">
              {["Edmonton-Based", "50+ Businesses Served", "Canada-Wide"].map((badge) => (
                <span
                  key={badge}
                  className="border border-neon text-neon font-display text-sm tracking-widest px-4 py-1.5 rounded"
                >
                  {badge}
                </span>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Story */}
      <section className="bg-surface py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <AnimateOnScroll>
            <div className="flex flex-col gap-6 text-white/60 text-lg leading-relaxed">
              <p>
                We started because too many businesses were getting burned — overpriced templates,
                agencies that ghost, deliverables with no follow-through. We do it differently.
                Small team, real work, long-term relationships.
              </p>
              <p>
                We&apos;ve worked with 50+ businesses across Canada and our reputation is built entirely
                on results. When you look good, we look good. That&apos;s the only arrangement we&apos;re
                interested in.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Services overview */}
      <section
        className="bg-neon py-36 px-6"
        style={{ clipPath: "polygon(0 6%, 100% 0%, 100% 94%, 0% 100%)" }}
      >
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll>
            <h2 className="font-display text-4xl md:text-5xl text-bg text-center mb-14">
              FOUR SERVICES. ONE TEAM.
            </h2>
          </AnimateOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <AnimateOnScroll key={s.title} delay={i * 0.1}>
                <div className="bg-bg rounded-xl p-8 card-hover-border">
                  <div className="text-4xl mb-4">{s.icon}</div>
                  <h3 className="font-display text-2xl text-white mb-2">{s.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{s.body}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Bespoke Automations */}
      <section className="bg-bg py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <AnimateOnScroll>
            <div className="bg-surface border border-neon/30 rounded-2xl p-10">
              <p className="font-display text-sm text-neon tracking-widest mb-3">BROTHER COMPANY</p>
              <h2 className="font-display text-4xl text-white mb-4 leading-tight">
                BESPOKE AUTOMATIONS
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-6">
                We also run a brother company called Bespoke Automations. They build custom AI systems
                for businesses ready to automate the manual work slowing them down — a subsidiary of
                Unconventional Group.
              </p>
              <a
                href="https://bespokeautomations.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-neon text-neon font-semibold px-6 py-3 rounded hover:bg-neon hover:text-bg transition-colors"
              >
                Visit Bespoke Automations ↗
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* How we work */}
      <section className="bg-surface py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll>
            <h2 className="font-display text-4xl md:text-5xl text-white text-center mb-14">
              HOW WE WORK
            </h2>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <AnimateOnScroll key={step.num} delay={i * 0.12}>
                <div className="relative">
                  <p className="font-display text-6xl text-neon/20 mb-3">{step.num}</p>
                  <h3 className="font-display text-xl text-white mb-2">{step.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{step.body}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-bg py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  name: "Salam Abdul",
                  company: "Google Review",
                  quote: "It was a pleasure working with Unconventional Media in designing and developing the website for my business. Harun is a fantastic person to work with and I would definitely recommend for others to work with them!!",
                },
                {
                  name: "Steve",
                  company: "Google Review",
                  quote: "Haruun was professional, responsive and clearly knew his stuff when it came to web development. Would definitely recommend!",
                },
              ].map((t, i) => (
                <AnimateOnScroll key={i} delay={i * 0.1}>
                  <TestimonialCard {...t} />
                </AnimateOnScroll>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <CTASection />
    </>
  );
}
