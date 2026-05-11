"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type ServiceTag = "Website" | "Social" | "Video";

interface PortfolioItem {
  id: number;
  client: string;
  tag: ServiceTag;
  bg: string;
}

const tagColors: Record<ServiceTag, string> = {
  Website: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  Social: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  Video: "bg-neon/20 text-neon border-neon/30",
};

// Placeholder items — replace thumbnails once you have real images
const items: PortfolioItem[] = [
  { id: 1, client: "Client Name", tag: "Website", bg: "bg-zinc-800" },
  { id: 2, client: "Client Name", tag: "Social", bg: "bg-zinc-900" },
  { id: 3, client: "Client Name", tag: "Video", bg: "bg-zinc-800" },
  { id: 4, client: "Client Name", tag: "Website", bg: "bg-zinc-900" },
  { id: 5, client: "Client Name", tag: "Social", bg: "bg-zinc-800" },
  { id: 6, client: "Client Name", tag: "Video", bg: "bg-zinc-900" },
  { id: 7, client: "Client Name", tag: "Website", bg: "bg-zinc-800" },
  { id: 8, client: "Client Name", tag: "Social", bg: "bg-zinc-900" },
];

const filters: (ServiceTag | "All")[] = ["All", "Website", "Social", "Video"];

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
                : "border border-white/20 text-muted hover:border-neon hover:text-neon"
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
              className="break-inside-avoid group relative rounded-xl overflow-hidden cursor-pointer"
              style={{ height: item.id % 3 === 0 ? "320px" : "240px" }}
            >
              {/* Thumbnail placeholder */}
              <div
                className={`${item.bg} w-full h-full flex items-center justify-center`}
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(45deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 12px)",
                }}
              >
                <p className="text-white/20 text-xs font-display tracking-widest">
                  ADD THUMBNAIL
                </p>
              </div>

              {/* Info bar */}
              <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between">
                <p className="text-muted text-xs">{item.client}</p>
                <span
                  className={`text-xs border px-2 py-0.5 rounded-full ${tagColors[item.tag]}`}
                >
                  {item.tag}
                </span>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-neon/0 group-hover:bg-neon/90 transition-all duration-300 flex items-center justify-center">
                <p className="font-display text-4xl text-bg opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
                  {item.client}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
