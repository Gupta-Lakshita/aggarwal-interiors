import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section className="wood-texture bg-ivory-200 py-20 md:py-32">
      <Container>
        <SectionTitle
          eyebrow="Testimonials"
          title="What Our Customers Say"
          align="center"
          className="mx-auto"
        />
        <AnimatedSection
          variants={staggerContainer}
          className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {testimonials.map((testimonial) => (
            <AnimatedSection key={testimonial.id} variants={fadeUp} as="div">
              <TestimonialCard testimonial={testimonial} />
            </AnimatedSection>
          ))}
        </AnimatedSection>
      </Container>
    </section>
  );
}
