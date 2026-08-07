import { Quote } from "lucide-react";

export function QuoteBlock({
  quote,
  attribution,
}: {
  quote: string;
  attribution?: string;
}) {
  return (
    <figure className="relative mx-auto max-w-3xl text-center">
      <Quote className="mx-auto text-terracotta-500/40" size={40} />
      <blockquote className="mt-4 font-heading text-2xl leading-snug text-espresso-950 md:text-3xl">
        &ldquo;{quote}&rdquo;
      </blockquote>
      {attribution && (
        <figcaption className="mt-5 text-sm uppercase tracking-wide text-charcoal-700">
          {attribution}
        </figcaption>
      )}
    </figure>
  );
}
