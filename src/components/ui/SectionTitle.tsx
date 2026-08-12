import { cn } from "@/lib/utils";

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-terracotta-600",
            align === "center" && "justify-center"
          )}
        >
          <span className="h-px w-10 bg-border-subtle" />
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-normal leading-tight text-espresso-950 md:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-charcoal-700 md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
