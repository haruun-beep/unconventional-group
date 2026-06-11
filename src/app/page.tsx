import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import TestimonialCard from "@/components/TestimonialCard";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";

const DESK_PHOTO =
  "https://images.squarespace-cdn.com/content/v1/6964898274230030ca027d02/1768609069084-IEWNEZZR5K59B6RFOWQH/unsplash-image-DtDlVpy-vvQ.jpg";

const services = [
  {
    title: "Websites",
    tagline: "A site that makes people trust you before you say a word.",
    href: "/websites",
    img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    num: "01",
  },
  {
    title: "Social Media",
    tagline: "Your brand, showing up sharp and consistent — backed by a team that has your back.",
    href: "/social-media",
    img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    num: "02",
  },
  {
    title: "Videography",
    tagline: "Content that looks like you spent 10x what you did.",
    href: "/videography",
    img: "/excavator.jpg",
    num: "03",
  },
  {
    title: "Ad Management",
    tagline: "Facebook & Instagram ads that book real jobs — not just likes.",
    href: "/ad-management",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    num: "04",
  },
];

const growthServices = [
  {
    title: "Lead Generation",
    tagline: "Campaigns engineered to fill your calendar with qualified jobs — not just clicks.",
    href: "/lead-generation",
    num: "01",
  },
  {
    title: "Funnels & CRO",
    tagline: "Turn the traffic you already have into twice the booked work.",
    href: "/funnels-cro",
    num: "02",
  },
  {
    title: "AI Visibility",
    tagline: "Get found when your customers ask ChatGPT & Google AI who to hire.",
    href: "/ai-visibility",
    num: "03",
  },
  {
    title: "E-Commerce Growth",
    tagline: "More traffic, higher conversion, bigger carts — for online stores.",
    href: "/ecommerce",
    num: "04",
  },
];

const industries = [
  {
    name: "Contractors & Trades",
    blurb: "Builders, renos, electrical, demolition, HVAC, landscaping.",
    href: "/industries/contractors",
  },
  {
    name: "Professional Services",
    blurb: "Lawyers, clinics, accountants, consultants, agencies.",
    href: "/industries/professional-services",
  },
  {
    name: "Home & Local Services",
    blurb: "Movers, cleaners, junk removal, pest control, lawn care.",
    href: "/industries/home-services",
  },
  {
    name: "Restaurants",
    blurb: "Cafes, restaurants & food — social, video & websites.",
    href: "/industries/restaurants",
  },
  {
    name: "Real Estate",
    blurb: "Agents, brokerages, developers, property management.",
    href: "/industries/real-estate",
  },
];

const clients = [
  "25/7 Construction",
  "SA Renovations",
  "Compass Place",
  "Cena Catering",
  "Performance Business Advisory",
  "BKM Homes Inc",
  "Canes Contracting",
  "Damn Good Electric",
  "KA Bright Clean Co",
  "Alberta Trusted Movers",
  "Mesh Moving",
  "SpeedLink Telecom",
  "Zebra Demolition",
  "Metropolitan Rockabilly",
  "Matt Nicklasson Construction",
  "Zebra Landscaping",
  "Foster's Moving",
  "Fuel Clinic",
];

const testimonials = [
  {
    name: "Matt Nicklasson",
    company: "Matt Nicklasson Construction",
    quote:
      "We recently had our website built by Haruun and the entire experience was exceptional from start to finish. He was professional, creative, and highly responsive to our needs. Highly recommend!",
  },
  {
    name: "John Rwihangana",
    company: "Mesh Moving Services",
    quote:
      "Over the past week with $70 in ad spend, they helped us book 5 additional jobs! I would highly recommend them for managing your ads.",
  },
  {
    name: "Dana Schick",
    company: "DS Drywall Services",
    quote:
      "Loved how easy the team at Unconventional Media made the entire process! Communication was always clear and they made a fantastic site for my business.",
  },
  {
    name: "Dini Arkangelo",
    company: "Zebra Demolition",
    quote:
      "We hired Unconventional Group to build our website and they did an excellent job. They were responsive, detail-oriented, and very easy to work with. The final product turned out great.",
  },
];

