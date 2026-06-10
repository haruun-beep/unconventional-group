import type { Metadata } from "next";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import TestimonialCard from "@/components/TestimonialCard";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import ServiceSchema from "@/components/ServiceSchema";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  alternates: { canonical: "/websites" },
  title: "Website Design & Development — Unconventional Group",
  description:
    "Custom websites, WordPress/Squarespace builds, and ecommerce stores for Canadian businesses. Most sites delivered in under 5 days.",
};

const HERO_BG =
  "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1920&q=80";

const RISK_BG =
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1920&q=80";

const websiteReviews = [
  {
    name: "Matt Nicklasson",
    company: "Matt Nicklasson Construction",
    quote:
      "We recently had our website built by Haruun and the entire experience was exceptional from start to finish. Professional, creative, and highly responsive. Any changes we requested were handled quickly. Highly recommend!",
  },
  {
    name: "Dini Arkangelo",
    company: "Zebra Demolition",
    quote:
      "We hired Unconventional Group to build our website for our demolition company, and they did an excellent job. Responsive, detail-oriented, and very easy to work with. The final product turned out great.",
  },
  {
    name: "Dana Schick",
    company: "DS Drywall Services",
    quote:
      "Loved how easy the team made the entire process! Communication was always clear and they made a fantastic site for my business. Thanks again guys!",
  },
  {
    name: "Salam Abdul",
    company: "Google Review",
    quote:
      "It was a pleasure working with Unconventional in designing and developing the website for my business. Haruun is a fantastic person to work with and I would definitely recommend others work with them!",
  },
  {
    name: "Steve",
    company: "Google Review",
    quote:
      "Haruun was professional, responsive and clearly knew his stuff when it came to web development. Would definitely recommend!",
  },
  {
    name: "Brian Manuel",
    company: "Local Business Owner",
    quote:
      "I hired UGroup to create our website. Great team, great ideas and easy to work with. I highly recommend them for all website needs.",
  },
];

const tiers = [
  {
    name: "WordPress / Squarespace",
    price: "Custom Quote",
    priceNote: "scoped on your free call",
    pitch: "You need to look legit online — fast. This is the fastest way to get there.",
    features: [
      "Template customised to your brand — not just a stock theme dropped in",
      "Mobile responsive",
      "Contact forms & basic SEO setup",
      "Up to 3 rounds of revisions",
      "Delivered in under 5 business days",
    ],
    best: "Best for businesses that need a clean, professional presence without the wait.",
  },
  {
    name: "Custom Website",
    price: "Custom Quote",
    priceNote: "scoped on your free call",
    pitch: "Your business isn't like everyone else's. Your website shouldn't be either.",
    features: [
      "Built from scratch — zero templates involved",
      "Custom layout designed around how your business actually works",
      "Copywriting guidance included",
      "Mobile & SEO ready from day one",
      "Up to 5 rounds of revisions",
      "Delivered in 14 business days",
    ],
    best: "Best for businesses that want to fully own their online presence.",
    highlight: true,
  },
  {
    name: "Ecommerce",
    price: "Custom Quote",
    priceNote: "scoped on your free call",
    pitch: "Ready to sell online? We'll build a store that actually converts.",
    features: [
      "Full store build from the ground up",
      "Product pages, cart & checkout",
      "Payment gateway setup",
      "Inventory management integration",
      "Mobile optimised",
      "Delivered in 21 business days",
    ],
    best: "Best for businesses ready to sell online and need it done properly.",
  },
];

const faqs = [
  {
    q: "How long does it take to build a website?",
    a: "Most websites are delivered in under 5 days on average. Custom builds take around 14 business days, and full online stores around 21. We move fast because we've done this for 50+ businesses — you won't wait months watching a progress bar.",
  },
  {
    q: "Do I own my website?",
    a: "Yes — completely. The domain, the hosting, the content, the design. Nothing is held hostage if you ever stop working with us. We build it, hand you the keys, and you own it outright.",
  },
  {
    q: "What's included in a website build?",
    a: "Design customised to your brand, mobile responsiveness, contact forms, basic SEO setup, and built-in revision rounds — we go until you're happy. Custom builds also include copywriting guidance. Optional ongoing maintenance is available if you want updates handled for you.",
  },
  {
    q: "How much does a website cost?",
    a: "It depends on scope — a template-based build, a fully custom site, and an e-commerce store are very different projects. Book the free 20-minute call at unconventionalgroup.ca/book and you'll get a straight answer, no obligation.",
  },
  {
    q: "How are you different from a typical web agency?",
    a: "We're a team, not an agency. No account managers, no outsourcing, no six-week discovery phase. You talk directly to the people building your site, and most builds ship in under 5 days. We're Edmonton-based and work with businesses across Canada.",
  },
];

