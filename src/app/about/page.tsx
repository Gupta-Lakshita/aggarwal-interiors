import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SafeImage } from "@/components/ui/SafeImage";
import { StatCard } from "@/components/cards/StatCard";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { Button } from "@/components/ui/Button";
import { SectionBlend } from "@/components/ui/SectionBlend";
import { fadeUp, fadeIn, staggerContainer } from "@/lib/animations";
import { company } from "@/data/company";
import { teamPhoto } from "@/data/team";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet Aggarwal Hardware & Plywood Company — three generations of craftsmanship supplying premium plywood, laminates, hardware, glass, and modular kitchen solutions.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: "ShieldCheck",
    title: "Integrity First",
    description: "Honest recommendations over easy upsells — every time, for every customer.",
  },
  {
    icon: "Gem",
    title: "Uncompromising Quality",
    description: "If we wouldn't use it in our own homes, it doesn't reach our shelves.",
  },
  {
    icon: "Hammer",
    title: "Craft & Precision",
    description: "From CNC cutting to glass etching, our in-house teams sweat every detail.",
  },
  {
    icon: "Users",
    title: "People, Not Transactions",
    description: "Relationships built on remembering names, not just orders.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Three Generations. One Standard of Craft."
        description="From a single storefront in 1988 to a full-service materials and manufacturing destination — this is the story of Aggarwal Hardware & Plywood Company."
        image="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1920&auto=format&fit=crop"
        imageAlt="Warm, minimal modern interior living space"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      <SectionBlend from="espresso-950" to="terracotta-100" />
      <section className="bg-terracotta-100 py-20 md:py-28">
        <Container className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <AnimatedSection variants={fadeIn} className="relative aspect-[4/5] overflow-hidden rounded-[16px] lg:order-2">
            <SafeImage
              src="https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1200&auto=format&fit=crop"
              alt="Rows of stacked plywood and boards inside our warehouse"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </AnimatedSection>

          <div className="lg:order-1">
            <AnimatedSection variants={fadeUp}>
              <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-terracotta-600">
                <span className="h-px w-10 bg-border-subtle" />
                How It Started
              </p>
              <h2 className="text-3xl leading-tight text-espresso-950 md:text-4xl lg:text-[2.75rem]">
                Built on a Simple Promise
              </h2>
              <p className="mt-5 text-base leading-relaxed text-charcoal-700 md:text-lg">
                Since {company.foundedYear}, {company.name} has supplied architects, interior
                designers, and homeowners with materials that meet the highest standards of
                quality. What began as a single storefront on Dalhousie Road has grown into a
                full-service supplier of plywood, laminates, hardware, glass, and bespoke
                manufacturing — while holding on to the personal, consultative approach that
                built our reputation in the first place.
              </p>
              <p className="mt-4 text-base leading-relaxed text-charcoal-700 md:text-lg">
                That promise is what our team continues to build on today, treating every
                enquiry — big or small — with the same care.
              </p>
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

      <SectionBlend from="terracotta-100" to="espresso-950" />
      <section className="relative overflow-hidden py-20 md:py-28">
        <SafeImage
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1920&auto=format&fit=crop"
          alt="Craftsman carefully measuring and shaping a wooden panel"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso-950/95 via-espresso-950/80 to-espresso-950/50" />
        <Container className="relative z-10">
          <AnimatedSection variants={fadeUp} className="max-w-xl">
            <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-terracotta-400">
              <span className="h-px w-10 bg-ivory-100/30" />
              Craftsmanship
            </p>
            <h2 className="text-3xl leading-tight text-ivory-50 md:text-4xl lg:text-[2.75rem]">
              Precision Isn&apos;t Outsourced Here
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ivory-200/90 md:text-lg">
              Our CNC machine work, in-house manufacturing, and glass studio bring precision
              cutting, bespoke modular kitchens, and artisan glass work together — every
              measurement, cut, and finish held to a standard we set ourselves.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      <SectionBlend from="espresso-950" to="sage-100" />
      <section className="bg-sage-100 py-20 md:py-32">
        <Container>
          <SectionTitle
            eyebrow="What We Stand For"
            title="The Values Behind Every Sale"
            align="center"
            className="mx-auto"
          />
          <AnimatedSection
            variants={staggerContainer}
            className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {values.map((value) => (
              <AnimatedSection key={value.title} variants={fadeUp} as="div">
                <FeatureCard {...value} />
              </AnimatedSection>
            ))}
          </AnimatedSection>
        </Container>
      </section>

      <SectionBlend from="sage-100" to="gold-100" />
      <section className="bg-gold-100 py-20 md:py-28">
        <Container>
          <AnimatedSection variants={fadeUp} className="mx-auto max-w-2xl text-center">
            <p className="mb-4 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-terracotta-600">
              <span className="h-px w-10 bg-border-subtle" />
              The People Behind It
              <span className="h-px w-10 bg-border-subtle" />
            </p>
            <h2 className="text-3xl leading-tight text-espresso-950 md:text-4xl lg:text-[2.75rem]">
              A Team That Knows Your Project by Name
            </h2>
            <p className="mt-5 text-base leading-relaxed text-charcoal-700 md:text-lg">
              {teamPhoto.name} and our team of material specialists, in-house carpenters,
              and design consultants work together on every enquiry — from a single box of
              handles to a full home fit-out.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      <SectionBlend from="gold-100" to="espresso-950" />
      <section className="bg-espresso-950 py-20 md:py-28">
        <Container>
          <AnimatedSection variants={fadeUp} className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl leading-tight text-ivory-50 md:text-4xl">
              Ready to Start Your Project?
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ivory-200/90 md:text-lg">
              Visit our showroom or get in touch — our team is ready to help you choose the
              right materials for your space.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Button href="/contact" size="lg" variant="secondary">
                Contact Us
              </Button>
              <Button
                href="/products"
                size="lg"
                variant="outline"
                className="border-ivory-100/40 text-ivory-50 hover:border-ivory-50 hover:bg-ivory-50/10"
              >
                Browse Products
              </Button>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </>
  );
}
