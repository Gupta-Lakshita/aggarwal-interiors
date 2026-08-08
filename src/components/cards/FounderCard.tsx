import { SafeImage } from "@/components/ui/SafeImage";
import type { Founder } from "@/types";

export function FounderCard({ founder }: { founder: Founder }) {
  return (
    <div className="group">
      <div className="relative aspect-[3/4] overflow-hidden rounded-[16px]">
        <SafeImage
          src={founder.image}
          alt={founder.imageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>
      <h3 className="mt-5 text-2xl text-espresso-950">{founder.name}</h3>
      <p className="mt-1 text-sm font-medium uppercase tracking-wide text-terracotta-600">
        {founder.role}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-charcoal-700">{founder.bio}</p>
      <blockquote className="mt-4 border-l-2 border-terracotta-500 pl-4 text-sm italic leading-relaxed text-espresso-900">
        &ldquo;{founder.quote}&rdquo;
      </blockquote>
    </div>
  );
}
