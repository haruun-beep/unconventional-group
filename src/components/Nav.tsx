"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  { label: "Websites", href: "/websites" },
  { label: "Social Media", href: "/social-media" },
  { label: "Videography", href: "/videography" },
  { label: "Ad Management", href: "/ad-management" },
];

const growth = [
  { label: "Lead Generation", href: "/lead-generation" },
  { label: "Funnels & CRO", href: "/funnels-cro" },
  { label: "AI Visibility", href: "/ai-visibility" },
  { label: "E-Commerce Growth", href: "/ecommerce" },
];

const industries = [
  { label: "Contractors & Trades", href: "/industries/contractors" },
  { label: "Professional Services", href: "/industries/professional-services" },
  { label: "Home & Local Services", href: "/industries/home-services" },
  { label: "Restaurants", href: "/industries/restaurants" },
  { label: "Real Estate", href: "/industries/real-estate" },
];

const dropdowns = [
  { key: "services", label: "Services", items: services },
  { key: "growth", label: "Growth", items: growth },
  { key: "industries", label: "Industries", items: industries },
];

const mainLinks = [
  { label: "Past Work", href: "/our-work" },
  { label: "About", href: "/about" },
];

function Logo({ size = "default" }: { size?: "default" | "small" }) {
  const dim = size === "small" ? "h-14 w-14" : "h-[100px] w-[100px] md:h-48 md:w-48";
  return (
    <Link href="/" className="group flex items-center shrink-0">
      <Image
        src="/logo.png"
        alt="Unconventional Group"
        width={320}
        height={320}
        priority
        className={`${dim} transition-transform duration-300 group-hover:scale-105`}
      />
    </Link>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
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
          scrolled ? "bg-bg/95 backdrop-blur-md border-b border-neon/40" : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 h-28 md:h-48 flex items-center justify-between">
          <Logo />

          {/* Desktop links */}
          <div className="hidden xl:flex items-center gap-7">
            {dropdowns.map((dd) => {
              const active = dd.items.some((it) => it.href === pathname);
              const isOpen = openMenu === dd.key;
              return (
                <div
                  key={dd.key}
                  className="relative"
                  onMouseEnter={() => setOpenMenu(dd.key)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <button
                    className={`flex items-center gap-1.5 text-sm transition-colors ${
                      active ? "text-neon" : "text-white/65 hover:text-white"
                    }`}
                  >
                    {dd.label}
                    <span className={`text-[10px] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>▼</span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.18 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
                      >
                        <div className="bg-surface border border-white/10 rounded-xl p-2 w-60 shadow-2xl shadow-black/50">
                          {dd.items.map((it) => (
                            <Link
                              key={it.href}
                              href={it.href}
                              className={`block px-4 py-2.5 rounded-lg text-sm transition-colors ${
                                pathname === it.href
                                  ? "bg-neon/10 text-neon"
                                  : "text-white/65 hover:bg-white/5 hover:text-white"
                              }`}
                            >
                              {it.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}

            {mainLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors ${
                  pathname === link.href ? "text-neon" : "text-white/65 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/book"
              className="bg-neon text-bg font-bold text-sm px-5 py-2.5 rounded hover:opacity-90 transition-opacity"
            >
              Book a Call
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            className="xl:hidden flex flex-col gap-1.5 p-2"
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
            className="fixed inset-0 z-40 bg-bg overflow-y-auto px-8 pt-32 pb-12"
          >
            <nav className="flex flex-col gap-8">
              {dropdowns.map((dd) => (
                <div key={dd.key} className="flex flex-col gap-3">
                  <p className="font-display text-xs tracking-[0.3em] text-white/30">{dd.label.toUpperCase()}</p>
                  {dd.items.map((it) => (
                    <Link
                      key={it.href}
                      href={it.href}
                      className={`font-display text-2xl transition-colors ${
                        pathname === it.href ? "text-neon" : "text-white hover:text-neon"
                      }`}
                    >
                      {it.label}
                    </Link>
                  ))}
                </div>
              ))}

              <div className="h-px bg-white/10" />

              <div className="flex flex-col gap-3">
                {mainLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`font-display text-2xl transition-colors ${
                      pathname === link.href ? "text-neon" : "text-white hover:text-neon"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <Link
                href="/book"
                className="inline-block bg-neon text-bg font-display text-2xl px-8 py-3 rounded hover:opacity-90 transition-opacity w-fit"
              >
                BOOK A CALL
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
