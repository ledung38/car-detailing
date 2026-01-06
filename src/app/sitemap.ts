import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.spotlesscleaningsydney.com";

  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/service`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/booking`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
  ];

  // Add service pages
  const services = [
    "deep-cleaning",
    "regular-cleaning",
    "end-of-lease-cleaning",
    "mould-cleaning",
    "airbnb-cleaning",
    "restaurant-cleaning",
  ];

  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/service/${service}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...routes, ...serviceRoutes];
}
