import { Metadata } from "next";
import LayoutComponents from "@/components/layouts/LayoutComponents";
import Pricing from "@/modules/pricing";

export const metadata: Metadata = {
  title: "Pricing - N&T Spotless Cleaning Services",
  description:
    "Transparent, affordable pricing for all cleaning services. Regular cleaning, End of lease cleaning, House cleaning, Deep cleaning . Free quotes available.",
  keywords: [
    "cleaning prices Sydney",
    "house cleaning cost",
    "regular cleaning pricing",
    "affordable cleaning services",
  ],
  openGraph: {
    title: "Pricing - N&T Spotless Cleaning Services",
    description:
      "Transparent, affordable pricing for all cleaning services. Free quotes available.",
    url: "https://www.spotlesscleaningsydney.com/pricing",
    type: "website",
    images: [
      {
        url: "https://www.spotlesscleaningsydney.com/og-pricing.png",
        width: 1200,
        height: 630,
        alt: "N&T Spotless Cleaning - Pricing",
      },
    ],
  },
  alternates: {
    canonical: "https://www.spotlesscleaningsydney.com/pricing",
  },
};

export default function PricingPage() {
  return (
    <LayoutComponents>
      <Pricing />
    </LayoutComponents>
  );
}
