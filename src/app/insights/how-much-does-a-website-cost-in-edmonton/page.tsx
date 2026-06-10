import type { Metadata } from "next";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  alternates: { canonical: "/insights/how-much-does-a-website-cost-in-edmonton" },
  title: "How Much Does a Website Cost in Edmonton? (2026)",
  description:
    "A straight answer on Edmonton website pricing in 2026: real market ranges for DIY, freelancers, and agencies — plus what drives cost and the warning signs of a cheap build.",
};

const SITE = "https://www.unconventionalgroup.ca";
const HERO_BG = "/edmonton-hero.jpg";

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How Much Does a Website Cost in Edmonton? (2026 Straight Answer)",
  description:
    "Real market ranges for websites in Edmonton — DIY builders, freelancers, agencies — what drives the price, and the warning signs of a cheap provider.",
  datePublished: "2026-06-09",
  author: { "@type": "Organization", name: "Unconventional Group", url: SITE },
  publisher: { "@id": `${SITE}/#organization` },
  mainEntityOfPage: `${SITE}/insights/how-much-does-a-website-cost-in-edmonton`,
};

const faqItems = [
  {
    q: "What's a realistic budget for a small business website in Edmonton?",
    a: "For a professionally built 5–8 page site with custom copy, most Edmonton businesses land somewhere in the freelancer-to-small-team range — typically $1,000 to $5,000 in the broader market. E-commerce, custom integrations, and large page counts push it higher. The honest answer is that it depends on what the site needs to do, which is why we scope every project on a free call instead of quoting blind.",
  },
  {
    q: "Why are some websites only a few hundred dollars?",
    a: "Usually because something is missing: the copy is yours to write, the design is a stock template with your logo dropped in, there's no SEO setup, or you don't actually own the site when you stop paying. Cheap builds often cost more in the long run — in rebuilds, in lost leads, or in being held hostage by a provider you can't leave.",
  },
  {
    q: "How long does a website take to build?",
    a: "Industry-wide, a small business site commonly takes 4–8 weeks. Our team averages under 5 days for most builds because we keep the process tight: one discovery call, focused copywriting, and no committee revisions. Larger custom or e-commerce projects take longer, and we'll tell you that upfront.",
  },
];

