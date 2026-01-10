import React from "react";
import HeroSection from "./sections/HeroSection";
import ServicesOverview from "./sections/ServicesOverview";
import WhyChooseUs from "./sections/WhyChooseUs";
import BeforeAfterGallery from "./sections/BeforeAfterGallery";
import ProcessSteps from "./sections/ProcessSteps";
import Testimonials from "./sections/Testimonials";
import FAQ from "./sections/FAQ";
import FinalCTA from "./sections/FinalCTA";
import CompatHome from "@/modules/home/sections/CompatHome";
import HomeAreas from "@/modules/home/sections/ServiceAreas";

export const Home: React.FC = () => {
  return (
    <main className="w-full">
      <HeroSection />
      <ServicesOverview />
      <BeforeAfterGallery />
      <WhyChooseUs />
      <CompatHome />
      {/* <ProcessSteps /> */}
      <Testimonials />
      {/* <FAQ /> */}
      {/* <FinalCTA /> */}
      <HomeAreas />
    </main>
  );
};

export default Home;
