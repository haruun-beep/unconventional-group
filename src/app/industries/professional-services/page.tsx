import type { Metadata } from "next";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";
import PageHero from "@/components/PageHero";
import ServiceSchema from "@/components/ServiceSchema";

export const metadata: Metadata = {
  alternates: { canonical: "/industries/professional-services" },
  title: "Marketing for Professional Services — Unconventional Group",
  description:
    "Brand, websites, and visibility that win high-value clients for lawyers, clinics, accountants, consultants, and professional firms.",
};

const HERO_BG = "/professional.jpg";

const playbook = [
  "A credibility-first website that signals you're the safe, expert choice",
  "Local SEO + AI visibility so you're found the moment someone needs you",
  "A reputation system that surfaces your best reviews where they matter",
  "Content that demonstrates real expertise — not generic filler",
  "Lead capture and intake-ready forms that turn visitors into consultations",
];

const understand = [
  {
    title: "Trust Is The Product",
    body: "Clients hand you their legal, financial, or health matters. Everything we build is engineered to earn that trust on sight.",
  },
  {
    title: "High-Value Clients",
    body: "One good client can be worth thousands. We focus on attracting the right ones, not the most.",
  },
  {
    title: "Referrals, Amplified",
    body: "We make your online presence reinforce every word-of-mouth referral so it actually converts.",
  },
];

const faqs = [
  {
    q: "How do professional firms get more clients online?",
    a: "Clients hiring a lawyer, accountant, or clinic are choosing on trust — and they check you out online before they ever call. The firms that win have a credibility-first website, strong reviews where prospects actually look, and content that proves real expertise. We build all three, then add local SEO and AI visibility so you're found the moment someone needs you.",
  },
  {
    q: "What is AI visibility and why should a firm care?",
    a: "More and more people ask ChatGPT, Gemini, or Google's AI answers 'who's the best lawyer near me' instead of scrolling search results. AI visibility — AEO/GEO — is the work of getting your firm recommended in those answers. Very few professional firms are doing it yet, which makes it one of the biggest open opportunities in this space.",
  },
  {
    q: "Does my firm really need a new website?",
    a: "If your site looks dated, your prospects assume your work is too — fair or not. A credibility-first website signals you're the safe, expert choice before the first consultation. And it doesn't have to be a months-long project: most of our websites are delivered in under 5 days on average.",
  },
  {
    q: "How much does marketing for a professional firm cost?",
    a: "It depends on your practice area, your market, and what you need — so we don't quote blind. Book a free 20-minute call and you'll get a straight answer with no obligation.",
  },
  {
    q: "Do you understand compliance-sensitive industries like law and health?",
    a: "Yes. We've served 50+ businesses, including firms where advertising rules and professional standards matter. We build marketing that earns trust without overpromising — no fake claims, no cringe ads, nothing that puts your licence or reputation at risk.",
  },
];

export default function ProfessionalServicesPage() {
  return (
    <>
      <ServiceSchema
        name="Marketing for Professional Services"
        description="Brand, websites, and visibility that win high-value clients for lawyers, clinics, accountants, consultants, and professional firms."
        path="/industries/professional-services"
        serviceType="Marketing services"
      />
      <PageHero
        badge="INDUSTRIES · PROFESSIONAL SERVICES"
        headline="AUTHORITY THAT WINS HIGH-VALUE CLIENTS."
        subhead="Lawyers, clinics, accountants, consultants — your clients choose on trust. We build the brand, website, and visibility that make you the obvious, credible choice."
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
              HOW WE GROW PROFESSIONAL FIRMS.
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

      <FAQ items={faqs} heading="PROFESSIONAL SERVICES QUESTIONS." />

      <CTASection
        bgUrl="/law.jpg"
        headline="LET'S MAKE YOU THE OBVIOUS CHOICE."
        subhead="Free 20-minute call. We'll show you how to turn your reputation into a steady stream of high-value clients."
      />
    </>
  );
}
