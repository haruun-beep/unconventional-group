import type { Metadata } from "next";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";
import PageHero from "@/components/PageHero";
import ServiceSchema from "@/components/ServiceSchema";

export const metadata: Metadata = {
  alternates: { canonical: "/industries/home-services" },
  title: "Marketing for Home & Local Services — Unconventional Group",
  description:
    "Be the first call in your area. Marketing for movers, cleaners, landscapers, lawn care, junk removal, pest control and local home services.",
};

const HERO_BG = "/home-services.jpg";

const playbook = [
  "Local SEO + Google Business Profile so you own the 'near me' map results",
  "Ads targeted to your exact service area — no wasted spend on the wrong zip codes",
  "A booking-ready website that turns a quick visit into a scheduled job",
  "A review engine that builds the local trust that wins these jobs",
  "Seasonal campaigns timed to demand — spring lawns, winter moves, and everything between",
];

const understand = [
  {
    title: "Recurring Revenue",
    body: "Many of your jobs repeat. We market for lifetime value, not just the first booking.",
  },
  {
    title: "Local Is Everything",
    body: "We focus your budget tightly on the neighbourhoods you actually serve — density beats reach.",
  },
  {
    title: "Reviews Drive Calls",
    body: "In home services, your star rating is your storefront. We make getting 5-star reviews automatic.",
  },
];

const faqs = [
  {
    q: "How do local service businesses show up first on Google?",
    a: "The 'near me' map pack is won with three things: a dialed-in Google Business Profile, a steady flow of 5-star reviews, and a website that tells Google exactly where you work and what you do. We handle all three, so when someone in your area searches for a mover, cleaner, or landscaper, you're the first call — not the third.",
  },
  {
    q: "Are paid ads worth it for a small local service business?",
    a: "Yes — if the targeting is tight. We run ads aimed at your exact service area, so you're not paying to reach neighbourhoods you'd never drive to. One of our ad clients booked 5 jobs in a single week on just $70 of ad spend. Small budgets work when nothing is wasted.",
  },
  {
    q: "How important are reviews for home services?",
    a: "In home services, your star rating is your storefront. People are letting you into their homes, and reviews are how they decide to trust you. We build review engines that make asking automatic — every happy customer becomes a 5-star review without you chasing anyone.",
  },
  {
    q: "What does marketing for a home services business cost?",
    a: "It depends on your services, your area, and how booked you want to be. We scope it on a free 20-minute call — straight answer, no obligation.",
  },
  {
    q: "Can you handle seasonal businesses like lawn care or moving?",
    a: "That's exactly what we plan for. We time campaigns to demand — spring lawns, summer moves, fall cleanups, winter snow — so you're capturing customers right when they're searching, and marketing for repeat business so the busy season feeds the slow one. We've served 50+ businesses across Canada, many of them seasonal.",
  },
];

export default function HomeServicesPage() {
  return (
    <>
      <ServiceSchema
        name="Marketing for Home & Local Services"
        description="Be the first call in your area. Marketing for movers, cleaners, landscapers, lawn care, junk removal, pest control and local home services."
        path="/industries/home-services"
        serviceType="Marketing services"
      />
      <PageHero
        badge="INDUSTRIES · HOME & LOCAL SERVICES"
        headline="BE THE FIRST CALL IN YOUR NEIGHBOURHOOD."
        subhead="Movers, cleaners, landscapers, junk removal, lawn care — local demand goes to whoever shows up first and looks most trustworthy. We make that you."
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
              HOW WE GROW LOCAL SERVICES.
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

      <FAQ items={faqs} heading="HOME SERVICES QUESTIONS." />

      <CTASection
        bgUrl="/movers.jpg"
        headline="LET'S MAKE YOU THE FIRST CALL."
        subhead="Free 20-minute call. We'll map out how to own your service area and keep the bookings coming."
      />
    </>
  );
}
