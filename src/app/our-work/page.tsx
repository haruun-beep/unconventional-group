import type { Metadata } from "next";
import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Our Work — Unconventional Group",
  description:
    "Real websites built for real businesses across Canada. 50+ clients. Every site in-house.",
};

const clients = [
  {
    name: "Zebra Demolition",
    url: "https://zebrademolition.ca",
    display: "zebrademolition.ca",
    industry: "Demolition",
  },
  {
    name: "MN Construction Ltd",
    url: "https://mnconstructionltd.ca",
    display: "mnconstructionltd.ca",
    industry: "Construction",
  },
  {
    name: "Performance Business Advisory",
    url: "https://www.performancebusinessadvisory.ca",
    display: "performancebusinessadvisory.ca",
    industry: "Business Consulting",
  },
  {
    name: "Cena Catering",
    url: "https://www.cenacatering.com",
    display: "cenacatering.com",
    industry: "Catering & Events",
  },
  {
    name: "BKM Homes Inc",
    url: "https://bkmhomesinc.ca",
    display: "bkmhomesinc.ca",
    industry: "Home Builder",
  },
  {
    name: "Finesse Builders",
    url: "https://www.finessebuildersandgeneralcontractorsinc.ca",
    display: "finessebuildersandgeneralcontractorsinc.ca",
    industry: "General Contractor",
  },
  {
    name: "Canes Contracting",
    url: "https://www.canescontracting.ca",
    display: "canescontracting.ca",
    industry: "Contracting",
  },
  {
    name: "Damn Good Electric",
    url: "https://www.damngoodelectricinc.ca",
    display: "damngoodelectricinc.ca",
    industry: "Electrical",
  },
  {
    name: "SA Renovations",
    url: "https://www.sa-renovations.com",
    display: "sa-renovations.com",
    industry: "Renovations",
  },
  {
    name: "Metropolitan Rockabilly",
    url: "https://www.metropolitanrockabilly.ca",
    display: "metropolitanrockabilly.ca",
    industry: "Entertainment",
  },
  {
    name: "KaBright Clean Co",
    url: "https://www.kabrightcleanco.ca",
    display: "kabrightcleanco.ca",
    industry: "Cleaning Services",
  },
  {
    name: "DS Drywall Service",
    url: "https://www.dsdrywallservice.ca",
    display: "dsdrywallservice.ca",
    industry: "Drywall",
  },
  {
    name: "Northwest Electric",
    url: "https://www.northwestelectricltd.ca",
    display: "northwestelectricltd.ca",
    industry: "Electrical",
  },
];

function screenshotUrl(url: string) {
  return `https://image.thum.io/get/width/1280/noanimate/${url}`;
}

export default function OurWorkPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-bg pt-32 pb-24 px-6 grid-bg">
        <div className="max-w-5xl mx-auto text-center">
          <AnimateOnScroll>
            <p className="font-display text-sm text-neon tracking-widest mb-4">PORTFOLIO</p>
            <h1 className="font-display text-7xl md:text-9xl text-white leading-tight">
              THE{" "}
              <span className="text-neon glow relative inline-block">
                WORK
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 8 C 40 2, 80 12, 120 6 C 160 0, 180 10, 198 4"
                    stroke="#39FF14"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </span>{" "}
              SPEAKS.
            </h1>
            <p className="text-white/50 text-xl max-w-xl mx-auto mt-6">
              {clients.length} live websites. Real businesses. Every one built in-house.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Client grid */}
      <section className="bg-bg py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {clients.map((client, i) => (
              <AnimateOnScroll key={client.url} delay={(i % 3) * 0.08}>
                <a
                  href={client.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-surface border border-white/5 hover:border-neon/40 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_24px_rgba(57,255,20,0.08)]"
                >
                  {/* Screenshot */}
                  <div className="relative aspect-[16/9] overflow-hidden bg-bg">
                    <Image
                      src={screenshotUrl(client.url)}
                      alt={`${client.name} website`}
                      fill
                      unoptimized
                      className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-neon/0 group-hover:bg-neon/10 transition-colors duration-300" />
                    {/* Visit badge */}
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="bg-neon text-bg font-display text-xs tracking-widest px-3 py-1 rounded">
                        VISIT ↗
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-5 flex items-start justify-between gap-4">
                    <div>
                      <p className="font-display text-white text-lg leading-tight mb-1">
                        {client.name}
                      </p>
                      <p className="text-white/40 text-xs">{client.display}</p>
                    </div>
                    <span className="shrink-0 border border-white/20 text-white/60 font-display text-xs tracking-widest px-2.5 py-1 rounded-full mt-0.5">
                      {client.industry}
                    </span>
                  </div>
                </a>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom callout */}
      <section className="bg-surface py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <AnimateOnScroll>
            <p className="font-display text-sm text-neon tracking-widest mb-4">AND COUNTING</p>
            <h2 className="font-display text-5xl md:text-6xl text-white mb-6">
              50+ BUSINESSES. YOURS COULD BE NEXT.
            </h2>
            <p className="text-white/50 text-lg mb-10">
              Every site above was built the same way — free call, clear scope, delivered on time.
            </p>
            <a
              href="/book"
              className="inline-block bg-neon text-bg font-bold px-10 py-4 rounded text-base hover:opacity-90 transition-opacity"
            >
              Book a Free Call
            </a>
          </AnimateOnScroll>
        </div>
      </section>

      <CTASection headline="LIKE WHAT YOU SEE? LET'S BUILD YOURS." />
    </>
  );
}
