"use client";

import {
  Bot,
  Rocket,
  Briefcase,
  Wallet,
  Globe,
  Target,
  Brain,
  Landmark,
  type LucideIcon,
} from "lucide-react";
import { RevealGroup, RevealItem, Reveal } from "@/components/motion/Reveal";

/** Feature cards — each with a Lucide icon, animated in on scroll. */
const FEATURES: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Bot, title: "AI-powered mentors", desc: "Personalized learning pathways guided by intelligent mentors." },
  { icon: Rocket, title: "Learn at your own pace", desc: "Progress on a path that adapts to how you learn best." },
  { icon: Briefcase, title: "Real projects", desc: "Work on real-world projects while you learn." },
  { icon: Wallet, title: "Start earning", desc: "Turn skills & creativity into income, early." },
  { icon: Globe, title: "Global networks", desc: "Build connections and collaborate across the world." },
  { icon: Target, title: "Discover your talents", desc: "Find the passions and strengths that set you apart." },
  { icon: Brain, title: "Future skills", desc: "Technology, innovation, entrepreneurship & life skills." },
  { icon: Landmark, title: "SCOLE Kerala enrolled", desc: "A registered, certified Plus One institution." },
];

/**
 * "Why Edapt" — responsive feature grid (2-col mobile, up to 4-col desktop).
 * Closes with the brand tagline.
 */
export function WhyEdapt() {
  return (
    <section id="why" className="grain relative overflow-hidden bg-ink py-24 sm:py-32">
      <div className="container-x relative z-10">
        <Reveal>
          <p className="eyebrow mb-4">
            <span className="font-mono text-white/40">03</span> / Why Edapt
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="max-w-3xl font-display text-display font-bold text-white">
            More than a syllabus. A launchpad.
          </h2>
        </Reveal>

        <RevealGroup className="mt-14 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {FEATURES.map(({ icon: Icon, title, desc }) => (
            <RevealItem key={title}>
              <div className="glass glass-hover group h-full rounded-2xl p-5 sm:p-6">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-electric/15 text-electric transition-colors group-hover:bg-electric/25">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-base font-bold text-white sm:text-lg">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/55">{desc}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-14 max-w-2xl text-center font-display text-xl font-semibold text-white/80 sm:text-2xl">
            Not just preparing students for exams.{" "}
            <span className="text-accent">Preparing them for life.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
