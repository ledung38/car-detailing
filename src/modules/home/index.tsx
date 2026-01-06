import React from "react";
import HeroSection from "./sections/HeroSection";
import ServicesOverview from "./sections/ServicesOverview";
import WhyChooseUs from "./sections/WhyChooseUs";
import BeforeAfterGallery from "./sections/BeforeAfterGallery";
import ProcessSteps from "./sections/ProcessSteps";
import Testimonials from "./sections/Testimonials";
import FAQ from "./sections/FAQ";
import FinalCTA from "./sections/FinalCTA";

export const Home: React.FC = () => {
  return (
    <main className="w-full">
      <HeroSection />
      <ServicesOverview />
      <WhyChooseUs />
      <BeforeAfterGallery />
      <ProcessSteps />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </main>
  );
};

export default Home;
