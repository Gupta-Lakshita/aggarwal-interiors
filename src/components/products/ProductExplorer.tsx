"use client";

import { useMemo, useState } from "react";
import { Search, PackageSearch } from "lucide-react";
import { ProductCard } from "@/components/cards/ProductCard";
import { Pagination } from "@/components/ui/Pagination";
import { EnquiryModal } from "@/components/products/EnquiryModal";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { staggerContainer, fadeUp } from "@/lib/animations";
import type { Product } from "@/types";

const PAGE_SIZE = 8;

export function ProductExplorer({
  products,
  categoryTitle,
}: {
  products: Product[];
  categoryTitle: string;
}) {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [enquiryProduct, setEnquiryProduct] = useState<Product | null>(null);

  const filtered = useMemo(() => {
    return products.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));
  }, [products, search]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div>
      <div className="relative mb-8 max-w-md">
        <Search
          size={18}
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-charcoal-700/60"
        />
        <input
          type="search"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
          placeholder={`Search ${categoryTitle} products...`}
          aria-label="Search products"
          className="focus-ring w-full rounded-[14px] border border-border-subtle bg-surface py-3.5 pl-12 pr-4 text-sm text-espresso-950 placeholder:text-charcoal-700/50"
        />
      </div>

      <p className="mb-6 text-sm text-charcoal-700">
        Showing {paginated.length} of {filtered.length} products
      </p>

      {paginated.length > 0 ? (
        <AnimatedSection
          variants={staggerContainer}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3"
        >
          {paginated.map((product) => (
            <AnimatedSection key={product.id} variants={fadeUp} as="div">
              <ProductCard
                product={product}
                categoryTitle={categoryTitle}
                onEnquire={setEnquiryProduct}
              />
            </AnimatedSection>
          ))}
        </AnimatedSection>
      ) : (
        <div className="flex flex-col items-center gap-4 rounded-[16px] border border-dashed border-border-subtle py-20 text-center">
          <PackageSearch size={40} className="text-charcoal-700/40" />
          <div>
            <p className="font-medium text-espresso-950">No products found</p>
            <p className="mt-1 text-sm text-charcoal-700">Try adjusting your search.</p>
          </div>
        </div>
      )}

      <div className="mt-12">
        <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
      </div>

      <EnquiryModal product={enquiryProduct} onClose={() => setEnquiryProduct(null)} />
    </div>
  );
}
