import { cn } from "@/lib/utils";

export function Badge({
  children,
  tone = "neutral",
  className,
}: {
  children: React.ReactNode;
  tone?: "neutral" | "olive" | "terracotta" | "gold";
  className?: string;
}) {
  const tones = {
    neutral: "bg-ivory-300 text-espresso-900",
    olive: "bg-olive-600/10 text-olive-700",
    terracotta: "bg-terracotta-500/10 text-terracotta-600",
    gold: "bg-gold-500/15 text-gold-600",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-wide",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
