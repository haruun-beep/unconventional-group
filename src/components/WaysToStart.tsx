import Link from "next/link";
import AnimateOnScroll from "./AnimateOnScroll";

type Way = {
  eyebrow: string;
  title: string;
  body: string;
  cta: string;
  href: string;
  external?: boolean;
};

const WAYS: Way[] = [
  {
    eyebrow: "FREE AUDIT",
    title: "Score Your Website",
    body: "Our Odin system reads your homepage and returns a structured scorecard in about 30 seconds.",
    cta: "Run a Free Audit",
    href: "/odin",
  },
  {
    eyebrow: "FIND YOUR SOLUTION",
    title: "Tell Us Your Problem",
    body: "Describe what's slowing you down and we'll match you to the right fit — instantly.",
    cta: "Find My Solution",
    href: "/start",
  },
  {
    eyebrow: "TALK TO US",
    title: "Book a Free Call",
    body: "A complimentary 20-minute call. No pitch — we tell you exactly what we'd do.",
    cta: "Book a Call",
    href: "/book",
  },
];

export default function WaysToStart({
  heading = "THREE WAYS TO START.",
  subhead = "However you like to begin — diagnose, get matched, or just talk to us.",
}: {
  heading?: string;
  subhead?: string;
}) {
  return (
    <section className="bg-surface py-24 px-6 border-t border-white/8">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll>
          <p className="font-display text-xs text-neon tracking-[0.35em] text-center mb-3">
            GET STARTED
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-white text-center mb-4 leading-[0.95]">
            {heading}
          </h2>
          <p className="text-white/40 text-center mb-14 text-sm max-w-md mx-auto leading-relaxed">
            {subhead}
          </p>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-5">
          {WAYS.map((w, i) => (
            <AnimateOnScroll key={w.href} delay={i * 0.1}>
              <Link href={w.href} className="group block h-full">
                <div className="bg-bg border border-white/8 hover:border-neon/30 rounded-xl p-8 h-full flex flex-col transition-colors card-hover-border">
                  <p className="font-display text-neon text-xs tracking-[0.3em] mb-4">{w.eyebrow}</p>
                  <h3 className="font-display text-2xl text-white mb-3 leading-snug">{w.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed flex-1 mb-6">{w.body}</p>
                  <span className="inline-flex items-center gap-1.5 text-neon text-sm font-semibold group-hover:gap-2.5 transition-all duration-200">
                    {w.cta} <span>→</span>
                  </span>
                </div>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
