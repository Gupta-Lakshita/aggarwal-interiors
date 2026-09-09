"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type PageItem = number | "ellipsis";

function getPageWindow(currentPage: number, totalPages: number): PageItem[] {
  const siblings = 1;
  const pages: PageItem[] = [];

  const start = Math.max(2, currentPage - siblings);
  const end = Math.min(totalPages - 1, currentPage + siblings);

  pages.push(1);
  if (start > 2) pages.push("ellipsis");
  for (let p = start; p <= end; p++) pages.push(p);
  if (end < totalPages - 1) pages.push("ellipsis");
  if (totalPages > 1) pages.push(totalPages);

  return pages;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) {
  if (totalPages <= 1) return null;

  const pages = getPageWindow(currentPage, totalPages);

  return (
    <nav
      aria-label="Pagination"
      className="flex items-center justify-center gap-1.5 overflow-x-auto sm:gap-2"
    >
      <button
        type="button"
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        aria-label="Previous page"
        className="focus-ring flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border-subtle text-espresso-950 transition-colors hover:bg-ivory-300 disabled:opacity-30"
      >
        <ChevronLeft size={18} />
      </button>
      {pages.map((page, i) =>
        page === "ellipsis" ? (
          <span
            key={`ellipsis-${i}`}
            className="flex h-11 w-6 shrink-0 items-center justify-center text-sm text-charcoal-700/60"
          >
            …
          </span>
        ) : (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange(page)}
            aria-current={page === currentPage ? "page" : undefined}
            className={cn(
              "focus-ring flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-medium transition-colors",
              page === currentPage
                ? "bg-espresso-950 text-ivory-100"
                : "text-espresso-950 hover:bg-ivory-300"
            )}
          >
            {page}
          </button>
        )
      )}
      <button
        type="button"
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        aria-label="Next page"
        className="focus-ring flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border-subtle text-espresso-950 transition-colors hover:bg-ivory-300 disabled:opacity-30"
      >
        <ChevronRight size={18} />
      </button>
    </nav>
  );
}
