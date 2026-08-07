import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { BrandLogo } from "@/components/cards/BrandLogo";
import { brands } from "@/data/brands";

export function FeaturedBrands() {
  const loop = [...brands, ...brands];

  return (
    <section className="border-y border-border-subtle bg-surface py-20 md:py-28">
      <Container>
        <SectionTitle
          eyebrow="Featured Brands"
          title="Partnered with Names You Trust"
          align="center"
          className="mx-auto"
        />
      </Container>
      <div className="mt-12 overflow-hidden">
        <div className="animate-marquee flex w-max gap-6 px-6">
          {loop.map((brand, i) => (
            <BrandLogo key={`${brand.id}-${i}`} brand={brand} />
          ))}
        </div>
      </div>
    </section>
  );
}
