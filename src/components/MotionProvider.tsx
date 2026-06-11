"use client";

import { MotionConfig } from "framer-motion";

// reducedMotion="user" makes every framer-motion component in the tree honor
// the OS-level "reduce motion" setting automatically (transforms/layout are
// disabled, opacity is kept), so we don't have to gate each animation by hand.
export default function MotionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
