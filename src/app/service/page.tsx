import { Metadata } from "next";
import { Routes } from "@/lib/enum/routes";
import ServiceComponent from "@/modules/service";
import services from "@/modules/service/contants";

export const metadata: Metadata = {
  title: "Our Services - N&T Spotless Cleaning",
  description:
    "Explore our comprehensive cleaning services: Deep cleaning, Regular maintenance, End of lease, Restaurant, Mould, Airbnb and specialized cleaning.",
  keywords: [
    "cleaning services",
    "deep cleaning",
    "regular cleaning",
    "restaurant cleaning",
    "end of lease cleaning",
    "window cleaning",
    "mould cleaning",
    "airbnb cleaning",
    "cleaning services in sydney",
  ],
  openGraph: {
    title: "Our Services - N&T Spotless Cleaning",
    description:
      "Explore our comprehensive cleaning services for homes and businesses in Sydney.",
    url: "https://www.spotlesscleaningsydney.com/service",
    type: "website",
    images: [
      {
        url: "https://www.spotlesscleaningsydney.com/og-services.png",
        width: 1200,
        height: 630,
        alt: "N&T Spotless Cleaning - Services",
      },
    ],
  },
  alternates: {
    canonical: "https://www.spotlesscleaningsydney.com/service",
  },
};

export default function ServicePage() {
  return (
    <ServiceComponent
      data={services["regular-cleaning"]}
      slug="regular-cleaning"
    />
  );
}
