"use client";

import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

/**
 * Card wrapper with two cursor-driven effects:
 *  - a soft radial "spotlight" that follows the pointer (via CSS vars), and
 *  - optional subtle 3D tilt toward the cursor.
 * Degrades to a plain container under reduced-motion.
 *
 * Pair with the `.spotlight` class (see globals.css) for the glow visual.
 */
export function SpotlightCard({
  children,
  className,
  tilt = false,
  maxTilt = 6,
}: {
  children: ReactNode;
  className?: string;
  tilt?: boolean;
  /** Max tilt in degrees. */
  maxTilt?: number;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const srx = useSpring(rotateX, { stiffness: 200, damping: 18 });
  const sry = useSpring(rotateY, { stiffness: 200, damping: 18 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    // Move the spotlight (CSS custom properties read by .spotlight::after)
    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);
    if (tilt && !reduce) {
      rotateY.set((px - 0.5) * maxTilt * 2);
      rotateX.set(-(py - 0.5) * maxTilt * 2);
    }
  };

  const reset = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={
        tilt && !reduce
          ? { rotateX: srx, rotateY: sry, transformPerspective: 900, transformStyle: "preserve-3d" }
          : undefined
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}
