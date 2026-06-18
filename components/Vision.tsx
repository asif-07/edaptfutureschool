"use client";

import { Reveal } from "@/components/motion/Reveal";

/**
 * Positioning / vision band. A short, plain-spoken statement about why the
 * school exists, with a couple of phrases highlighted in blue.
 */
export function Vision() {
  return (
    <section id="about" className="grain relative overflow-hidden bg-ink py-24 sm:py-32">
      <div className="container-x relative z-10">
        <Reveal>
          <p className="eyebrow mb-8">
            <span className="font-mono text-white/40">01</span> / Why we exist
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="max-w-5xl font-display text-display font-bold leading-tight text-white/90">
            We started Edapt Future School because a Plus One should do more than get you through an exam.
            Here, students{" "}
            <span className="text-accent">learn with AI</span>, work on{" "}
            <span className="text-accent">real projects</span>, and get the time to figure out{" "}
            <span className="text-accent">what they are good at</span>.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 hairline" />
        </Reveal>
      </div>
    </section>
  );
}
