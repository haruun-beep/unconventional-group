"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    badge: "CUSTOM WEBSITES",
    headline: "STOP LOOKING LIKE YOUR COMPETITOR BUILT YOUR WEBSITE.",
    subhead: "Your website is the first thing a potential client judges you on. We make sure that judgement works in your favour every single time.",
    cta: { label: "See Website Work", href: "/websites" },
    accent: "#39FF14",
  },
  {
    badge: "SOCIAL MEDIA MANAGEMENT",
    headline: "YOUR LAST POST WAS SIX WEEKS AGO. YOUR COMPETITOR'S WAS THIS MORNING.",
    subhead: "Consistency is what wins on social. Not talent, not budget — consistency. We handle it every month so you never fall off.",
    cta: { label: "See Social Work", href: "/social-media" },
    accent: "#39FF14",
  },
  {
    badge: "VIDEO AND PHOTO",
    headline: "YOUR PHONE CAMERA ISN'T A BRAND STRATEGY.",
    subhead: "We shoot and edit brand content that makes your business look like it belongs at the top — because it does.",
    cta: { label: "See Video Work", href: "/videography" },
    accent: "#39FF14",
  },
];

function WordByWord({ text, active }: { text: string; active: boolean }) {
  const words = text.split(" ");
  return (
    <span>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 24 }}
          animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ delay: 0.2 + i * 0.055, duration: 0.4, ease: "easeOut" }}
          className="inline-block mr-[0.22em]"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  const goTo = useCallback((index: number) => {
    setCurrent(index);
    setAnimKey((k) => k + 1);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => {
        const next = (c + 1) % slides.length;
        setAnimKey((k) => k + 1);
        return next;
      });
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative h-screen min-h-[640px] flex items-center justify-center overflow-hidden bg-bg">

      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-60" />

      {/* Radial glow from center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 60% at 50% 55%, rgba(57,255,20,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Large faded slide number / decorative text */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`bg-${current}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute right-0 bottom-16 font-display text-[22vw] leading-none text-neon/[0.03] select-none pointer-events-none pr-6"
        >
          {String(current + 1).padStart(2, "0")}
        </motion.div>
      </AnimatePresence>

      {/* Neon bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-neon/20" />

      {/* Slide content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 max-w-5xl mx-auto px-6 text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 border border-neon/60 text-neon font-display text-xs tracking-[0.25em] px-4 py-1.5 rounded mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse" />
            {slide.badge}
          </motion.div>

          {/* Headline */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-[82px] text-white leading-[1.05] mb-7 tracking-tight">
            <WordByWord text={slide.headline} active={true} key={animKey} />
          </h1>

          {/* Subhead */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.95 }}
            className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            {slide.subhead}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.15 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href={slide.cta.href}
              className="bg-neon text-bg font-bold px-8 py-4 rounded hover:opacity-90 transition-colors text-sm tracking-wide"
            >
              {slide.cta.label}
            </Link>
            <Link
              href="/book"
              className="border border-white/20 text-white px-8 py-4 rounded hover:border-neon hover:text-neon transition-colors text-sm tracking-wide"
            >
              Book a Free Call
            </Link>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Dot nav */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-1.5 rounded-full transition-all duration-400 ${
              i === current ? "bg-neon w-8" : "bg-white/25 w-1.5 hover:bg-white/50"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
