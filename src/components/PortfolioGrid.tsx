"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type ServiceTag = "Website" | "Social" | "Video" | "Ads";

interface PortfolioItem {
  id: number;
  client: string;
  industry: string;
  tag: ServiceTag;
  gradient: string;
  accentColor: string;
  tall?: boolean;
}

const tagStyles: Record<ServiceTag, string> = {
  Website: "bg-white/10 text-white border-white/25",
  Social: "bg-white/10 text-white border-white/25",
  Video: "bg-neon/15 text-neon border-neon/30",
  Ads: "bg-neon/15 text-neon border-neon/30",
};

const items: PortfolioItem[] = [
  {
    id: 1,
    client: "Client Name",
    industry: "Home Services",
    tag: "Website",
    gradient: "from-white/5 via-bg to-bg",
    accentColor: "#ffffff",
    tall: true,
  },
  {
    id: 2,
    client: "Client Name",
    industry: "Retail",
    tag: "Social",
    gradient: "from-white/5 via-bg to-bg",
    accentColor: "#ffffff",
  },
  {
    id: 3,
    client: "Client Name",
    industry: "Fitness",
    tag: "Video",
    gradient: "from-neon/10 via-bg to-bg",
    accentColor: "#39FF14",
  },
  {
    id: 4,
    client: "Client Name",
    industry: "Food & Beverage",
    tag: "Website",
    gradient: "from-white/5 via-bg to-bg",
    accentColor: "#ffffff",
  },
  {
    id: 5,
    client: "Client Name",
    industry: "Professional Services",
    tag: "Ads",
    gradient: "from-neon/8 via-bg to-bg",
    accentColor: "#39FF14",
    tall: true,
  },
  {
    id: 6,
    client: "Client Name",
    industry: "Healthcare",
    tag: "Video",
    gradient: "from-neon/10 via-bg to-bg",
    accentColor: "#39FF14",
  },
  {
    id: 7,
    client: "Client Name",
    industry: "Real Estate",
    tag: "Website",
    gradient: "from-white/5 via-bg to-bg",
    accentColor: "#ffffff",
  },
  {
    id: 8,
    client: "Client Name",
    industry: "Construction",
    tag: "Social",
    gradient: "from-white/5 via-bg to-bg",
    accentColor: "#ffffff",
  },
];

const filters: (ServiceTag | "All")[] = ["All", "Website", "Social", "Video", "Ads"];

export default function PortfolioGrid() {
  const [active, setActive] = useState<ServiceTag | "All">("All");

  const filtered = active === "All" ? items : items.filter((i) => i.tag === active);

  return (
    <div>
      {/* Filter tabs */}
      <div className="flex gap-3 mb-10 flex-wrap">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`font-display text-sm tracking-widest px-5 py-2 rounded transition-all ${
              active === f
                ? "bg-neon text-bg"
                : "border border-white/20 text-white/50 hover:border-neon hover:text-neon"
            }`}
          >
            {f.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="columns-1 sm:columns-2 gap-4 space-y-4">
        <AnimatePresence>
          {filtered.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="break-inside-avoid group relative rounded-xl overflow-hidden cursor-pointer border border-white/5 hover:border-white/20 transition-colors"
              style={{ height: item.tall ? "320px" : "240px" }}
            >
              {/* Gradient thumbnail */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`}
                style={{
                  backgroundImage: `
                    linear-gradient(135deg, ${item.accentColor}12 0%, transparent 60%),
                    repeating-linear-gradient(
                      45deg,
                      rgba(255,255,255,0.015) 0px,
                      rgba(255,255,255,0.015) 1px,
                      transparent 1px,
                      transparent 14px
                    )
                  `,
                }}
              />

              {/* Decorative corner accent */}
              <div
                className="absolute top-0 left-0 w-24 h-24 opacity-20 rounded-br-full"
                style={{ background: `radial-gradient(circle at top left, ${item.accentColor}, transparent 70%)` }}
              />

              {/* Placeholder label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <p
                  className="font-display text-xs tracking-[0.3em] opacity-20 px-4 text-center"
                  style={{ color: item.accentColor }}
                >
                  ADD CLIENT PHOTO
                </p>
              </div>

              {/* Info bar — always visible */}
              <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between bg-gradient-to-t from-black/60 to-transparent">
                <div>
                  <p className="text-white/80 text-sm font-semibold">{item.client}</p>
                  <p className="text-white/40 text-xs">{item.industry}</p>
                </div>
                <span className={`text-xs border px-2 py-0.5 rounded-full ${tagStyles[item.tag]}`}>
                  {item.tag}
                </span>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-neon/0 group-hover:bg-neon/90 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
                  <p className="font-display text-3xl text-bg mb-1">{item.client}</p>
                  <p className="text-bg/70 text-sm">{item.industry}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <p className="text-white/30 text-sm text-center mt-10">
        Real client work coming soon — drop your thumbnails in <code className="text-neon/60">src/components/PortfolioGrid.tsx</code>
      </p>
    </div>
  );
}
