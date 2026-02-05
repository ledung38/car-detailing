import { Metadata } from "next";
import LayoutComponents from "@/components/layouts/LayoutComponents";
import AboutUs from "@/modules/about-us";

export const metadata: Metadata = {
  title: "About Us - Sky Nice Mobile Car Detailing",
  description:
    "Learn about Sky Nice Mobile Car Detailing, Sydney's trusted mobile car detailing service. 5+ years of experience, 500+ happy clients, certified professionals with eco-friendly products.",
  keywords: [
    "about Sky Nice car detailing",
    "mobile car detailing Sydney",
    "professional car detailers",
    "car detailing experience",
    "certified detailers",
  ],
  openGraph: {
    title: "About Us - Sky Nice Mobile Car Detailing",
    description:
      "Learn about Sky Nice Mobile Car Detailing, Sydney's trusted mobile car detailing service with premium eco-friendly products.",
    url: "https://www.skynicemobiledetailing.com.au/about-us",
    type: "website",
    images: [
      {
        url: "https://www.skynicemobiledetailing.com.au/og-about.png",
        width: 1200,
        height: 630,
        alt: "About Sky Nice Mobile Car Detailing",
      },
    ],
  },
  alternates: {
    canonical: "https://www.skynicemobiledetailing.com.au/about-us",
  },
};

export default function AboutUsPage() {
  return (
    <LayoutComponents>
      <AboutUs />
    </LayoutComponents>
  );
}
