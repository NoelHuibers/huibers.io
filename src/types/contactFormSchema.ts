import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().trim().email("Invalid email address"),
  honeypot: z.string().optional(),
  message: z.string().min(1, "Message is required"),
});

export type ContactFormData = z.output<typeof contactFormSchema>;
