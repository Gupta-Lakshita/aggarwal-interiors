import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { company } from "@/data/company";

export default function NotFound() {
  return (
    <section className="wood-texture flex min-h-[80vh] items-center bg-espresso-950 px-4 pb-16 pt-32">
      <Container className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-terracotta-400">
          404
        </p>
        <h1 className="mt-3 text-3xl text-ivory-50 md:text-4xl">
          We couldn&apos;t find that page
        </h1>
        <p className="mx-auto mt-4 max-w-md text-ivory-200/80">
          The page you&apos;re looking for may have moved or no longer exists. Try our
          products, or call us and we&apos;ll help you find what you need.
        </p>
        <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
          <Button href="/" variant="secondary">
            Back to Home
          </Button>
          <Button
            href="/products"
            variant="outline"
            className="border-ivory-200/40 text-ivory-50 hover:border-ivory-50 hover:bg-ivory-50/10"
          >
            Browse Products
          </Button>
          <Button
            href={`tel:${company.phone}`}
            variant="ghost"
            className="text-ivory-100 hover:bg-ivory-50/10"
          >
            Call {company.phone}
          </Button>
        </div>
      </Container>
    </section>
  );
}
