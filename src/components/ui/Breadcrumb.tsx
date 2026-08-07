import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumb({
  items,
  inverted = false,
}: {
  items: BreadcrumbItem[];
  inverted?: boolean;
}) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-1.5">
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className={cn(
                    "focus-ring rounded transition-colors hover:text-terracotta-500",
                    inverted ? "text-ivory-200/80" : "text-charcoal-700"
                  )}
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  aria-current={isLast ? "page" : undefined}
                  className={cn(
                    "font-medium",
                    inverted ? "text-ivory-50" : "text-espresso-950"
                  )}
                >
                  {item.label}
                </span>
              )}
              {!isLast && (
                <ChevronRight
                  size={14}
                  className={inverted ? "text-ivory-200/50" : "text-charcoal-700/40"}
                />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
