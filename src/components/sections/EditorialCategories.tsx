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

type ShapeName = "arch" | "circle" | "blob" | "hexagon" | "squircle";

const SHAPE_STYLE: Record<ShapeName, React.CSSProperties> = {
  arch: { borderRadius: "50% 50% 0 0 / 100% 100% 0 0" },
  circle: { borderRadius: "9999px" },
  blob: { borderRadius: "63% 37% 54% 46% / 43% 65% 35% 57%" },
  hexagon: {
    clipPath: "polygon(25% 3%, 75% 3%, 100% 50%, 75% 97%, 25% 97%, 0% 50%)",
    borderRadius: "18px",
  },
  squircle: { borderRadius: "22%" },
};

const tileLayout: {
  shape: ShapeName;
  size: "lg" | "md";
  offset: "up" | "down" | "none";
}[] = [
  { shape: "arch", size: "lg", offset: "none" },
  { shape: "circle", size: "md", offset: "down" },
  { shape: "blob", size: "md", offset: "up" },
  { shape: "hexagon", size: "md", offset: "down" },
  { shape: "squircle", size: "md", offset: "up" },
  { shape: "circle", size: "md", offset: "down" },
  { shape: "blob", size: "md", offset: "up" },
  { shape: "hexagon", size: "md", offset: "down" },
  { shape: "squircle", size: "md", offset: "up" },
];

const sizeClasses = {
  lg: "h-64 w-56 sm:h-80 sm:w-64 md:h-[26rem] md:w-72",
  md: "h-40 w-40 sm:h-48 sm:w-48 md:h-56 md:w-56",
};

const offsetClasses = {
  up: "md:-translate-y-6",
  down: "md:translate-y-6",
  none: "",
};

function ShapeTile({
  category,
  shape,
  size,
  offset,
}: {
  category: Category;
  shape: ShapeName;
  size: "lg" | "md";
  offset: "up" | "down" | "none";
}) {
  const Icon = (icons[category.icon as keyof typeof icons] ?? icons.Sparkles) as LucideIcon;

  return (
    <Link
      href={`/products/${category.slug}`}
      className={cn("focus-ring group flex shrink-0 flex-col items-center", offsetClasses[offset])}
    >
      <motion.div
        initial="rest"
        whileHover="hover"
        animate="rest"
        variants={{ rest: { scale: 1 }, hover: { scale: 1.05 } }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        style={SHAPE_STYLE[shape]}
        className={cn("relative overflow-hidden bg-espresso-950", sizeClasses[size])}
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
            sizes="(min-width: 768px) 380px, 260px"
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-espresso-950/25 transition-colors duration-300 group-hover:bg-espresso-950/10" />
        <motion.span
          variants={{ rest: { opacity: 0, scale: 0.6 }, hover: { opacity: 1, scale: 1 } }}
          transition={{ duration: 0.3 }}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-ivory-50 text-espresso-950 shadow-md"
        >
          <Icon size={16} />
        </motion.span>
      </motion.div>
      <div className="mt-4 max-w-[11rem] text-center">
        <h3 className="text-base text-espresso-950 md:text-lg">{category.title}</h3>
        <p className="mt-0.5 text-xs uppercase tracking-[0.14em] text-charcoal-700/70">
          {category.productCount} Products
        </p>
      </div>
    </Link>
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
          className="mt-16 flex flex-wrap items-start justify-center gap-x-8 gap-y-10 md:gap-x-10"
        >
          {categories.map((category, i) => {
            const layout = tileLayout[i % tileLayout.length];
            return (
              <ShapeTile
                key={category.slug}
                category={category}
                shape={layout.shape}
                size={layout.size}
                offset={layout.offset}
              />
            );
          })}
        </AnimatedSection>
      </Container>

      <Container>
        <AnimatedSection variants={fadeUp} delay={0.2} className="mt-12 border-t border-border-subtle pt-8">
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