export default function WebsitesPage() {
  return (
    <>
      <ServiceSchema
        name="Website Design & Development"
        description="Custom websites, WordPress/Squarespace builds, and ecommerce stores for Canadian businesses. Most sites delivered in under 5 days on average."
        path="/websites"
      />
      <PageHero
        badge="CUSTOM WEBSITES"
        headline="YOUR WEBSITE IS EITHER WINNING TRUST OR LOSING IT."
        subhead="Visitors decide in 3 seconds whether you're legit. We make those 3 seconds count — every single time."
        bgUrl={HERO_BG}
        cta={{ label: "See Website Packages", href: "#pricing" }}
      />

      {/* Pricing tiers */}
      <section id="pricing" className="bg-bg py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll>
            <p className="font-display text-xs text-neon tracking-[0.35em] text-center mb-3">
              PACKAGES
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-white text-center mb-3 leading-[0.93]">
              PICK YOUR BUILD
            </h2>
            <p className="text-white/40 text-center mb-14 text-sm">
              Every tier includes optional ongoing maintenance. Pricing is scoped on a free 20-minute call.
            </p>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-3 gap-5">
            {tiers.map((tier, i) => (
              <AnimateOnScroll key={tier.name} delay={i * 0.1}>
                <div
                  className={`rounded-xl p-8 flex flex-col h-full card-hover-border ${
                    tier.highlight
                      ? "bg-neon/5 border border-neon"
                      : "bg-surface border border-white/8"
                  }`}
                >
                  {tier.highlight && (
                    <span className="inline-block bg-neon text-bg text-xs font-display tracking-widest px-3 py-1 rounded mb-4 self-start">
                      MOST POPULAR
                    </span>
                  )}
                  <p className="font-display text-white/35 text-xs tracking-[0.3em] mb-2">
                    {tier.name.toUpperCase()}
                  </p>
                  <p className="text-white/55 text-sm mb-6 italic leading-snug">{tier.pitch}</p>

                  <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-white/65">
                        <span className="text-neon mt-0.5 shrink-0">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    <p className="text-white/35 text-xs mb-3 leading-snug">{tier.best}</p>
                    <div className="border-t border-white/8 pt-4 flex items-end justify-between">
                      <div>
                        <p className="font-display text-3xl text-neon">{tier.price}</p>
                        <p className="text-white/35 text-xs">{tier.priceNote}</p>
                      </div>
                      <Link
                        href="/book"
                        className={`px-5 py-2 rounded text-sm font-semibold transition-all duration-200 ${
                          tier.highlight
                            ? "bg-neon text-bg hover:opacity-90"
                            : "border border-neon text-neon hover:bg-neon hover:text-bg"
                        }`}
                      >
                        Get Started
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          {/* Maintenance add-on */}
          <AnimateOnScroll>
            <div className="mt-6 bg-surface border border-white/8 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <p className="font-display text-white text-lg">+ MAINTENANCE RETAINER</p>
                <p className="text-white/45 text-sm">
                  Ongoing updates, changes, and support for any build. Nothing sits broken.
                </p>
              </div>
              <p className="font-display text-neon text-2xl shrink-0">Scoped to your build</p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Risk reversal — photo bg */}
      <section
        className="relative py-28 px-6 overflow-hidden"
        style={{
          backgroundImage: `url('${RISK_BG}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/82" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(57,255,20,0.045) 0%, transparent 70%)",
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-neon/40 to-transparent" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <AnimateOnScroll>
            <p className="font-display text-xs text-neon tracking-[0.35em] mb-4">OUR GUARANTEE</p>
            <h2 className="font-display text-4xl md:text-5xl text-white mb-6 leading-[0.93]">
              WE STAND BEHIND THE WORK.
            </h2>
            <div className="w-14 h-[3px] bg-neon mx-auto mb-7 glow-line" />
            <p className="text-white/60 text-lg leading-relaxed">
              Every build comes with revision rounds built in — we go until you&apos;re happy.
              If we build it and you don&apos;t love it, we fix it. That&apos;s not a policy.
              That&apos;s just how we operate.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Google reviews */}
      <section className="bg-surface py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll>
            <p className="font-display text-xs text-neon tracking-[0.35em] text-center mb-3">
              ★★★★★ · GOOGLE REVIEWS
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-white text-center mb-3 leading-[0.93]">
              REAL CLIENTS. REAL WEBSITES.
            </h2>
            <p className="text-white/40 text-center text-sm mb-14">
              Straight from our Google Business profile.
            </p>
          </AnimateOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {websiteReviews.map((t, i) => (
              <AnimateOnScroll key={i} delay={(i % 3) * 0.09}>
                <TestimonialCard {...t} />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <FAQ items={faqs} heading="WEBSITE QUESTIONS." />

      <CTASection bgUrl="https://images.unsplash.com/photo-1517292987719-0369a794ec0f?auto=format&fit=crop&w=1920&q=80" headline="READY TO BUILD SOMETHING THAT ACTUALLY WORKS?" />
    </>
  );
}
