import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { FeaturedCategories } from "@/components/sections/FeaturedCategories";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { FeaturedBrands } from "@/components/sections/FeaturedBrands";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Premium Plywood, Laminates & Interior Hardware",
  description:
    "Aggarwal Interiors supplies premium plywood, laminates, veneers, hardware, and modular fittings for architects, designers, and homeowners across Delhi NCR.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <FeaturedCategories />
      <WhyChooseUs />
      <FeaturedBrands />
      <Testimonials />
      <CTASection />
    </>
  );
}
