import AnimateOnScroll from "./AnimateOnScroll";

const faqs = [
  {
    q: "What does Unconventional Group do?",
    a: "We're an Edmonton-based marketing & sales team. We build websites, run social media, shoot video and photo, and manage Facebook & Instagram ads — plus revenue-focused growth systems like lead generation, funnels & conversion optimization, AI visibility, and e-commerce growth. Everything is done in-house.",
  },
  {
    q: "Where are you located and who do you work with?",
    a: "We're based in Edmonton, Alberta and work with businesses across Canada. We've served 50+ companies in contracting and trades, professional services, home and local services, real estate, and more.",
  },
  {
    q: "How much does it cost?",
    a: "It depends on what you need — every business is different. We scope pricing on a free 20-minute call where you'll get a straight answer with no obligation. You can book that call any time at unconventionalgroup.ca/book.",
  },
  {
    q: "How fast can you build a website?",
    a: "Most websites are delivered in under 5 days on average. Larger custom builds and online stores take a bit longer, but we move fast and keep you in the loop the whole way.",
  },
  {
    q: "What is AI visibility (AEO / GEO)?",
    a: "AI visibility — also called Answer Engine Optimization (AEO) or Generative Engine Optimization (GEO) — is the work of getting your business recommended by AI tools like ChatGPT, Gemini, and Google's AI answers when a customer asks who to hire. It's the newest way to get found, and very few local businesses are doing it yet.",
  },
  {
    q: "Are you a marketing agency?",
    a: "We call ourselves a team, not an agency. There's no outsourcing and no revolving door of freelancers — you talk to us directly, and the people who pitch you are the people who do the work.",
  },
];

export type FAQItem = { q: string; a: string };

export default function FAQ({
  items = faqs,
  heading = "QUESTIONS, ANSWERED.",
}: {
  items?: FAQItem[];
  heading?: string;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section className="bg-bg py-28 px-6 border-t border-white/8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-3xl mx-auto">
        <AnimateOnScroll>
          <p className="font-display text-xs text-neon tracking-[0.35em] text-center mb-3">FAQ</p>
          <h2 className="font-display text-5xl md:text-6xl text-white text-center mb-14 leading-[0.93]">
            {heading}
          </h2>
        </AnimateOnScroll>

        <div className="flex flex-col gap-3">
          {items.map((f, i) => (
            <AnimateOnScroll key={i} delay={(i % 3) * 0.06}>
              <details className="group bg-surface border border-white/8 rounded-xl px-6 py-5 hover:border-neon/25 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="font-display text-xl text-white pr-4">{f.q}</h3>
                  <span className="text-neon text-2xl leading-none shrink-0 transition-transform duration-200 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="text-white/60 text-[15px] leading-relaxed mt-4">{f.a}</p>
              </details>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
