"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
  direction?: "up" | "down" | "left" | "right" | "scale";
}

function getInitial(direction: Props["direction"]) {
  switch (direction) {
    case "left":  return { opacity: 0, x: -40, y: 0, scale: 1 };
    case "right": return { opacity: 0, x: 40, y: 0, scale: 1 };
    case "down":  return { opacity: 0, y: -28, x: 0, scale: 1 };
    case "scale": return { opacity: 0, scale: 0.88, y: 0, x: 0 };
    default:      return { opacity: 0, y: 32, x: 0, scale: 1 };
  }
}

export default function AnimateOnScroll({
  children,
  className,
  delay = 0,
  once = true,
  direction = "up",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "-60px" });

  const initial = getInitial(direction);
  const animate = inView
    ? { opacity: 1, y: 0, x: 0, scale: 1 }
    : initial;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={animate}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
