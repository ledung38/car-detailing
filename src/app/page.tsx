import LayoutComponents from "@/components/layouts/LayoutComponents";
import Home from "@/modules/home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SKY NICE Mobile Car Detailing Sydney | Premium Auto Care",
  description:
    "SKY NICE offers professional mobile car detailing in Sydney. We come to you with premium products & certified detailers. Full detail, interior clean, ceramic coating & more. 500+ happy clients.",
  keywords: [
    "car detailing Sydney",
    "mobile car wash Sydney",
    "auto detailing",
    "car cleaning Sydney",
    "professional car detailers",
    "ceramic coating",
    "interior car cleaning",
    "car polishing",
    "SKY NICE",
    "vehicle detailing",
    "paint protection",
    "car maintenance Sydney",
  ],
  openGraph: {
    title: "SKY NICE Mobile Car Detailing Sydney | Premium Auto Care",
    description:
      "Professional mobile car detailing in Sydney. We come to you with premium products & certified detailers. Full detail, ceramic coating & more.",
    url: "https://www.skynicemobiledetailing.com.au",
    type: "website",
    images: [
      {
        url: "https://www.skynicemobiledetailing.com.au/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SKY NICE Mobile Car Detailing Sydney",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default async function HomePage() {
  return (
    <LayoutComponents>
      <Home />
    </LayoutComponents>
  );
}
