import { SafeImage } from "@/components/ui/SafeImage";
import type { Brand } from "@/types";

export function BrandLogo({ brand }: { brand: Brand }) {
  return (
    <div className="flex h-24 w-48 shrink-0 items-center justify-center overflow-hidden rounded-[14px] border border-border-subtle bg-surface p-4 transition-shadow duration-300 hover:shadow-md">
      <div
        className="relative h-full w-full"
        style={brand.scale ? { transform: `scale(${brand.scale})` } : undefined}
      >
        <SafeImage
          src={brand.logo}
          alt={`${brand.name} logo`}
          fill
          sizes="192px"
          className="object-contain"
        />
      </div>
    </div>
  );
}
