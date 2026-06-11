import type { Metadata } from "next";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import TestimonialCard from "@/components/TestimonialCard";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  alternates: { canonical: "/about" },
  title: "About — Unconventional Group",
  description:
    "Edmonton-based marketing & sales team. 50+ businesses served across Canada. Websites, social media, video, and ads.",
};

const HERO_BG = "/about-edmonton.jpg";

const SERVICES_BG =
  "https://images.squarespace-cdn.com/content/v1/6964898274230030ca027d02/1768609069084-IEWNEZZR5K59B6RFOWQH/unsplash-image-DtDlVpy-vvQ.jpg";

const services = [
  {
    icon: "🌐",
    title: "Websites",
    body: "From template customisation to fully custom builds. Every site is built to convert.",
    href: "/websites",
  },
  {
    icon: "📱",
    title: "Social Media",
    body: "Strategy, content, scheduling. Full management so you never have to think about posting.",
    href: "/social-media",
  },
  {
    icon: "🎬",
    title: "Videography",
    body: "Brand films, reels, product shoots. We shoot and edit — you post.",
    href: "/videography",
  },
  {
    icon: "📈",
    title: "Ad Management",
    body: "Facebook & Instagram ads that actually book jobs. We set it up, run it, optimize it monthly.",
    href: "/ad-management",
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
      <PageHero
        badge="ABOUT US"
        headline="WE'RE UNCONVENTIONAL GROUP."
        subhead="Edmonton-based marketing & sales team. We build websites, run social media, shoot content, and manage ads for businesses that are tired of vendors who disappear after the invoice."
        bgUrl={HERO_BG}
        cta={{ label: "Book a Free Call", href: "/book" }}
        secondaryCta={false}
      />

      {/* Badges + Story */}
      <section className="bg-bg py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll>
            <div className="flex flex-wrap gap-3 mb-12">
              {["Edmonton-Based", "50+ Businesses Served", "Canada-Wide"].map((badge) => (
                <span
                  key={badge}
                  className="border border-neon/40 text-neon font-display text-sm tracking-[0.2em] px-4 py-1.5 rounded"
                >
                  {badge}
                </span>
              ))}
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <div className="flex flex-col gap-5 text-white/55 text-lg leading-relaxed">
              <p>
                We started because too many businesses were getting burned — overpriced templates,
                vendors that ghost, deliverables with no follow-through. We do it differently.
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

      {/* Services — photo bg */}
      <section
        className="relative py-28 px-6 overflow-hidden"
        style={{
          backgroundImage: `url('${SERVICES_BG}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/88" />
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-neon/35 to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <AnimateOnScroll>
            <p className="font-display text-xs text-neon tracking-[0.35em] text-center mb-3">SERVICES</p>
            <h2 className="font-display text-4xl md:text-5xl text-white text-center mb-14 leading-[0.93]">
              FOUR SERVICES. ONE TEAM.
            </h2>
          </AnimateOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s, i) => (
              <AnimateOnScroll key={s.title} delay={i * 0.1}>
                <Link href={s.href} className="group block h-full">
                  <div className="bg-white/5 border border-white/8 rounded-xl p-7 h-full card-hover-border hover:border-neon/25 transition-colors">
                    <div className="text-3xl mb-4">{s.icon}</div>
                    <h3 className="font-display text-2xl text-white mb-2 group-hover:text-neon transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed">{s.body}</p>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="bg-surface py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <AnimateOnScroll>
            <p className="font-display text-xs text-neon tracking-[0.35em] text-center mb-3">PROCESS</p>
            <h2 className="font-display text-4xl md:text-5xl text-white text-center mb-14 leading-[0.93]">
              HOW WE WORK
            </h2>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <AnimateOnScroll key={step.num} delay={i * 0.12}>
                <div className="relative">
                  <p className="font-display text-6xl text-neon/15 mb-3">{step.num}</p>
                  <h3 className="font-display text-xl text-white mb-2 leading-snug">{step.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{step.body}</p>
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
            <div className="grid md:grid-cols-2 gap-5">
              {[
                {
                  name: "Salam Abdul",
                  company: "Google Review",
                  quote:
                    "It was a pleasure working with Unconventional Media in designing and developing the website for my business. Harun is a fantastic person to work with and I would definitely recommend for others to work with them!!",
                },
                {
                  name: "Steve",
                  company: "Google Review",
                  quote:
                    "Haruun was professional, responsive and clearly knew his stuff when it came to web development. Would definitely recommend!",
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

      {/* Odin */}
      <section className="bg-bg py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <AnimateOnScroll>
            <div className="bg-surface border border-neon/20 rounded-2xl p-10">
              <p className="font-display text-xs text-neon tracking-[0.35em] mb-3">THE NEWEST HIRE</p>
              <h2 className="font-display text-3xl md:text-4xl text-white mb-4 leading-[0.93]">
                MEET ODIN. HE&apos;S NOT HUMAN.
              </h2>
              <div className="w-12 h-[3px] bg-neon mb-6 glow-line" />
              <p className="text-white/55 text-lg leading-relaxed mb-7">
                Odin is our AI website auditor — he reads your homepage and hands you a blunt,
                honest scorecard in about 30 seconds. Mobile, speed, conversion, SEO, trust.
                Free, and he never sugarcoats.
              </p>
              <Link
                href="/odin"
                className="inline-block border border-neon text-neon font-bold px-7 py-3 rounded text-sm tracking-wide hover:bg-neon hover:text-bg transition-all duration-200"
              >
                Get Your Free Audit →
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Subsidiaries */}
      <section className="bg-surface py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <AnimateOnScroll>
            <div className="bg-bg border border-neon/20 rounded-2xl p-10">
              <p className="font-display text-xs text-neon tracking-[0.35em] mb-3">THE GROUP</p>
              <h2 className="font-display text-3xl md:text-4xl text-white mb-4 leading-[0.93]">
                MORE THAN MARKETING &amp; SALES.
              </h2>
              <div className="w-12 h-[3px] bg-neon mb-6 glow-line" />
              <p className="text-white/55 text-lg leading-relaxed mb-7">
                Unconventional Group also builds and backs specialized companies — including
                Bespoke Automations (custom AI systems) and Zentra Housing (student housing).
                Same team, same standard, different industries.
              </p>
              <Link
                href="/subsidiaries"
                className="inline-block border border-neon text-neon font-bold px-7 py-3 rounded text-sm tracking-wide hover:bg-neon hover:text-bg transition-all duration-200"
              >
                See Our Subsidiaries →
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <CTASection bgUrl="/team-growth.jpg" />
    </>
  );
}
