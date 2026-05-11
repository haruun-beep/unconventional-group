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
    price: "Starting from $800/mo",
    href: "/social-media",
  },
  {
    title: "Videography",
    tagline: "Content that looks like you spent 10x what you did.",
    price: "Starting from $1,200/mo",
    href: "/videography",
  },
];

const testimonials = [
  {
    name: "CLIENT NAME",
    company: "Company Name",
    quote:
      "Add your client testimonial here. Describe the result and the experience working with Unconventional Group.",
  },
  {
    name: "CLIENT NAME",
    company: "Company Name",
    quote:
      "Add your client testimonial here. Describe the result and the experience working with Unconventional Group.",
  },
  {
    name: "CLIENT NAME",
    company: "Company Name",
    quote:
      "Add your client testimonial here. Describe the result and the experience working with Unconventional Group.",
  },
  {
    name: "CLIENT NAME",
    company: "Company Name",
    quote:
      "Add your client testimonial here. Describe the result and the experience working with Unconventional Group.",
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
                <p className="text-muted text-sm mt-1">{s.label}</p>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Services section — green angled */}
      <section
        className="bg-neon py-40 px-6 relative"
        style={{ clipPath: "polygon(0 5%, 100% 0%, 100% 95%, 0% 100%)" }}
      >
        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll>
            <h2 className="font-display text-5xl md:text-6xl text-bg mb-4 text-center">
              WHAT WE DO
            </h2>
            <p className="text-bg/70 text-center mb-14 max-w-xl mx-auto">
              Three services. One team. No outsourcing.
            </p>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <AnimateOnScroll key={s.title} delay={i * 0.1}>
                <div className="bg-bg rounded-xl p-8 flex flex-col h-full card-hover-border">
                  <p className="font-display text-neon text-sm tracking-widest mb-3">
                    {s.title.toUpperCase()}
                  </p>
                  <h3 className="font-display text-2xl text-white mb-4 leading-snug flex-1">
                    {s.tagline}
                  </h3>
                  <div className="mt-auto">
                    <p className="text-muted text-sm mb-4">{s.price}</p>
                    <Link
                      href={s.href}
                      className="text-neon text-sm font-semibold hover:underline"
                    >
                      Learn more →
                    </Link>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* About/trust section */}
      <section className="bg-bg py-28 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <AnimateOnScroll>
            <h2 className="font-display text-5xl md:text-7xl text-white leading-tight mb-8">
              MOST AGENCIES TAKE YOUR MONEY AND DISAPPEAR.
            </h2>
            <p className="text-muted text-lg leading-relaxed">
              We&apos;ve worked with 50+ businesses across Canada. We know what a bad agency looks like
              because our clients came from them. No templates. No ghosting. No{" "}
              <em>&quot;we&apos;ll get to it next month.&quot;</em> You get a team that treats your brand like
              it&apos;s their own — because our reputation depends on your results.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-surface py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll>
            <h2 className="font-display text-5xl md:text-6xl text-white mb-12 text-center">
              DON&apos;T TAKE OUR WORD FOR IT.
            </h2>
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
        className="bg-neon py-40 px-6 relative"
        style={{ clipPath: "polygon(0 8%, 100% 0%, 100% 92%, 0% 100%)" }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <AnimateOnScroll>
            <p className="font-display text-sm text-bg/60 tracking-widest mb-4">SISTER COMPANY</p>
            <h2 className="font-display text-4xl md:text-5xl text-bg mb-6 leading-tight">
              RUNNING YOUR BUSINESS ON MANUAL WORK? OUR BROTHER COMPANY BUILT THE FIX.
            </h2>
            <p className="text-bg/80 text-lg mb-8">
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
