import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { WhatIsAstra } from "@/components/sections/WhatIsAstra";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { EarningsSection } from "@/components/sections/EarningsSection";
import { AppShowcase } from "@/components/sections/AppShowcase";
import { FeaturesGrid } from "@/components/sections/FeaturesGrid";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/layout/Footer";
import { MobileCTA } from "@/components/ui/MobileCTA";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <WhatIsAstra />
      <HowItWorks />
      <EarningsSection />
      <AppShowcase />
      <FeaturesGrid />
      <FAQSection />
      <CTASection />
      <Footer />
      <MobileCTA />
    </main>
  );
}
