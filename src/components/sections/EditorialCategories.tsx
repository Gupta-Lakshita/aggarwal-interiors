import Link from "next/link";
import { icons, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { EditorialCard } from "@/components/cards/EditorialCard";
import { Button } from "@/components/ui/Button";
import { fadeUp } from "@/lib/animations";
import { categories, getCategoryBySlug } from "@/data/categories";

const featuredSlugs = ["wooden", "glass-type", "kitchen-hardware", "hardware", "pvc"] as const;

export function EditorialCategories() {
  const wooden = getCategoryBySlug("wooden")!;
  const glass = getCategoryBySlug("glass-type")!;
  const kitchen = getCategoryBySlug("kitchen-hardware")!;
  const hardware = getCategoryBySlug("hardware")!;
  const pvc = getCategoryBySlug("pvc")!;
  const moreCategories = categories.filter((c) => !featuredSlugs.includes(c.slug as (typeof featuredSlugs)[number]));

  return (
    <section className="bg-surface py-20 md:py-32">
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

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-12">
          <AnimatedSection variants={fadeUp} className="lg:col-span-7">
            <EditorialCard category={wooden} className="h-[340px] md:h-[560px]" imageSizes="(min-width: 1024px) 55vw, 100vw" />
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-6 lg:col-span-5">
            <AnimatedSection variants={fadeUp} delay={0.08}>
              <EditorialCard category={glass} className="h-[260px] md:h-[268px]" />
            </AnimatedSection>
            <AnimatedSection variants={fadeUp} delay={0.14}>
              <EditorialCard category={kitchen} className="h-[260px] md:h-[268px]" />
            </AnimatedSection>
          </div>

          <AnimatedSection variants={fadeUp} delay={0.1} className="lg:col-span-6">
            <EditorialCard category={hardware} className="h-[300px] md:h-[360px]" />
          </AnimatedSection>
          <AnimatedSection variants={fadeUp} delay={0.16} className="lg:col-span-6">
            <EditorialCard category={pvc} className="h-[300px] md:h-[360px]" />
          </AnimatedSection>
        </div>

        <AnimatedSection variants={fadeUp} delay={0.2} className="mt-12 border-t border-border-subtle pt-8">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-charcoal-700">
            Also Available
          </p>
          <div className="flex flex-wrap gap-3">
            {moreCategories.map((category) => {
              const Icon = (icons[category.icon as keyof typeof icons] ?? icons.Sparkles) as LucideIcon;
              return (
                <Link
                  key={category.slug}
                  href={`/products/${category.slug}`}
                  className="focus-ring group flex items-center gap-2 rounded-full border border-border-subtle bg-ivory-100 px-4 py-2.5 text-sm text-espresso-950 transition-colors hover:border-terracotta-500 hover:bg-terracotta-500/5"
                >
                  <Icon size={16} className="text-terracotta-500" />
                  {category.title}
                  <ArrowRight
                    size={14}
                    className="text-charcoal-700/50 transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                </Link>
              );
            })}
          </div>
        </AnimatedSection>

        <Button href="/products" variant="outline" className="mt-10 w-full md:hidden">
          View All Categories
        </Button>
      </Container>
    </section>
  );
}
