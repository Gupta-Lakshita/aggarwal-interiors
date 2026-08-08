import type { MetadataRoute } from "next";
import { categories } from "@/data/categories";

const siteUrl = "https://www.aggarwalhardware.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/products", "/founders", "/contact"].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const categoryRoutes = categories.map((category) => ({
    url: `${siteUrl}/products/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...categoryRoutes];
}
