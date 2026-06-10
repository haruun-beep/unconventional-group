import type { Metadata } from "next";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";
import PageHero from "@/components/PageHero";
import ServiceSchema from "@/components/ServiceSchema";

export const metadata: Metadata = {
  alternates: { canonical: "/locations/calgary" },
  title: "Calgary Marketing & Sales Team — Unconventional Group",
  description:
    "Websites, ads, social media, video, and AI visibility for Calgary businesses. Edmonton-based team serving Calgary remotely — with on-site shoots when the project calls for it.",
};

const HERO_BG =
  "https://images.unsplash.com/photo-1558981852-426c6c22a060?auto=format&fit=crop&w=1920&q=80";

const services = [
  {
    title: "Websites",
    body: "Built to convert Calgary customers, delivered in under 5 days on average. Fully remote process — discovery call to launch without a single in-person meeting needed.",
    href: "/websites",
  },
  {
    title: "Ad Management",
    body: "Facebook & Instagram ads geo-targeted to Calgary, Airdrie, Okotoks, Cochrane — wherever your jobs actually come from. Set up, run, and optimized monthly.",
    href: "/ad-management",
  },
  {
    title: "Social Media",
    body: "Strategy, content, and scheduling handled end-to-end. Your accounts stay active and on-brand while you run the business.",
    href: "/social-media",
  },
  {
    title: "Videography",
    body: "Brand films, reels, and product shoots. For Calgary clients we travel down for shoot days — scoped into the project so there are no surprise costs.",
    href: "/videography",
  },
  {
    title: "Lead Generation",
    body: "The full system — offer, ads, landing page, follow-up — built to put qualified Calgary leads on your phone, not just clicks on a dashboard.",
    href: "/lead-generation",
  },
  {
    title: "Funnels & CRO",
    body: "We find where your existing traffic leaks and fix it. More booked calls from the visitors you're already paying for.",
    href: "/funnels-cro",
  },
  {
    title: "AI Visibility (AEO/GEO)",
    body: "When someone asks ChatGPT or Google AI 'who's the best in Calgary for this?' — we work to make the answer you. Almost nobody in Calgary is doing this yet.",
    href: "/ai-visibility",
  },
  {
    title: "E-Commerce",
    body: "Store builds and growth for Calgary brands selling online — product pages, conversion optimization, and the marketing to drive sales.",
    href: "/ecommerce",
  },
];

const industries = [
  "Contractors & Trades",
  "Home & Local Services",
  "Professional Services",
  "Real Estate",
  "Restaurants & Retail",
  "E-Commerce Brands",
];

const faqItems = [
  {
    q: "Do you work with Calgary businesses?",
    a: "Yes. We're based in Edmonton and work with businesses across Canada — Calgary included. Websites, ads, social media, funnels, and AI visibility are all delivered remotely with the same process and the same speed our Edmonton clients get.",
  },
  {
    q: "Do you travel to Calgary for video shoots?",
    a: "Yes, when the project calls for it. We're honest about this: we don't have a Calgary office. For videography and photo work, we travel down for shoot days, and that travel is scoped into the project upfront so you know exactly what's included before anything is booked.",
  },
  {
    q: "Does remote marketing work as well as hiring a local Calgary agency?",
    a: "For most of what we do — websites, ad management, social media, AI visibility — location is irrelevant; the work happens online either way. What matters is whether the team answers your calls, ships on time, and reports honestly. We're a team, not an agency: the people you talk to are the people doing the work, and Calgary is a three-hour drive when something genuinely needs us there in person.",
  },
  {
    q: "Can you target ads specifically to Calgary neighbourhoods?",
    a: "Yes. We geo-target campaigns down to the radius that matches your actual service area — whether that's all of Calgary, specific quadrants, or surrounding communities like Airdrie, Chestermere, Okotoks, and Cochrane. You pay for clicks from people you can actually serve.",
  },
];

