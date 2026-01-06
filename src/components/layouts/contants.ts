import { Routes } from "@/lib/enum/routes";

export const MENU_ITEMS = [
  {
    key: Routes.HOME,
    label: "Home",
  },
  {
    key: Routes.SERVICE,
    label: "Services",
    children: [
      {
        label: "Mini Package",
        key: Routes.SERVICE_MINI,
      },
      {
        label: "Interior Package",
        key: Routes.SERVICE_INTERIOR,
      },
      {
        label: "Full Detail Package",
        key: Routes.SERVICE_FULL_DETAIL,
      },
      {
        label: "Enhancement Package",
        key: Routes.SERVICE_ENHANCEMENT,
      },
      {
        label: "Ceramic Coating",
        key: Routes.SERVICE_CERAMIC,
      },
    ],
  },
  {
    key: Routes.PRICING,
    label: "Pricing",
  },
  {
    key: Routes.ABOUT_US,
    label: "About Us",
  },
  {
    key: Routes.BOOKING,
    label: "Booking",
  },
];
