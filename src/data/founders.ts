import type { Founder, Milestone, CoreValue } from "@/types";

export const founders: Founder[] = [
  {
    id: "f1",
    name: "Prakash Aggarwal",
    role: "Founder & Chairman",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Portrait of Prakash Aggarwal, Founder and Chairman",
    bio: "Prakash Aggarwal founded the company in 1988 with a single storefront and an unwavering belief that quality materials build lasting trust. Nearly four decades later, that principle still guides every decision the company makes.",
    quote:
      "We don't sell plywood and hardware. We sell the confidence that what goes into your walls will outlast you.",
  },
  {
    id: "f2",
    name: "Meera Aggarwal",
    role: "Managing Director",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Portrait of Meera Aggarwal, Managing Director",
    bio: "Meera joined the family business in 2005 and modernised operations end-to-end — from supplier partnerships to customer experience — while preserving the personal, consultative approach the brand was built on.",
    quote:
      "Every architect and homeowner who walks in deserves the same care we'd give our own home.",
  },
  {
    id: "f3",
    name: "Karan Aggarwal",
    role: "Director, Operations",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Portrait of Karan Aggarwal, Director of Operations",
    bio: "Karan leads sourcing and logistics, building direct relationships with mills and manufacturers to keep quality consistent and lead times short across every category we carry.",
    quote:
      "Trust is built one accurate delivery at a time. We treat every order like it's our reputation on the line — because it is.",
  },
];

export const milestones: Milestone[] = [
  {
    year: "1988",
    title: "The First Storefront",
    description:
      "Prakash Aggarwal opens a modest plywood and hardware shop in Karol Bagh, New Delhi, with a promise of honest pricing and genuine materials.",
  },
  {
    year: "1997",
    title: "Expanding into Laminates",
    description:
      "Partnership with leading laminate manufacturers positions the company as a trusted destination for decorative surfaces across Delhi NCR.",
  },
  {
    year: "2005",
    title: "Second Generation Joins",
    description:
      "Meera Aggarwal joins the business, introducing structured operations, supplier audits, and a customer-first showroom experience.",
  },
  {
    year: "2012",
    title: "Warehouse & Showroom Expansion",
    description:
      "A 40,000 sq. ft. warehouse and flagship showroom open, consolidating plywood, hardware, glass, and modular fittings under one roof.",
  },
  {
    year: "2019",
    title: "Modular Manufacturing Launch",
    description:
      "In-house modular kitchen and wardrobe manufacturing launches, backed by CNC machining capability for precision panel work.",
  },
  {
    year: "2024",
    title: "35 Years of Craftsmanship",
    description:
      "Now serving over 12,000 customers and partnering with 60+ brands, the company remains a family-run business at heart.",
  },
];

export const coreValues: CoreValue[] = [
  {
    title: "Integrity First",
    description:
      "We recommend what a project actually needs — never what earns us the highest margin.",
    icon: "ShieldCheck",
  },
  {
    title: "Craftsmanship",
    description:
      "Every material we stock is chosen with the same care a master carpenter brings to their bench.",
    icon: "Hammer",
  },
  {
    title: "Long-Term Trust",
    description:
      "Relationships with architects, contractors, and families are built over decades, not transactions.",
    icon: "Handshake",
  },
  {
    title: "Constant Improvement",
    description:
      "From CNC precision to curated hardware lines, we invest continuously in doing the job better.",
    icon: "TrendingUp",
  },
];
