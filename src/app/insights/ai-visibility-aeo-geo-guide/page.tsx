import type { Metadata } from "next";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  alternates: { canonical: "/insights/ai-visibility-aeo-geo-guide" },
  title: "AI Visibility: Get ChatGPT & Google AI to Recommend You",
  description:
    "How AI assistants like ChatGPT, Gemini, and Google AI Overviews decide which businesses to recommend — and the AEO/GEO playbook to become the answer in your market.",
};

const SITE = "https://www.unconventionalgroup.ca";
const HERO_BG =
  "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1920&q=80";

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AI Visibility: How to Get ChatGPT and Google AI to Recommend Your Business",
  description:
    "A plain-English guide to AEO and GEO for local business owners — how AI assistants pick recommendations, structured data, llms.txt, reviews, and why early movers win.",
  datePublished: "2026-06-09",
  author: { "@type": "Organization", name: "Unconventional Group", url: SITE },
  publisher: { "@id": `${SITE}/#organization` },
  mainEntityOfPage: `${SITE}/insights/ai-visibility-aeo-geo-guide`,
};

const faqItems = [
  {
    q: "What's the difference between AEO, GEO, and regular SEO?",
    a: "SEO gets you ranked in a list of links. AEO (Answer Engine Optimization) and GEO (Generative Engine Optimization) get you named in the answer itself — when ChatGPT, Gemini, or Google's AI Overview responds to 'who's the best plumber near me,' there's no page two. You're either the recommendation or you're invisible. The work overlaps with SEO but adds structured data, entity signals, and content formatted the way AI models quote.",
  },
  {
    q: "How long does it take to show up in AI recommendations?",
    a: "It varies by market and by how much authority you already have. Some signals — structured data, llms.txt, properly formatted content — can be picked up within weeks as models refresh their retrieval sources. Authority signals like reviews and third-party mentions compound over months. The honest answer: slower than ads, faster than traditional SEO used to be, and far easier right now because so few competitors are trying.",
  },
  {
    q: "Can I just pay to be recommended by ChatGPT?",
    a: "No. There's no ad placement inside AI recommendations today — that's exactly why this matters. The recommendation is earned through signals the models trust: consistent business information, structured data, real reviews, and content that directly answers the questions your customers ask. You can't buy the answer, but you can become it.",
  },
];

