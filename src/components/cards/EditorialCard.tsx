"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SafeImage } from "@/components/ui/SafeImage";
import { cn } from "@/lib/utils";
import type { Category } from "@/types";

export function EditorialCard({
  category,
  className,
  imageSizes = "(min-width: 1024px) 40vw, 100vw",
}: {
  category: Category;
  className?: string;
  imageSizes?: string;
}) {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      className={cn("group relative h-full overflow-hidden rounded-[16px]", className)}
    >
      <Link href={`/products/${category.slug}`} className="focus-ring block h-full">
        <motion.div
          variants={{ rest: { scale: 1 }, hover: { scale: 1.06 } }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <SafeImage
            src={category.featuredImage}
            alt={category.featuredImageAlt}
            fill
            sizes={imageSizes}
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/85 via-espresso-950/20 to-transparent transition-opacity duration-500 group-hover:from-espresso-950/90" />

        <motion.div
          variants={{ rest: { y: 0 }, hover: { y: -6 } }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-x-0 bottom-0 p-6 md:p-8"
        >
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage-400">
                {category.productCount} Products
              </p>
              <h3 className="mt-2 font-heading text-2xl text-ivory-50 md:text-3xl">
                {category.title}
              </h3>
              <p className="mt-2 hidden max-w-xs text-sm leading-relaxed text-ivory-200/80 md:block">
                {category.shortDescription}
              </p>
            </div>
            <motion.span
              variants={{ rest: { x: 0, y: 0 }, hover: { x: 4, y: -4 } }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ivory-100/30 text-ivory-50"
            >
              <ArrowUpRight size={18} />
            </motion.span>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
