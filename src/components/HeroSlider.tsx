"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    badge: "CUSTOM WEBSITES",
    headline: "STOP LOOKING LIKE YOUR COMPETITOR BUILT YOUR WEBSITE.",
    subhead:
      "Your website is the first thing a potential client judges you on. We make sure that judgement works in your favour every single time.",
    cta: { label: "See Website Work", href: "/websites" },
    accent: "Web",
  },
  {
    badge: "SOCIAL MEDIA MANAGEMENT",
    headline: "YOUR LAST POST WAS SIX WEEKS AGO. YOUR COMPETITOR'S WAS THIS MORNING.",
    subhead:
      "Consistency is what wins on social. Not talent, not budget — consistency. We handle it every month so you never fall off.",
    cta: { label: "See Social Work", href: "/social-media" },
    accent: "Social",
  },
  {
    badge: "VIDEO AND PHOTO",
    headline: "YOUR PHONE CAMERA ISN'T A BRAND STRATEGY.",
    subhead:
      "We shoot and edit brand content that makes your business look like it belongs at the top — because it does.",
    cta: { label: "See Video Work", href: "/videography" },
    accent: "Video",
  },
];

function WordByWord({ text, active }: { text: string; active: boolean }) {
  const words = text.split(" ");
  return (
    <span>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.3 + i * 0.06, duration: 0.4, ease: "easeOut" }}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  const goTo = useCallback((index: number) => {
    setIsAnimating(false);
    setTimeout(() => {
      setCurrent(index);
      setIsAnimating(true);
    }, 50);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-bg">
      {/* Background noise texture overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundSize: '200px',
      }} />

      {/* Neon accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-neon opacity-30" />

      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-5xl mx-auto px-6 text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-block border border-neon text-neon font-display text-sm tracking-[0.2em] px-4 py-1.5 rounded mb-8"
          >
            {slide.badge}
          </motion.div>

          {/* Headline */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white leading-tight mb-6">
            <WordByWord text={slide.headline} active={isAnimating} />
          </h1>

          {/* Subhead */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="text-muted text-lg md:text-xl max-w-2xl mx-auto mb-10"
          >
            {slide.subhead}
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href={slide.cta.href}
              className="bg-neon text-bg font-bold px-8 py-4 rounded hover:bg-neon-dim transition-colors"
            >
              {slide.cta.label}
            </Link>
            <Link
              href="/book"
              className="border border-white/30 text-white px-8 py-4 rounded hover:border-neon hover:text-neon transition-colors"
            >
              Book a Free Call
            </Link>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === current ? "bg-neon w-6" : "bg-white/30 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
