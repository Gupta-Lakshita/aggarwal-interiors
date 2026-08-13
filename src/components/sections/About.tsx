import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { StatCard } from "@/components/cards/StatCard";
import { SafeImage } from "@/components/ui/SafeImage";
import { Button } from "@/components/ui/Button";
import { fadeUp, fadeIn } from "@/lib/animations";
import { company } from "@/data/company";

export function About() {
  return (
    <section className="wood-texture bg-terracotta-100 py-20 md:py-32">
      <Container className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <AnimatedSection variants={fadeIn} className="relative aspect-[4/5] overflow-hidden rounded-[16px]">
          <SafeImage
            src="https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=1200&auto=format&fit=crop"
            alt="Close-up of rich walnut wood grain texture"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </AnimatedSection>

        <div>
          <AnimatedSection variants={fadeUp}>
            <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-terracotta-600">
              <span className="h-px w-10 bg-border-subtle" />
              Our Story
            </p>
            <h2 className="text-3xl leading-tight text-espresso-950 md:text-4xl lg:text-[2.75rem]">
              Three Generations of Trusted Craftsmanship
            </h2>
            <p className="mt-5 text-base leading-relaxed text-charcoal-700 md:text-lg">
              Since {company.foundedYear}, {company.name} has been the destination for
              architects, interior designers, and homeowners seeking materials that meet
              the highest standards of quality. What began as a single storefront has grown
              into a full-service supplier of plywood, laminates, hardware, and bespoke
              manufacturing — without ever losing the personal, consultative approach that
              built our reputation.
            </p>
          </AnimatedSection>

          <AnimatedSection variants={fadeUp} delay={0.15} className="mt-8">
            <Button href="/about" variant="outline">
              Learn More About Us
            </Button>
          </AnimatedSection>

          <div className="mt-12 grid grid-cols-2 gap-8">
            {company.stats.map((stat, i) => (
              <AnimatedSection key={stat.label} variants={fadeUp} delay={i * 0.08}>
                <StatCard value={stat.value} suffix={stat.suffix} label={stat.label} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
