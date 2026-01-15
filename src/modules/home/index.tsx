import CompatHome from "@/modules/home/sections/CompatHome";
import HomeAreas from "@/modules/home/sections/ServiceAreas";
import React from "react";
import BeforeAfterGallery from "./sections/BeforeAfterGallery";
import HeroSection from "./sections/HeroSection";
import ServicesOverview from "./sections/ServicesOverview";
import Testimonials from "./sections/Testimonials";
import WhyChooseUs from "./sections/WhyChooseUs";

export const Home: React.FC = () => {
  return (
    <main className="w-full -mt-20">
      <HeroSection />
      <ServicesOverview />
      <BeforeAfterGallery />
      <WhyChooseUs />
      <CompatHome />
      {/* <ProcessSteps /> */}
      <Testimonials />
      <HomeAreas />
    </main>
  );
};

export default Home;
