"use client";

import { motion } from "framer-motion";
import { Check, MessageCircle } from "lucide-react";
import { hoverLift, imageZoom } from "@/lib/animations";
import { Badge } from "@/components/ui/Badge";
import { SafeImage } from "@/components/ui/SafeImage";
import type { Product } from "@/types";

export function ProductCard({
  product,
  categoryTitle,
  onEnquire,
}: {
  product: Product;
  categoryTitle: string;
  onEnquire: (product: Product) => void;
}) {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      variants={hoverLift}
      className="flex h-full flex-col overflow-hidden rounded-[16px] border border-border-subtle bg-surface"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <motion.div variants={imageZoom} className="h-full w-full">
          <SafeImage
            src={product.image}
            alt={product.imageAlt}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        </motion.div>
        <div className="absolute left-4 top-4">
          <Badge tone="neutral">{categoryTitle}</Badge>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-medium uppercase tracking-wide text-terracotta-600">
          {product.brand}
        </p>
        <h3 className="mt-1 text-lg text-espresso-950">{product.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-charcoal-700">
          {product.description}
        </p>
        <ul className="mt-3 space-y-1.5">
          {product.features.slice(0, 3).map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-xs text-charcoal-700">
              <Check size={14} className="mt-0.5 shrink-0 text-olive-700" />
              {feature}
            </li>
          ))}
        </ul>
        <div className="mt-4 flex items-center justify-between gap-3 text-xs text-charcoal-700">
          <span>{product.availability}</span>
          {product.material && <span className="text-right">{product.material}</span>}
        </div>
        <button
          type="button"
          onClick={() => onEnquire(product)}
          className="focus-ring mt-5 inline-flex items-center justify-center gap-2 rounded-[14px] bg-espresso-950 px-4 py-3 text-sm font-medium text-ivory-100 transition-colors hover:bg-terracotta-600"
        >
          <MessageCircle size={16} />
          Enquire Now
        </button>
      </div>
    </motion.div>
  );
}
