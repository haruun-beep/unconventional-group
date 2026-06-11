"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { lockScroll, unlockScroll } from "@/lib/scroll-lock";

function removeSplashCover() {
  // Hide rather than .remove(): this node is rendered by React in the root
  // layout, so physically removing it from the DOM corrupts React's
  // reconciliation and throws insertBefore/removeChild NotFoundError on the
  // next client-side navigation. Hiding keeps it a child of <body>.
  const el = document.getElementById("ug-splash-cover");
  if (el) el.style.display = "none";
}

const DURATION = 1800; // 1.8s — keep in sync with .ug-ring-draw in globals.css
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
      removeSplashCover();
      setShow(false);
      return;
    }

    setShow(true);

    // Our overlay now covers everything, so the pre-hydration cover can go.
    removeSplashCover();

    // Lock scroll while the intro is up (ref-counted — coexists with Nav).
    lockScroll();
    let locked = true;
    const unlock = () => {
      if (locked) {
        locked = false;
        unlockScroll();
      }
    };

    const autoTimer = setTimeout(() => dismiss(), DURATION);

    function dismiss() {
      // Mark seen only once it actually plays, so a closed tab mid-intro still
      // shows it next session, and React StrictMode's dev double-mount doesn't
      // suppress it.
      try {
        sessionStorage.setItem(KEY, "1");
      } catch {
        /* private mode — fine, just shows again next load */
      }
      setClosing(true);
      setTimeout(() => {
        setShow(false);
        unlock();
      }, FADE);
    }

    // Expose dismiss for the skip handler
    (window as unknown as { __ugDismissIntro?: () => void }).__ugDismissIntro =
      dismiss;

    return () => {
      clearTimeout(autoTimer);
      unlock();
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
      className={`ug-intro fixed inset-0 z-[9999] flex cursor-pointer flex-col items-center justify-center transition-opacity duration-700 ${
        closing ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      {/* Logo with tracing progress ring + glow halo */}
      <div className="relative flex h-[200px] w-[200px] items-center justify-center">
        {/* Soft beaming halo */}
        <span className="ug-halo" aria-hidden="true" />

        {/* Progress ring (rotated so it starts at 12 o'clock) */}
        <svg
          className="absolute inset-0 -rotate-90"
          viewBox="0 0 200 200"
          aria-hidden="true"
        >
          <circle
            cx="100"
            cy="100"
            r="92"
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="2"
          />
          <circle
            className="ug-ring-draw"
            cx="100"
            cy="100"
            r="92"
            fill="none"
            stroke="#39FF14"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>

        <Image
          src="/logo.png"
          alt="Unconventional Group"
          width={132}
          height={132}
          className="ug-logo relative z-10 rounded-full"
        />
      </div>

      {/* Tagline (decorative — real page <h1> lives in the hero) */}
      <p className="ug-reveal mt-9 px-4 text-center font-display text-3xl uppercase tracking-[0.14em] text-[#39FF14] sm:text-4xl">
        Edmonton&apos;s Growth Team
      </p>

      {/* Divider */}
      <span
        className="ug-reveal mt-4 h-px w-12 bg-[#39FF14]/40"
        aria-hidden="true"
      />

      {/* Slogan */}
      <p className="ug-reveal-2 mt-4 px-4 text-center font-body text-base text-white/70 sm:text-lg">
        We&apos;re all about{" "}
        <span className="font-semibold text-white">YOU!</span>
      </p>

      {/* Skip hint */}
      <span className="ug-reveal-2 absolute bottom-8 text-[11px] uppercase tracking-[0.2em] text-white/30">
        Tap to skip
      </span>
    </div>
  );
}
