# Edapt Future School — Website

A production-ready, futuristic marketing website for **Edapt Future School**, a
**SCOLE Kerala enrolled** Plus One (+1) institution at **Edapt Campus, Inkel
City, Malappuram, Kerala**. The site is built for **admissions lead
generation** — getting parents and students to call or submit an enquiry.

> **The School Built for the AI Generation.** Plus One admissions open.
> Learn. Create. Earn. Connect.

## ✨ Tech stack

- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS** — design system & responsive styling
- **Framer Motion** — scroll-reveal & micro-interactions
- **Lucide React** — icons
- **next/font** — `Space Grotesk` (display) + `Inter` (body)
- Mobile-first, fully responsive (great at 390px → 1440px+)
- Deploy-ready for **Vercel**

## 🚀 Getting started

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev
# → http://localhost:3000

# 3. Production build
npm run build && npm start
```

Requires Node.js 18.17+ (Next.js 14 requirement).

## 📦 Deploy to Vercel

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Framework preset auto-detects **Next.js** — no extra config needed.
4. Click **Deploy**.
5. Add your custom domain (`edaptfutureschool.com`) under **Settings → Domains**.

Any environment variables you add for the enquiry backend (see below) go in
**Project → Settings → Environment Variables**.

## 🗂️ Project structure

```
edaptfutureschool/
├── app/
│   ├── api/enquiry/route.ts   # Lead-capture endpoint (← connect backend here)
│   ├── globals.css            # Design system: colors, glass, grain, buttons
│   ├── layout.tsx             # Fonts + SEO metadata + Open Graph
│   └── page.tsx               # Single-page assembly + JSON-LD schema
├── components/
│   ├── motion/Reveal.tsx      # Reusable scroll-reveal animations
│   ├── Navbar.tsx             # Sticky glass nav + mobile drawer
│   ├── Hero.tsx               # Animated gradient hero + stat strip
│   ├── Vision.tsx             # Editorial positioning band
│   ├── Streams.tsx            # Two stream cards (Code 05 / Code 39)
│   ├── WhyEdapt.tsx           # Features grid
│   ├── Campus.tsx             # Location + Google Map embed
│   ├── Admissions.tsx         # 4-step admissions timeline
│   ├── EnquiryForm.tsx        # Validated lead form + success state
│   ├── FinalCTA.tsx           # Scarcity CTA band
│   ├── Footer.tsx             # Minimal dark footer
│   └── MobileCTA.tsx          # Floating sticky Call / Apply bar (mobile)
├── lib/
│   ├── site.ts                # ← Single source of truth for ALL content
│   └── utils.ts               # cn() className helper
├── public/
│   └── ASSETS_README.md       # What placeholder assets to replace
├── tailwind.config.ts         # Brand colors, fonts, animations
├── next.config.mjs
└── README.md
```

## ✏️ Editing content

All institution copy and contact details live in **`lib/site.ts`** — name,
phone, campus address, streams, seat count, nav links. Change them in one
place and they update everywhere.

## 🔌 Connecting the enquiry form to a real backend

The form (`components/EnquiryForm.tsx`) POSTs to
**`app/api/enquiry/route.ts`**, which currently validates and logs the lead.

Open that file and look for the clearly marked block:

```
👉 CONNECT YOUR REAL BACKEND HERE
```

There you can plug in any of:

- **Email** — Resend / SendGrid / Nodemailer to the admissions inbox
- **WhatsApp** — WhatsApp Cloud API / Twilio to notify `9072 616200`
- **CRM / Sheet** — Google Sheets, HubSpot, Airtable, or a database

Add secrets (e.g. `RESEND_API_KEY`, `WHATSAPP_TOKEN`) to `.env.local` locally
and to Vercel's environment variables in production. **Never commit secrets.**

## 🖼️ Replacing placeholder assets

See **`public/ASSETS_README.md`** — add `og-image.png` (1200×630), a favicon,
and optionally a logo image. The brand mark currently renders as a styled text
wordmark.

## ♿ Accessibility & SEO

- Semantic HTML, ARIA labels on interactive elements, visible focus rings
- Keyboard-navigable nav, drawer and form
- `prefers-reduced-motion` respected for all animations
- Meta tags, Open Graph + Twitter cards, canonical URL, JSON-LD
  `EducationalOrganization` schema
- Tap-to-call (`tel:`) links throughout

## 📞 Key details

- **Phone:** 9072 616200 (tap-to-call everywhere)
- **Streams:** Computer Science (Code 05) · Computer Application (Code 39)
- **Seats:** 30 per stream
- **Affiliation:** SCOLE Kerala enrolled
