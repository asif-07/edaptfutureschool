"use client";

import { Reveal } from "@/components/motion/Reveal";

/**
 * Positioning / vision band — a large editorial statement with key phrases
 * highlighted in electric blue. Dark section with grain for depth.
 */
export function Vision() {
  return (
    <section id="about" className="grain relative overflow-hidden bg-ink py-24 sm:py-32">
      <div className="container-x relative z-10">
        <Reveal>
          <p className="eyebrow mb-8">
            <span className="font-mono text-white/40">01</span> / Our Vision
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="max-w-5xl font-display text-display font-bold leading-tight text-white/90">
            This isn&apos;t an ordinary school. It&apos;s a new{" "}
            <span className="text-accent">learning culture</span> — bringing together{" "}
            <span className="text-accent">AI</span>, <span className="text-accent">personalized learning</span>,{" "}
            <span className="text-accent">real-world work</span>,{" "}
            <span className="text-accent">entrepreneurship</span>, and{" "}
            <span className="text-accent">future skills</span>.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 hairline" />
        </Reveal>
      </div>
    </section>
  );
}
