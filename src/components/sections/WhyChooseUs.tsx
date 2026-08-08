import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { staggerContainer, fadeUp } from "@/lib/animations";

const reasons = [
  { icon: "Gem", title: "Premium Materials", description: "Every product is vetted for quality, durability, and finish before it reaches our shelves." },
  { icon: "BadgeCheck", title: "Trusted Brands", description: "We partner exclusively with manufacturers known for consistency and reliability." },
  { icon: "Users", title: "Expert Guidance", description: "Our team helps you choose the right material for your project, budget, and timeline." },
  { icon: "IndianRupee", title: "Competitive Pricing", description: "Direct manufacturer relationships mean better pricing without compromising quality." },
  { icon: "Warehouse", title: "Large Inventory", description: "A 40,000 sq. ft. warehouse ensures the materials you need are ready when you need them." },
  { icon: "Truck", title: "Fast Delivery", description: "Reliable logistics get your order to site on schedule, every time." },
  { icon: "Headset", title: "Customer Support", description: "From enquiry to after-sales, our team is available to answer every question." },
  { icon: "ShieldCheck", title: "35+ Years of Trust", description: "Three generations of family ownership built on honest recommendations." },
];

export function WhyChooseUs() {
  return (
    <section className="bg-sage-50 py-20 md:py-32">
      <Container>
        <SectionTitle
          eyebrow="Why Choose Us"
          title="Built on Trust, Backed by Experience"
          align="center"
          className="mx-auto"
        />
        <AnimatedSection
          variants={staggerContainer}
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {reasons.map((reason) => (
            <AnimatedSection key={reason.title} variants={fadeUp} as="div">
              <FeatureCard {...reason} />
            </AnimatedSection>
          ))}
        </AnimatedSection>
      </Container>
    </section>
  );
}
