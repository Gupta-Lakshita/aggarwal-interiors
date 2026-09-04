import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { ProductExplorer } from "@/components/products/ProductExplorer";
import { RelatedCategories } from "@/components/sections/RelatedCategories";
import { CTASection } from "@/components/sections/CTASection";
import { SectionBlend } from "@/components/ui/SectionBlend";
import { categories, getCategoryBySlug } from "@/data/categories";
import { getProductsByCategory } from "@/data/products";

const categoryTint: Record<string, { token: string; bg: string }> = {
  wooden: { token: "stone-50", bg: "bg-stone-50" },
  pvc: { token: "sky-100", bg: "bg-sky-100" },
  "kitchen-hardware": { token: "gold-100", bg: "bg-gold-100" },
  hardware: { token: "ivory-200", bg: "bg-ivory-200" },
  "wooden-adhesive": { token: "sage-50", bg: "bg-sage-50" },
  manufacturer: { token: "terracotta-100", bg: "bg-terracotta-100" },
  "cnc-machine-work": { token: "sky-50", bg: "bg-sky-50" },
  "glass-type": { token: "sage-100", bg: "bg-sage-100" },
  "glass-work": { token: "stone-100", bg: "bg-stone-100" },
};

const defaultTint = { token: "ivory-100", bg: "bg-ivory-100" };

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};

  return {
    title: category.seo.title,
    description: category.seo.description,
    keywords: category.seo.keywords,
    alternates: { canonical: `/products/${category.slug}` },
    openGraph: {
      title: category.seo.title,
      description: category.seo.description,
      images: [{ url: category.heroImage }],
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const products = getProductsByCategory(category.slug);
  const related = categories.filter((c) => c.slug !== category.slug).slice(0, 3);
  const tint = categoryTint[category.slug] ?? defaultTint;

  return (
    <>
      <PageHero
        eyebrow="Category"
        title={category.title}
        description={category.shortDescription}
        image={category.heroImage}
        imageAlt={category.heroImageAlt}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: category.title },
        ]}
      />

      <SectionBlend from="espresso-950" to={tint.token} />
      <section className={`${tint.bg} py-16 md:py-20`}>
        <Container>
          <p className="max-w-3xl text-base leading-relaxed text-charcoal-700 md:text-lg">
            {category.description}
          </p>
        </Container>
      </section>

      <section className={`${tint.bg} pb-20 pt-4 md:pb-28`}>
        <Container>
          <ProductExplorer products={products} categoryTitle={category.title} />
        </Container>
      </section>

      <SectionBlend from={tint.token} to="sage-100" />
      <RelatedCategories categories={related} />
      <SectionBlend from="sage-100" to="espresso-950" />
      <CTASection />
    </>
  );
}
