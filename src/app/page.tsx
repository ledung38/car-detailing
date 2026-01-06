import LayoutComponents from "@/components/layouts/LayoutComponents";
import Home from "@/modules/home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Cleaning Services in Sydney",
  description:
    "N&T Spotless Cleaning provides professional house, restaurant, and commercial cleaning services in Sydney. Deep cleaning, regular maintenance, end of lease cleaning. 2000+ happy clients.",
  keywords: [
    "cleaning services Sydney",
    "N&T Spotless Cleaning",
    "house cleaning",
    "professional cleaners Sydney",
    "deep cleaning",
    "restaurant cleaning",
    "end of lease cleaning",
    "residential cleaning",
    "commercial cleaning",
    "window cleaning",
    "regular cleaning",
    "affordable cleaning Sydney",
    "eco friendly cleaning services",
  ],
  openGraph: {
    title: "Professional Cleaning Services in Sydney",
    description:
      "N&T Spotless Cleaning provides professional house, restaurant, and commercial cleaning services in Sydney.",
    url: "https://www.spotlesscleaningsydney.com",
    type: "website",
    images: [
      {
        url: "https://www.spotlesscleaningsydney.com/screenshot-wide.png",
        width: 1200,
        height: 630,
        alt: "N&T Spotless Cleaning - Sydney",
      },
    ],
  },
};

export default async function HomePage() {
  return (
    <LayoutComponents>
      <Home />
    </LayoutComponents>
  );
}
