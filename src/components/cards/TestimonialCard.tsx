import { Star, Quote } from "lucide-react";
import { Card } from "@/components/ui/Card";
import type { Testimonial } from "@/types";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className="flex h-full flex-col p-8">
      <Quote className="text-terracotta-500/40" size={32} />
      <p className="mt-4 flex-1 text-base leading-relaxed text-charcoal-800">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="mt-6 flex items-center gap-1" aria-label={`${testimonial.rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < testimonial.rating ? "fill-gold-500 text-gold-500" : "text-stone-300"}
          />
        ))}
      </div>
      <div className="mt-4">
        <p className="font-medium text-espresso-950">{testimonial.name}</p>
        <p className="text-sm text-charcoal-700">{testimonial.location}</p>
      </div>
    </Card>
  );
}
