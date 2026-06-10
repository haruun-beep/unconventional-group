import type { Metadata } from "next";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";
import PageHero from "@/components/PageHero";
import ServiceSchema from "@/components/ServiceSchema";

export const metadata: Metadata = {
  alternates: { canonical: "/industries/real-estate" },
  title: "Marketing for Real Estate — Unconventional Group",
  description:
    "Personal brand, listing content, and lead funnels for real estate agents, brokerages, developers, and property managers.",
};

const HERO_BG =
  "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1920&q=80";

const playbook = [
  "A personal brand and content engine that keeps your name top of mind",
  "Listing video & photography that makes every property look its best",
  "Lead-gen funnels for buyers and sellers — not just boosted post likes",
  "Social media managed so you stay visible without living on your phone",
  "A website and IDX presence that captures and nurtures every enquiry",
];

const understand = [
  {
    title: "You Are The Brand",
    body: "In real estate, people hire the agent, not the brokerage. We build you into the name they remember.",
  },
  {
    title: "Sphere & Referrals",
    body: "We keep you in front of your past clients and network so the referrals keep flowing.",
  },
  {
    title: "Move At Market Speed",
    body: "Listings move fast. We build content and funnels that keep pace with your pipeline.",
  },
];

const faqs = [
  {
    q: "How do real estate agents get leads beyond referrals?",
    a: "Referrals are gold, but they're not a pipeline. We build lead-gen funnels for buyers and sellers — targeted ads, landing pages, and follow-up that captures people months before they're ready to transact. Your sphere keeps feeding you, and the funnel fills in the gaps.",
  },
  {
    q: "Do realtors really need a personal brand?",
    a: "In real estate, people hire the agent, not the brokerage. A personal brand — consistent content, a recognizable name, a presence people see weekly — is what makes someone think of you first when it's time to list. We build that engine and run it, so you stay visible without living on your phone.",
  },
  {
    q: "Is professional listing video and photography worth it?",
    a: "Every listing is a marketing asset for the next one. Great video and photos sell the property faster and make sellers want to list with you — they're hiring the agent whose listings look the best. We shoot listings, neighbourhood content, and personal-brand video as one system.",
  },
  {
    q: "What does real estate marketing cost?",
    a: "It depends on whether you need content, ads, a website, or the full system. Book a free 20-minute call — you'll get a straight answer with no obligation, scoped to your market and your goals.",
  },
  {
    q: "Do you work with brokerages and developers, or just individual agents?",
    a: "All three — plus property managers. We're an Edmonton-based team serving real estate professionals across Canada, and we've served 50+ businesses overall. The playbook scales from a solo agent building their name to a developer launching a project.",
  },
];

export default function RealEstatePage() {
  return (
    <>
      <ServiceSchema
        name="Marketing for Real Estate"
        description="Personal brand, listing content, and lead funnels for real estate agents, brokerages, developers, and property managers."
        path="/industries/real-estate"
        serviceType="Marketing services"
      />
      <PageHero
        badge="INDUSTRIES · REAL ESTATE"
        headline="LISTINGS MOVE. YOUR NAME STICKS."
        subhead="Agents, brokerages, developers — real estate is a personal-brand game. We build the presence, content, and lead funnels that keep your pipeline full and your name top of mind."
        bgUrl={HERO_BG}
        cta={{ label: "Book a Free Call", href: "/book" }}
        secondaryCta={false}
      />

      <section className="bg-surface py-28 px-6 border-t border-white/8">
        <div className="max-w-3xl mx-auto">
          <AnimateOnScroll>
            <p className="font-display text-xs text-neon tracking-[0.35em] text-center mb-3">
              THE PLAYBOOK
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-white mb-12 text-center leading-[0.93]">
              HOW WE GROW REAL ESTATE BRANDS.
            </h2>
          </AnimateOnScroll>
          <div className="flex flex-col gap-4">
            {playbook.map((item, i) => (
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

      <section className="bg-bg py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <AnimateOnScroll>
            <h2 className="font-display text-4xl md:text-5xl text-white text-center mb-14 leading-[0.93]">
              WE GET YOUR WORLD.
            </h2>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-3 gap-5">
            {understand.map((u, i) => (
              <AnimateOnScroll key={u.title} delay={i * 0.1}>
                <div className="bg-surface border border-white/8 rounded-xl p-7 h-full card-hover-border">
                  <div className="w-10 h-[3px] bg-neon mb-5 glow-line" />
                  <h3 className="font-display text-xl text-neon mb-3">{u.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{u.body}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <FAQ items={faqs} heading="REAL ESTATE QUESTIONS." />

      <CTASection
        bgUrl="/staging.jpg"
        headline="LET'S BUILD YOUR NAME INTO THE MARKET."
        subhead="Free 20-minute call. We'll show you how to stay top of mind and keep your pipeline full."
      />
    </>
  );
}
