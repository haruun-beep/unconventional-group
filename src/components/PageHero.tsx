"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface Props {
  badge: string;
  headline: string;
  subhead: string;
  bgUrl: string;
  cta?: { label: string; href: string };
  secondaryCta?: boolean;
  overlayStrength?: "light" | "medium" | "heavy";
}

export default function PageHero({
  badge,
  headline,
  subhead,
  bgUrl,
  cta,
  secondaryCta = true,
  overlayStrength = "medium",
}: Props) {
  const overlayOpacity =
    overlayStrength === "light" ? "bg-black/50" :
    overlayStrength === "heavy" ? "bg-black/80" :
    "bg-black/68";

  return (
    <section
      className="relative min-h-[80vh] flex items-end overflow-hidden"
      style={{
        backgroundImage: `url('${bgUrl}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className={`absolute inset-0 ${overlayOpacity}`} />
      {/* Left gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-bg to-transparent" />
      {/* Subtle neon accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 70% 10%, rgba(57,255,20,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-44 md:pt-56 pb-24">
        <motion.p
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-neon text-xs tracking-[0.35em] mb-5"
        >
          {badge}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, x: -55 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="font-display text-[clamp(2.8rem,7.5vw,5.8rem)] text-white leading-[0.92] tracking-tight max-w-4xl mb-4"
        >
          {headline}
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.7 }}
          className="w-16 h-[3px] bg-neon mb-7 origin-left"
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
          className="text-white/65 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
        >
          {subhead}
        </motion.p>

        {(cta || secondaryCta) && (
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            {cta && (
              <Link
                href={cta.href}
                className="inline-block bg-neon text-bg font-bold px-8 py-4 rounded text-sm tracking-wide hover:opacity-90 transition-opacity"
              >
                {cta.label}
              </Link>
            )}
            {secondaryCta && (
              <Link
                href="/book"
                className="inline-block border border-white/25 text-white px-8 py-4 rounded text-sm tracking-wide hover:border-neon hover:text-neon transition-all duration-200"
              >
                Book a Free Call
              </Link>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}
