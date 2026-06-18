"use client";

import {
  Bot,
  Rocket,
  Briefcase,
  Wallet,
  Users,
  Target,
  Brain,
  Building2,
  type LucideIcon,
} from "lucide-react";
import { RevealGroup, RevealItem, Reveal } from "@/components/motion/Reveal";

/** Plain-spoken reasons to choose Edapt. One Lucide icon per card. */
const FEATURES: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Bot, title: "AI in the classroom", desc: "AI helps each student learn at their own pace, not the class average." },
  { icon: Rocket, title: "Go at your own pace", desc: "Move quickly where you are strong, take time where you need it." },
  { icon: Briefcase, title: "Real projects", desc: "Students build actual work, not just notes for an exam." },
  { icon: Wallet, title: "Earn while you learn", desc: "Turn skills into real work and a bit of income before you finish school." },
  { icon: Users, title: "People who get you", desc: "Mentors and classmates who push you and have your back." },
  { icon: Target, title: "Find your strengths", desc: "Room to try things and work out what you are actually good at." },
  { icon: Brain, title: "Skills that last", desc: "Tech, money sense, and how to start something of your own." },
  { icon: Building2, title: "A real campus", desc: "A modern campus at Inkel City, set up for hands-on learning." },
];

/**
 * "Why Edapt" feature grid (2 columns on mobile, up to 4 on desktop).
 * Cards fade and rise on scroll and lift gently on hover.
 */
export function WhyEdapt() {
  return (
    <section id="why" className="grain relative overflow-hidden bg-ink py-24 sm:py-32">
      <div className="container-x relative z-10">
        <Reveal>
          <p className="eyebrow mb-4">
            <span className="font-mono text-white/40">03</span> / Why Edapt Future School
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="max-w-3xl font-display text-display font-bold text-white">
            What makes Edapt Future School different.
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
            We want students ready for life after school, not just the next exam.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
