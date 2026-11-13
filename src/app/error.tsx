"use client";

import { useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { company } from "@/data/company";

export default function Error({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="wood-texture flex min-h-[80vh] items-center bg-espresso-950 px-4 pb-16 pt-32">
      <Container className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-terracotta-400">
          Something went wrong
        </p>
        <h1 className="mt-3 text-3xl text-ivory-50 md:text-4xl">
          We hit a snag loading this page
        </h1>
        <p className="mx-auto mt-4 max-w-md text-ivory-200/80">
          Please try again, or head back home while we sort things out.
        </p>
        <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
          <Button variant="secondary" onClick={() => retry()}>
            Try again
          </Button>
          <Button
            href="/"
            variant="outline"
            className="border-ivory-200/40 text-ivory-50 hover:border-ivory-50 hover:bg-ivory-50/10"
          >
            Back to Home
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
