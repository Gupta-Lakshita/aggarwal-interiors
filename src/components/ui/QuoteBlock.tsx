import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";

export function QuoteBlock({
  quote,
  attribution,
  align = "center",
}: {
  quote: string;
  attribution?: string;
  align?: "center" | "left";
}) {
  const centered = align === "center";

  return (
    <figure className={cn("relative max-w-3xl", centered && "mx-auto text-center")}>
      <Quote className={cn("text-terracotta-500/40", centered && "mx-auto")} size={40} />
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
