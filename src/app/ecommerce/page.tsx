import type { Metadata } from "next";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import ServiceSchema from "@/components/ServiceSchema";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  alternates: { canonical: "/ecommerce" },
  title: "E-Commerce Growth — Unconventional Group",
  description:
    "Full-funnel e-commerce growth: paid traffic, email & SMS flows, conversion optimization, and bigger average order value for online stores.",
};

const HERO_BG =
  "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1920&q=80";

const levers = [
  {
    num: "01",
    title: "Profitable Traffic",
    body: "Meta, Google Shopping, and TikTok campaigns built to bring in buyers at a cost that actually leaves you margin.",
  },
  {
    num: "02",
    title: "Email & SMS Revenue",
    body: "The flows that quietly run the best stores — welcome, abandoned cart, post-purchase, win-back — written and dialed in to print repeat sales.",
  },
  {
    num: "03",
    title: "Conversion Optimization",
    body: "Product pages, checkout, and offers tightened so more of your visitors actually buy instead of bouncing.",
  },
  {
    num: "04",
    title: "Bigger Average Order",
    body: "Bundles, upsells, and merchandising that lift how much each customer spends — the cheapest growth there is.",
  },
];

const points = [
  {
    title: "Built Around Margin",
    body: "Revenue you can't keep isn't growth. We optimize for profit, not vanity top-line.",
  },
  {
    title: "Full-Funnel, One Team",
    body: "Traffic, conversion, and retention handled together — not three vendors pointing fingers.",
  },
  {
    title: "Owned, Not Rented",
    body: "We build the email/SMS list and brand equity that keep paying off long after the ad spend stops.",
  },
];

const faqs = [
  {
    q: "What does e-commerce growth actually include?",
    a: "Four levers run as one engine: paid traffic on Meta, Google Shopping, and TikTok; email and SMS flows — welcome, abandoned cart, post-purchase, win-back; conversion optimization on product pages and checkout; and bundles and upsells that lift average order value. One team, full funnel.",
  },
  {
    q: "Which platforms do you work with?",
    a: "Shopify and the other major store platforms, plus the tools around them — Meta and Google ad accounts, Klaviyo-style email and SMS platforms, and analytics. If you sell online, we can run the funnel. And everything stays in your accounts, owned by you.",
  },
  {
    q: "Who is this a good fit for?",
    a: "Stores that are already selling and ready to scale profitably. If you're getting orders but growth has stalled, margins are thin, or you're leaning entirely on ads with no email revenue behind them, that's exactly the gap we close. If you need the store built first, we do that too.",
  },
  {
    q: "How much does e-commerce growth cost?",
    a: "It depends on scope — where your funnel is leaking and which levers we pull first. Book the free 20-minute call at unconventionalgroup.ca/book — we'll audit your funnel and give you a straight answer, no obligation.",
  },
  {
    q: "How are you different from a typical e-commerce agency?",
    a: "We're a team, not an agency — and we optimize for profit, not vanity top-line. Traffic, conversion, and retention are handled together instead of three vendors pointing fingers, and we build the email list and brand equity you own long after the ad spend stops.",
  },
];

export default function EcommercePage() {
  return (
    <>
      <ServiceSchema
        name="E-Commerce Growth"
        description="Full-funnel e-commerce growth: paid traffic, email & SMS flows, conversion optimization, and bigger average order value for online stores."
        path="/ecommerce"
      />
      <PageHero
        badge="E-COMMERCE GROWTH"
        headline="TURN YOUR STORE INTO A SALES MACHINE."
        subhead="More of the right traffic, more of it converting, and every customer worth more. We run the full funnel for online stores ready to scale — profitably."
        bgUrl={HERO_BG}
        cta={{ label: "Book a Free Call", href: "/book" }}
        secondaryCta={false}
      />

      {/* Levers — solid */}
      <section className="bg-surface py-28 px-6 border-t border-white/8">
        <div className="max-w-5xl mx-auto">
          <AnimateOnScroll>
            <p className="font-display text-xs text-neon tracking-[0.35em] text-center mb-3">
              WHERE WE MOVE THE NEEDLE
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-white text-center mb-14 leading-[0.93]">
              FOUR LEVERS, ONE GROWTH ENGINE.
            </h2>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-2 gap-5">
            {levers.map((l, i) => (
              <AnimateOnScroll key={l.num} delay={i * 0.1}>
                <div className="bg-bg border border-white/8 rounded-xl p-8 h-full hover:border-neon/25 transition-colors">
                  <p className="font-display text-5xl text-neon/20 mb-3">{l.num}</p>
                  <h3 className="font-display text-2xl text-white mb-3 leading-snug">{l.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{l.body}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Points — solid */}
      <section className="bg-bg py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <AnimateOnScroll>
            <h2 className="font-display text-4xl md:text-5xl text-white text-center mb-14 leading-[0.93]">
              GROWTH YOU GET TO KEEP.
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

      <FAQ items={faqs} heading="E-COMMERCE QUESTIONS." />

      <CTASection
        bgUrl="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1920&q=80"
        headline="READY TO SCALE YOUR STORE PROFITABLY?"
        subhead="Free 20-minute call. We'll audit your funnel and show you the fastest path to more revenue."
      />
    </>
  );
}
