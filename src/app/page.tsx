import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import TestimonialCard from "@/components/TestimonialCard";
import CTASection from "@/components/CTASection";

const stats = [
  { value: "50+", label: "Businesses Served" },
  { value: "3", label: "Services, One Team" },
  { value: "14 Days", label: "Avg. Site Delivery" },
  { value: "Canada-Wide", label: "Reach" },
];

const services = [
  {
    title: "Websites",
    tagline: "A site that makes people trust you before you say a word.",
    price: "Starting from $750",
    href: "/websites",
  },
  {
    title: "Social Media",
    tagline: "Your feed, handled. On time. Every month. Without you touching it.",
    price: "Starting from $1,500/mo",
    href: "/social-media",
  },
  {
    title: "Videography",
    tagline: "Content that looks like you spent 10x what you did.",
    price: "Starting from $1,200/mo",
    href: "/videography",
  },
  {
    title: "Ad Management",
    tagline: "$70 in ad spend. 5 booked jobs. That's what we do with Facebook & Instagram ads.",
    price: "Starting from $500/mo + ad spend",
    href: "/ad-management",
  },
];

const testimonials = [
  {
    name: "Matt Nicklasson",
    company: "Matt Nicklasson Construction",
    quote: "We recently had our website built by Haruun and the entire experience was exceptional from start to finish. He was professional, creative, and highly responsive to our needs. Communication was clear throughout the process, and any changes we requested were handled quickly. Highly recommend!",
  },
  {
    name: "John Rwihangana",
    company: "Google Review",
    quote: "Over the past week with $70 in ad spend, they helped us book 5 additional jobs! I would highly recommend them for managing your ads.",
  },
  {
    name: "Dana Schick",
    company: "Google Review",
    quote: "Loved how easy the team at Unconventional Media made the entire process! Communication was always clear and they made a fantastic site for my business. Thanks again guys!",
  },
  {
    name: "Dini Arkangelo",
    company: "Demolition Company",
    quote: "We hired Unconventional Group to build our website for our demolition company, and they did an excellent job. They were responsive, detail-oriented, and very easy to work with. The final product turned out great — I would definitely work with them again.",
  },
];

export default function Home() {
  return (
    <>
      <HeroSlider />

      {/* Stats strip */}
      <section className="bg-surface border-y border-white/10 py-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s, i) => (
              <AnimateOnScroll key={s.value} delay={i * 0.1}>
                <p className="font-display text-4xl md:text-5xl text-neon glow">{s.value}</p>
                <p className="text-white/50 text-sm mt-1">{s.label}</p>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Services — green angled */}
      <section
        className="bg-neon py-44 px-6 relative"
        style={{ clipPath: "polygon(0 5%, 100% 0%, 100% 95%, 0% 100%)" }}
      >
        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll>
            <h2 className="font-display text-5xl md:text-6xl text-bg mb-3 text-center">WHAT WE DO</h2>
            <p className="text-bg/60 text-center mb-14 max-w-xl mx-auto">
              Three services. One team. Everything in-house.
            </p>
          </AnimateOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <AnimateOnScroll key={s.title} delay={i * 0.1}>
                <div className="bg-bg rounded-xl p-8 flex flex-col h-full card-hover-border">
                  <p className="font-display text-neon text-xs tracking-[0.3em] mb-3">{s.title.toUpperCase()}</p>
                  <h3 className="font-display text-2xl text-white mb-4 leading-snug flex-1">{s.tagline}</h3>
                  <div className="mt-auto">
                    <p className="text-white/40 text-sm mb-4">{s.price}</p>
                    <Link href={s.href} className="text-neon text-sm font-semibold hover:underline">
                      Learn more →
                    </Link>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Trust / differentiator */}
      <section className="bg-bg py-28 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <AnimateOnScroll>
            <h2 className="font-display text-5xl md:text-7xl text-white leading-tight mb-8">
              MOST AGENCIES TAKE YOUR MONEY AND DISAPPEAR.
            </h2>
            <p className="text-white/60 text-lg leading-relaxed">
              We&apos;ve worked with 50+ businesses across Canada. We know what a bad agency looks like
              because our clients came from them. No templates handed off as custom work. No ghost-mode
              after the invoice. No &ldquo;we&apos;ll get to it next sprint.&rdquo; You get a team that treats your
              brand like it&apos;s their own — because our reputation is on the line every time we deliver.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-surface py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll>
            <h2 className="font-display text-5xl md:text-6xl text-white mb-3 text-center">
              DON&apos;T TAKE OUR WORD FOR IT.
            </h2>
            <p className="text-white/50 text-center mb-12">50+ businesses. These are some of them.</p>
          </AnimateOnScroll>
          <div className="grid sm:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <AnimateOnScroll key={i} delay={i * 0.1}>
                <TestimonialCard {...t} />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Bespoke Automations callout */}
      <section
        className="bg-neon py-44 px-6 relative"
        style={{ clipPath: "polygon(0 8%, 100% 0%, 100% 92%, 0% 100%)" }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <AnimateOnScroll>
            <p className="font-display text-xs text-bg/50 tracking-[0.3em] mb-4">SISTER COMPANY</p>
            <h2 className="font-display text-4xl md:text-5xl text-bg mb-6 leading-tight">
              RUNNING YOUR BUSINESS ON MANUAL WORK? OUR BROTHER COMPANY BUILT THE FIX.
            </h2>
            <p className="text-bg/70 text-lg mb-8 leading-relaxed">
              Bespoke Automations builds custom AI systems for businesses ready to stop doing
              everything by hand — automated quoting, client intake, follow-ups, and more.
            </p>
            <a
              href="https://bespokeautomations.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-bg text-neon font-bold px-8 py-4 rounded hover:bg-bg/90 transition-colors"
            >
              Visit Bespoke Automations ↗
            </a>
          </AnimateOnScroll>
        </div>
      </section>

      <CTASection />
    </>
  );
}
