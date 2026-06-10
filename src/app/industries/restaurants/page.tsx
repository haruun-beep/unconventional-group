import type { Metadata } from "next";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";
import PageHero from "@/components/PageHero";
import ServiceSchema from "@/components/ServiceSchema";

export const metadata: Metadata = {
  alternates: { canonical: "/industries/restaurants" },
  title: "Marketing for Restaurants — Unconventional Group",
  description:
    "Social media, videography, and websites for restaurants, cafes, and food businesses. Make them hungry before they arrive — and keep your tables full.",
};

const HERO_BG =
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80";
const CTA_BG =
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1920&q=80";

const playbook = [
  "Scroll-stopping food photography & video that makes people hungry",
  "Social media that keeps your restaurant top-of-mind between visits",
  "A website with your menu, hours, and reservations — simple and always current",
  "Local SEO so you show up first for “restaurants near me”",
  "A review engine that turns great meals into 5-star reviews",
];

const understand = [
  {
    title: "People Eat With Their Eyes",
    body: "Great food deserves great content. We shoot your dishes and your space so they look as good online as they taste in person.",
  },
  {
    title: "Consistency Fills Tables",
    body: "Staying visible on social is what brings regulars back and new guests through the door — we keep your feed alive so you don't have to.",
  },
  {
    title: "Easy To Find, Easy To Book",
    body: "Menu, hours, and reservations one tap away on any phone — so a craving turns into a booking, not a bounce.",
  },
];

const faqs = [
  {
    q: "Does social media actually bring people into a restaurant?",
    a: "It's the single biggest driver for restaurants right now. People decide where to eat by scrolling — if your food looks incredible on Instagram and TikTok, you're on the shortlist before they're even hungry. We shoot the content and run the accounts so your feed stays alive without you touching it.",
  },
  {
    q: "Why does food video and photography matter so much?",
    a: "People eat with their eyes. Phone photos of your dishes undersell food you've worked hard on, and great content is the difference between a scroll-past and a 'we have to go here.' We shoot your dishes and your space professionally, so they look as good online as they taste in person.",
  },
  {
    q: "What should a restaurant website actually do?",
    a: "Three jobs: menu, hours, reservations — one tap away on any phone. A craving should turn into a booking, not a bounce. We keep it simple, fast, and always current, and most of our websites are delivered in under 5 days on average.",
  },
  {
    q: "How much does restaurant marketing cost?",
    a: "It depends on what you need — content, social, a website, or all of it. We scope it on a free 20-minute call where you get a straight answer with no obligation.",
  },
  {
    q: "Do you work with cafes and food businesses outside Edmonton?",
    a: "Yes. We're an Edmonton-based team and we work with restaurants, cafes, and food businesses across Canada. We've served 50+ businesses, and content and social are things we can run for you wherever your kitchen is.",
  },
];

export default function RestaurantsPage() {
  return (
    <>
      <ServiceSchema
        name="Marketing for Restaurants"
        description="Social media, videography, and websites for restaurants, cafes, and food businesses. Make them hungry before they arrive — and keep your tables full."
        path="/industries/restaurants"
        serviceType="Marketing services"
      />
      <PageHero
        badge="INDUSTRIES · RESTAURANTS"
        headline="MAKE THEM HUNGRY BEFORE THEY ARRIVE."
        subhead="Social media, videography, and websites built for restaurants and cafes. We make your food and your space impossible to scroll past — and keep your tables full."
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
              HOW WE GROW RESTAURANTS.
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

      <FAQ items={faqs} heading="RESTAURANT QUESTIONS." />

      <CTASection
        bgUrl={CTA_BG}
        headline="LET'S FILL YOUR TABLES."
        subhead="Free 20-minute call. Tell us about your restaurant and we'll show you how we'd pack the place."
      />
    </>
  );
}
