import type { Brand } from "@/types";

export function BrandLogo({ brand }: { brand: Brand }) {
  return (
    <div className="flex h-24 w-48 shrink-0 items-center justify-center rounded-[14px] border border-border-subtle bg-surface px-6 grayscale transition-all duration-300 hover:grayscale-0 hover:shadow-md">
      <span className="font-heading text-lg text-espresso-800">{brand.name}</span>
    </div>
  );
}
