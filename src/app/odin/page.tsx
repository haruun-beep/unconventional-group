import type { Metadata } from "next";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import CTASection from "@/components/CTASection";
import OdinAudit from "@/components/OdinAudit";

export const metadata: Metadata = {
  alternates: { canonical: "/odin" },
  title: "Get a Free Website Audit — The Odin System | Unconventional Group",
  description:
    "Our Odin system reads your homepage and scores it on the five things that win or lose customers — mobile, speed, conversion, SEO, and trust. Free, honest, about 30 seconds.",
};

const HERO_BG = "/edmonton-night.jpg";

const checks = [
  { label: "Mobile", body: "Does it actually work on a phone?" },
  { label: "Speed & Modernity", body: "Does it feel current — or dated?" },
  { label: "Conversion", body: "Does it turn visitors into calls?" },
  { label: "SEO", body: "Can Google actually find you?" },
  { label: "Trust", body: "Would a stranger believe you?" },
];

export default function OdinPage() {
  return (
    <>
      {/* Hero + tool in one view */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          backgroundImage: `url('${HERO_BG}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/82" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-bg to-transparent" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 75% 15%, rgba(57,255,20,0.05) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full pt-36 md:pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Pitch */}
            <div>
              <p className="font-display text-neon text-xs tracking-[0.35em] mb-5">
                FREE WEBSITE AUDIT
              </p>
              <h1 className="font-display text-[clamp(2.6rem,6vw,4.5rem)] text-white leading-[0.93] tracking-tight mb-6">
                IS YOUR WEBSITE COSTING YOU CUSTOMERS?
              </h1>
              <div className="w-16 h-[3px] bg-neon mb-7" />
              <p className="text-white/65 text-lg leading-relaxed mb-8 max-w-md">
                Our <span className="text-white font-medium">Odin system</span> reads your homepage
                and scores it on the five things that win or lose customers. Blunt, honest, free —
                in about 30 seconds.
              </p>
              <div className="flex flex-wrap gap-2.5">
                {checks.map((c) => (
                  <span
                    key={c.label}
                    className="border border-neon/30 text-neon/90 text-xs tracking-wide px-3 py-1.5 rounded"
                  >
                    {c.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Tool */}
            <div id="audit" className="scroll-mt-28">
              <OdinAudit />
            </div>
          </div>
        </div>
      </section>

      {/* What Odin checks — one slim strip for context + SEO */}
      <section className="bg-surface py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <AnimateOnScroll>
            <p className="font-display text-xs text-neon tracking-[0.35em] text-center mb-3">
              WHAT THE ODIN SYSTEM CHECKS
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-white text-center mb-12 leading-[0.93]">
              FIVE SCORES. ZERO SUGARCOATING.
            </h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
            {checks.map((c, i) => (
              <AnimateOnScroll key={c.label} delay={i * 0.06}>
                <div className="text-center md:text-left">
                  <p className="font-display text-neon text-3xl mb-2">0{i + 1}</p>
                  <h3 className="font-display text-lg text-white mb-1">{c.label}</h3>
                  <p className="text-white/45 text-sm leading-relaxed">{c.body}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline="PREFER THE HUMANS?"
        subhead="Skip the robot. Free 20-minute call — we look at your website and your business and tell you exactly what we'd do."
        buttonText="Book a Free Call"
        bgUrl="/team-growth.jpg"
      />
    </>
  );
}
