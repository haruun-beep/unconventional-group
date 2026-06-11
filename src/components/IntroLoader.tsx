"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const DURATION = 10000; // 10 seconds
const FADE = 700; // fade-out duration (ms)
const KEY = "ug-intro-seen";

export default function IntroLoader() {
  // null = undecided (avoids SSR flash), true = show, false = hide
  const [show, setShow] = useState<boolean | null>(null);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    // First visit this session only
    let seen = false;
    try {
      seen = sessionStorage.getItem(KEY) === "1";
    } catch {
      seen = false;
    }
    if (seen) {
      setShow(false);
      return;
    }

    setShow(true);
    try {
      sessionStorage.setItem(KEY, "1");
    } catch {
      /* private mode — still show once */
    }

    // Lock scroll while the intro is up
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const autoTimer = setTimeout(() => dismiss(), DURATION);

    function dismiss() {
      setClosing(true);
      setTimeout(() => {
        setShow(false);
        document.body.style.overflow = prevOverflow;
      }, FADE);
    }

    // Expose dismiss for the skip button
    (window as unknown as { __ugDismissIntro?: () => void }).__ugDismissIntro =
      dismiss;

    return () => {
      clearTimeout(autoTimer);
      document.body.style.overflow = prevOverflow;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!show) return null;

  const handleSkip = () =>
    (
      window as unknown as { __ugDismissIntro?: () => void }
    ).__ugDismissIntro?.();

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading Unconventional Group"
      onClick={handleSkip}
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0a0a] cursor-pointer transition-opacity duration-700 ${
        closing ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Beaming logo */}
      <div className="relative flex items-center justify-center">
        {/* Radiating beams */}
        <span className="ug-beam" />
        <span className="ug-beam ug-beam-2" />
        <span className="ug-beam ug-beam-3" />

        <Image
          src="/logo.png"
          alt="Unconventional Group"
          width={150}
          height={150}
          priority
          className="ug-logo-pulse relative z-10 rounded-full"
        />
      </div>

      {/* Tagline */}
      <h1 className="ug-fade-up mt-10 font-display text-3xl sm:text-4xl tracking-[0.2em] uppercase text-[#39FF14] glow text-center px-4">
        Edmonton&apos;s Growth Team
      </h1>

      {/* Slogan */}
      <p className="ug-fade-up-2 mt-3 font-body text-lg sm:text-xl text-white/80 text-center px-4">
        We&apos;re all about <span className="text-[#39FF14] font-semibold">YOU!</span>
      </p>

      {/* Loading bar */}
      <div className="ug-fade-up-2 mt-10 h-[3px] w-48 overflow-hidden rounded-full bg-white/10">
        <span className="ug-loadbar block h-full bg-[#39FF14]" />
      </div>

      {/* Skip */}
      <span className="ug-fade-up-2 mt-6 text-xs uppercase tracking-widest text-white/40">
        Tap anywhere to skip
      </span>
    </div>
  );
}
