import HeroSection from "@/components/HeroSection";
import AboutHumAInSection from "@/components/AboutHumAInSection";
import PainSection from "@/components/PainSection";
import BenefitsSection from "@/components/BenefitsSection";
import WhatYouLearnSection from "@/components/WhatYouLearnSection";
import PricingSection from "@/components/PricingSection";
import FooterCTA from "@/components/FooterCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AboutHumAInSection />
      <PainSection />
      <BenefitsSection />
      <WhatYouLearnSection />
      <PricingSection />
      <FooterCTA />
    </div>
  );
};

export default Index;
