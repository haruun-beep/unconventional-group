import type { Metadata } from "next";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import CTASection from "@/components/CTASection";
import OdinAudit from "@/components/OdinAudit";

export const metadata: Metadata = {
  alternates: { canonical: "/odin" },
  title: "Free Website Audit — The Odin System | Unconventional Group",
  description:
    "The Odin system analyzes your homepage across five performance dimensions — mobile, performance, conversion, search visibility, and credibility — and returns a structured scorecard in about 30 seconds.",
};

const HERO_BG = "/edmonton-night.jpg";

const dimensions = [
  { label: "Mobile Experience", body: "Responsive layout and usability across mobile devices." },
  { label: "Performance & Build", body: "Modern stack, page weight, and technical foundation." },
  { label: "Conversion", body: "Calls-to-action, contact paths, and persuasive structure." },
  { label: "Search Visibility", body: "Metadata, heading structure, and schema for organic discovery." },
  { label: "Credibility", body: "Trust signals, proof, and professional presentation." },
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
        <div className="absolute inset-0 bg-black/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-bg to-transparent" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 75% 15%, rgba(57,255,20,0.04) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full pt-36 md:pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Pitch */}
            <div>
              <p className="font-display text-neon text-xs tracking-[0.35em] mb-5">
                THE ODIN SYSTEM
              </p>
              <h1 className="font-display text-[clamp(2.5rem,5.5vw,4.3rem)] text-white leading-[0.95] tracking-tight mb-6">
                A PRECISE READ ON YOUR WEBSITE.
              </h1>
              <div className="w-16 h-[3px] bg-neon mb-7" />
              <p className="text-white/65 text-lg leading-relaxed mb-8 max-w-md">
                The Odin system analyzes your homepage across five performance dimensions and
                returns a structured scorecard in about 30 seconds. Nothing is installed or
                modified — and there&apos;s no obligation.
              </p>
              <div className="flex flex-wrap gap-2.5">
                {dimensions.map((d) => (
                  <span
                    key={d.label}
                    className="border border-white/15 text-white/70 text-xs tracking-wide px-3 py-1.5 rounded"
                  >
                    {d.label}
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

      {/* Methodology — one concise strip for context + SEO */}
      <section className="bg-surface py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <AnimateOnScroll>
            <p className="font-display text-xs text-neon tracking-[0.35em] text-center mb-3">
              THE METHODOLOGY
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-white text-center mb-12 leading-[0.95]">
              FIVE DIMENSIONS. ONE OBJECTIVE SCORE.
            </h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {dimensions.map((d, i) => (
              <AnimateOnScroll key={d.label} delay={i * 0.06}>
                <div className="text-center md:text-left">
                  <p className="font-display text-neon/80 text-2xl mb-2 tracking-wider">0{i + 1}</p>
                  <h3 className="font-display text-base text-white mb-1.5 leading-snug">{d.label}</h3>
                  <p className="text-white/45 text-sm leading-relaxed">{d.body}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline="GO BEYOND THE SCORE."
        subhead="The Odin system reads your homepage in seconds. On a complimentary 20-minute call, our team reviews your full funnel — market, competitors, and conversion path — and outlines exactly what we'd do."
        buttonText="Book a Strategy Call"
        bgUrl="/team-growth.jpg"
      />
    </>
  );
}
