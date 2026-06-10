import type { Metadata } from "next";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";
import PageHero from "@/components/PageHero";
import ServiceSchema from "@/components/ServiceSchema";

export const metadata: Metadata = {
  alternates: { canonical: "/industries/contractors" },
  title: "Marketing for Contractors & Trades — Unconventional Group",
  description:
    "Websites, ads, and lead systems that keep contractors and trades businesses booked. Demolition, renos, electrical, HVAC, landscaping and more.",
};

const HERO_BG = "/contractor.jpg";

const playbook = [
  "A website that makes you look more established than the guy down the street",
  "Google & Meta ads dialed to book real jobs — not just phone-tire-kickers",
  "Local SEO so you show up first for 'near me' and emergency searches",
  "A review engine that turns happy customers into your best salespeople",
  "Photo & video of your actual work so prospects trust you before they call",
];

const understand = [
  {
    title: "We Know Seasonality",
    body: "We plan campaigns around your busy and slow seasons so the calendar stays full year-round.",
  },
  {
    title: "Speed Wins Jobs",
    body: "Whoever answers first usually wins the job. We build funnels that capture and route leads fast.",
  },
  {
    title: "Trust Closes Trades",
    body: "Reviews, real job photos, and a sharp site do the convincing before you ever quote.",
  },
];

const faqs = [
  {
    q: "How do contractors get more jobs from their website?",
    a: "Most contractor websites just sit there. Ours are built to convert: real job photos, reviews up front, clear service areas, and a quote form that's impossible to miss. Pair that with local SEO so you show up for 'near me' and emergency searches, and the site stops being a business card and starts being a salesperson. Most of our websites are delivered in under 5 days on average.",
  },
  {
    q: "Do Facebook ads actually work for trades?",
    a: "Yes — when they're built to book jobs, not collect likes. We've run ads for trades businesses across Canada, and one client booked 5 jobs in a single week on just $70 of ad spend. The key is tight targeting on your service area, creative that shows your actual work, and a fast follow-up system so leads don't go cold.",
  },
  {
    q: "What marketing matters most for a contracting business?",
    a: "Three things win trades work: showing up first when someone searches, looking more established than the competition, and answering fast. That means local SEO and Google Business Profile, a sharp website with real job photos and reviews, and a lead system that routes enquiries to your phone immediately. Everything else is secondary.",
  },
  {
    q: "How much does marketing for contractors cost?",
    a: "It depends on your trade, your service area, and how fast you want to grow — so we don't do one-size-fits-all pricing. Book a free 20-minute call and you'll get a straight answer with no obligation.",
  },
  {
    q: "Do you work with trades businesses outside Edmonton?",
    a: "Yes. We're an Edmonton-based team, but we work with contractors and trades businesses across Canada — demolition, renos, electrical, HVAC, landscaping and more. We've served 50+ businesses, and local-market strategy is the same game wherever you swing a hammer.",
  },
];

export default function ContractorsPage() {
  return (
    <>
      <ServiceSchema
        name="Marketing for Contractors & Trades"
        description="Websites, ads, and lead systems that keep contractors and trades businesses booked. Demolition, renos, electrical, HVAC, landscaping and more."
        path="/industries/contractors"
        serviceType="Marketing services"
      />
      <PageHero
        badge="INDUSTRIES · CONTRACTORS & TRADES"
        headline="MORE JOBS. BETTER JOBS. BOOKED SOLID."
        subhead="From demolition to renos to electrical, we've built the sites, ads, and lead systems that keep trades businesses across Canada booked out. We speak contractor."
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
              HOW WE GROW TRADES BUSINESSES.
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

      <FAQ items={faqs} heading="CONTRACTOR QUESTIONS." />

      <CTASection
        bgUrl="/demolition.jpg"
        headline="LET'S KEEP YOUR CREW BOOKED."
        subhead="Free 20-minute call. Tell us about your trade and we'll show you exactly how we'd grow it."
      />
    </>
  );
}
