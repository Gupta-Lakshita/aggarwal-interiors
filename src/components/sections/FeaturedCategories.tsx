import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CategoryCard } from "@/components/cards/CategoryCard";
import { Button } from "@/components/ui/Button";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { categories } from "@/data/categories";

export function FeaturedCategories() {
  const featured = categories.slice(0, 8);

  return (
    <section className="bg-surface py-20 md:py-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionTitle
            eyebrow="Categories"
            title="Everything Your Project Needs"
            description="From structural plywood to decorative glass, browse our complete range of premium interior materials."
          />
          <Button href="/products" variant="outline" className="hidden shrink-0 md:inline-flex">
            View All Categories
          </Button>
        </div>

        <AnimatedSection
          as="div"
          variants={staggerContainer}
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {featured.map((category) => (
            <AnimatedSection key={category.id} variants={fadeUp} as="div">
              <CategoryCard category={category} />
            </AnimatedSection>
          ))}
        </AnimatedSection>

        <Button href="/products" variant="outline" className="mt-10 w-full md:hidden">
          View All Categories
        </Button>
      </Container>
    </section>
  );
}
