import type { Metadata } from "next";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import ServiceSchema from "@/components/ServiceSchema";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  alternates: { canonical: "/funnels-cro" },
  title: "Funnels & Conversion Optimization — Unconventional Group",
  description:
    "High-converting funnels and conversion rate optimization. Turn the traffic you already have into more booked jobs and sales.",
};

const HERO_BG = "/funnels.jpg";

const optimize = [
  "Landing pages built to do one thing: convert the visitor in front of them",
  "Offers and messaging re-engineered so the 'yes' is the easy choice",
  "Forms, calls-to-action, and booking flows stripped of every point of friction",
  "Page speed and mobile experience tightened so nobody bounces before they convert",
  "Proper tracking and A/B testing so decisions are made on data, not guesses",
];

const points = [
  {
    title: "Same Traffic, More Revenue",
    body: "Go from 2% to 4% conversion and you've doubled your leads — without spending another dollar on ads.",
  },
  {
    title: "Every Dollar Works Harder",
    body: "CRO makes everything else you run — ads, SEO, social — more profitable, because more of the traffic converts.",
  },
  {
    title: "Backed By Testing",
    body: "We don't redesign on a hunch. We test, measure, and keep the version that books more work.",
  },
];

const faqs = [
  {
    q: "What is conversion rate optimization (CRO)?",
    a: "CRO is the work of turning more of your existing visitors into customers. Go from 2% to 4% conversion and you've doubled your leads without spending another dollar on ads. We test, measure, and keep the version that books more work — no redesigns on a hunch.",
  },
  {
    q: "What exactly do you optimize?",
    a: "Landing pages, offers and messaging, forms and booking flows, calls-to-action, page speed, and mobile experience — every point of friction between a visitor landing and a job getting booked. Plus proper tracking and A/B testing so decisions are made on data.",
  },
  {
    q: "Do I need a lot of traffic before CRO makes sense?",
    a: "You need some traffic to test against, but you don't need to be a big brand. If people are finding your site and not converting, that's exactly the leak we fix. On the free call we'll tell you honestly whether CRO or traffic is your real bottleneck.",
  },
  {
    q: "How much does funnel and CRO work cost?",
    a: "It depends on scope — a single landing page and a full funnel rebuild with ongoing testing are different engagements. Book the free 20-minute call at unconventionalgroup.ca/book and you'll get a straight answer, no obligation.",
  },
  {
    q: "How is this different from just redesigning my website?",
    a: "A redesign changes how your site looks. CRO changes how it performs. We're not chasing prettier — we're chasing more booked jobs from the same traffic, backed by testing. Often the winning version isn't the one anyone would have guessed.",
  },
];

export default function FunnelsCroPage() {
  return (
    <>
      <ServiceSchema
        name="Funnels & Conversion Optimization"
        description="High-converting funnels and conversion rate optimization. Turn the traffic you already have into more booked jobs and sales."
        path="/funnels-cro"
      />
      <PageHero
        badge="FUNNELS & CRO"
        headline="MORE BOOKED JOBS FROM THE SAME TRAFFIC."
        subhead="Most businesses don't have a traffic problem — they have a conversion problem. We build funnels and optimize every step so more of the people already finding you actually become customers."
        bgUrl={HERO_BG}
        cta={{ label: "Book a Free Call", href: "/book" }}
        secondaryCta={false}
      />

      {/* What we optimize — solid */}
      <section className="bg-surface py-28 px-6 border-t border-white/8">
        <div className="max-w-3xl mx-auto">
          <AnimateOnScroll>
            <p className="font-display text-xs text-neon tracking-[0.35em] text-center mb-3">
              WHAT WE OPTIMIZE
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-white mb-12 text-center leading-[0.93]">
              EVERY STEP TO THE SALE.
            </h2>
          </AnimateOnScroll>
          <div className="flex flex-col gap-4">
            {optimize.map((item, i) => (
              <AnimateOnScroll key={i} delay={i * 0.08}>
                <div className="flex items-start gap-4 bg-bg border border-white/8 rounded-xl p-5 hover:border-neon/25 transition-colors">
                  <span className="text-neon text-lg mt-0.5 shrink-0">✓</span>
                  <p className="text-white/75 text-base leading-snug">{item}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* The math — solid */}
      <section className="bg-bg py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <AnimateOnScroll>
            <h2 className="font-display text-4xl md:text-5xl text-white text-center mb-14 leading-[0.93]">
              THE COMPOUND EFFECT.
            </h2>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-3 gap-5">
            {points.map((p, i) => (
              <AnimateOnScroll key={p.title} delay={i * 0.1}>
                <div className="bg-surface border border-white/8 rounded-xl p-7 h-full card-hover-border">
                  <div className="w-10 h-[3px] bg-neon mb-5 glow-line" />
                  <h3 className="font-display text-xl text-neon mb-3">{p.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{p.body}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <FAQ items={faqs} heading="FUNNELS & CRO QUESTIONS." />

      <CTASection
        bgUrl="https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=1920&q=80"
        headline="READY TO CONVERT MORE OF WHAT YOU ALREADY HAVE?"
        subhead="Free 20-minute call. We'll show you where you're leaking leads and how we'd fix it."
      />
    </>
  );
}
