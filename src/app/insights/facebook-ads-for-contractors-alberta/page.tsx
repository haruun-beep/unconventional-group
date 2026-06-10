import type { Metadata } from "next";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  alternates: { canonical: "/insights/facebook-ads-for-contractors-alberta" },
  title: "Facebook Ads for Contractors in Alberta — What Books Jobs",
  description:
    "A practical Facebook ads playbook for Alberta contractors: offer-first creative, geo-targeting, lead forms vs landing pages, speed-to-lead, and the money-wasters to avoid.",
};

const SITE = "https://www.unconventionalgroup.ca";
const HERO_BG = "/contractor.jpg";

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Facebook Ads for Contractors in Alberta: What Actually Books Jobs",
  description:
    "A practical guide to Facebook ads for Alberta contractors — offer-first creative, geo-targeting, lead forms vs landing pages, speed-to-lead, and common money-wasters.",
  datePublished: "2026-06-09",
  author: { "@type": "Organization", name: "Unconventional Group", url: SITE },
  publisher: { "@id": `${SITE}/#organization` },
  mainEntityOfPage: `${SITE}/insights/facebook-ads-for-contractors-alberta`,
};

const faqItems = [
  {
    q: "How much should a contractor spend on Facebook ads?",
    a: "Less than you think to test, more than you think to scale. We've seen a local services client book 5 jobs in one week on $70 of ad spend — but that came from a sharp offer and fast follow-up, not budget. Start small, prove the offer converts, then scale spend on what's working. Budget without an offer is just a donation to Meta.",
  },
  {
    q: "Do Facebook ads work for contractors in smaller Alberta markets?",
    a: "Yes — often better than in big cities. In Red Deer, Lethbridge, or Fort McMurray, ad costs are lower and fewer competitors are advertising, so a decent offer can dominate the local feed. The key is matching your targeting radius to where you'll actually drive for a job.",
  },
  {
    q: "Should I run my own ads or hire someone?",
    a: "If you have time to write offers, build creative, test audiences, and call leads within minutes — run them yourself. Most contractors don't, which is how ad accounts end up burning money on boosted posts. If you'd rather be on the tools than in Ads Manager, that's exactly what our ad management service exists for.",
  },
];

