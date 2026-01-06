import { Metadata } from "next";
import LayoutComponents from "@/components/layouts/LayoutComponents";
import BookingWizard from "@/modules/booking";

export const metadata: Metadata = {
  title: "Book Cleaning Service - N&T Spotless Cleaning",
  description:
    "Book your cleaning service in Sydney. Easy online booking, instant quotes, flexible scheduling.",
  keywords: [
    "book N&T cleaning service",
    "book cleaning service",
    "schedule cleaning",
    "cleaning booking",
    "get cleaning quote",
    "book cleaning service in sydney",
  ],
  openGraph: {
    title: "Book Cleaning Service - N&T Spotless Cleaning",
    description:
      "Easy online booking for professional cleaning services in Sydney.",
    url: "https://www.spotlesscleaningsydney.com/booking",
    type: "website",
    images: [
      {
        url: "https://www.spotlesscleaningsydney.com/og-booking.png",
        width: 1200,
        height: 630,
        alt: "N&T Spotless Cleaning - Booking",
      },
    ],
  },
  alternates: {
    canonical: "https://www.spotlesscleaningsydney.com/booking",
  },
};

export default function BookingPage() {
  return (
    <LayoutComponents>
      <BookingWizard />
    </LayoutComponents>
  );
}
