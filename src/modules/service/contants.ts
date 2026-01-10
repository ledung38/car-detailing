import miniPackage from "@/lib/assets/images/mini-package.png";
import interiorPackage from "@/lib/assets/images/interior-package.png";
import fullDetail from "@/lib/assets/images/full-detail-package.png";
import extensionDetail from "@/lib/assets/images/extension-detail.png";
import enhancementPackage from "@/lib/assets/images/enhancement-package.png";
import ceramicCoatingPackage from "@/lib/assets/images/ceramic-coating-package.png";
import { StaticImageData } from "next/image";

// constants/services.ts
export interface Service {
  id: string;
  title: string;
  slug: string;
  avatar: StaticImageData;
  duration: string;
  priceRange: string;
  description: string;
  highlights: string[];
  category?: string;
}

export const SERVICES: Service[] = [
  {
    id: "mini-package",
    title: "Mini Package / Maintenance",
    avatar: miniPackage,
    slug: "mini-package",
    duration: "1 – 1.5 hours",
    priceRange: "S: $90 | M: $110 | L: $130",
    description:
      "Full exterior and interior light cleaning to maintain your vehicle’s shine and freshness.",
    highlights: [
      "Full exterior wash (2 buckets + Snow Foam)",
      "Wheels cleaned & tyres dressed",
      "Windows cleaned (inside & outside)",
      "Door jamb cleaned",
      "Full interior vacuum (boot, seats, carpet, mats)",
      "Dashboard wipe down",
      "Car air freshening",
    ],
  },
  {
    id: "interior-package",
    title: "Interior Package",
    avatar: interiorPackage,
    slug: "interior-package",
    duration: "1.5 – 2.5 hours",
    priceRange: "S: $140 | M: $160 | L: $190",
    description:
      "Deep interior cleaning including vacuum, shampoo, and deodorizing for a refreshed cabin.",
    highlights: [
      "Full interior vacuumed",
      "Seats & mats shampooed / steamed cleaned",
      "Windows & mirrors cleaned (inside & outside)",
      "Dashboard, console, trims cleaned & dressed",
      "Driving pedals cleaned",
      "Interior deodorised",
    ],
  },
  {
    id: "full-detail-package",
    title: "Full Detail Package",
    slug: "full-detail-package",
    avatar: fullDetail,
    duration: "2.5 – 3.5 hours",
    priceRange: "S: $230 | M: $260 | L: $290",
    description:
      "Comprehensive inside & outside detailing to restore your car’s like-new look.",
    highlights: [
      "Full exterior wash (2 buckets + Snow Foam)",
      "Wheels & tyres cleaned & dressed",
      "Door jamb & boot cleaned",
      "High gloss & protectant sealant applied",
      "Windows cleaned (inside & outside)",
      "Vacuum seats, carpet, boot & mats",
      "Deep shampoo & steam clean interior",
      "All interior surfaces deep scrubbed & dressed",
      "Interior deodorised",
    ],
  },
  {
    id: "enhancement-package",
    title: "Enhancement Package",
    slug: "enhancement-package",
    avatar: enhancementPackage,
    duration: "4 – 5.5 hours",
    priceRange: "S: $350 | M: $390 | L: $450",
    description:
      "Premium detailing including paint decontamination, polishing, and protection coating.",
    highlights: [
      "Full Detail Package included",
      "Undercarriage wash",
      "Clay bar treatment",
      "Bug & iron removal",
      "1-step cut & polish",
      "Wax & protectant sealant applied",
    ],
  },
  {
    id: "ceramic-coating-package",
    title: "Ceramic Coating Package",
    avatar: ceramicCoatingPackage,
    slug: "ceramic-coating-package",
    duration: "Varies by option (1, 3, or 5 years)",
    priceRange: "Contact for quotation",
    description:
      "Advanced ceramic protection with multi-stage paint correction and long-lasting shine.",
    highlights: [
      "Full exterior wash (2 buckets + Snow Foam)",
      "Iron & bug removal + clay bar treatment",
      "Multi-stage paint correction (light & medium scratches)",
      "Enhance shine and depth",
      "1, 3, or 5 year CSL ceramic coating options",
    ],
  },
  {
    id: "extension-detail",
    title: "Extension Detail Options",
    slug: "extension-detail",
    avatar: extensionDetail,
    duration: "Add-on services",
    priceRange: "From $30 – $70",
    description:
      "Customised add-on services for specific needs or heavy cleaning requirements.",
    highlights: [
      "Engine bay cleaning & dressing (from $50)",
      "Headlight restoration ($70/pair)",
      "Excessive dirt, mud, or pet hair removal (from $30)",
      "Sticker removal",
      "Car headliner cleaning",
    ],
  },
];

export const SERVICE_DETAILS = Object.fromEntries(
  SERVICES.map((s) => [
    s.slug,
    {
      title: s.title,
      description: s.description,
      duration: s.duration,
      priceRange: s.priceRange,
      highlights: s.highlights,
      seo: {
        title: `${s.title} | Mobile Car Detailing Sydney`,
        description: `${s.description} – Book now with Sky Nice Detailing Sydney.`,
      },
    },
  ])
);
