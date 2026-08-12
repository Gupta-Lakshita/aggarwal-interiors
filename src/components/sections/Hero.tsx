"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SafeImage } from "@/components/ui/SafeImage";
import { fadeUp, fadeIn, staggerContainer } from "@/lib/animations";
import { company } from "@/data/company";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative flex h-[100vh] min-h-[680px] items-end overflow-hidden bg-espresso-950"
    >
      <motion.div
        style={{ y: imageY }}
        initial={{ scale: 1.14 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 -top-[10%] h-[120%] w-full"
      >
        <SafeImage
          src="https://images.unsplash.com/photo-1493666694104-c8f1b7c8e4a0?q=80&w=2400&auto=format&fit=crop"
          alt="Premium interior showcasing rich walnut wood surfaces and natural light"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-espresso-950 via-espresso-950/55 to-espresso-950/15" />

      <motion.div style={{ y: contentY, opacity: contentOpacity }} className="relative z-10 w-full">
        <Container className="pb-24 pt-40 md:pb-32">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.div variants={fadeUp} className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-ivory-100/30" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-stone-300">
                {company.yearsInBusiness}+ Years of Craftsmanship
              </span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-[2.75rem] font-normal leading-[1.05] tracking-tight text-ivory-50 sm:text-6xl lg:text-[5rem]"
            >
              Materials for
              <br />
              <span className="italic text-sage-400">spaces that</span>
              <br />
              feel considered.
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-xl text-base leading-relaxed text-ivory-200/85 md:text-lg"
            >
              {company.supportingCopy}
            </motion.p>
            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
              <Button href="/products" size="lg" variant="secondary">
                Explore Collection
              </Button>
              <Button
                href="/contact"
                size="lg"
                variant="outline"
                className="border-ivory-100/40 text-ivory-50 hover:border-ivory-50 hover:bg-ivory-50/10"
              >
                Talk to an Expert
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </motion.div>

      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-ivory-100/80"
        >
          <span className="text-[10px] uppercase tracking-[0.2em]">Scroll to Explore</span>
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
