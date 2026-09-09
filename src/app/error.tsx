"use client";

import { useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

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
    <section className="flex min-h-[70vh] items-center bg-ivory-100 px-4">
      <Container className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-terracotta-600">
          Something went wrong
        </p>
        <h1 className="mt-3 text-3xl text-espresso-950 md:text-4xl">
          We hit a snag loading this page
        </h1>
        <p className="mx-auto mt-4 max-w-md text-charcoal-700">
          Please try again, or head back home while we sort things out.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button onClick={() => retry()}>Try again</Button>
          <Button href="/" variant="outline">
            Back to Home
          </Button>
        </div>
      </Container>
    </section>
  );
}
