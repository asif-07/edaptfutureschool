"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Scroll-triggered "fade + rise" reveal.
 * Used across sections for consistent, staggered entrance animations.
 * Honors prefers-reduced-motion automatically.
 */

type RevealProps = {
  children: ReactNode;
  /** Delay (s) before this element animates — use for manual stagger. */
  delay?: number;
  /** Pixels to rise from. */
  y?: number;
  /** Add a subtle blur-in for a softer, more premium entrance. */
  blur?: boolean;
  className?: string;
  as?: "div" | "section" | "li" | "span";
};

export function Reveal({ children, delay = 0, y = 24, blur = false, className, as = "div" }: RevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y, filter: blur ? "blur(8px)" : "blur(0px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}

/** Stagger container: children with `RevealItem` animate in sequence. */
const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export function RevealGroup({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({ children, className }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div className={className} variants={reduce ? { hidden: { opacity: 0 }, show: { opacity: 1 } } : itemVariants}>
      {children}
    </motion.div>
  );
}
