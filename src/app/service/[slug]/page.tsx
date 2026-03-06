// app/service/[slug]/page.tsx

import ServiceComponent from "@/modules/service";
import { SERVICES } from "@/modules/service/contants";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://www.skynicemobilecardetailing.com.au";
  const service = SERVICES[slug];

  // Nếu slug không tồn tại -> fallback metadata an toàn
  if (!service) {
    return {
      title: "Service not found | Sky Nice Mobile Car Detailing",
      description: "Sorry, this service is not available.",
      alternates: { canonical: `${siteUrl}/service/${slug}` },
    };
  }

  // Metadata SEO thật cho từng slug
  return {
    title: `${service.title} | Sky Nice Mobile Car Detailing`,
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
      siteName: "Sky Nice Mobile Car Detailing",
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
  const service = SERVICES.find((service) => service.slug === slug);

  //   console.log("services", services);
  if (!service) {
    notFound();
  }

  return <ServiceComponent data={service} slug={slug} />;
}
