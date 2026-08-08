"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SafeImage } from "@/components/ui/SafeImage";
import { cn } from "@/lib/utils";
import { getCategoryBySlug } from "@/data/categories";

const slugs = ["wooden", "pvc", "hardware", "glass-type"] as const;
const categoriesForExplore = slugs.map((slug) => getCategoryBySlug(slug)!);

export function ExploreMaterials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = categoriesForExplore[activeIndex];

  return (
    <section className="bg-espresso-950 py-20 text-ivory-100 md:py-32">
      <Container>
        <div className="mb-4 flex items-center gap-3">
          <span className="font-heading text-sm text-sage-400">04</span>
          <span className="h-px w-10 bg-ivory-100/20" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-300">
            Explore Materials
          </span>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <ul className="space-y-1 border-t border-ivory-100/15">
              {categoriesForExplore.map((category, index) => {
                const isActive = index === activeIndex;
                return (
                  <li key={category.slug} className="border-b border-ivory-100/15">
                    <button
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      className={cn(
                        "focus-ring flex w-full items-center gap-5 py-6 text-left transition-colors",
                        isActive ? "text-ivory-50" : "text-ivory-100/45 hover:text-ivory-100/80"
                      )}
                    >
                      <span className="font-heading text-sm">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="font-heading text-2xl md:text-3xl">{category.title}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="lg:col-span-8">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[16px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.slug}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  <SafeImage
                    src={active.heroImage}
                    alt={active.heroImageAlt}
                    fill
                    sizes="(min-width: 1024px) 60vw, 100vw"
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/70 via-transparent to-transparent" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active.slug}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="mt-8 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end"
              >
                <p className="max-w-xl text-lg leading-relaxed text-ivory-200/85 md:text-xl">
                  {active.shortDescription}
                </p>
                <Link
                  href={`/products/${active.slug}`}
                  className="focus-ring inline-flex shrink-0 items-center gap-2 rounded-[14px] border border-ivory-100/30 px-5 py-3 text-sm font-medium text-ivory-50 transition-colors hover:border-ivory-50 hover:bg-ivory-50/10"
                >
                  View {active.title}
                  <ArrowUpRight size={16} />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}
