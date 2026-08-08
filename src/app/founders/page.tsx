import type { Metadata } from "next";
import { SafeImage } from "@/components/ui/SafeImage";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { FounderCard } from "@/components/cards/FounderCard";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { Timeline } from "@/components/ui/Timeline";
import { QuoteBlock } from "@/components/ui/QuoteBlock";
import { CTASection } from "@/components/sections/CTASection";
import { staggerContainer, fadeUp, fadeIn } from "@/lib/animations";
import { founders, milestones, coreValues } from "@/data/founders";

export const metadata: Metadata = {
  title: "Our Founders",
  description:
    "Meet the family behind Aggarwal Hardware & Plywood Company — three generations of craftsmanship, integrity, and dedication to premium interior materials.",
  alternates: { canonical: "/founders" },
};

export default function FoundersPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="The Family Behind the Craft"
        description="Three generations of building trust, one interior at a time."
        image="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1920&auto=format&fit=crop"
        imageAlt="Founders reviewing wood samples in the showroom"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Founders" }]}
      />

      <section className="bg-surface py-20 md:py-28">
        <Container>
          <AnimatedSection variants={staggerContainer} className="grid grid-cols-1 gap-16 md:grid-cols-3">
            {founders.map((founder) => (
              <AnimatedSection key={founder.id} variants={fadeUp} as="div">
                <FounderCard founder={founder} />
              </AnimatedSection>
            ))}
          </AnimatedSection>
        </Container>
      </section>

      <section className="wood-texture bg-ivory-200 py-20 md:py-28">
        <Container className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <AnimatedSection variants={fadeIn} className="relative aspect-[4/5] overflow-hidden rounded-[16px]">
            <SafeImage
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop"
              alt="Founders in discussion at the showroom entrance"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </AnimatedSection>
          <div>
            <AnimatedSection variants={fadeUp}>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-terracotta-600">
                Vision &amp; Mission
              </p>
              <h2 className="text-3xl leading-tight text-espresso-950 md:text-4xl">
                Building Spaces That Last Generations
              </h2>
              <p className="mt-5 text-base leading-relaxed text-charcoal-700">
                Our vision is to be the most trusted name in interior materials across North
                India — a partner architects and homeowners turn to without hesitation.
              </p>
              <p className="mt-4 text-base leading-relaxed text-charcoal-700">
                Our mission is simple: source honestly, recommend responsibly, and deliver
                reliably, so every space we help build stands the test of time.
              </p>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      <section className="bg-surface py-20 md:py-28">
        <Container>
          <SectionTitle eyebrow="Core Values" title="What Guides Every Decision" align="center" className="mx-auto" />
          <AnimatedSection
            variants={staggerContainer}
            className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {coreValues.map((value) => (
              <AnimatedSection key={value.title} variants={fadeUp} as="div">
                <FeatureCard {...value} />
              </AnimatedSection>
            ))}
          </AnimatedSection>
        </Container>
      </section>

      <section className="bg-ivory-100 py-20 md:py-28">
        <Container className="max-w-3xl">
          <SectionTitle eyebrow="Our Journey" title="Milestones Along the Way" />
          <div className="mt-14">
            <Timeline milestones={milestones} />
          </div>
        </Container>
      </section>

      <section className="bg-surface py-24 md:py-32">
        <Container>
          <QuoteBlock
            quote={founders[0].quote}
            attribution={`${founders[0].name}, ${founders[0].role}`}
          />
        </Container>
      </section>

      <section className="wood-texture bg-ivory-200 py-20 md:py-28">
        <Container className="text-center">
          <SectionTitle
            eyebrow="Leadership Philosophy"
            title="Consultative, Not Transactional"
            description="We believe the best business relationships are built on honest guidance, not the hardest sell. Every recommendation starts with what your project actually needs."
            align="center"
            className="mx-auto"
          />
          <div className="relative mx-auto mt-14 aspect-[21/9] max-w-4xl overflow-hidden rounded-[16px]">
            <SafeImage
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1600&auto=format&fit=crop"
              alt="The full team gathered at the flagship showroom"
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