export default function ContractorAdsArticle() {
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
            INSIGHTS · AD MANAGEMENT
          </p>
          <h1 className="font-display text-[clamp(2.4rem,6vw,4.5rem)] text-white leading-[0.95] tracking-tight mb-5">
            FACEBOOK ADS FOR CONTRACTORS IN ALBERTA: WHAT ACTUALLY BOOKS JOBS
          </h1>
          <div className="w-16 h-[3px] bg-neon mb-6 glow-line" />
          <p className="text-white/45 text-sm tracking-wide">
            June 9, 2026 · 8 min read · Unconventional Group
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="bg-bg py-20 px-6">
        <div className="max-w-3xl mx-auto flex flex-col gap-6 text-white/70 text-lg leading-relaxed">
          <AnimateOnScroll>
            <p>
              Most contractors who&apos;ve &quot;tried Facebook ads&quot; have actually tried
              boosting a post, waiting a week, and concluding ads don&apos;t work. They do work —
              one of our ad-management clients booked <strong className="text-white">5 jobs in a
              single week on $70 of ad spend</strong>. The difference isn&apos;t budget or luck.
              It&apos;s doing five specific things right. Here they are.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <h2 className="font-display text-3xl md:text-4xl text-white mt-8 mb-2 leading-tight">
              1. LEAD WITH AN OFFER, NOT YOUR LOGO
            </h2>
            <p>
              Nobody scrolling Facebook cares that you&apos;re &quot;licensed, insured, and
              family-owned.&quot; Every contractor says that. What stops the scroll is a concrete
              offer: a free estimate with a 24-hour response guarantee, a seasonal package with a
              deadline, a fixed price on a job everyone else quotes vaguely.
            </p>
            <p className="mt-3">
              The test is simple: could a homeowner repeat your offer to their spouse in one
              sentence? &quot;That fencing company does free quotes within a day and they&apos;re
              booking for July&quot; passes. &quot;Quality work at fair prices&quot; doesn&apos;t —
              it&apos;s not an offer, it&apos;s wallpaper. Write the offer first. The ad is just the
              delivery vehicle.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <h2 className="font-display text-3xl md:text-4xl text-white mt-8 mb-2 leading-tight">
              2. TARGET WHERE YOU&apos;LL ACTUALLY DRIVE
            </h2>
            <p>
              Alberta geography punishes lazy targeting. A 50&nbsp;km radius around Edmonton pulls in
              acreages, small towns, and neighbourhoods with completely different budgets and needs.
              Meanwhile a roofer in Sherwood Park has no business paying for clicks from Leduc if he
              won&apos;t take the drive.
            </p>
            <p className="mt-3">
              Draw your radius around where you actually want jobs, not where the map defaults.
              Then go a level deeper: exclude renters for exterior work, layer in homeowner
              behaviours, and run separate ad sets for separate towns so you can see which
              geography produces real jobs — not just cheap clicks. In smaller markets like Red
              Deer or Grande Prairie, you&apos;ll often find less ad competition and lower costs
              than the big two cities.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <h2 className="font-display text-3xl md:text-4xl text-white mt-8 mb-2 leading-tight">
              3. LEAD FORMS VS. LANDING PAGES — PICK ON PURPOSE
            </h2>
            <p>
              Facebook&apos;s instant lead forms keep people inside the app: tap, autofill, done.
              They produce more leads at a lower cost — and a higher percentage of tire-kickers,
              because the form is almost too easy to submit. Landing pages add friction, which
              filters out the curious and leaves you fewer but warmer leads.
            </p>
            <p className="mt-3">
              The honest rule: if your follow-up is fast and you can handle volume, lead forms win
              on cost. If every lead costs you a site visit, send traffic to a{" "}
              <Link href="/websites" className="text-neon hover:underline">landing page</Link> that
              pre-qualifies — show your work, your service area, your process, and let the weak
              leads filter themselves out before they hit your phone.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <h2 className="font-display text-3xl md:text-4xl text-white mt-8 mb-2 leading-tight">
              4. SPEED-TO-LEAD IS THE WHOLE GAME
            </h2>
            <p>
              Here&apos;s the part nobody wants to hear: most contractor ad campaigns don&apos;t
              fail in Ads Manager. They fail in the follow-up. A homeowner who fills out a form at
              7&nbsp;PM is comparing three contractors by 7:15. The one who calls back first usually
              wins the job — industry studies have shown for years that contact rates collapse
              within the first hour, and most leads go to whoever responds first.
            </p>
            <p className="mt-3">
              That $70-for-5-jobs result we mentioned? The offer was sharp, but the client also
              followed up on every lead the same day. If you can&apos;t answer leads quickly, fix
              that before you spend another dollar on ads — set up instant notifications, an
              auto-text reply, or someone whose job is to call leads back within minutes.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <h2 className="font-display text-3xl md:text-4xl text-white mt-8 mb-2 leading-tight">
              5. THE COMMON MONEY-WASTERS
            </h2>
            <ul className="list-disc pl-6 flex flex-col gap-3 mt-2">
              <li>
                <strong className="text-white">Boosting posts.</strong> The &quot;Boost&quot; button
                optimizes for engagement, not leads. Likes from people who will never hire you.
              </li>
              <li>
                <strong className="text-white">Running one ad and judging the platform.</strong>{" "}
                You&apos;re testing offers and creative, not &quot;whether Facebook works.&quot;
                Plan for several variations before you have a verdict.
              </li>
              <li>
                <strong className="text-white">Stock photos.</strong> A real photo of your crew on a
                real Alberta job site outperforms polished stock imagery almost every time. Phone
                photos are fine. Authentic beats pretty.
              </li>
              <li>
                <strong className="text-white">Touching the campaign daily.</strong> Constant edits
                reset Meta&apos;s learning phase. Make changes deliberately, on a schedule, based on
                data — not nerves.
              </li>
              <li>
                <strong className="text-white">No tracking.</strong> If you can&apos;t trace a booked
                job back to the ad that produced it, you can&apos;t scale what works. Set up
                conversion tracking before launch, not after.
              </li>
            </ul>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <h2 className="font-display text-3xl md:text-4xl text-white mt-8 mb-2 leading-tight">
              WHAT TO DO NEXT
            </h2>
            <p>
              If you&apos;re going to run ads yourself: write one concrete offer, target only where
              you&apos;ll drive, pick lead forms or a landing page on purpose, and commit to calling
              every lead back within minutes. That alone puts you ahead of most contractors in your
              market.
            </p>
            <p>
              If you&apos;d rather be on the tools than in Ads Manager, that&apos;s literally our
              job. Our <Link href="/ad-management" className="text-neon hover:underline">ad
              management</Link> team builds the offer, the creative, and the targeting, then
              reports to you monthly in plain English — and if you need the{" "}
              <Link href="/lead-generation" className="text-neon hover:underline">whole lead
              system</Link> built around it, we do that too.{" "}
              <Link href="/book" className="text-neon hover:underline">Book a free 20-minute
              call</Link> and we&apos;ll tell you exactly what we&apos;d run for your trade.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <FAQ items={faqItems} heading="CONTRACTOR ADS FAQ" />

      <CTASection
        bgUrl="/contractor.jpg"
        headline="WANT ADS THAT BOOK JOBS, NOT LIKES?"
        subhead="Free 20-minute call. We'll look at your trade, your market, and tell you exactly what we'd run — no pitch."
      />
    </>
  );
}
