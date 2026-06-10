import type { Metadata } from "next";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import ServiceSchema from "@/components/ServiceSchema";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  alternates: { canonical: "/videography" },
  title: "Videography & Photography — Unconventional Group",
  description:
    "Premium brand films, reels, and photography for Canadian businesses. We become your content team — capturing the footage your brand deserves.",
};

const HERO_BG = "/excavator.jpg";

const tags = [
  "Brand Films",
  "Promo Reels",
  "Social Content",
  "Team Photography",
  "Product Shoots",
  "Event Coverage",
  "Headshots",
  "Behind the Scenes",
];

const steps = [
  {
    num: "01",
    title: "We Plan the Shoot",
    body: "We work through what you need — content calendar, formats, goals. No showing up and winging it.",
  },
  {
    num: "02",
    title: "We Show Up and Shoot",
    body: "Our team handles everything on shoot day. You just show up and look like you own the place.",
  },
  {
    num: "03",
    title: "You Get Edited, Ready-to-Use Files",
    body: "Colour graded, cut for every format, delivered ready to post. Not raw footage you have to figure out.",
  },
];

const faqs = [
  {
    q: "What kind of video and photo content do you shoot?",
    a: "Brand films, promo reels, social content, team photography, product shoots, event coverage, headshots, and behind-the-scenes footage. If your brand needs it on camera, we shoot it — and we deliver it edited, colour graded, and cut for every format.",
  },
  {
    q: "How does a shoot work?",
    a: "Three steps. We plan the shoot with you — content calendar, formats, goals. Our team shows up and handles everything on shoot day. Then you get edited, ready-to-post files. No raw footage dumped in your lap to figure out yourself.",
  },
  {
    q: "Do I get the raw footage or just the edits?",
    a: "You get finished, ready-to-use files — colour graded and cut for every format you need, from Instagram reels to your website. If you want the raw files too, just ask; we're not in the business of holding your content hostage.",
  },
  {
    q: "How much does videography cost?",
    a: "It depends on scope — a headshot session and an ongoing monthly content pipeline are very different projects. Book the free 20-minute call at unconventionalgroup.ca/book and you'll get a straight answer, no obligation.",
  },
  {
    q: "Do you only do one-off shoots, or ongoing content?",
    a: "Both, but the real value is the ongoing pipeline. One-and-done shoots run out fast — we build a recurring content system that keeps your feed full month after month. We're Edmonton-based and shoot for businesses across Canada.",
  },
];

export default function VideographyPage() {
  return (
    <>
      <ServiceSchema
        name="Videography & Photography"
        description="Premium brand films, reels, and photography for Canadian businesses. We become your content team — capturing the footage your brand deserves."
        path="/videography"
      />
      <PageHero
        badge="VIDEO & PHOTO"
        headline="YOUR PHONE CAMERA ISN'T A BRAND STRATEGY."
        subhead="We become your content team — capturing and crafting the footage that makes your brand look the way it deserves to. Reels, brand films, product shots, headshots, delivered ready to post."
        bgUrl={HERO_BG}
        cta={{ label: "Book a Free Call", href: "/book" }}
        secondaryCta={false}
      />

      {/* What we shoot */}
      <section className="bg-surface py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll>
            <p className="font-display text-xs text-neon tracking-[0.35em] text-center mb-3">
              CAPABILITIES
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-white text-center mb-12 leading-[0.93]">
              WHAT WE SHOOT
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <div className="flex flex-wrap gap-3 justify-center">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-neon/40 text-neon font-display text-sm tracking-[0.2em] px-5 py-2.5 rounded-full hover:bg-neon/8 transition-colors cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* How it works — solid */}
      <section className="relative bg-bg py-28 px-6 overflow-hidden border-t border-white/8">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(57,255,20,0.05) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto">
          <AnimateOnScroll>
            <p className="font-display text-xs text-neon tracking-[0.35em] text-center mb-3">
              PROCESS
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-white text-center mb-14 leading-[0.93]">
              HOW IT WORKS
            </h2>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-3 gap-5">
            {steps.map((step, i) => (
              <AnimateOnScroll key={step.num} delay={i * 0.12}>
                <div className="bg-white/5 border border-white/8 rounded-xl p-8 hover:border-neon/25 transition-colors h-full">
                  <p className="font-display text-5xl text-neon/20 mb-3">{step.num}</p>
                  <h3 className="font-display text-2xl text-white mb-3 leading-snug">{step.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{step.body}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Premium positioning */}
      <section className="bg-bg py-28 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <AnimateOnScroll>
            <p className="font-display text-xs text-neon tracking-[0.35em] mb-4">THE STANDARD</p>
            <h2 className="font-display text-4xl md:text-6xl text-white mb-6 leading-[0.93]">
              EVERY FRAME, ON BRAND.
            </h2>
            <div className="w-14 h-[3px] bg-neon mx-auto mb-8 glow-line" />
            <p className="text-white/55 text-lg leading-relaxed">
              We don&apos;t do stock-footage filler or one-and-done shoots. We build an ongoing
              content pipeline that keeps your feed full and your brand looking like it belongs
              at the top — because it does. Quality you can feel in every cut.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <FAQ items={faqs} heading="VIDEO & PHOTO QUESTIONS." />

      <CTASection
        bgUrl="/concrete.jpg"
        headline="READY TO LOOK LIKE YOU BELONG AT THE TOP?"
        subhead="Free 20-minute call. Tell us about your brand and we'll show you what your content could look like."
      />
    </>
  );
}
