import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SafeImage } from "@/components/ui/SafeImage";
import { fadeUp, fadeIn } from "@/lib/animations";
import { company } from "@/data/company";
import { teamPhoto } from "@/data/team";

const highlights = [
  "One-stop sourcing across wood, PVC, hardware, and glass",
  "In-house CNC cutting, modular kitchens, and wardrobe manufacturing",
  `${company.yearsInBusiness}+ years of honest, consultative service`,
];

export function CompanyIntro() {
  return (
    <section id="why-us" className="wood-texture bg-ivory-200 py-20 md:py-32">
      <Container className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <AnimatedSection
          variants={fadeIn}
          className="relative order-2 aspect-[4/5] overflow-hidden rounded-[16px] lg:order-1"
        >
          <SafeImage
            src={teamPhoto.image}
            alt={teamPhoto.imageAlt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </AnimatedSection>

        <div className="order-1 lg:order-2">
          <AnimatedSection variants={fadeUp}>
            <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-terracotta-600">
              <span className="h-px w-10 bg-border-subtle" />
              Why Choose Us
            </p>
            <h2 className="text-3xl leading-tight text-espresso-950 md:text-4xl lg:text-[2.75rem]">
              {company.name}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-charcoal-700 md:text-lg">
              Premium interior material solutions, all under one roof. From plywood and
              laminates to hardware, glass, and bespoke manufacturing, we work directly with
              architects, designers, and homeowners who want materials that perform as well
              as they look — backed by guidance that doesn&apos;t disappear once the order
              ships.
            </p>
          </AnimatedSection>

          <AnimatedSection variants={fadeUp} delay={0.1} className="mt-8 space-y-3">
            {highlights.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <Check size={18} className="mt-0.5 shrink-0 text-olive-700" />
                <span className="text-base text-charcoal-700">{item}</span>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
