import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name"),
  email: z.string().trim().email("Please enter a valid email address"),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number")
    .max(20, "Please enter a valid phone number"),
  subject: z.string().trim().min(2, "Please enter a subject"),
  message: z.string().trim().min(10, "Message should be at least 10 characters"),
  company: z.string().max(0, "Spam detected").optional(),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
