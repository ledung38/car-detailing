import { Metadata } from "next";
import LayoutComponents from "@/components/layouts/LayoutComponents";
import Pricing from "@/modules/pricing";

export const metadata: Metadata = {
  title: "Pricing - Sky Nice Mobile Car Detailing Services",
  description:
    "Transparent, affordable pricing for all mobile car detailing services. Full detail, interior clean, ceramic coating & more. Free quotes available.",
  keywords: [
    "car detailing prices Sydney",
    "mobile detailing cost",
    "ceramic coating pricing",
    "professional car detailing services",
  ],
  openGraph: {
    title: "Pricing - Sky Nice Mobile Car Detailing Services",
    description:
      "Transparent, affordable pricing for all mobile car detailing services. Free quotes available.",
    url: "https://www.skynicemobiledetailing.com.au/pricing",
    type: "website",
    images: [
      {
        url: "https://www.skynicemobiledetailing.com.au/og-pricing.png",
        width: 1200,
        height: 630,
        alt: "Sky Nice Mobile Car Detailing - Pricing",
      },
    ],
  },
  alternates: {
    canonical: "https://www.skynicemobiledetailing.com.au/pricing",
  },
};

export default function PricingPage() {
  return (
    <LayoutComponents>
      <Pricing />
    </LayoutComponents>
  );
}
