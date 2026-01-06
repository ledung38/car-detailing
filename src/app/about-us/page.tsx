import { Metadata } from "next";
import LayoutComponents from "@/components/layouts/LayoutComponents";
import AboutUs from "@/modules/about-us";

export const metadata: Metadata = {
  title: "About Us - N&T Spotless Cleaning",
  description:
    "Learn about N&T Spotless Cleaning, Sydney's trusted cleaning company. 8+ years of experience, 2000+ happy clients, certified professionals.",
  keywords: [
    "about N&T spotless cleaning",
    "cleaning company Sydney",
    "professional cleaners",
    "cleaning services experience",
  ],
  openGraph: {
    title: "About Us - N&T Spotless Cleaning",
    description:
      "Learn about N&T Spotless Cleaning, Sydney's trusted cleaning company with 8+ years of experience.",
    url: "https://www.spotlesscleaningsydney.com/about-us",
    type: "website",
    images: [
      {
        url: "https://www.spotlesscleaningsydney.com/og-about.png",
        width: 1200,
        height: 630,
        alt: "About N&T Spotless Cleaning",
      },
    ],
  },
  alternates: {
    canonical: "https://www.spotlesscleaningsydney.com/about-us",
  },
};

export default function AboutUsPage() {
  return (
    <LayoutComponents>
      <AboutUs />
    </LayoutComponents>
  );
}
