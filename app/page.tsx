import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Vision } from "@/components/Vision";
import { Streams } from "@/components/Streams";
import { WhyEdapt } from "@/components/WhyEdapt";
import { Leadership } from "@/components/Leadership";
import { Campus } from "@/components/Campus";
import { Admissions } from "@/components/Admissions";
import { EnquiryForm } from "@/components/EnquiryForm";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { MobileCTA } from "@/components/MobileCTA";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { SITE } from "@/lib/site";

// Structured data for rich search results (EducationalOrganization).
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: SITE.name,
  description: SITE.description,
  url: SITE.url,
  telephone: `+91${SITE.phoneRaw}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Edapt Campus, Inkel City",
    addressLocality: "Malappuram",
    addressRegion: "Kerala",
    addressCountry: "IN",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        // JSON-LD is static and trusted (built from our own constants).
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ScrollProgress />
      <Navbar />
      <SmoothScroll>
        <main className="pb-20 lg:pb-0">
          <Hero />
          <Vision />
          <Streams />
          <WhyEdapt />
          <Leadership />
          <Campus />
          <Admissions />
          <EnquiryForm />
          <FinalCTA />
        </main>
        <Footer />
      </SmoothScroll>
      <MobileCTA />
    </>
  );
}
