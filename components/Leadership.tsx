"use client";

import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Leadership section. Photo on one side, short bio on the other.
 * Stacks on mobile with the photo on top. Light section to alternate with
 * the dark "Why Edapt" band above and the dark "Admissions" band below.
 */
export function Leadership() {
  return (
    <section id="leadership" className="relative bg-white py-24 text-ink sm:py-32">
      <div className="container-x">
        <Reveal>
          <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-electric">
            <span className="font-mono text-ink/40">04</span> / Leadership
          </p>
        </Reveal>

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Photo */}
          <Reveal>
            <div className="relative mx-auto w-full max-w-sm lg:mx-0">
              {/* Soft glow behind the photo */}
              <div
                className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-brand-glow opacity-40 blur-2xl"
                aria-hidden="true"
              />
              <Image
                src="/umer-abdussalam.jpg"
                alt="Umer Abdussalam, Founder and CEO of Edapt"
                width={900}
                height={900}
                className="relative w-full rounded-3xl border border-ink/10 object-cover shadow-xl"
                sizes="(max-width: 1024px) 100vw, 384px"
                priority={false}
              />
            </div>
          </Reveal>

          {/* Bio */}
          <div>
            <Reveal delay={0.05}>
              <h2 className="font-display text-display font-bold text-ink">Led by Umer Abdussalam</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-electric">
                Founder and CEO of Edapt
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-6 space-y-4 text-ink/70">
                <p>
                  Umer works on AI-powered programmes for businesses and professionals. His work spans B2B
                  technology consulting, AI training, and mentoring entrepreneurs as they build and grow.
                </p>
                <p>
                  Edapt Future School brings that same way of thinking into school education, so students
                  learn the things that will actually matter to them after Plus One.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
