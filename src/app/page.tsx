import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { EditorialCategories } from "@/components/sections/EditorialCategories";
import { ExploreMaterials } from "@/components/sections/ExploreMaterials";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { FeaturedBrands } from "@/components/sections/FeaturedBrands";
import { Testimonials } from "@/components/sections/Testimonials";
import { FounderSection } from "@/components/sections/FounderSection";
import { CTASection } from "@/components/sections/CTASection";

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
      <About />
      <EditorialCategories />
      <ExploreMaterials />
      <WhyChooseUs />
      <FeaturedBrands />
      <Testimonials />
      <FounderSection />
      <CTASection />
    </>
  );
}
