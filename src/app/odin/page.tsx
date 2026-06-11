import type { Metadata } from "next";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import OdinAudit from "@/components/OdinAudit";

export const metadata: Metadata = {
  alternates: { canonical: "/odin" },
  title: "Odin — Free AI Website Audit | Unconventional Group",
  description:
    "Meet Odin, our AI website auditor. Drop in your URL and get a blunt, honest scorecard of your website in 30 seconds — mobile, speed, conversion, SEO, and trust. Free.",
};

const HERO_BG = "/edmonton-night.jpg";

const funFacts = [
  {
    icon: "🐦‍⬛",
    title: "Two Ravens, Zero Excuses",
    body: "The original Odin sent ravens out every morning to report back everything happening in the world. Ours sends requests. Same energy, better uptime.",
  },
  {
    icon: "👁️",
    title: "Both Eyes Intact",
    body: "Norse Odin traded an eye for wisdom. Our Odin kept both and got an API key instead. Honestly, the better deal.",
  },
  {
    icon: "🕐",
    title: "Always On",
    body: "He doesn't sleep, doesn't take lunch, and has never once said \"let's circle back.\" Your audit runs the moment you ask for it.",
  },
  {
    icon: "🎯",
    title: "Brutally Fair",
    body: "If your site is good, he'll say so and send you on your way. If it's costing you jobs, he'll show you exactly where. No manufactured problems.",
  },
];

const steps = [
  {
    num: "01",
    title: "Drop In Your URL",
    body: "Your website address and your email. That's it. Nothing installed, nothing changed on your site.",
  },
  {
    num: "02",
    title: "The Ravens Fly",
    body: "Odin reads your live homepage and scores it on the five things that decide whether visitors become customers: mobile, speed, conversion, SEO, and trust.",
  },
  {
    num: "03",
    title: "Get the Verdict",
    body: "A blunt scorecard in about 30 seconds — what's working, what's costing you business, and whether it's worth a conversation with the humans.",
  },
];

export default function OdinPage() {
  return (
    <>
      <PageHero
        badge="MEET THE NEWEST MEMBER OF THE TEAM"
        headline="ODIN SEES EVERYTHING. INCLUDING YOUR WEBSITE."
        subhead="Our AI website auditor reads your homepage and tells you — bluntly, honestly, for free — what's winning you customers and what's quietly costing you jobs. In about 30 seconds."
        bgUrl={HERO_BG}
        cta={{ label: "Get Your Free Audit ↓", href: "#audit" }}
        secondaryCta={false}
        overlayStrength="heavy"
      />

      {/* The bio */}
      <section className="bg-bg py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll>
            <p className="font-display text-xs text-neon tracking-[0.35em] mb-3">WHO IS ODIN?</p>
            <h2 className="font-display text-4xl md:text-5xl text-white mb-8 leading-[0.93]">
              HEAD OF WEBSITE INTELLIGENCE.
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <div className="flex flex-col gap-5 text-white/55 text-lg leading-relaxed">
              <p>
                Odin is the newest member of the team — and the only one who works around the
                clock, never bills a minute, and has read more business websites than any human
                alive. We named him after the Norse god whose ravens flew out every morning and
                reported back everything they saw. That&apos;s his whole job: his ravens visit
                your website, report back, and he scores what they find.
              </p>
              <p>
                He uses the exact same five-point rubric we use internally before we take on any
                website project: does it work on a phone, does it feel current, does it turn
                visitors into calls, can Google find it, and would a stranger trust it. The
                difference is he does in 30 seconds what used to take us an afternoon.
              </p>
              <p>
                Fair warning: he&apos;s honest to a fault. If your website is already strong,
                he&apos;ll tell you and you can get on with your day. Just don&apos;t invite him
                to the office party — he&apos;s more of a homebody.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Fun facts */}
      <section className="bg-surface py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-5">
            {funFacts.map((f, i) => (
              <AnimateOnScroll key={f.title} delay={i * 0.08}>
                <div className="bg-bg border border-white/8 rounded-xl p-7 h-full hover:border-neon/25 transition-colors">
                  <div className="text-3xl mb-4">{f.icon}</div>
                  <h3 className="font-display text-xl text-white mb-2">{f.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{f.body}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-bg py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <AnimateOnScroll>
            <p className="font-display text-xs text-neon tracking-[0.35em] text-center mb-3">HOW IT WORKS</p>
            <h2 className="font-display text-4xl md:text-5xl text-white text-center mb-14 leading-[0.93]">
              THIRTY SECONDS. FIVE SCORES. ZERO SUGARCOATING.
            </h2>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <AnimateOnScroll key={step.num} delay={i * 0.12}>
                <div className="relative">
                  <p className="font-display text-6xl text-neon/15 mb-3">{step.num}</p>
                  <h3 className="font-display text-xl text-white mb-2 leading-snug">{step.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{step.body}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* The tool */}
      <section id="audit" className="bg-surface py-24 px-6 scroll-mt-28">
        <div className="max-w-3xl mx-auto">
          <AnimateOnScroll>
            <p className="font-display text-xs text-neon tracking-[0.35em] text-center mb-3">THE FREE AUDIT</p>
            <h2 className="font-display text-4xl md:text-5xl text-white text-center mb-4 leading-[0.93]">
              RELEASE THE RAVENS.
            </h2>
            <p className="text-white/50 text-center mb-12 max-w-xl mx-auto leading-relaxed">
              Enter your website and your email. Odin reads your live homepage and hands you the
              scorecard right here on the page.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <OdinAudit />
          </AnimateOnScroll>
        </div>
      </section>

      <CTASection
        headline="PREFER THE HUMANS?"
        subhead="Skip the robot entirely. Free 20-minute call — we look at your website and your business and tell you exactly what we'd do."
        buttonText="Book a Free Call"
        bgUrl="/team-growth.jpg"
      />
    </>
  );
}
