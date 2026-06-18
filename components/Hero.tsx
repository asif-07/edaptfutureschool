"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, ChevronDown, MapPin } from "lucide-react";
import { SITE } from "@/lib/site";
import { CountUp } from "@/components/motion/CountUp";

/**
 * Full-viewport dark hero.
 * Kept light on effects: a soft animated gradient glow, a gentle word-by-word
 * fade-and-rise headline and count-up stats. Transform/opacity only.
 */

// Headline split into words so each can fade in gently in sequence.
const LINE_1 = ["The", "School", "Built", "for", "the"];
const LINE_2 = ["AI", "Generation"]; // rendered with the brand gradient

const wordContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.12 } },
};
const word: Variants = {
  hidden: { opacity: 0, y: "0.4em" },
  show: { opacity: 1, y: "0em", transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export function Hero() {
  return (
    <section
      id="top"
      className="grain relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-ink pt-20"
    >
      {/* Soft animated gradient glow */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute left-1/2 top-1/3 h-[80vmin] w-[80vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-glow blur-2xl animate-glow-drift" />
        {/* faint grid lines for editorial depth */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      </div>

      <div className="container-x relative z-10 flex flex-col items-center text-center">
        {/* Eyebrow */}
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm"
        >
          <MapPin className="h-3.5 w-3.5 text-electric" aria-hidden="true" />
          Inkel City, Malappuram, Kerala
        </motion.span>

        {/* Word-by-word headline */}
        <motion.h1
          variants={wordContainer}
          initial="hidden"
          animate="show"
          className="max-w-4xl font-display text-hero font-bold text-white"
        >
          {LINE_1.map((w, i) => (
            <motion.span key={`a-${i}`} variants={word} className="mr-[0.25em] inline-block">
              {w}
            </motion.span>
          ))}
          <span className="inline-block">
            {LINE_2.map((w, i) => (
              <motion.span
                key={`b-${i}`}
                variants={word}
                className="mr-[0.25em] inline-block bg-brand-gradient bg-clip-text text-transparent"
              >
                {w}
              </motion.span>
            ))}
          </span>
        </motion.h1>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-xl text-base text-white/65 sm:text-lg"
        >
          Plus One admissions are open. <span className="text-white">Come learn, build and find your footing.</span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a href="#enquiry" className="btn-gradient w-full sm:w-auto">
            Apply Now <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <a href="#streams" className="btn-outline w-full sm:w-auto">
            Explore Streams
          </a>
        </motion.div>

        {/* Stat strip with count-up */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-white/55 sm:gap-x-10"
        >
          <Stat to={2} label="Streams" />
          <span className="hidden h-4 w-px bg-white/15 sm:block" aria-hidden="true" />
          <Stat to={30} label="Seats per Stream" />
          <span className="hidden h-4 w-px bg-white/15 sm:block" aria-hidden="true" />
          <Stat to={60} label="Total Seats" />
        </motion.div>
      </div>

      {/* Scroll-down indicator */}
      <a
        href="#about"
        aria-label="Scroll to content"
        className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 text-white/40 transition-colors hover:text-white"
      >
        <ChevronDown className="h-6 w-6 animate-bounce-soft" aria-hidden="true" />
      </a>
    </section>
  );
}

function Stat({ to, suffix, label }: { to: number; suffix?: string; label: string }) {
  return (
    <span className="inline-flex items-baseline gap-2">
      <CountUp to={to} suffix={suffix} className="font-display text-lg font-bold text-white" />
      <span>{label}</span>
    </span>
  );
}
