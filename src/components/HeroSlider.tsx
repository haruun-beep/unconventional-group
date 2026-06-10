"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const HERO_BG = "/edmonton-hero.jpg";

export default function HeroSlider() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: `url('${HERO_BG}')`,
        backgroundSize: "cover",
        backgroundPosition: "center 55%",
      }}
    >
      {/* Dark base overlay */}
      <div className="absolute inset-0 bg-black/62" />
      {/* Left-side gradient for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/15 to-transparent" />
      {/* Bottom fade into site bg */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg to-transparent" />
      {/* Subtle neon tint top-right */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 80% 15%, rgba(57,255,20,0.06) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-44 md:pt-56 pb-28">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 border border-neon/50 text-neon font-display text-xs tracking-[0.25em] px-4 py-2 rounded mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse" />
          EDMONTON&apos;S GROWTH TEAM
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="font-display text-[clamp(3.2rem,9vw,7.5rem)] text-white leading-[0.9] tracking-tight max-w-4xl mb-5"
        >
          WE BUILD BRANDS THAT WIN ONLINE.
        </motion.h1>

        {/* Neon underline */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.78 }}
          className="w-20 h-[3px] bg-neon mb-8 origin-left"
        />

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          className="text-white/68 text-lg md:text-xl max-w-xl mb-11 leading-relaxed"
        >
          Websites, social media, videography & ad management — all in-house.
          50+ businesses across Canada trust us to grow their brand.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.65 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="/book"
            className="inline-block bg-neon text-bg font-bold px-9 py-4 rounded text-sm tracking-wider hover:opacity-90 transition-opacity"
          >
            Book a Free Call
          </Link>
          <Link
            href="/our-work"
            className="inline-block border border-white/25 text-white px-9 py-4 rounded text-sm tracking-wider hover:border-neon hover:text-neon transition-all duration-200"
          >
            See Our Work →
          </Link>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.7 }}
          className="flex flex-wrap gap-x-12 gap-y-5 mt-16 pt-8 border-t border-white/10"
        >
          {[
            { value: "50+", label: "Businesses Served" },
            { value: "4", label: "Services, One Team" },
            { value: "Under 5 Days", label: "Avg. Site Delivery" },
            { value: "Canada-Wide", label: "Reach" },
          ].map((s) => (
            <div key={s.value}>
              <p className="font-display text-3xl md:text-4xl text-neon glow">{s.value}</p>
              <p className="text-white/40 text-xs mt-0.5 tracking-wide">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.7, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-white/25 text-[10px] font-display tracking-[0.3em]">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.7, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-neon/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
