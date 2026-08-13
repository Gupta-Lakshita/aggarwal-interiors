"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { cn } from "@/lib/utils";
import { testimonials } from "@/data/testimonials";

const PAGE_SIZE = 4;
const totalPages = Math.ceil(testimonials.length / PAGE_SIZE);

export function Testimonials() {
  const [page, setPage] = useState(0);
  const visible = testimonials.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  return (
    <section className="wood-texture bg-ivory-100 py-20 md:py-32">
      <Container>
        <SectionTitle
          eyebrow="Testimonials"
          title="What Our Customers Say"
          align="center"
          className="mx-auto"
        />

        <div className="relative mt-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
            >
              {visible.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex items-center justify-center gap-6">
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setPage(i)}
                aria-label={`Show reviews ${i * PAGE_SIZE + 1} to ${Math.min((i + 1) * PAGE_SIZE, testimonials.length)}`}
                aria-current={i === page ? "true" : undefined}
                className={cn(
                  "focus-ring h-2 rounded-full transition-all duration-300",
                  i === page ? "w-6 bg-terracotta-500" : "w-2 bg-terracotta-500/30 hover:bg-terracotta-500/50"
                )}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => setPage((p) => (p + 1) % totalPages)}
            aria-label="Show next reviews"
            className="focus-ring flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-espresso-950/30 text-espresso-950 transition-colors hover:border-terracotta-500 hover:bg-terracotta-500/5 hover:text-terracotta-600"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </Container>
    </section>
  );
}