export default function Home() {
  const marqueeItems = [...clients, ...clients];

  return (
    <>
      <HeroSlider />

      {/* Client logo marquee strip */}
      <div className="bg-surface border-y border-white/8 py-4 overflow-hidden">
        <div className="marquee-track">
          <div className="marquee-content">
            {marqueeItems.map((c, i) => (
              <span
                key={i}
                className="mx-10 font-display text-xs tracking-[0.3em] text-white/28 whitespace-nowrap uppercase"
              >
                {c}
                <span className="ml-10 text-neon/20">·</span>
              </span>
            ))}
          </div>
          <div className="marquee-content" aria-hidden="true">
            {marqueeItems.map((c, i) => (
              <span
                key={i}
                className="mx-10 font-display text-xs tracking-[0.3em] text-white/28 whitespace-nowrap uppercase"
              >
                {c}
                <span className="ml-10 text-neon/20">·</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Services */}
      <section className="bg-bg py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll>
            <p className="font-display text-xs text-neon tracking-[0.35em] text-center mb-3">
              WHAT WE DO
            </p>
            <h2 className="font-display text-5xl md:text-7xl text-white text-center mb-4 leading-[0.92]">
              FOUR SERVICES.
              <br />
              ONE TEAM.
            </h2>
            <p className="text-white/35 text-center mb-16 text-sm max-w-sm mx-auto">
              Everything in-house. No outsourcing. You talk to us directly.
            </p>
          </AnimateOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s, i) => (
              <AnimateOnScroll key={s.title} delay={i * 0.09}>
                <Link href={s.href} className="group block h-full">
                  <div className="relative rounded-xl overflow-hidden h-full flex flex-col bg-surface border border-white/8 hover:border-neon/25 transition-all duration-400 card-hover-border">
                    {/* Photo thumbnail */}
                    <div
                      className="h-52 w-full flex-shrink-0 relative overflow-hidden"
                    >
                      <div
                        className="absolute inset-0 service-card-img"
                        style={{
                          backgroundImage: `url('${s.img}')`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      />
                      <div className="absolute inset-0 bg-black/45 group-hover:bg-black/35 transition-colors duration-400" />
                      <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
                      {/* Service number */}
                      <span className="absolute top-4 left-4 font-display text-xs text-white/30 tracking-[0.2em]">
                        {s.num}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <p className="font-display text-neon text-xs tracking-[0.3em] mb-3">
                        {s.title.toUpperCase()}
                      </p>
                      <h3 className="font-display text-xl text-white mb-4 leading-snug flex-1">
                        {s.tagline}
                      </h3>
                      <div className="mt-auto">
                        <div className="flex items-center gap-1.5 text-neon text-sm font-semibold group-hover:gap-2.5 transition-all duration-200">
                          <span>Learn more</span>
                          <span>→</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Systems */}
      <section className="bg-surface py-28 px-6 border-t border-white/8">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll>
            <p className="font-display text-xs text-neon tracking-[0.35em] text-center mb-3">
              GROWTH SYSTEMS
            </p>
            <h2 className="font-display text-5xl md:text-7xl text-white text-center mb-4 leading-[0.92]">
              BUILT TO
              <br />
              DRIVE REVENUE.
            </h2>
            <p className="text-white/35 text-center mb-16 text-sm max-w-md mx-auto">
              Higher-leverage offers that turn attention into booked, paying work.
            </p>
          </AnimateOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {growthServices.map((s, i) => (
              <AnimateOnScroll key={s.title} delay={i * 0.09}>
                <Link href={s.href} className="group block h-full">
                  <div className="relative rounded-xl h-full flex flex-col bg-bg border border-white/8 hover:border-neon/30 transition-all duration-300 card-hover-border p-7">
                    <p className="font-display text-5xl text-neon/70 mb-4">{s.num}</p>
                    <p className="font-display text-neon text-xs tracking-[0.3em] mb-2">
                      {s.title.toUpperCase()}
                    </p>
                    <h3 className="font-display text-xl text-white mb-5 leading-snug flex-1">
                      {s.tagline}
                    </h3>
                    <div className="mt-auto flex items-center gap-1.5 text-neon text-sm font-semibold group-hover:gap-2.5 transition-all duration-200">
                      <span>Learn more</span>
                      <span>→</span>
                    </div>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us — split section */}
      <section className="bg-bg py-28 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Photo side */}
          <AnimateOnScroll direction="left">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url('${DESK_PHOTO}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="absolute inset-0 bg-black/20" />
              {/* Green bottom accent bar */}
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-neon glow-line" />
              {/* Floating stat */}
              <div className="absolute bottom-6 right-6 bg-bg/90 backdrop-blur-sm border border-neon/25 rounded-xl p-4 min-w-[130px]">
                <p className="font-display text-3xl text-neon glow">Under 5 Days</p>
                <p className="text-white/45 text-xs mt-0.5">Avg. Delivery</p>
              </div>
              {/* Top-left badge */}
              <div className="absolute top-6 left-6 border border-neon/30 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-1.5">
                <p className="font-display text-neon text-xs tracking-[0.2em]">EDMONTON, AB</p>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Text side */}
          <AnimateOnScroll direction="right">
            <p className="font-display text-xs text-neon tracking-[0.35em] mb-4">
              WHY UNCONVENTIONAL
            </p>
            <h2 className="font-display text-5xl md:text-6xl text-white leading-[0.93] mb-6">
              WE BUILD IT.
              <br />
              YOU OWN IT.
              <br />
              WE STAY.
            </h2>
            <div className="w-14 h-[3px] bg-neon mb-8 glow-line" />
            <p className="text-white/55 text-lg leading-relaxed mb-9">
              Edmonton-based. 50+ businesses served across Canada. We&apos;ve built for demolition companies,
              electricians, caterers, contractors — every industry. Everything is done in-house.
              No outsourcing. No disappearing after the invoice.
            </p>
            <ul className="flex flex-col gap-3 mb-10">
              {[
                "Built from scratch — no templates.",
                "You talk to us directly. Always.",
                "We don't ghost. Ever.",
                "Your success is our reputation.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/60 text-[15px]">
                  <span className="text-neon text-sm mt-0.5 shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/about"
              className="inline-block border border-neon text-neon font-bold px-7 py-3 rounded text-sm tracking-wide hover:bg-neon hover:text-bg transition-all duration-200"
            >
              Our Story →
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Odin — free audit band */}
      <section className="bg-surface border-t border-white/8 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <AnimateOnScroll>
            <div className="relative bg-bg border border-neon/20 rounded-2xl p-8 md:p-12 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-neon/40 to-transparent" />
              <div className="grid md:grid-cols-[1fr_auto] gap-8 md:gap-12 items-center">
                <div>
                  <p className="font-display text-xs text-neon tracking-[0.35em] mb-3">
                    THE ODIN SYSTEM
                  </p>
                  <h2 className="font-display text-3xl md:text-4xl text-white leading-[0.95] mb-4">
                    GET A FREE WEBSITE AUDIT.
                  </h2>
                  <p className="text-white/55 text-base leading-relaxed max-w-xl">
                    Our Odin system analyzes your homepage across five performance dimensions —
                    mobile, performance, conversion, search visibility, and credibility — and
                    returns a structured scorecard in about 30 seconds. No obligation.
                  </p>
                </div>
                <Link
                  href="/odin"
                  className="inline-block bg-neon text-bg font-bold px-8 py-4 rounded text-sm tracking-wide hover:opacity-90 transition-opacity whitespace-nowrap shrink-0"
                >
                  Run a Free Audit →
                </Link>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="bg-surface py-28 px-6 border-t border-white/8">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll>
            <p className="font-display text-xs text-neon tracking-[0.35em] text-center mb-3">
              INDUSTRIES WE SERVE
            </p>
            <h2 className="font-display text-5xl md:text-7xl text-white text-center mb-4 leading-[0.92]">
              WE SPEAK
              <br />
              YOUR INDUSTRY.
            </h2>
            <p className="text-white/35 text-center mb-16 text-sm max-w-md mx-auto">
              We&apos;ve grown businesses across Canada — and we know what actually works in your
              corner of the market.
            </p>
          </AnimateOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {industries.map((ind, i) => (
              <AnimateOnScroll key={ind.name} delay={i * 0.09}>
                <Link href={ind.href} className="group block h-full">
                  <div className="relative rounded-xl h-full flex flex-col bg-bg border border-white/8 hover:border-neon/30 transition-all duration-300 card-hover-border p-7">
                    <h3 className="font-display text-2xl text-white mb-3 leading-snug group-hover:text-neon transition-colors">
                      {ind.name}
                    </h3>
                    <p className="text-white/45 text-sm leading-relaxed flex-1">{ind.blurb}</p>
                    <div className="mt-5 flex items-center gap-1.5 text-neon text-sm font-semibold group-hover:gap-2.5 transition-all duration-200">
                      <span>View industry</span>
                      <span>→</span>
                    </div>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-bg py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimateOnScroll>
            <p className="font-display text-xs text-neon tracking-[0.35em] text-center mb-3">
              SOCIAL PROOF
            </p>
            <h2 className="font-display text-5xl md:text-6xl text-white mb-3 text-center leading-[0.93]">
              DON&apos;T TAKE OUR WORD FOR IT.
            </h2>
            <p className="text-white/35 text-center mb-14 text-sm">
              50+ businesses. These are some of them.
            </p>
          </AnimateOnScroll>
          <div className="grid sm:grid-cols-2 gap-5">
            {testimonials.map((t, i) => (
              <AnimateOnScroll key={i} delay={i * 0.09}>
                <TestimonialCard {...t} />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <FAQ />

      <CTASection bgUrl="/edmonton-night.jpg" />
    </>
  );
}
