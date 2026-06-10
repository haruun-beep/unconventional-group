import type { Metadata } from "next";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import TestimonialCard from "@/components/TestimonialCard";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import ServiceSchema from "@/components/ServiceSchema";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  alternates: { canonical: "/social-media" },
  title: "Social Media Management — Unconventional Group",
  description:
    "Premium social media management for Canadian businesses. We work alongside your team to keep your brand sharp, consistent, and present.",
};

const HERO_BG =
  "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1920&q=80";

const PARTNER_BG =
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1920&q=80";

const whatWeHandle = [
  "Content creation — graphics and captions built around your brand voice",
  "Scheduled and published on time, every time — so nothing slips",
  "Instagram, Facebook, and LinkedIn, managed in lockstep with you",
  "Monthly performance recaps so you always know what's working",
  "Strategy refined with your goals every single month",
];

const partnership = [
  {
    num: "01",
    title: "We Extend Your Team",
    body: "We don't replace anyone — we sit alongside the people already running your business and take the content load off their plate so they can do what they do best.",
  },
  {
    num: "02",
    title: "Your Voice, Amplified",
    body: "Everything we publish sounds like you and reflects your brand. We make your business look the way it deserves to — sharper, more consistent, more present.",
  },
  {
    num: "03",
    title: "Always In The Loop",
    body: "You approve direction, you see the results, and you talk to us directly. No black box, no guessing — a real partner invested in your growth.",
  },
];

const faqs = [
  {
    q: "Which platforms do you manage?",
    a: "Instagram, Facebook, and LinkedIn are our core platforms — managed in lockstep with you. We focus on the channels where your customers actually are, rather than spreading thin across every app that exists.",
  },
  {
    q: "What's included in social media management?",
    a: "Content creation — graphics and captions built around your brand voice — scheduling and publishing on time every time, monthly performance recaps, and strategy refined with your goals every single month. You approve direction; we handle the rest.",
  },
  {
    q: "Will the posts actually sound like my business?",
    a: "Yes. Everything we publish is built around your brand voice and approved by you before it goes out. We extend your team — we don't replace it — so the content sounds like you, just sharper and more consistent.",
  },
  {
    q: "How much does social media management cost?",
    a: "It depends on scope — posting volume, platforms, and how much content creation is involved. Book the free 20-minute call at unconventionalgroup.ca/book and you'll get a straight answer, no obligation.",
  },
  {
    q: "How are you different from a typical social media agency?",
    a: "We're a team, not an agency. No black box, no junior account managers — you talk to us directly, you see the results, and you approve direction. We're Edmonton-based, work with businesses across Canada, and have served 50+ companies.",
  },
];

export default function SocialMediaPage() {
  return (
    <>
      <ServiceSchema
        name="Social Media Management"
        description="Premium social media management for Canadian businesses. We work alongside your team to keep your brand sharp, consistent, and present."
        path="/social-media"
      />
      <PageHero
        badge="SOCIAL MEDIA MANAGEMENT"
        headline="YOUR BRAND, IMPOSSIBLE TO SCROLL PAST."
        subhead="The brands winning on social are the ones that show up sharp and consistent — every day. We partner with you to make that happen, amplifying what you already do best."
        bgUrl={HERO_BG}
        cta={{ label: "Book a Free Call", href: "/book" }}
        secondaryCta={false}
      />

      {/* How we partner — photo bg */}
      <section
        className="relative py-28 px-6 overflow-hidden"
        style={{
          backgroundImage: `url('${PARTNER_BG}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/86" />
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-neon/35 to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <AnimateOnScroll>
            <p className="font-display text-xs text-neon tracking-[0.35em] text-center mb-3">
              HOW WE PARTNER
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-white text-center mb-4 leading-[0.93]">
              WE SUPPORT YOUR TEAM — WE DON&apos;T REPLACE IT.
            </h2>
            <p className="text-white/40 text-center text-sm mb-14 max-w-lg mx-auto">
              Think of us as the creative department you didn&apos;t have to build.
            </p>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-3 gap-5">
            {partnership.map((p, i) => (
              <AnimateOnScroll key={p.num} delay={i * 0.1}>
                <div className="bg-white/5 border border-white/8 rounded-xl p-8 h-full hover:border-neon/25 transition-colors">
                  <p className="font-display text-5xl text-neon/20 mb-3">{p.num}</p>
                  <h3 className="font-display text-2xl text-white mb-3 leading-snug">{p.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{p.body}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* What we handle */}
      <section className="bg-bg py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <AnimateOnScroll>
            <p className="font-display text-xs text-neon tracking-[0.35em] text-center mb-3">
              WHAT&apos;S INCLUDED
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-white mb-3 text-center leading-[0.93]">
              EVERYTHING, HANDLED.
            </h2>
            <p className="text-white/40 text-center text-sm mb-12">
              You stay focused on the business. We keep the brand moving.
            </p>
          </AnimateOnScroll>

          <div className="flex flex-col gap-4">
            {whatWeHandle.map((item, i) => (
              <AnimateOnScroll key={i} delay={i * 0.08}>
                <div className="flex items-start gap-5 bg-surface border border-white/8 rounded-xl p-5 hover:border-neon/25 transition-colors">
                  <span className="font-display text-2xl text-neon/30 shrink-0 w-7 leading-none pt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-white/75 text-base leading-snug">{item}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-surface py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <AnimateOnScroll>
            <p className="font-display text-xs text-neon tracking-[0.35em] text-center mb-6">
              FROM A SOCIAL MEDIA CLIENT
            </p>
            <TestimonialCard
              name="Zebra Landscaping"
              company="Zebra Landscaping"
              quote="Great service, good communication, and works quickly. He took care of our social media channels and we are satisfied with the work so far!"
            />
          </AnimateOnScroll>
        </div>
      </section>

      <FAQ items={faqs} heading="SOCIAL MEDIA QUESTIONS." />

      <CTASection
        bgUrl="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=1920&q=80"
        headline="LET'S MAKE YOUR BRAND SHOW UP LIKE IT MEANS IT."
        subhead="Free 20-minute call. We'll look at where your brand is now and show you exactly where it could be."
      />
    </>
  );
}
