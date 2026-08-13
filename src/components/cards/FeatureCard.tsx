"use client";

import { motion } from "framer-motion";
import { icons } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { hoverLift } from "@/lib/animations";

const iconHover = {
  rest: { scale: 1, rotate: 0, backgroundColor: "rgba(107,123,80,0.1)" },
  hover: {
    scale: 1.1,
    rotate: -6,
    backgroundColor: "rgba(107,123,80,0.18)",
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  const Icon = (icons[icon as keyof typeof icons] ?? icons.Sparkles) as LucideIcon;
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      variants={hoverLift}
      className="flex h-full flex-col rounded-[16px] border border-border-subtle bg-surface p-8"
    >
      <motion.div
        variants={iconHover}
        className="flex h-12 w-12 items-center justify-center rounded-full text-olive-700"
      >
        <Icon size={22} />
      </motion.div>
      <h3 className="mt-5 text-lg text-espresso-950">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal-700">{description}</p>
    </motion.div>
  );
}
