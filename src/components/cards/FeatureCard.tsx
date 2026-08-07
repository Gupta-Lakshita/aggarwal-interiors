import { icons } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  const Icon = (icons[icon as keyof typeof icons] ?? icons.Sparkles) as LucideIcon;
  return (
    <div className="rounded-[16px] border border-border-subtle bg-surface p-8 transition-shadow duration-300 hover:shadow-lg">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-olive-600/10 text-olive-700">
        <Icon size={22} />
      </div>
      <h3 className="mt-5 text-lg text-espresso-950">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-charcoal-700">{description}</p>
    </div>
  );
}
