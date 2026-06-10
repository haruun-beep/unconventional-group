import type { Metadata } from "next";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import ServiceSchema from "@/components/ServiceSchema";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  alternates: { canonical: "/lead-generation" },
  title: "Lead Generation Systems — Unconventional Group",
  description:
    "Multi-channel lead generation that fills your calendar with qualified, ready-to-buy jobs. Built and run by Unconventional Group.",
};

const HERO_BG =
  "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1920&q=80";

const steps = [
  {
    num: "01",
    title: "We Build the Offer",
    body: "Before we spend a dollar, we sharpen what you sell so it's the obvious choice. The right offer is what makes everything downstream convert.",
  },
  {
    num: "02",
    title: "We Run the Campaigns",
    body: "Paid ads, targeted outreach, and content working together to put your business in front of people actively looking to buy — across every channel that fits.",
  },
  {
    num: "03",
    title: "We Qualify the Leads",
    body: "No tire-kickers. Leads are filtered so what lands in your inbox or calendar is someone genuinely ready to hire you.",
  },
  {
    num: "04",
    title: "We Optimize Relentlessly",
    body: "Every week we cut what's underperforming and scale what's working, so your cost-per-job keeps dropping while volume climbs.",
  },
];

const benefits = [
  {
    title: "Tied to Booked Work",
    body: "We don't measure success in clicks or impressions. We measure it in jobs on your calendar.",
  },
  {
    title: "Built For Your Trade",
    body: "Campaigns engineered around how people actually search for and choose a business like yours.",
  },
  {
    title: "You Stay In Control",
    body: "You own the accounts and the data. You see exactly what's working, in plain English, every month.",
  },
];

const faqs = [
  {
    q: "How is this different from just buying leads?",
    a: "Bought leads are shared with five of your competitors and half of them never pick up the phone. We build a system that generates leads exclusively for you — paid ads, outreach, and content working together — and you own every account and every piece of data it produces.",
  },
  {
    q: "How do you qualify the leads?",
    a: "Leads are filtered before they reach you, so what lands in your inbox or calendar is someone genuinely ready to hire — not a tire-kicker collecting quotes. We measure success in booked jobs, not clicks or impressions.",
  },
  {
    q: "Who is lead generation a good fit for?",
    a: "Businesses where a booked job is worth real money: contractors and trades, professional services, home and local services, real estate. If you do great work but the phone isn't ringing enough, this is built for you. We work with businesses across Canada.",
  },
  {
    q: "How much does lead generation cost?",
    a: "It depends on scope — your trade, your market, and how many channels we run. Book the free 20-minute call at unconventionalgroup.ca/book and you'll get a straight answer, no obligation.",
  },
  {
    q: "How long until leads start coming in?",
    a: "Campaigns can start producing leads within the first weeks of going live, and the system gets better from there — every week we cut what's underperforming and scale what's working, so your cost-per-job keeps dropping while volume climbs.",
  },
];

export default function LeadGenerationPage() {
  return (
    <>
      <ServiceSchema
        name="Lead Generation Systems"
        description="Multi-channel lead generation that fills your calendar with qualified, ready-to-buy jobs. Built and run by Unconventional Group."
        path="/lead-generation"
      />
      <PageHero
        badge="LEAD GENERATION"
        headline="WE FILL YOUR CALENDAR WITH JOBS."
        subhead="Multi-channel campaigns engineered to put qualified, ready-to-buy leads in front of you. You do the work you're great at — we keep the pipeline full."
        bgUrl={HERO_BG}
        cta={{ label: "Book a Free Call", href: "/book" }}
        secondaryCta={false}
      />

      {/* How it works — solid */}
      <section className="bg-surface py-28 px-6 border-t border-white/8">
        <div className="max-w-5xl mx-auto">
          <AnimateOnScroll>
            <p className="font-display text-xs text-neon tracking-[0.35em] text-center mb-3">
              THE SYSTEM
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-white text-center mb-14 leading-[0.93]">
              HOW WE FILL THE PIPELINE
            </h2>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-2 gap-5">
            {steps.map((s, i) => (
              <AnimateOnScroll key={s.num} delay={i * 0.1}>
                <div className="bg-bg border border-white/8 rounded-xl p-8 h-full hover:border-neon/25 transition-colors">
                  <p className="font-display text-5xl text-neon/20 mb-3">{s.num}</p>
                  <h3 className="font-display text-2xl text-white mb-3 leading-snug">{s.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{s.body}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits — solid */}
      <section className="bg-bg py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <AnimateOnScroll>
            <h2 className="font-display text-4xl md:text-5xl text-white text-center mb-14 leading-[0.93]">
              LEADS THAT ACTUALLY TURN INTO REVENUE.
            </h2>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-3 gap-5">
            {benefits.map((b, i) => (
              <AnimateOnScroll key={b.title} delay={i * 0.1}>
                <div className="bg-surface border border-white/8 rounded-xl p-7 h-full card-hover-border">
                  <div className="w-10 h-[3px] bg-neon mb-5 glow-line" />
                  <h3 className="font-display text-xl text-neon mb-3">{b.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{b.body}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <FAQ items={faqs} heading="LEAD GENERATION QUESTIONS." />

      <CTASection
        bgUrl="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1920&q=80"
        headline="WANT A CALENDAR FULL OF QUALIFIED JOBS?"
        subhead="Free 20-minute call. We'll map out exactly how we'd fill your pipeline."
      />
    </>
  );
}
