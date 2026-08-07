"use client";

import { RotateCcw } from "lucide-react";
import type { Availability } from "@/types";

export interface Filters {
  brand: string;
  availability: Availability | "All";
  material: string;
}

export function FilterSidebar({
  brands,
  materials,
  filters,
  onChange,
  onReset,
}: {
  brands: string[];
  materials: string[];
  filters: Filters;
  onChange: (filters: Filters) => void;
  onReset: () => void;
}) {
  const availabilityOptions: (Availability | "All")[] = [
    "All",
    "In Stock",
    "Made to Order",
    "Limited Stock",
    "On Request",
  ];

  return (
    <aside className="rounded-[16px] border border-border-subtle bg-surface p-6" aria-label="Product filters">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-espresso-950">
          Filters
        </h2>
        <button
          type="button"
          onClick={onReset}
          className="focus-ring flex items-center gap-1 rounded text-xs font-medium text-terracotta-600 hover:text-terracotta-700"
        >
          <RotateCcw size={12} />
          Reset
        </button>
      </div>

      <div className="mt-6">
        <label htmlFor="brand-filter" className="text-xs font-medium uppercase tracking-wide text-charcoal-700">
          Brand
        </label>
        <select
          id="brand-filter"
          value={filters.brand}
          onChange={(e) => onChange({ ...filters, brand: e.target.value })}
          className="focus-ring mt-2 w-full rounded-[10px] border border-border-subtle bg-surface px-3 py-2.5 text-sm text-espresso-950"
        >
          <option value="All">All Brands</option>
          {brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-6">
        <label htmlFor="material-filter" className="text-xs font-medium uppercase tracking-wide text-charcoal-700">
          Material
        </label>
        <select
          id="material-filter"
          value={filters.material}
          onChange={(e) => onChange({ ...filters, material: e.target.value })}
          className="focus-ring mt-2 w-full rounded-[10px] border border-border-subtle bg-surface px-3 py-2.5 text-sm text-espresso-950"
        >
          <option value="All">All Materials</option>
          {materials.map((material) => (
            <option key={material} value={material}>
              {material}
            </option>
          ))}
        </select>
      </div>

      <fieldset className="mt-6">
        <legend className="text-xs font-medium uppercase tracking-wide text-charcoal-700">
          Availability
        </legend>
        <div className="mt-3 space-y-2">
          {availabilityOptions.map((option) => (
            <label key={option} className="flex cursor-pointer items-center gap-2.5 text-sm text-charcoal-800">
              <input
                type="radio"
                name="availability"
                checked={filters.availability === option}
                onChange={() => onChange({ ...filters, availability: option })}
                className="h-4 w-4 accent-terracotta-500"
              />
              {option}
            </label>
          ))}
        </div>
      </fieldset>
    </aside>
  );
}
