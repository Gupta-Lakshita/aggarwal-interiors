"use client";

import { icons } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { staggerContainer, fadeUp } from "@/lib/animations";

const reasons = [
  { icon: "Gem", title: "Premium Materials", description: "Every product is vetted for quality, durability, and finish before it reaches our shelves." },
  { icon: "BadgeCheck", title: "Trusted Brands", description: "We partner exclusively with manufacturers known for consistency and reliability." },
  { icon: "Users", title: "Expert Guidance", description: "Our team helps you choose the right material for your project, budget, and timeline." },
  { icon: "IndianRupee", title: "Competitive Pricing", description: "Direct manufacturer relationships mean better pricing without compromising quality." },
  { icon: "Warehouse", title: "Large Inventory", description: "A 40,000 sq. ft. warehouse ensures the materials you need are ready when you need them." },
  { icon: "Truck", title: "Fast Delivery", description: "Reliable logistics get your order to site on schedule, every time." },
  { icon: "Headset", title: "Customer Support", description: "From enquiry to after-sales, our team is available to answer every question." },
  { icon: "ShieldCheck", title: "35+ Years of Trust", description: "Three generations of family ownership built on honest recommendations." },
];

function ReasonRow({ reason, index }: { reason: (typeof reasons)[number]; index: number }) {
  const Icon = (icons[reason.icon as keyof typeof icons] ?? icons.Sparkles) as LucideIcon;
  return (
    <div className="group flex items-start gap-5 border-b border-espresso-950/10 py-7 first:pt-0">
      <span className="font-heading text-2xl leading-none text-terracotta-500/50 transition-colors duration-300 group-hover:text-terracotta-600">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="flex-1">
        <div className="flex items-center gap-3">
          <Icon size={18} className="shrink-0 text-olive-700" />
          <h3 className="text-lg text-espresso-950">{reason.title}</h3>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-charcoal-700">{reason.description}</p>
      </div>
    </div>
  );
}

export function WhyChooseUs() {
  return (
    <section className="wood-texture bg-gold-100 py-20 md:py-32">
      <Container>
        <SectionTitle
          eyebrow="Why Choose Us"
          title="Built on Trust, Backed by Experience"
          align="center"
          className="mx-auto"
        />
        <AnimatedSection
          variants={staggerContainer}
          className="mt-14 grid grid-cols-1 gap-x-12 md:grid-cols-2"
        >
          {reasons.map((reason, i) => (
            <AnimatedSection key={reason.title} variants={fadeUp} as="div">
              <ReasonRow reason={reason} index={i} />
            </AnimatedSection>
          ))}
        </AnimatedSection>
      </Container>
    </section>
  );
}
