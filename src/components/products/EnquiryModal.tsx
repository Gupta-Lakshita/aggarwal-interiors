"use client";

import { useState } from "react";
import { MessageCircle, Send, CheckCircle2 } from "lucide-react";
import { Modal } from "@/components/ui/Modal";
import { company } from "@/data/company";
import type { Product } from "@/types";

export function EnquiryModal({
  product,
  onClose,
}: {
  product: Product | null;
  onClose: () => void;
}) {
  const [sent, setSent] = useState(false);

  if (!product) return null;

  const whatsappMessage = encodeURIComponent(
    `Hi, I'm interested in "${product.name}" (${product.brand}). Could you share more details and pricing?`
  );
  const whatsappHref = `https://wa.me/${company.whatsapp}?text=${whatsappMessage}`;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <Modal
      open={Boolean(product)}
      onClose={() => {
        onClose();
        setSent(false);
      }}
      title={`Enquire About ${product.name}`}
    >
      {sent ? (
        <div className="flex flex-col items-center gap-3 py-6 text-center">
          <CheckCircle2 className="text-olive-700" size={40} />
          <p className="font-medium text-espresso-950">Enquiry sent successfully</p>
          <p className="text-sm text-charcoal-700">
            Our team will get back to you within 24 hours.
          </p>
        </div>
      ) : (
        <>
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

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="enq-name" className="text-xs font-medium uppercase tracking-wide text-charcoal-700">
                Name
              </label>
              <input
                id="enq-name"
                required
                type="text"
                className="focus-ring mt-1.5 w-full rounded-[10px] border border-border-subtle bg-surface px-3 py-2.5 text-sm text-espresso-950"
              />
            </div>
            <div>
              <label htmlFor="enq-phone" className="text-xs font-medium uppercase tracking-wide text-charcoal-700">
                Phone
              </label>
              <input
                id="enq-phone"
                required
                type="tel"
                className="focus-ring mt-1.5 w-full rounded-[10px] border border-border-subtle bg-surface px-3 py-2.5 text-sm text-espresso-950"
              />
            </div>
            <div>
              <label htmlFor="enq-message" className="text-xs font-medium uppercase tracking-wide text-charcoal-700">
                Message
              </label>
              <textarea
                id="enq-message"
                rows={3}
                defaultValue={`I'm interested in ${product.name} (${product.brand}).`}
                className="focus-ring mt-1.5 w-full resize-none rounded-[10px] border border-border-subtle bg-surface px-3 py-2.5 text-sm text-espresso-950"
              />
            </div>
            <button
              type="submit"
              className="focus-ring flex w-full items-center justify-center gap-2 rounded-[14px] bg-espresso-950 px-4 py-3 text-sm font-medium text-ivory-100 transition-colors hover:bg-terracotta-600"
            >
              <Send size={16} />
              Send Enquiry
            </button>
          </form>
        </>
      )}
    </Modal>
  );
}
