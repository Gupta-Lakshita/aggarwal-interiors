import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { CategoryCard } from "@/components/cards/CategoryCard";
import type { Category } from "@/types";

export function RelatedCategories({ categories }: { categories: Category[] }) {
  if (categories.length === 0) return null;

  return (
    <section className="bg-ivory-100 py-20 md:py-28">
      <Container>
        <SectionTitle eyebrow="Explore More" title="Related Categories" />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </Container>
    </section>
  );
}
