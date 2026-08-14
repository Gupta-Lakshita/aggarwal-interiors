import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CategoryCard } from "@/components/cards/CategoryCard";
import { CTASection } from "@/components/sections/CTASection";
import { SectionBlend } from "@/components/ui/SectionBlend";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { categories } from "@/data/categories";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse our complete range of plywood, laminates, veneers, PVC panels, hardware, glass, and modular kitchen accessories.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Catalogue"
        title="Our Product Categories"
        description="A complete range of premium materials, hardware, and manufacturing services for every interior project — enquiry only, no online checkout."
        image="https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=1920&auto=format&fit=crop"
        imageAlt="Warehouse shelves stacked with premium interior materials"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Products" }]}
      />

      <SectionBlend from="espresso-950" to="gold-100" />
      <section className="bg-gold-100 py-20 md:py-28">
        <Container>
          <AnimatedSection
            variants={staggerContainer}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {categories.map((category) => (
              <AnimatedSection key={category.id} variants={fadeUp} as="div">
                <CategoryCard category={category} />
              </AnimatedSection>
            ))}
          </AnimatedSection>
        </Container>
      </section>

      <SectionBlend from="gold-100" to="espresso-950" />
      <CTASection />
    </>
  );
}
