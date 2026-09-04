"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { icons, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SafeImage } from "@/components/ui/SafeImage";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { fadeUp } from "@/lib/animations";
import { categories } from "@/data/categories";
import type { Category } from "@/types";

type TileSize = "xl" | "lg" | "md" | "sm";

const sizeClasses: Record<TileSize, string> = {
  xl: "h-44 w-44 sm:h-56 sm:w-56 md:h-72 md:w-72",
  lg: "h-32 w-32 sm:h-44 sm:w-44 md:h-56 md:w-56",
  md: "h-24 w-24 sm:h-32 sm:w-32 md:h-44 md:w-44",
  sm: "h-20 w-20 sm:h-24 sm:w-24 md:h-32 md:w-32",
};

const offsetClasses = {
  up: "md:-translate-y-8",
  down: "md:translate-y-8",
  none: "",
};

const collageLayout: { size: TileSize; offset: "up" | "down" | "none" }[] = [
  { size: "xl", offset: "none" }, // Wooden
  { size: "md", offset: "down" }, // PVC
  { size: "lg", offset: "up" }, // Kitchen Hardware
  { size: "sm", offset: "down" }, // Hardware
  { size: "md", offset: "up" }, // Wooden Adhesive
  { size: "sm", offset: "down" }, // Manufacturer
  { size: "lg", offset: "up" }, // CNC Machine Work
  { size: "sm", offset: "down" }, // Glass Type
  { size: "md", offset: "up" }, // Glass Work
];

function CircleTile({
  category,
  size,
  offset,
  index,
}: {
  category: Category;
  size: TileSize;
  offset: "up" | "down" | "none";
  index: number;
}) {
  const Icon = (icons[category.icon as keyof typeof icons] ?? icons.Sparkles) as LucideIcon;

  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 4.5 + (index % 3) * 0.6,
        repeat: Infinity,
        ease: "easeInOut",
        delay: index * 0.15,
      }}
    >
      <Link
        href={`/products/${category.slug}`}
        className={cn("focus-ring group flex shrink-0 flex-col items-center", offsetClasses[offset])}
      >
        <motion.div
          initial="rest"
          whileHover="hover"
          animate="rest"
          variants={{ rest: { scale: 1 }, hover: { scale: 1.06 } }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            "relative overflow-hidden rounded-full bg-espresso-950 shadow-lg shadow-espresso-950/10",
            sizeClasses[size]
          )}
        >
          <motion.div
            variants={{ rest: { scale: 1 }, hover: { scale: 1.12 } }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <SafeImage
              src={category.featuredImage}
              alt={category.featuredImageAlt}
              fill
              sizes="(min-width: 768px) 240px, 160px"
              className="object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 rounded-full bg-espresso-950/25 transition-colors duration-300 group-hover:bg-espresso-950/10" />
          <motion.span
            variants={{ rest: { opacity: 0, scale: 0.6 }, hover: { opacity: 1, scale: 1 } }}
            transition={{ duration: 0.3 }}
            className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-ivory-50 text-espresso-950 shadow-md md:right-3 md:top-3"
          >
            <Icon size={15} />
          </motion.span>
        </motion.div>
        <div className="mt-4 max-w-[9rem] text-center">
          <h3 className="text-sm text-espresso-950 md:text-base">{category.title}</h3>
          <p className="mt-0.5 text-[0.65rem] uppercase tracking-[0.14em] text-charcoal-700/70">
            {category.productCount} Products
          </p>
        </div>
      </Link>
    </motion.div>
  );
}

export function EditorialCategories() {
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
      </Container>

      <Container>
        <AnimatedSection
          variants={fadeUp}
          delay={0.08}
          className="mx-auto mt-16 flex max-w-4xl flex-wrap items-start justify-center gap-x-6 gap-y-10 sm:gap-x-8 md:gap-x-10"
        >
          {categories.map((category, i) => {
            const layout = collageLayout[i % collageLayout.length];
            return (
              <CircleTile
                key={category.slug}
                category={category}
                size={layout.size}
                offset={layout.offset}
                index={i}
              />
            );
          })}
        </AnimatedSection>
      </Container>

      <Container>
        <AnimatedSection variants={fadeUp} delay={0.2} className="mt-16 border-t border-border-subtle pt-8">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-charcoal-700">
            Jump to a Category
          </p>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => {
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
