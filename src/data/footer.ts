import type { FooterLinkGroup } from "@/types";

export const footerGroups: FooterLinkGroup[] = [
  {
    title: "Company",
    links: [
      { label: "Our Founders", href: "/founders" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "Wooden", href: "/products/wooden" },
      { label: "PVC", href: "/products/pvc" },
      { label: "Kitchen Hardware", href: "/products/kitchen-hardware" },
      { label: "Hardware", href: "/products/hardware" },
      { label: "Glass", href: "/products/glass-type" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { label: "All Categories", href: "/products" },
      { label: "CNC Machine Work", href: "/products/cnc-machine-work" },
      { label: "Manufacturer Services", href: "/products/manufacturer" },
      { label: "Glass Work", href: "/products/glass-work" },
    ],
  },
];
