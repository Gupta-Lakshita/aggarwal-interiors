"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { hoverLift, imageZoom } from "@/lib/animations";
import type { Category } from "@/types";

export function CategoryCard({ category }: { category: Category }) {
  return (
    <motion.div initial="rest" whileHover="hover" animate="rest" variants={hoverLift}>
      <Link
        href={`/products/${category.slug}`}
        className="focus-ring group block overflow-hidden rounded-[16px] border border-border-subtle bg-surface"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <motion.div variants={imageZoom} className="h-full w-full">
            <Image
              src={category.featuredImage}
              alt={category.featuredImageAlt}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/50 via-transparent to-transparent" />
        </div>
        <div className="p-6">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-xl text-espresso-950">{category.title}</h3>
            <ArrowUpRight
              size={20}
              className="mt-1 shrink-0 text-terracotta-500 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </div>
          <p className="mt-2 text-sm leading-relaxed text-charcoal-700">
            {category.shortDescription}
          </p>
          <p className="mt-4 text-xs font-medium uppercase tracking-wide text-olive-700">
            {category.productCount} Products
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
