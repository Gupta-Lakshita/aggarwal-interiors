"use client";

import { MessageCircle } from "lucide-react";
import { Modal } from "@/components/ui/Modal";
import { ContactForm } from "@/components/products/ContactForm";
import { company } from "@/data/company";
import type { Product } from "@/types";

export function EnquiryModal({
  product,
  onClose,
}: {
  product: Product | null;
  onClose: () => void;
}) {
  if (!product) return null;

  const whatsappMessage = encodeURIComponent(
    `Hi, I'm interested in "${product.name}". Could you share more details and pricing?`
  );
  const whatsappHref = `https://wa.me/${company.whatsapp}?text=${whatsappMessage}`;

  return (
    <Modal open={Boolean(product)} onClose={onClose} title={`Enquire About ${product.name}`}>
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="focus-ring flex items-center justify-center gap-2 rounded-[14px] bg-olive-700 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-olive-600"
      >
        <MessageCircle size={16} />
        Enquire via WhatsApp
      </a>

      <div className="my-6 flex items-center gap-3 text-xs uppercase tracking-wide text-charcoal-700/60">
        <span className="h-px flex-1 bg-border-subtle" />
        or send an enquiry
        <span className="h-px flex-1 bg-border-subtle" />
      </div>

      <ContactForm
        key={product.id}
        defaultValues={{
          subject: product.name,
          message: `I'm interested in ${product.name}.`,
        }}
      />
    </Modal>
  );
}
