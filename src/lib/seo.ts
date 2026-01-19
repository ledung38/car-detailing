/**
 * SEO Utilities - Centralized SEO configurations and helpers
 */

export const SITE_CONFIG = {
  name: "N&T Spotless Cleaning",
  url: "https://www.spotlesscleaningsydney.com",
  description:
    "Professional cleaning services in Sydney. Deep cleaning, regular maintenance, end of lease cleaning, restaurant and mould cleaning. 2000+ happy clients, 8+ years experience.",
  email: "skynicecardetailing102@gmail.com",
  phone: "+61-433-263-105",
  address: {
    street: "Sydney, NSW",
    city: "Sydney",
    state: "NSW",
    postalCode: "2000",
    country: "AU",
  },
  socialLinks: {
    facebook: "https://www.facebook.com/SKYNICEdetailing",
    instagram: "https://www.instagram.com/skynicecardetailing",
    google: `https://maps.app.goo.gl/DpLwRqXWg8y9oVoM8`,
  },
  location: {
    latitude: -33.8688,
    longitude: 151.2093,
    radius: 50, // km
  },
};

/**
 * Generate Open Graph image URL
 */
export const getOGImage = (type: "home" | "about" | "pricing" | "booking") => {
  const images = {
    home: "/screenshot-wide.png",
    about: "/og-about.png",
    pricing: "/og-pricing.png",
    booking: "/og-booking.png",
  };

  return `${SITE_CONFIG.url}${images[type]}`;
};

/**
 * Generate structured data for Organization
 */
export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_CONFIG.name,
  url: SITE_CONFIG.url,
  logo: `${SITE_CONFIG.url}/favicon-32x32.png`,
  description: SITE_CONFIG.description,
  email: SITE_CONFIG.email,
  telephone: SITE_CONFIG.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE_CONFIG.address.street,
    addressLocality: SITE_CONFIG.address.city,
    addressRegion: SITE_CONFIG.address.state,
    postalCode: SITE_CONFIG.address.postalCode,
    addressCountry: SITE_CONFIG.address.country,
  },
  sameAs: Object.values(SITE_CONFIG.socialLinks),
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    areaServed: "AU",
    availableLanguage: "en-AU",
  },
});

/**
 * Generate structured data for Local Business
 */
export const getLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": SITE_CONFIG.url,
  name: SITE_CONFIG.name,
  image: `${SITE_CONFIG.url}/favicon-32x32.png`,
  description: SITE_CONFIG.description,
  url: SITE_CONFIG.url,
  telephone: SITE_CONFIG.phone,
  email: SITE_CONFIG.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE_CONFIG.address.street,
    addressLocality: SITE_CONFIG.address.city,
    addressRegion: SITE_CONFIG.address.state,
    postalCode: SITE_CONFIG.address.postalCode,
    addressCountry: SITE_CONFIG.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: SITE_CONFIG.location.latitude,
    longitude: SITE_CONFIG.location.longitude,
  },
  sameAs: Object.values(SITE_CONFIG.socialLinks),
  priceRange: "$$",
  areaServed: `${SITE_CONFIG.address.city}, ${SITE_CONFIG.address.state}, ${SITE_CONFIG.address.country}`,
  serviceArea: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: SITE_CONFIG.location.latitude,
      longitude: SITE_CONFIG.location.longitude,
    },
    geoRadius: SITE_CONFIG.location.radius,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "2000",
  },
});

/**
 * Generate structured data for Service
 */
export const getServiceSchema = (
  name: string,
  description: string,
  price?: string,
) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name,
  description,
  provider: {
    "@type": "LocalBusiness",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
  },
  ...(price && {
    priceRange: price,
  }),
  areaServed: {
    "@type": "City",
    name: SITE_CONFIG.address.city,
  },
});

/**
 * Generate structured data for BreadcrumbList
 */
export const getBreadcrumbSchema = (
  items: Array<{ name: string; url: string }>,
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

/**
 * Generate meta tags for a page
 */
export const generateMetaTags = (
  title: string,
  description: string,
  keywords: string[],
  ogImage?: string,
) => ({
  title,
  description,
  keywords: keywords.join(", "),
  openGraph: {
    title,
    description,
    url: SITE_CONFIG.url,
    type: "website",
    images: [
      {
        url: ogImage || getOGImage("home"),
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage || getOGImage("home")],
  },
});
