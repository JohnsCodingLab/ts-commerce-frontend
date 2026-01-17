import { CoreValues } from "@/components/landing/CoreValues";
import Hero from "@/components/landing/Hero";
import { MarketGrid } from "@/components/landing/MarketGrid";
import { Operations } from "@/components/landing/Operations";
import { VisionMission } from "@/components/landing/VissionMission";
import { Footer } from "@/components/layout/Footer";

const LandingPage = () => {
  return (
    <>
      <Hero />
      <VisionMission />
      <MarketGrid />
      <CoreValues />
      <Operations />
      <Footer />
    </>
  );
};

export default LandingPage;
