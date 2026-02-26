/**
 * Generate structured data for SEO
 * LocalBusiness schema for Service booking page
 */
export const generateBookingStructuredData = (serviceName?: string) => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Sky Nice Mobile Car Detailing",
    image: "https://www.skynicemobiledetailing.com.au/logo.png",
    description: "Professional mobile car detailing service in Sydney",
    url: "https://www.skynicemobiledetailing.com.au",
    telephone: "+61XXXXXXXXX", // Update with actual phone
    address: {
      "@type": "PostalAddress",
      streetAddress: "", // Add actual address
      addressLocality: "Sydney",
      addressRegion: "NSW",
      postalCode: "", // Add postal code
      addressCountry: "AU",
    },
    sameAs: ["https://facebook.com/skynice", "https://instagram.com/skynice"],
    areaServed: {
      "@type": "City",
      name: "Sydney",
    },
    ...(serviceName && {
      offers: {
        "@type": "Offer",
        name: serviceName,
        url: "https://www.skynicemobiledetailing.com.au/booking",
      },
    }),
  };
};

/**
 * Generate Service schema for specific detailing services
 */
export const generateServiceSchema = (service: {
  title: string;
  description: string;
  duration: string;
  priceRange: string;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "LocalBusiness",
      name: "Sky Nice Mobile Car Detailing",
    },
    areaServed: {
      "@type": "City",
      name: "Sydney",
    },
    url: "https://www.skynicemobiledetailing.com.au/booking",
  };
};

/**
 * Generate BreadcrumbList schema for navigation structure
 */
export const generateBreadcrumbSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.skynicemobiledetailing.com.au",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://www.skynicemobiledetailing.com.au/service",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Booking",
        item: "https://www.skynicemobiledetailing.com.au/booking",
      },
    ],
  };
};

/**
 * Generate FAQPage schema for common booking questions
 */
export const generateBookingFAQSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do I book a car detailing appointment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Simply fill out our online booking form with your service preference, car details, and preferred date/time. We'll confirm your booking via email and phone.",
        },
      },
      {
        "@type": "Question",
        name: "How long does car detailing take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Service duration typically ranges from 2-4 hours depending on the package chosen and car condition.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer same-day bookings?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We offer same-day appointments on a case-by-case basis. Contact us to check availability.",
        },
      },
      {
        "@type": "Question",
        name: "What areas do you service?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We provide mobile detailing services across Sydney and surrounding areas.",
        },
      },
    ],
  };
};
