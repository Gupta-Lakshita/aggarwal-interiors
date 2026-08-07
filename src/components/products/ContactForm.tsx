"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, CheckCircle2, AlertCircle, Send } from "lucide-react";
import { contactSchema, type ContactFormValues } from "@/lib/validation";
import { cn } from "@/lib/utils";

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const [submitError, setSubmitError] = useState<string | null>(null);

  async function onSubmit(values: ContactFormValues) {
    setSubmitError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Something went wrong. Please try again.");
      }
      reset();
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (isSubmitSuccessful && !submitError) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-[16px] border border-border-subtle bg-surface p-12 text-center">
        <CheckCircle2 size={44} className="text-olive-700" />
        <div>
          <p className="text-lg font-medium text-espresso-950">Message Sent</p>
          <p className="mt-1 text-sm text-charcoal-700">
            Thank you for reaching out. Our team will respond within 24 hours.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {/* Honeypot field for spam protection */}
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
        {...register("company")}
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Full Name" htmlFor="name" error={errors.name?.message}>
          <input
            id="name"
            type="text"
            {...register("name")}
            className={inputClass(Boolean(errors.name))}
          />
        </Field>
        <Field label="Email Address" htmlFor="email" error={errors.email?.message}>
          <input
            id="email"
            type="email"
            {...register("email")}
            className={inputClass(Boolean(errors.email))}
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Phone Number" htmlFor="phone" error={errors.phone?.message}>
          <input
            id="phone"
            type="tel"
            {...register("phone")}
            className={inputClass(Boolean(errors.phone))}
          />
        </Field>
        <Field label="Subject" htmlFor="subject" error={errors.subject?.message}>
          <input
            id="subject"
            type="text"
            {...register("subject")}
            className={inputClass(Boolean(errors.subject))}
          />
        </Field>
      </div>

      <Field label="Message" htmlFor="message" error={errors.message?.message}>
        <textarea
          id="message"
          rows={5}
          {...register("message")}
          className={cn(inputClass(Boolean(errors.message)), "resize-none")}
        />
      </Field>

      {submitError && (
        <div className="flex items-center gap-2 rounded-[10px] bg-terracotta-500/10 px-4 py-3 text-sm text-terracotta-600">
          <AlertCircle size={16} />
          {submitError}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="focus-ring flex w-full items-center justify-center gap-2 rounded-[14px] bg-espresso-950 px-6 py-3.5 text-sm font-medium text-ivory-100 transition-colors hover:bg-terracotta-600 disabled:opacity-60"
      >
        {isSubmitting ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send size={16} />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="text-xs font-medium uppercase tracking-wide text-charcoal-700">
        {label}
      </label>
      <div className="mt-1.5">{children}</div>
      {error && (
        <p role="alert" className="mt-1.5 text-xs text-terracotta-600">
          {error}
        </p>
      )}
    </div>
  );
}

function inputClass(hasError: boolean) {
  return cn(
    "focus-ring w-full rounded-[10px] border bg-surface px-3.5 py-2.5 text-sm text-espresso-950 placeholder:text-charcoal-700/50",
    hasError ? "border-terracotta-500" : "border-border-subtle"
  );
}
