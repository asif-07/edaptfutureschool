import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { SITE } from "@/lib/site";
import "./globals.css";

// Display/heading font — geometric sans, heavy weights for big headlines.
const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-display",
  display: "swap",
});

// Body font — clean and quiet for supporting text.
const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: "Edapt Future School | Plus One Admissions, Malappuram",
  description: SITE.description,
  keywords: [
    "Edapt Future School",
    "Plus One admission Malappuram",
    "Computer Science Plus One",
    "Commerce Computer Application Plus One",
    "Inkel City Malappuram school",
    "+1 admission Kerala",
  ],
  authors: [{ name: SITE.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE.url,
    siteName: SITE.name,
    title: "Edapt Future School | Plus One Admissions, Malappuram",
    description: SITE.description,
    // NOTE: Replace with a real 1200x630 OG image at /public/og-image.png.
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Edapt Future School, the school built for the AI generation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Edapt Future School | Plus One Admissions, Malappuram",
    description: SITE.description,
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0B",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
