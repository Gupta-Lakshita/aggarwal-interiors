import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-ivory-100">
      <Container className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-terracotta-600">
          404
        </p>
        <h1 className="mt-3 text-3xl text-espresso-950 md:text-4xl">
          We couldn&apos;t find that page
        </h1>
        <p className="mx-auto mt-4 max-w-md text-charcoal-700">
          The page you&apos;re looking for may have moved or no longer exists.
        </p>
        <Button href="/" className="mt-8">
          Back to Home
        </Button>
      </Container>
    </section>
  );
}
