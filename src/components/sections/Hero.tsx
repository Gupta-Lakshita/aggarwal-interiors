"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SafeImage } from "@/components/ui/SafeImage";
import { fadeUp, fadeIn, staggerContainer } from "@/lib/animations";
import { company } from "@/data/company";

export function Hero() {
  return (
    <section className="relative flex h-[92vh] min-h-[640px] items-end overflow-hidden bg-espresso-950">
      <SafeImage
        src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2400&auto=format&fit=crop"
        alt="Premium interior showcasing rich walnut wood surfaces and natural light"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-espresso-950 via-espresso-950/60 to-espresso-950/20" />

      <Container className="relative z-10 pb-24 pt-40 md:pb-32">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-2xl"
        >
          <motion.p
            variants={fadeUp}
            className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-stone-400"
          >
            {company.yearsInBusiness}+ Years of Craftsmanship
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="text-4xl leading-[1.1] text-ivory-50 md:text-6xl lg:text-[4rem]"
          >
            {company.tagline}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-base leading-relaxed text-ivory-200/90 md:text-lg"
          >
            {company.supportingCopy}
          </motion.p>
          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-4">
            <Button href="/products" size="lg" variant="secondary">
              Explore Products
            </Button>
            <Button href="/contact" size="lg" variant="outline" className="border-ivory-100/40 text-ivory-50 hover:border-ivory-50 hover:bg-ivory-50/10">
              Talk to an Expert
            </Button>
          </motion.div>
        </motion.div>
      </Container>

      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-ivory-100/80"
        >
          <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
