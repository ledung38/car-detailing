// app/service/[slug]/page.tsx

import ServiceComponent from "@/modules/service";
import services from "@/modules/service/contants";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://www.spotlesscleaningsydney.com";
  const service = services[slug];

  // Nếu slug không tồn tại -> fallback metadata an toàn
  if (!service) {
    return {
      title: "Service not found | N&T Spotless Cleaning",
      description: "Sorry, this service is not available.",
      alternates: { canonical: `${siteUrl}/service/${slug}` },
    };
  }

  // Metadata SEO thật cho từng slug
  return {
    title: `${service.title} | N&T Spotless Cleaning`,
    description: service.description,
    openGraph: {
      title: service.title,
      description: service.description,
      images: [
        {
          url: `${siteUrl}/og-services.png`,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
      url: `${siteUrl}/service/${slug}`,
      siteName: "N&T Spotless Cleaning",
    },
    alternates: {
      canonical: `${siteUrl}/service/${slug}`,
    },
  };
}

// Hàm này sẽ trở thành async
export default async function ServiceDetails({ params }) {
  // Chờ params slug
  const { slug } = await params;

  // Lấy thông tin dịch vụ từ data
  const service = services[slug];

  //   console.log("services", services);
  if (!service) {
    notFound();
  }

  return <ServiceComponent data={service} slug={slug} />;
}
