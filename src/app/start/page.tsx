import type { Metadata } from "next";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import SolutionFinder from "@/components/SolutionFinder";

export const metadata: Metadata = {
  alternates: { canonical: "/start" },
  title: "Find Your Solution — Unconventional Group",
  description:
    "Tell us what's slowing your business down and we'll match you to the right solution in about 30 seconds — websites, lead generation, ads, automation, and more. Free, no obligation.",
};

const HERO_BG = "/edmonton-night.jpg";

export default function StartPage() {
  return (
    <>
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
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Pitch */}
            <div className="lg:pt-8">
              <p className="font-display text-neon text-xs tracking-[0.35em] mb-5">
                FIND YOUR SOLUTION
              </p>
              <h1 className="font-display text-[clamp(2.5rem,5.5vw,4.3rem)] text-white leading-[0.95] tracking-tight mb-6">
                TELL US WHAT&apos;S SLOWING YOU DOWN.
              </h1>
              <div className="w-16 h-[3px] bg-neon mb-7" />
              <p className="text-white/65 text-lg leading-relaxed mb-8 max-w-md">
                Answer a few quick questions and we&apos;ll match you to the right fit — whether
                that&apos;s a new website, more leads, better ads, or automating the repetitive work
                that&apos;s eating your time. About 30 seconds, no obligation.
              </p>
              <ul className="flex flex-col gap-3">
                {[
                  "Matched to specific services, not a generic pitch",
                  "Repetitive task eating your time? We'll flag automation.",
                  "Our team follows up to map it out with you",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/55 text-[15px]">
                    <span className="text-neon text-sm mt-0.5 shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tool */}
            <div>
              <SolutionFinder />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <AnimateOnScroll>
            <p className="text-white/45 text-sm leading-relaxed">
              Prefer to just talk it through? Skip the form and{" "}
              <a href="/book" className="text-neon hover:underline">
                book a free 20-minute call
              </a>{" "}
              — same straight answers, no obligation.
            </p>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
