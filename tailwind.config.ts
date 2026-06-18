import type { Config } from "tailwindcss";

/**
 * Tailwind configuration for Edapt Future School.
 * Color system, typography scale and motion tokens defined here keep the
 * design language consistent across every section component.
 */
const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base palette
        ink: "#0A0A0B", // near-black base
        paper: "#FFFFFF", // pure white
        // Primary accent
        electric: {
          DEFAULT: "#0F5FE0",
          50: "#eaf2ff",
          100: "#d6e4ff",
          500: "#0F5FE0",
          600: "#0d52c4",
        },
        violet: {
          accent: "#6D28D9",
        },
      },
      fontFamily: {
        // Wired up in app/layout.tsx via next/font CSS variables.
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Fluid hero headline: 2.5rem (mobile) -> 6rem (desktop)
        hero: ["clamp(2.5rem, 6vw + 1rem, 6rem)", { lineHeight: "1.02", letterSpacing: "-0.03em" }],
        display: ["clamp(2rem, 4vw + 0.5rem, 3.75rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
      },
      backgroundImage: {
        // Blue -> violet gradient, used sparingly (hero glow + CTAs only).
        "brand-gradient": "linear-gradient(135deg, #0F5FE0 0%, #6D28D9 100%)",
        "brand-glow":
          "radial-gradient(60% 60% at 50% 30%, rgba(15,95,224,0.45) 0%, rgba(109,40,217,0.25) 45%, rgba(10,10,11,0) 75%)",
      },
      keyframes: {
        "glow-drift": {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1)", opacity: "0.85" },
          "50%": { transform: "translate3d(0,-4%,0) scale(1.08)", opacity: "1" },
        },
        "bounce-soft": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(6px)" },
        },
      },
      animation: {
        "glow-drift": "glow-drift 9s ease-in-out infinite",
        "bounce-soft": "bounce-soft 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
