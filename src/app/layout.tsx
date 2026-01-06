import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import NextTopLoader from "nextjs-toploader";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  fallback: ["system-ui", "arial"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  fallback: ["monospace"],
});

// Base metadata
const baseUrl = "https://www.skynicemobiledetailing.com.au";
const siteName = "SKY NICE Mobile Car Detailing Sydney";
const description =
  "SKY NICE offers professional mobile car detailing in Sydney. We come to you with premium eco-friendly products & certified detailers. Full detail, interior clean, ceramic coating & more. 500+ happy clients, 5-star rated.";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${siteName} | Premium Auto Care`,
    template: `%s | ${siteName}`,
  },
  description,
  authors: [
    {
      name: "SKY NICE Mobile Car Detailing",
      url: baseUrl,
    },
  ],
  creator: "SKY NICE Mobile Car Detailing",
  publisher: "SKY NICE Mobile Car Detailing",

  // Open Graph
  openGraph: {
    type: "website",
    url: baseUrl,
    title: `${siteName} | Premium Auto Care`,
    description,
    siteName,
    images: [
      {
        url: `/screenshot-wide.png`,
        width: 1200,
        height: 630,
        alt: `${siteName} - Mobile Car Detailing`,
      },
    ],
    locale: "en_AU",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Premium Auto Care`,
    description,
    images: [`/screenshot-wide.png`],
    creator: "@SkyNiceDetail",
  },

  // Additional SEO
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index, follow",
  },

  // Canonical
  alternates: {
    canonical: baseUrl,
    languages: {
      "en-AU": `${baseUrl}`,
    },
  },

  // Icons
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: "/logo_500x500.png",
  },

  // Manifest
  manifest: "/site.webmanifest",

  // App links
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: siteName,
  },

  // Verification
  verification: {
    google: "your-google-search-console-id",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" suppressHydrationWarning>
      <head>
        {/* Critical resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* Google tag (gtag.js) - Deferred */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-HWPMP7DHGW"
        ></Script>
        <Script
          id="ga4-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-HWPMP7DHGW');
            `,
          }}
        />

        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": baseUrl,
              name: "N&T Spotless Cleaning",
              image: `${baseUrl}/screenshot-wide.png`,
              description,
              url: baseUrl,
              telephone: "+61 433 263 105",
              email: "skynicecardetailing102@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Sydney, NSW",
                addressLocality: "Sydney",
                addressRegion: "NSW",
                postalCode: "2000",
                addressCountry: "AU",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "-33.8688",
                longitude: "151.2093",
              },
              sameAs: [
                "https://www.facebook.com/sydney.spotlesscleaning",
                "https://www.instagram.com/sydney.spotlesscleaning",
                "https://maps.app.goo.gl/Zj9SkChrEE7eZX8T9",
              ],
              priceRange: "$$",
              areaServed: "Sydney, NSW, Australia",
              serviceArea: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: "-33.8688",
                  longitude: "151.2093",
                },
                geoRadius: "50",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5",
                reviewCount: "50",
              },
            }),
          }}
        />

        {/* Structured Data - Organization (Schema.org) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": `${baseUrl}#organization`,
              name: "N&T Spotless Cleaning",
              url: baseUrl,
              logo: `${baseUrl}/logo_500x500.png`,
              description,
              sameAs: [
                "https://www.facebook.com/sydney.spotlesscleaning",
                "https://www.instagram.com/sydney.spotlesscleaning",
                "https://maps.app.goo.gl/Zj9SkChrEE7eZX8T9",
              ],
            }),
          }}
        />

        {/* Breadcrumb Navigation */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: baseUrl,
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Services",
                  item: `${baseUrl}/service`,
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Booking",
                  item: `${baseUrl}/booking`,
                },
                {
                  "@type": "ListItem",
                  position: 4,
                  name: "About Us",
                  item: `${baseUrl}/about-us`,
                },
                {
                  "@type": "ListItem",
                  position: 5,
                  name: "Pricing",
                  item: `${baseUrl}/pricing`,
                },
              ],
            }),
          }}
        />

        {/* Apple icons */}
        <link rel="apple-touch-icon" href="/logo_500x500.png" />

        {/* Android Chrome */}
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextTopLoader
            color="var(--primary)"
            zIndex={100000}
            showSpinner={false}
            crawlSpeed={200}
            crawl={true}
            height={3}
          />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
