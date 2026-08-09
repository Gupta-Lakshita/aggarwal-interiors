import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { NewsletterForm } from "@/components/layout/NewsletterForm";
import { company } from "@/data/company";
import { footerGroups } from "@/data/footer";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="wood-texture bg-espresso-950 text-ivory-200">
      <Container className="grid grid-cols-1 gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:py-20">
        <div>
          <Image src="/logo.svg" alt={`${company.name} logo`} width={76} height={70} className="h-16 w-auto" />
          <p className="mt-4 font-heading text-xl text-ivory-50">{company.name}</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-ivory-200/80">
            {company.supportingCopy}
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { icon: "instagram" as const, href: company.social.instagram, label: "Instagram" },
              { icon: "facebook" as const, href: company.social.facebook, label: "Facebook" },
              { icon: "linkedin" as const, href: company.social.linkedin, label: "LinkedIn" },
              { icon: "youtube" as const, href: company.social.youtube, label: "YouTube" },
            ].map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-ivory-200/20 text-ivory-100 transition-colors hover:border-terracotta-400 hover:text-terracotta-400"
              >
                <SocialIcon name={icon} />
              </a>
            ))}
          </div>
        </div>

        {footerGroups.map((group) => (
          <div key={group.title}>
            <p className="text-sm font-semibold uppercase tracking-wide text-ivory-50">
              {group.title}
            </p>
            <ul className="mt-4 space-y-2.5">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="focus-ring rounded text-sm text-ivory-200/80 transition-colors hover:text-terracotta-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-ivory-50">
            Contact
          </p>
          <ul className="mt-4 space-y-3 text-sm text-ivory-200/80">
            <li className="flex gap-2.5">
              <MapPin size={16} className="mt-0.5 shrink-0 text-terracotta-400" />
              <span>
                {company.address.line1}
                <br />
                {company.address.line2}
              </span>
            </li>
            <li className="flex gap-2.5">
              <Phone size={16} className="mt-0.5 shrink-0 text-terracotta-400" />
              <a href={`tel:${company.phone}`} className="focus-ring rounded hover:text-terracotta-400">
                {company.phone}
              </a>
            </li>
            <li className="flex gap-2.5">
              <Mail size={16} className="mt-0.5 shrink-0 text-terracotta-400" />
              <a href={`mailto:${company.email}`} className="focus-ring rounded hover:text-terracotta-400">
                {company.email}
              </a>
            </li>
          </ul>

          <NewsletterForm />
        </div>
      </Container>

      <div className="border-t border-ivory-200/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-ivory-200/60 md:flex-row">
          <p>© {year} {company.name}. All rights reserved.</p>
          <p>Crafted with care for premium interiors.</p>
        </Container>
      </div>
    </footer>
  );
}
