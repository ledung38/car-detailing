import { Metadata } from "next";
import LayoutComponents from "@/components/layouts/LayoutComponents";
import BookingWizard from "@/modules/booking";
import {
  generateBookingStructuredData,
  generateBreadcrumbSchema,
  generateBookingFAQSchema,
} from "@/modules/booking/utils/seo";

export const metadata: Metadata = {
  title:
    "Book Car Detailing - Easy Online Booking | Sky Nice Mobile Car Detailing",
  description:
    "Book professional mobile car detailing services in Sydney instantly. Choose your service, schedule online, and we come to you. Fast confirmation within 2 hours. No hidden fees.",
  keywords: [
    "book car detailing",
    "book Sky Nice detailing",
    "schedule car detailing",
    "car detailing booking",
    "get detailing quote",
    "mobile car detailing Sydney",
    "book mobile detailing",
    "online car detailing booking",
    "car detail reservations",
    "professional car wash booking",
  ],
  openGraph: {
    title: "Book Car Detailing - Easy Online Booking | Sky Nice",
    description:
      "Schedule professional mobile car detailing in Sydney. Instant booking, flexible scheduling, we come to you. Fast confirmation.",
    url: "https://www.skynicemobiledetailing.com.au/booking",
    type: "website",
    images: [
      {
        url: "https://www.skynicemobiledetailing.com.au/og-booking.png",
        width: 1200,
        height: 630,
        alt: "Sky Nice Mobile Car Detailing - Easy Online Booking",
      },
    ],
  },
  alternates: {
    canonical: "https://www.skynicemobiledetailing.com.au/booking",
  },
  applicationName: "Sky Nice Mobile Car Detailing",
  referrer: "origin-when-cross-origin",
};

export default function BookingPage() {
  const bookingSchema = generateBookingStructuredData();
  const breadcrumbSchema = generateBreadcrumbSchema();
  const faqSchema = generateBookingFAQSchema();

  return (
    <LayoutComponents>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(bookingSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <BookingWizard />
    </LayoutComponents>
  );
}
