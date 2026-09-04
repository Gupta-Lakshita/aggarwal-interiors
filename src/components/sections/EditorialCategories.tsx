"use client";

import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { icons, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { EditorialCard } from "@/components/cards/EditorialCard";
import { Button } from "@/components/ui/Button";
import { fadeUp } from "@/lib/animations";
import { categories } from "@/data/categories";

export function EditorialCategories() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const { scrollXProgress } = useScroll({ container: scrollRef });
  const progress = useSpring(scrollXProgress, { stiffness: 300, damping: 40 });

  function updateEdges() {
    const el = scrollRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft < 8);
    setAtEnd(el.scrollLeft + el.clientWidth > el.scrollWidth - 8);
  }

  useEffect(() => {
    updateEdges();
  }, []);

  function scrollByCard(direction: 1 | -1) {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector("[data-rail-card]") as HTMLElement | null;
    const amount = (card?.offsetWidth ?? 340) + 24;
    el.scrollBy({ left: amount * direction, behavior: "smooth" });
  }

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

      <AnimatedSection variants={fadeUp} delay={0.08} className="mt-14">
        <div
          ref={scrollRef}
          onScroll={updateEdges}
          className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-6 pb-2 sm:px-[max(1.5rem,calc((100vw-1152px)/2+1.5rem))]"
        >
          {categories.map((category) => (
            <div
              key={category.slug}
              data-rail-card
              className="w-[280px] shrink-0 snap-start sm:w-[340px] md:w-[380px]"
            >
              <EditorialCard
                category={category}
                className="h-[420px] md:h-[480px]"
                imageSizes="(min-width: 768px) 380px, 280px"
              />
            </div>
          ))}
          <div className="w-px shrink-0" aria-hidden />
        </div>

        <Container>
          <div className="mt-6 flex items-center gap-4">
            <div className="h-1 flex-1 overflow-hidden rounded-full bg-espresso-950/10">
              <motion.div
                className="h-full origin-left rounded-full bg-terracotta-500"
                style={{ scaleX: progress }}
              />
            </div>
            <div className="flex shrink-0 gap-2">
              <button
                type="button"
                onClick={() => scrollByCard(-1)}
                disabled={atStart}
                aria-label="Scroll categories left"
                className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-espresso-950/15 text-espresso-950 transition-colors hover:bg-surface disabled:opacity-30"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={() => scrollByCard(1)}
                disabled={atEnd}
                aria-label="Scroll categories right"
                className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-espresso-950/15 text-espresso-950 transition-colors hover:bg-surface disabled:opacity-30"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </Container>
      </AnimatedSection>

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
