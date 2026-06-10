import type { Metadata } from "next";
import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  alternates: { canonical: "/subsidiaries" },
  title: "Subsidiaries — Unconventional Group",
  description:
    "The Unconventional Group family of companies. Bespoke Automations (AI infrastructure) and Zentra Housing (student housing platform).",
};

const HERO_BG =
  "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1920&q=80";

function screenshotUrl(url: string) {
  return `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=1280&h=800`;
}

const subsidiaries = [
  {
    name: "Bespoke Automations",
    tagline: "AI INFRASTRUCTURE",
    headline: "The AI systems that run a business while it scales.",
    body:
      "Bespoke Automations designs, builds, and runs the workflow systems behind growing operations — automated quoting, client intake, scheduling, follow-ups, and reporting. The repetitive layer, handled, so teams can focus on the work that actually needs them.",
    url: "https://bespokeautomations.ca",
    display: "bespokeautomations.ca",
    stats: [
      { value: "10+", label: "Custom workflows built" },
      { value: "100%", label: "Built & managed in-house" },
    ],
  },
  {
    name: "Zentra Housing",
    tagline: "STUDENT HOUSING",
    headline: "Safe, simple, move-in-ready rooms for students.",
    body:
      "Zentra Housing is a prelaunch student housing platform for Edmonton — furnished rooms, flexible terms, and verified homes near every campus. Launching to make finding a safe place to live simple, transparent, and student-first.",
    url: "https://zentrahousing.ca",
    display: "zentrahousing.ca",
    stats: [
      { value: "Fall 2026", label: "Launching" },
      { value: "Edmonton", label: "First market" },
    ],
  },
];

export default function SubsidiariesPage() {
  return (
    <>
      <PageHero
        badge="THE UNCONVENTIONAL GROUP"
        headline="TWO COMPANIES. ONE STANDARD."
        subhead="We started in marketing and sales. Today, Unconventional Group builds and backs specialized companies across industries — each held to the same bar for quality, ownership, and follow-through."
        bgUrl={HERO_BG}
        secondaryCta={false}
      />

      {/* Subsidiary feature rows */}
      <section className="bg-bg py-28 px-6">
        <div className="max-w-7xl mx-auto flex flex-col gap-28">
          {subsidiaries.map((sub, i) => (
            <div
              key={sub.name}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Screenshot */}
              <AnimateOnScroll direction={i % 2 === 1 ? "right" : "left"}>
                <a
                  href={sub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block relative rounded-2xl overflow-hidden border border-white/8 hover:border-neon/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(57,255,20,0.1)]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-surface">
                    <Image
                      src={screenshotUrl(sub.url)}
                      alt={`${sub.name} website`}
                      fill
                      unoptimized
                      className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-neon/0 group-hover:bg-neon/10 transition-colors duration-300" />
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="bg-neon text-bg font-display text-xs tracking-widest px-3 py-1 rounded">
                        VISIT ↗
                      </span>
                    </div>
                  </div>
                </a>
              </AnimateOnScroll>

              {/* Text */}
              <AnimateOnScroll direction={i % 2 === 1 ? "left" : "right"}>
                <p className="font-display text-xs text-neon tracking-[0.35em] mb-4">
                  {sub.tagline}
                </p>
                <h2 className="font-display text-4xl md:text-5xl text-white leading-[0.93] mb-5">
                  {sub.name.toUpperCase()}
                </h2>
                <div className="w-12 h-[3px] bg-neon mb-6 glow-line" />
                <p className="text-white/45 text-lg italic mb-4 leading-snug">{sub.headline}</p>
                <p className="text-white/60 text-base leading-relaxed mb-8">{sub.body}</p>

                <div className="flex gap-10 mb-8">
                  {sub.stats.map((s) => (
                    <div key={s.label}>
                      <p className="font-display text-3xl text-neon glow">{s.value}</p>
                      <p className="text-white/40 text-xs mt-0.5">{s.label}</p>
                    </div>
                  ))}
                </div>

                <a
                  href={sub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border border-neon text-neon font-bold px-7 py-3 rounded text-sm tracking-wide hover:bg-neon hover:text-bg transition-all duration-200"
                >
                  Visit {sub.display} ↗
                </a>
              </AnimateOnScroll>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        bgUrl="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1920&q=80"
        headline="WANT TO BUILD SOMETHING WITH US?"
        subhead="Whether it's a project for your business or a venture of your own — let's talk about what we could build together."
      />
    </>
  );
}