export default function AiVisibilityGuideArticle() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* Article hero */}
      <section
        className="relative pt-44 md:pt-56 pb-20 px-6 overflow-hidden"
        style={{ backgroundImage: `url('${HERO_BG}')`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-black/78" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg to-transparent" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="font-display text-neon text-xs tracking-[0.35em] mb-5">
            INSIGHTS · AI VISIBILITY
          </p>
          <h1 className="font-display text-[clamp(2.4rem,6vw,4.5rem)] text-white leading-[0.95] tracking-tight mb-5">
            AI VISIBILITY: HOW TO GET CHATGPT AND GOOGLE AI TO RECOMMEND YOUR BUSINESS
          </h1>
          <div className="w-16 h-[3px] bg-neon mb-6 glow-line" />
          <p className="text-white/45 text-sm tracking-wide">
            June 9, 2026 · 8 min read · Unconventional Group
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="bg-bg py-20 px-6">
        <div className="max-w-3xl mx-auto flex flex-col gap-6 text-white/70 text-lg leading-relaxed">
          <AnimateOnScroll>
            <p>
              Your next customer might never see your website in a list of search results. They ask
              ChatGPT &quot;who should I call for a kitchen reno in Edmonton?&quot; or they Google it
              and read the AI Overview at the top — and a handful of businesses get named. Everyone
              else doesn&apos;t exist. This is what AEO (Answer Engine Optimization) and GEO
              (Generative Engine Optimization) are about: making sure that when the AI answers,
              the answer is you.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <h2 className="font-display text-3xl md:text-4xl text-white mt-8 mb-2 leading-tight">
              HOW AI ASSISTANTS PICK THEIR RECOMMENDATIONS
            </h2>
            <p>
              AI assistants don&apos;t rank pages the way old search did. When someone asks for a
              recommendation, the model pulls from two places: what it learned in training (the
              general reputation of businesses and brands across the web) and what it retrieves
              live (search results, business listings, review platforms, your website). Then it
              synthesizes a confident answer naming two or three options.
            </p>
            <p className="mt-3">
              That means the question isn&apos;t &quot;how do I rank #1?&quot; — it&apos;s
              &quot;does the machine know who I am, what I do, where I do it, and why I&apos;m
              trustworthy?&quot; Every tactic below feeds one of those four signals.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <h2 className="font-display text-3xl md:text-4xl text-white mt-8 mb-2 leading-tight">
              STRUCTURED DATA: SPEAK MACHINE
            </h2>
            <p>
              Schema markup (JSON-LD) is a layer of code on your website that tells machines, in
              their own language, exactly what your business is: name, services, service area,
              hours, reviews, FAQs. Humans never see it. AI systems and search crawlers rely on it.
            </p>
            <p className="mt-3">
              For a local business, the priorities are LocalBusiness or Organization schema,
              Service schema for each thing you sell, and FAQPage schema on questions your
              customers actually ask. When an AI retrieves your site and finds clean structured
              data, it doesn&apos;t have to guess what you do — and models recommend what
              they&apos;re certain about.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <h2 className="font-display text-3xl md:text-4xl text-white mt-8 mb-2 leading-tight">
              LLMS.TXT: THE NEW FRONT DOOR
            </h2>
            <p>
              <code className="text-neon text-base">llms.txt</code> is an emerging standard — a
              plain-text file on your site written specifically for AI models. Think of it as a
              robots.txt for the AI era: a concise, structured summary of who you are, what you
              offer, and where to find the details, designed to be read by a language model instead
              of a human.
            </p>
            <p className="mt-3">
              Is it guaranteed that every AI reads it? No — the standard is young. But it costs
              almost nothing to implement, several AI crawlers already look for it, and being early
              on machine-readable standards is exactly how businesses got ahead in the first SEO
              era. We ship one with every site we build.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <h2 className="font-display text-3xl md:text-4xl text-white mt-8 mb-2 leading-tight">
              REVIEWS AND CITATIONS: WHAT THE MACHINES TRUST
            </h2>
            <p>
              AI models are skeptical of what you say about yourself and credulous about what
              others say about you. Reviews on Google, third-party directories, local news
              mentions, industry listings — these are the citations that convince a model
              you&apos;re a safe recommendation.
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-3 mt-3">
              <li>
                <strong className="text-white">Volume and recency of Google reviews</strong> —
                a steady stream beats a burst from 2023.
              </li>
              <li>
                <strong className="text-white">Consistency</strong> — your name, address, and phone
                number should be identical everywhere. Conflicting data makes machines hedge, and
                hedging machines don&apos;t name you.
              </li>
              <li>
                <strong className="text-white">Specific review content</strong> — &quot;great
                service&quot; is weak; &quot;rebuilt our deck in Spruce Grove in three days&quot;
                teaches the model what you do and where.
              </li>
            </ul>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <h2 className="font-display text-3xl md:text-4xl text-white mt-8 mb-2 leading-tight">
              WRITE CONTENT THE AI CAN QUOTE
            </h2>
            <p>
              Language models love content that answers a question directly, in the first sentence,
              and then supports it. Pages built like this get quoted; pages built like brochures get
              skipped. The formats that work:
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-3 mt-3">
              <li>Question-shaped headings that match what customers actually ask.</li>
              <li>A direct answer in the first one or two sentences under each heading.</li>
              <li>FAQ sections with real questions — not marketing copy disguised as questions.</li>
              <li>Concrete specifics: service areas, timelines, processes. Vague content gives the model nothing to cite.</li>
            </ul>
            <p className="mt-3">
              Notice that this is also just good writing for humans. AEO doesn&apos;t fight SEO —
              it&apos;s the same honesty, structured better.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <h2 className="font-display text-3xl md:text-4xl text-white mt-8 mb-2 leading-tight">
              WHY EARLY MOVERS WIN
            </h2>
            <p>
              Here&apos;s the part that should get your attention: almost no local business is doing
              any of this yet. In traditional SEO, you&apos;re fighting fifteen years of entrenched
              competitors. In AI visibility, the field is nearly empty — which means modest,
              consistent effort right now can make you the default answer in your category before
              your competitors know the game exists.
            </p>
            <p className="mt-3">
              And the advantage compounds. Once a model consistently associates your name with your
              service and your city — through structured data, citations, and quotable content —
              that association keeps working as AI search grows. You&apos;re not renting attention
              like ads. You&apos;re becoming the answer.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <h2 className="font-display text-3xl md:text-4xl text-white mt-8 mb-2 leading-tight">
              WHERE TO START
            </h2>
            <p>
              Ask ChatGPT and Google who they recommend in your category and city, today. If
              it&apos;s not you, that&apos;s your baseline. Then: clean up your business listings,
              add structured data and an llms.txt to your site, build a steady review habit, and
              restructure your key pages to answer questions directly.
            </p>
            <p>
              Or have us do it. This is exactly what our{" "}
              <Link href="/ai-visibility" className="text-neon hover:underline">AI visibility
              service</Link> covers — and it works best on a fast, well-structured{" "}
              <Link href="/websites" className="text-neon hover:underline">website</Link> built to
              convert the traffic it earns.{" "}
              <Link href="/book" className="text-neon hover:underline">Book a free 20-minute
              call</Link> and we&apos;ll show you what the AI says about your category right now.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <FAQ items={faqItems} heading="AI VISIBILITY FAQ" />

      <CTASection
        bgUrl="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1920&q=80"
        headline="FIND OUT WHAT THE AI SAYS ABOUT YOU."
        subhead="Free 20-minute call. We'll show you what ChatGPT and Google AI recommend in your category today — and how we'd make it you."
      />
    </>
  );
}
