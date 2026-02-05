import { Metadata } from "next";
import LayoutComponents from "@/components/layouts/LayoutComponents";
import BookingWizard from "@/modules/booking";

export const metadata: Metadata = {
  title: "Book Car Detailing - Sky Nice Mobile Car Detailing",
  description:
    "Book your mobile car detailing service in Sydney. Easy online booking, instant quotes, flexible scheduling. We come to you!",
  keywords: [
    "book car detailing",
    "book Sky Nice detailing",
    "schedule car detailing",
    "car detailing booking",
    "get detailing quote",
    "mobile car detailing Sydney",
    "book mobile detailing",
  ],
  openGraph: {
    title: "Book Car Detailing - Sky Nice Mobile Car Detailing",
    description:
      "Easy online booking for professional mobile car detailing services in Sydney.",
    url: "https://www.skynicemobiledetailing.com.au/booking",
    type: "website",
    images: [
      {
        url: "https://www.skynicemobiledetailing.com.au/og-booking.png",
        width: 1200,
        height: 630,
        alt: "Sky Nice Mobile Car Detailing - Booking",
      },
    ],
  },
  alternates: {
    canonical: "https://www.skynicemobiledetailing.com.au/booking",
  },
};

export default function BookingPage() {
  return (
    <LayoutComponents>
      <BookingWizard />
    </LayoutComponents>
  );
}
