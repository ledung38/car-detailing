import { Metadata } from "next";
import { Routes } from "@/lib/enum/routes";
import ServiceComponent from "@/modules/service";
import { SERVICES } from "@/modules/service/contants";

export const metadata: Metadata = {
  title: "Our Services - Sky Nice Mobile Car Detailing",
  description:
    "Explore our comprehensive mobile car detailing services: Full detail, interior cleaning, ceramic coating, paint protection, and premium add-ons. We come to you!",
  keywords: [
    "car detailing services",
    "mobile car detailing",
    "full car detail",
    "interior car cleaning",
    "ceramic coating",
    "paint protection",
    "car polishing",
    "car detailing Sydney",
    "professional detailing services",
  ],
  openGraph: {
    title: "Our Services - Sky Nice Mobile Car Detailing",
    description:
      "Explore our comprehensive mobile car detailing services in Sydney. Full detail, interior cleaning, ceramic coating, and more.",
    url: "https://www.skynicemobiledetailing.com.au/service",
    type: "website",
    images: [
      {
        url: "https://www.skynicemobiledetailing.com.au/og-services.png",
        width: 1200,
        height: 630,
        alt: "Sky Nice Mobile Car Detailing - Services",
      },
    ],
  },
  alternates: {
    canonical: "https://www.skynicemobiledetailing.com.au/service",
  },
};

export default function ServicePage() {
  return <ServiceComponent data={SERVICES[3]} slug="regular-cleaning" />;
}
