import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { ContactForm } from "@/components/products/ContactForm";
import { SectionBlend } from "@/components/ui/SectionBlend";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Aggarwal Hardware & Plywood Company for enquiries on plywood, laminates, hardware, and modular kitchen materials.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="We'd Love to Hear From You"
        description="Whether you're planning a full renovation or need guidance on a single material, our team is here to help."
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1920&auto=format&fit=crop"
        imageAlt="Interior showroom reception desk"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <SectionBlend from="espresso-950" to="stone-50" />
      <section className="bg-stone-50 py-20 md:py-28">
        <Container className="grid grid-cols-1 gap-16 lg:grid-cols-[minmax(0,380px)_1fr]">
          <div>
            <h2 className="text-2xl text-espresso-950">Visit or Reach Us</h2>

            <ul className="mt-8 space-y-6">
              <li className="flex gap-4">
                <MapPin size={20} className="mt-0.5 shrink-0 text-terracotta-500" />
                <div>
                  <p className="font-medium text-espresso-950">Showroom Address</p>
                  <p className="mt-1 text-sm leading-relaxed text-charcoal-700">
                    {company.address.line1}
                    <br />
                    {company.address.line2}
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <Phone size={20} className="mt-0.5 shrink-0 text-terracotta-500" />
                <div>
                  <p className="font-medium text-espresso-950">Phone</p>
                  <a href={`tel:${company.phone}`} className="focus-ring mt-1 block rounded text-sm text-charcoal-700 hover:text-terracotta-600">
                    {company.phone}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <Mail size={20} className="mt-0.5 shrink-0 text-terracotta-500" />
                <div>
                  <p className="font-medium text-espresso-950">Email</p>
                  <a href={`mailto:${company.email}`} className="focus-ring mt-1 block rounded text-sm text-charcoal-700 hover:text-terracotta-600">
                    {company.email}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <Clock size={20} className="mt-0.5 shrink-0 text-terracotta-500" />
                <div>
                  <p className="font-medium text-espresso-950">Business Hours</p>
                  {company.hours.map((h) => (
                    <p key={h.day} className="mt-1 text-sm text-charcoal-700">
                      {h.day}: {h.time}
                    </p>
                  ))}
                </div>
              </li>
            </ul>

            <div className="mt-8 flex gap-3">
              {[
                { icon: "instagram" as const, href: company.social.instagram, label: "Instagram" },
              ].map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-border-subtle text-espresso-950 transition-colors hover:border-terracotta-500 hover:text-terracotta-600"
                >
                  <SocialIcon name={icon} />
                </a>
              ))}
            </div>

            <div className="mt-10 aspect-video overflow-hidden rounded-[16px] border border-border-subtle">
              <iframe
                src={company.mapEmbed}
                title="Map showing our showroom location"
                loading="lazy"
                className="h-full w-full"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="rounded-[16px] border border-border-subtle bg-ivory-100 p-8 md:p-10">
            <h2 className="text-2xl text-espresso-950">Send Us a Message</h2>
            <p className="mt-2 text-sm text-charcoal-700">
              Fill out the form and our team will get back to you within 24 hours.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
