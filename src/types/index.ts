export interface SEOMeta {
  title: string;
  description: string;
  keywords?: string[];
}

export interface Category {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  heroImage: string;
  heroImageAlt: string;
  featuredImage: string;
  featuredImageAlt: string;
  productCount: number;
  icon: string;
  seo: SEOMeta;
}

export type Availability = "In Stock" | "Made to Order" | "Limited Stock" | "On Request";

export interface Product {
  id: string;
  slug: string;
  name: string;
  categorySlug: string;
  brand: string;
  image?: string;
  imageAlt?: string;
  description: string;
  features: string[];
  availability: Availability;
  material?: string;
}

export interface Brand {
  id: string;
  name: string;
  logo: string;
  /** Extra zoom for logos that render small within the tile due to their aspect ratio. */
  scale?: number;
}

export interface TeamPhoto {
  id: string;
  name: string;
  image: string;
  imageAlt: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  quote: string;
  avatar?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface FooterLinkGroup {
  title: string;
  links: NavLink[];
}
