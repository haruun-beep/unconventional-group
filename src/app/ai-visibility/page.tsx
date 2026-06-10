import type { Metadata } from "next";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import ServiceSchema from "@/components/ServiceSchema";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  alternates: { canonical: "/ai-visibility" },
  title: "AI Visibility (AEO/GEO) — Unconventional Group",
  description:
    "Get your business recommended by ChatGPT, Claude, Gemini and Google AI Overviews. Answer Engine & Generative Engine Optimization from Unconventional Group.",
};

const HERO_BG =
  "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1920&q=80";

const work = [
  {
    num: "01",
    title: "AI-Readable Content",
    body: "We structure your content the way AI models actually read and quote it — clear answers, real expertise, the formats that get surfaced.",
  },
  {
    num: "02",
    title: "Structured Data & Entities",
    body: "Schema, knowledge-graph signals, and citations that tell the machines exactly who you are, what you do, and why you're the answer.",
  },
  {
    num: "03",
    title: "Authority & Mentions",
    body: "We build the third-party signals — reviews, listings, mentions — that AI systems trust when deciding who to recommend.",
  },
  {
    num: "04",
    title: "Monitoring & Tuning",
    body: "We track what ChatGPT, Gemini, and Google AI say when someone asks about your category — and keep tuning until it's you.",
  },
];

const why = [
  {
    title: "Search Has Changed",
    body: "More people now ask ChatGPT or read Google's AI answer instead of scrolling ten blue links. If you're not in the answer, you're invisible.",
  },
  {
    title: "First-Mover Advantage",
    body: "Almost no local business is optimizing for this yet. Move now and you own the recommendation before your competitors know it exists.",
  },
  {
    title: "Compounds Over Time",
    body: "The authority we build keeps paying off as AI search grows — you're not renting attention, you're becoming the default answer.",
  },
];

const faqs = [
  {
    q: "What is AI visibility (AEO / GEO)?",
    a: "Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO) are the work of getting your business recommended when customers ask ChatGPT, Gemini, Claude, or Google's AI answers who to hire. More people now ask an AI instead of scrolling ten blue links — if you're not in the answer, you're invisible.",
  },
  {
    q: "How is AI visibility different from SEO?",
    a: "SEO gets you ranked in a list of links. AI visibility gets you named in the answer itself. There's overlap — structured data, authority, reviews — but AI systems read, quote, and recommend differently than search crawlers rank. We optimize for both, but this work targets the answer, not the list.",
  },
  {
    q: "What does the work actually involve?",
    a: "Four things: structuring your content the way AI models read and quote it, building schema and knowledge-graph signals that tell the machines exactly who you are, growing the third-party reviews and mentions AI systems trust, and monitoring what ChatGPT, Gemini, and Google AI actually say about your category — then tuning until it's you.",
  },
  {
    q: "How long until AI tools start recommending my business?",
    a: "It builds over time. AI models pull from authority signals that take weeks to months to accumulate — but unlike ads, the work compounds. Almost no local business is doing this yet, so moving early means you own the recommendation before your competitors know it exists.",
  },
  {
    q: "How much does AI visibility cost?",
    a: "It depends on scope — your market, your category, and where you're starting from. Book the free 20-minute call at unconventionalgroup.ca/book — we'll show you what AI says about your category today and give you a straight answer on cost, no obligation.",
  },
];

export default function AiVisibilityPage() {
  return (
    <>
      <ServiceSchema
        name="AI Visibility (AEO / GEO)"
        description="Get your business recommended by ChatGPT, Claude, Gemini and Google AI Overviews. Answer Engine & Generative Engine Optimization from Unconventional Group."
        path="/ai-visibility"
      />
      <PageHero
        badge="AI VISIBILITY · AEO / GEO"
        headline="GET RECOMMENDED BY CHATGPT & GOOGLE AI."
        subhead="When your customers ask ChatGPT, Gemini, or Google's AI 'who's the best in Edmonton for this?' — we make sure the answer is you. The newest, most unconventional way to get found."
        bgUrl={HERO_BG}
        cta={{ label: "Book a Free Call", href: "/book" }}
        secondaryCta={false}
      />

      {/* What we do — solid */}
      <section className="bg-surface py-28 px-6 border-t border-white/8">
        <div className="max-w-5xl mx-auto">
          <AnimateOnScroll>
            <p className="font-display text-xs text-neon tracking-[0.35em] text-center mb-3">
              WHAT WE DO
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-white text-center mb-14 leading-[0.93]">
              ENGINEERED TO BE THE ANSWER.
            </h2>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-2 gap-5">
            {work.map((w, i) => (
              <AnimateOnScroll key={w.num} delay={i * 0.1}>
                <div className="bg-bg border border-white/8 rounded-xl p-8 h-full hover:border-neon/25 transition-colors">
                  <p className="font-display text-5xl text-neon/20 mb-3">{w.num}</p>
                  <h3 className="font-display text-2xl text-white mb-3 leading-snug">{w.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{w.body}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Why now — solid */}
      <section className="bg-bg py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <AnimateOnScroll>
            <h2 className="font-display text-4xl md:text-5xl text-white text-center mb-14 leading-[0.93]">
              WHY THIS MATTERS NOW.
            </h2>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-3 gap-5">
            {why.map((w, i) => (
              <AnimateOnScroll key={w.title} delay={i * 0.1}>
                <div className="bg-surface border border-white/8 rounded-xl p-7 h-full card-hover-border">
                  <div className="w-10 h-[3px] bg-neon mb-5 glow-line" />
                  <h3 className="font-display text-xl text-neon mb-3">{w.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{w.body}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <FAQ items={faqs} heading="AI VISIBILITY QUESTIONS." />

      <CTASection
        bgUrl="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1920&q=80"
        headline="BE THE NAME THE AI RECOMMENDS."
        subhead="Free 20-minute call. We'll show you what AI says about your category today — and how we'd make it say you."
      />
    </>
  );
}
