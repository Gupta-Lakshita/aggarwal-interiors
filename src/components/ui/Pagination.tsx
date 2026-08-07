"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

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

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav aria-label="Pagination" className="flex items-center justify-center gap-2">
      <button
        type="button"
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        aria-label="Previous page"
        className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-border-subtle text-espresso-950 transition-colors hover:bg-ivory-300 disabled:opacity-30"
      >
        <ChevronLeft size={18} />
      </button>
      {pages.map((page) => (
        <button
          key={page}
          type="button"
          onClick={() => onPageChange(page)}
          aria-current={page === currentPage ? "page" : undefined}
          className={cn(
            "focus-ring flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium transition-colors",
            page === currentPage
              ? "bg-espresso-950 text-ivory-100"
              : "text-espresso-950 hover:bg-ivory-300"
          )}
        >
          {page}
        </button>
      ))}
      <button
        type="button"
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        aria-label="Next page"
        className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-border-subtle text-espresso-950 transition-colors hover:bg-ivory-300 disabled:opacity-30"
      >
        <ChevronRight size={18} />
      </button>
    </nav>
  );
}
