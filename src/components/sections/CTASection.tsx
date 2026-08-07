import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { fadeUp } from "@/lib/animations";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-espresso-950 py-24 md:py-32">
      <Image
        src="https://images.unsplash.com/photo-1493552152660-f915ab47ae9d?q=80&w=2000&auto=format&fit=crop"
        alt="Warm wooden interior detail"
        fill
        sizes="100vw"
        className="object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-espresso-950 via-espresso-950/90 to-espresso-950/60" />
      <Container className="relative z-10">
        <AnimatedSection variants={fadeUp} className="max-w-2xl">
          <h2 className="text-3xl leading-tight text-ivory-50 md:text-4xl lg:text-5xl">
            Let&apos;s Bring Your Project to Life
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ivory-200/90 md:text-lg">
            Speak with our material experts today and get personalised guidance for your
            next renovation, build, or design project.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button href="/contact" size="lg" variant="secondary">
              Contact Us
            </Button>
            <Button href="/products" size="lg" variant="outline" className="border-ivory-100/40 text-ivory-50 hover:border-ivory-50 hover:bg-ivory-50/10">
              Browse Products
            </Button>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
