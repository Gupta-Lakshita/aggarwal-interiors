import { cn } from "@/lib/utils";

export function Tag({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-[8px] border border-border-subtle bg-ivory-200 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-charcoal-700",
        className
      )}
    >
      {children}
    </span>
  );
}
