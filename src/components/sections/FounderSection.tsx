import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SafeImage } from "@/components/ui/SafeImage";
import { QuoteBlock } from "@/components/ui/QuoteBlock";
import { fadeUp, fadeIn } from "@/lib/animations";
import { founder } from "@/data/founders";

export function FounderSection() {
  return (
    <section id="founder" className="wood-texture bg-ivory-200 py-20 md:py-32">
      <Container className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <AnimatedSection
          variants={fadeIn}
          className="relative order-2 aspect-[4/5] overflow-hidden rounded-[16px] lg:order-1"
        >
          <SafeImage
            src={founder.image}
            alt={founder.imageAlt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </AnimatedSection>

        <div className="order-1 lg:order-2">
          <AnimatedSection variants={fadeUp}>
            <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-terracotta-600">
              <span className="h-px w-10 bg-border-subtle" />
              Meet the Founder
            </p>
            <h2 className="text-3xl leading-tight text-espresso-950 md:text-4xl lg:text-[2.75rem]">
              {founder.name}
            </h2>
            <p className="mt-1 text-sm font-medium uppercase tracking-wide text-charcoal-700">
              {founder.role}
            </p>
            <p className="mt-6 text-base leading-relaxed text-charcoal-700 md:text-lg">
              {founder.bio}
            </p>
          </AnimatedSection>

          <AnimatedSection variants={fadeUp} delay={0.1} className="mt-10">
            <QuoteBlock
              quote={founder.quote}
              attribution={`${founder.name}, ${founder.role}`}
              align="left"
            />
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
