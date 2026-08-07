import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Container({
  children,
  className,
  as: As = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}) {
  const Comp = As as React.ElementType;
  return (
    <Comp className={cn("mx-auto w-full max-w-[1320px] px-6 md:px-10", className)}>
      {children}
    </Comp>
  );
}
