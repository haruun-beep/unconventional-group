"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Websites", href: "/websites" },
  { label: "Social Media", href: "/social-media" },
  { label: "Videography", href: "/videography" },
  { label: "Ad Management", href: "/ad-management" },
  { label: "Our Work", href: "/our-work" },
  { label: "About", href: "/about" },
  { label: "Bespoke Automations", href: "https://bespokeautomations.ca", external: true },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-bg/95 backdrop-blur-md border-b border-neon" : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/logo.jpg"
              alt="Unconventional Group"
              width={68}
              height={68}
              className="h-[68px] w-[68px] transition-all duration-300 group-hover:drop-shadow-[0_0_14px_#39FF14]"
              priority
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-6">
            {links.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/60 hover:text-neon transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm transition-colors ${
                    pathname === link.href ? "text-neon" : "text-white/60 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
            <Link
              href="/book"
              className="bg-neon text-bg font-bold text-sm px-5 py-2 rounded hover:opacity-90 transition-colors"
            >
              Book a Call
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </nav>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-bg flex flex-col justify-center px-10"
          >
            {/* Mobile logo */}
            <div className="absolute top-3 left-5">
              <Image src="/logo.jpg" alt="Unconventional Group" width={58} height={58} className="h-[58px] w-[58px]" />
            </div>

            <nav className="flex flex-col gap-6">
              {links.map((link, i) =>
                link.external ? (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                    className="font-display text-4xl text-white/50 hover:text-neon transition-colors"
                  >
                    {link.label}
                  </motion.a>
                ) : (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                  >
                    <Link
                      href={link.href}
                      className={`font-display text-4xl transition-colors ${
                        pathname === link.href ? "text-neon" : "text-white hover:text-neon"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                )
              )}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: links.length * 0.07 }}
              >
                <Link
                  href="/book"
                  className="inline-block bg-neon text-bg font-display text-2xl px-8 py-3 rounded hover:opacity-90 transition-colors mt-4"
                >
                  BOOK A CALL
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
