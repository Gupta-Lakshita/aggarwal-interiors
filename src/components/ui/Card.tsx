import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-[16px] border border-border-subtle bg-surface shadow-[0_1px_2px_rgba(46,43,40,0.06)]",
        className
      )}
    >
      {children}
    </div>
  );
}
