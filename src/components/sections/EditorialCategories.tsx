import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { EditorialCard } from "@/components/cards/EditorialCard";
import { Button } from "@/components/ui/Button";
import { fadeUp } from "@/lib/animations";
import { getCategoryBySlug } from "@/data/categories";

const heroSlug = "wooden";
const sideSlugs = ["glass-type", "kitchen-hardware"] as const;
const restSlugs = ["pvc", "hardware", "wooden-adhesive", "manufacturer", "cnc-machine-work", "glass-work"] as const;

export function EditorialCategories() {
  const hero = getCategoryBySlug(heroSlug)!;
  const side = sideSlugs.map((slug) => getCategoryBySlug(slug)!);
  const rest = restSlugs.map((slug) => getCategoryBySlug(slug)!);

  return (
    <section className="bg-sage-100 py-20 md:py-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <AnimatedSection variants={fadeUp} className="max-w-xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-border-subtle" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta-600">
                Materials
              </span>
            </div>
            <h2 className="text-3xl leading-tight text-espresso-950 md:text-4xl lg:text-[2.75rem]">
              A curated range, chosen
              <br className="hidden md:block" /> for how it lives, not just how it looks.
            </h2>
          </AnimatedSection>
          <Button href="/products" variant="outline" className="hidden shrink-0 md:inline-flex">
            View All Categories
          </Button>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-12">
          <AnimatedSection variants={fadeUp} className="lg:col-span-7">
            <EditorialCard category={hero} className="h-[260px] md:h-[420px]" imageSizes="(min-width: 1024px) 55vw, 100vw" />
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-5 lg:col-span-5">
            {side.map((category, i) => (
              <AnimatedSection key={category.slug} variants={fadeUp} delay={0.08 + i * 0.06}>
                <EditorialCard category={category} className="h-[190px] md:h-[200px]" />
              </AnimatedSection>
            ))}
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {rest.map((category, i) => (
            <AnimatedSection key={category.slug} variants={fadeUp} delay={0.2 + i * 0.05}>
              <EditorialCard
                category={category}
                className="h-[160px] md:h-[200px]"
                imageSizes="(min-width: 1024px) 16vw, 45vw"
                compact
              />
            </AnimatedSection>
          ))}
        </div>

        <Button href="/products" variant="outline" className="mt-10 w-full md:hidden">
          View All Categories
        </Button>
      </Container>
    </section>
  );
}