export default function WebsiteCostArticle() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* Article hero */}
      <section
        className="relative pt-44 md:pt-56 pb-20 px-6 overflow-hidden"
        style={{ backgroundImage: `url('${HERO_BG}')`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-black/78" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg to-transparent" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="font-display text-neon text-xs tracking-[0.35em] mb-5">
            INSIGHTS · WEBSITES
          </p>
          <h1 className="font-display text-[clamp(2.4rem,6vw,4.5rem)] text-white leading-[0.95] tracking-tight mb-5">
            HOW MUCH DOES A WEBSITE COST IN EDMONTON? (2026 STRAIGHT ANSWER)
          </h1>
          <div className="w-16 h-[3px] bg-neon mb-6 glow-line" />
          <p className="text-white/45 text-sm tracking-wide">
            June 9, 2026 · 7 min read · Unconventional Group
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="bg-bg py-20 px-6">
        <div className="max-w-3xl mx-auto flex flex-col gap-6 text-white/70 text-lg leading-relaxed">
          <AnimateOnScroll>
            <p>
              Ask five Edmonton providers what a website costs and you&apos;ll get five answers,
              four of which are &quot;it depends.&quot; That&apos;s technically true — and completely
              useless when you&apos;re trying to budget. So here&apos;s the straight version: the real
              market ranges, what actually moves the price, and how to avoid paying twice for the
              same website.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <h2 className="font-display text-3xl md:text-4xl text-white mt-8 mb-2 leading-tight">
              THE REAL RANGES IN 2026
            </h2>
            <p className="mb-4">
              Across the Canadian market, website pricing breaks into three broad lanes:
            </p>
            <div className="flex flex-col gap-4">
              <div className="bg-surface border border-white/8 rounded-xl p-6">
                <h3 className="font-display text-xl text-neon mb-2">DIY Builders — $20–$60/month</h3>
                <p className="text-base text-white/60">
                  Wix, Squarespace, Shopify&apos;s basic tier. Cheap to start, but you&apos;re the
                  designer, the copywriter, and the SEO. Fine for a hobby. Risky for a business
                  whose phone needs to ring.
                </p>
              </div>
              <div className="bg-surface border border-white/8 rounded-xl p-6">
                <h3 className="font-display text-xl text-neon mb-2">Freelancers — typically $1k–$5k</h3>
                <p className="text-base text-white/60">
                  Huge quality variance. A great freelancer at this price is a steal; a bad one
                  disappears mid-project. The site is only as good as the one person building it.
                </p>
              </div>
              <div className="bg-surface border border-white/8 rounded-xl p-6">
                <h3 className="font-display text-xl text-neon mb-2">Agencies — $5k–$30k+</h3>
                <p className="text-base text-white/60">
                  Full teams, full process, full price. Some of that money buys real strategy.
                  Some of it buys account managers and office rent. Know which you&apos;re paying for.
                </p>
              </div>
            </div>
            <p className="mt-4">
              Those are market ranges, not our quotes. Every business needs something different,
              which is why we don&apos;t publish prices — we scope them on a{" "}
              <Link href="/book" className="text-neon hover:underline">free 20-minute call</Link>{" "}
              where you get a real number for your actual project.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <h2 className="font-display text-3xl md:text-4xl text-white mt-8 mb-2 leading-tight">
              WHAT ACTUALLY DRIVES THE PRICE
            </h2>
            <p>
              Two &quot;5-page websites&quot; can be thousands of dollars apart. Here&apos;s why:
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-3 mt-3">
              <li>
                <strong className="text-white">Page count and structure.</strong> A 5-page brochure
                site and a 30-page site with service pages for every neighbourhood you serve are
                different projects. More pages means more design, more copy, more SEO work.
              </li>
              <li>
                <strong className="text-white">Copywriting.</strong> The single most underrated
                line item. Words are what sell — a beautiful site with weak copy is an expensive
                business card. If a quote doesn&apos;t mention who writes the copy, ask. The answer
                is usually &quot;you do.&quot;
              </li>
              <li>
                <strong className="text-white">Integrations.</strong> Booking systems, CRMs, quote
                calculators, payment processing, review feeds. Each one adds build time and testing
                time.
              </li>
              <li>
                <strong className="text-white">E-commerce.</strong> Product catalogues, inventory,
                shipping rules, taxes — an online store is a different animal from a service site,
                and it&apos;s priced like one.
              </li>
              <li>
                <strong className="text-white">Custom vs. template.</strong> A well-customized
                template can be excellent. A fully custom build costs more because everything is
                designed around your business instead of adapted to it.
              </li>
            </ul>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <h2 className="font-display text-3xl md:text-4xl text-white mt-8 mb-2 leading-tight">
              WARNING SIGNS OF A CHEAP PROVIDER
            </h2>
            <p>
              The most expensive website is the one you have to build twice. Watch for these:
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-3 mt-3">
              <li>
                <strong className="text-white">You don&apos;t own the site.</strong> Some providers
                build on proprietary platforms — stop paying the monthly fee and your website
                vanishes. Always ask: &quot;If we part ways, do I keep everything?&quot;
              </li>
              <li>
                <strong className="text-white">No mention of mobile or speed.</strong> Most of your
                visitors are on phones. A site that looks fine on the designer&apos;s monitor and
                loads slowly on a job site is losing you leads daily.
              </li>
              <li>
                <strong className="text-white">No copywriting included.</strong> &quot;Just send us
                your content&quot; is how projects stall for months and launch with weak messaging.
              </li>
              <li>
                <strong className="text-white">No plan for after launch.</strong> A website
                isn&apos;t a one-time purchase. Who updates it? Who fixes it when something breaks?
              </li>
              <li>
                <strong className="text-white">A price that&apos;s too good.</strong> If a
                &quot;custom website&quot; costs less than a weekend of labour, it isn&apos;t custom
                and it probably isn&apos;t finished either.
              </li>
            </ul>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <h2 className="font-display text-3xl md:text-4xl text-white mt-8 mb-2 leading-tight">
              QUESTIONS TO ASK BEFORE YOU SIGN
            </h2>
            <p>Take this list into any sales conversation — including one with us:</p>
            <ol className="list-decimal pl-6 flex flex-col gap-3 mt-3">
              <li>Who writes the copy, and is it included in the price?</li>
              <li>Do I own the website, domain, and content outright?</li>
              <li>What exactly is included — and what costs extra later?</li>
              <li>How long will it take, and what do you need from me?</li>
              <li>What happens after launch — updates, hosting, support?</li>
              <li>Can I see live sites you&apos;ve built, not just mockups?</li>
            </ol>
            <p className="mt-4">
              A good provider answers all six without flinching. If you get vague answers on
              ownership or copy, keep shopping.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <h2 className="font-display text-3xl md:text-4xl text-white mt-8 mb-2 leading-tight">
              THE BOTTOM LINE
            </h2>
            <p>
              Don&apos;t shop for the cheapest website. Shop for the cheapest <em>lead</em>. A site
              that costs more but books jobs every week beats a bargain site that sits there looking
              pretty. That&apos;s the lens we build with — our{" "}
              <Link href="/websites" className="text-neon hover:underline">websites</Link> average
              under 5 days to deliver and exist to make your phone ring, and if you want traffic
              pointed at it from day one, that&apos;s what our{" "}
              <Link href="/ad-management" className="text-neon hover:underline">ad management</Link>{" "}
              is for.
            </p>
            <p>
              Want a real number for your project instead of a range from an article?{" "}
              <Link href="/book" className="text-neon hover:underline">Book the free call</Link>.
              Twenty minutes, straight answer, no pitch.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <FAQ items={faqItems} heading="WEBSITE COST FAQ" />

      <CTASection
        headline="GET A REAL NUMBER FOR YOUR PROJECT."
        subhead="Free 20-minute call. Tell us what you need, and we'll tell you exactly what it costs and how fast we can ship it."
      />
    </>
  );
}
