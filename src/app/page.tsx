import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { EditorialCategories } from "@/components/sections/EditorialCategories";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { FeaturedBrands } from "@/components/sections/FeaturedBrands";
import { Testimonials } from "@/components/sections/Testimonials";
import { CompanyIntro } from "@/components/sections/CompanyIntro";
import { CTASection } from "@/components/sections/CTASection";
import { SectionBlend } from "@/components/ui/SectionBlend";

export const metadata: Metadata = {
  title: "Premium Plywood, Laminates & Interior Hardware",
  description:
    "Aggarwal Hardware & Plywood Company supplies premium plywood, laminates, veneers, hardware, and modular fittings for architects, designers, and homeowners across Pathankot and the wider region.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <SectionBlend from="espresso-950" to="terracotta-100" />
      <About />
      <SectionBlend from="terracotta-100" to="sage-100" />
      <EditorialCategories />
      <SectionBlend from="sage-100" to="terracotta-100" />
      <WhyChooseUs />
      <SectionBlend from="terracotta-100" to="sage-100" />
      <FeaturedBrands />
      <SectionBlend from="sage-100" to="terracotta-100" />
      <Testimonials />
      <SectionBlend from="terracotta-100" to="sage-100" />
      <CompanyIntro />
      <SectionBlend from="sage-100" to="espresso-950" />
      <CTASection />
    </>
  );
}