export default function CalgaryPage() {
  return (
    <>
      <ServiceSchema
        name="Calgary Marketing & Sales Services"
        description="Websites, ad management, social media, videography, lead generation, funnels, AI visibility, and e-commerce growth for Calgary businesses — delivered by Edmonton-based team Unconventional Group."
        path="/locations/calgary"
        serviceType="Marketing Services"
      />

      <PageHero
        badge="CALGARY, ALBERTA"
        headline="CALGARY'S UNCONVENTIONAL MARKETING & SALES TEAM."
        subhead="Websites, ads, content, and AI visibility for Calgary businesses — delivered by an Edmonton-based team that's served 50+ businesses across Canada. Remote-first, on-site when it counts."
        bgUrl={HERO_BG}
        cta={{ label: "Book a Free Call", href: "/book" }}
        secondaryCta={false}
      />

      {/* How we serve Calgary */}
      <section className="bg-bg py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll>
            <div className="flex flex-wrap gap-3 mb-12">
              {["Serving Calgary", "Edmonton-Based", "50+ Businesses Served", "Canada-Wide"].map((badge) => (
                <span
                  key={badge}
                  className="border border-neon/40 text-neon font-display text-sm tracking-[0.2em] px-4 py-1.5 rounded"
                >
                  {badge}
                </span>
              ))}
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <div className="flex flex-col gap-5 text-white/55 text-lg leading-relaxed">
              <p>
                Straight up: we&apos;re based in Edmonton, not Calgary. We&apos;re telling you that
                because most of what we do — websites, ad management, social media, funnels, AI
                visibility — happens online, and pretending otherwise is the kind of thing agencies
                do. We&apos;re not an agency. We&apos;re a small team, founded by Haruun Ali, that
                does the work in-house and answers when you call.
              </p>
              <p>
                For Calgary clients, that means the full service delivered remotely with the same
                speed our Edmonton clients get — websites in under 5 days on average — and when a
                project needs us physically there, like a video shoot or a brand session, we make
                the drive. Travel is scoped upfront, so there are no surprises on the invoice.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* 8 services */}
      <section className="bg-surface py-28 px-6 border-t border-white/8">
        <div className="max-w-5xl mx-auto">
          <AnimateOnScroll>
            <p className="font-display text-xs text-neon tracking-[0.35em] text-center mb-3">
              WHAT WE DO FOR CALGARY BUSINESSES
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-white text-center mb-14 leading-[0.93]">
              EIGHT SERVICES. ONE TEAM.
            </h2>
          </AnimateOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s, i) => (
              <AnimateOnScroll key={s.title} delay={(i % 4) * 0.08}>
                <Link href={s.href} className="group block h-full">
                  <div className="bg-bg border border-white/8 rounded-xl p-7 h-full hover:border-neon/25 transition-colors">
                    <h3 className="font-display text-xl text-white mb-2 group-hover:text-neon transition-colors leading-snug">
                      {s.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed">{s.body}</p>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-bg py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll>
            <p className="font-display text-xs text-neon tracking-[0.35em] text-center mb-3">
              INDUSTRIES
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-white text-center mb-6 leading-[0.93]">
              WHO WE WORK WITH IN CALGARY.
            </h2>
            <p className="text-white/55 text-lg text-center max-w-2xl mx-auto mb-12 leading-relaxed">
              Calgary&apos;s market is competitive — more businesses, more ad spend, more noise than
              anywhere else in Alberta. The fundamentals that win there are the ones we run every
              day: sharp offers, fast websites, and follow-up that beats the other guy to the phone.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <div className="flex flex-wrap justify-center gap-3">
              {industries.map((ind) => (
                <span
                  key={ind}
                  className="bg-surface border border-white/8 text-white/70 text-sm px-5 py-2.5 rounded-full hover:border-neon/25 transition-colors"
                >
                  {ind}
                </span>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <FAQ items={faqItems} heading="CALGARY QUESTIONS, ANSWERED." />

      <CTASection
        headline="CALGARY, LET'S GET TO WORK."
        subhead="Free 20-minute call. We look at your business and tell you exactly what we'd do — no pitch, no obligation."
      />
    </>
  );
}
