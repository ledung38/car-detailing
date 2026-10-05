import React from "react";
import dynamic from "next/dynamic";
import HeroSection from "./sections/HeroSection";
import ServicesOverview from "./sections/ServicesOverview";
import WhyChooseUs from "./sections/WhyChooseUs";
import CompatHome from "@/modules/home/sections/CompatHome";
import HomeAreas from "@/modules/home/sections/ServiceAreas";

// Dynamically load below-the-fold sections to reduce initial First Load JS
const BeforeAfterGallery = dynamic(
  () => import("./sections/BeforeAfterGallery"),
  { ssr: true },
);
const Testimonials = dynamic(() => import("./sections/Testimonials"), {
  ssr: true,
});

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
