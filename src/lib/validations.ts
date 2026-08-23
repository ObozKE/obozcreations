import { z } from "zod";

// Phone validation matching Kenyan mobile formats (+2547XX..., +2541XX..., 07XX..., 01XX...)
const kenyanPhoneRegex = /^(?:\+254|0)?(7\d{8}|1\d{8})$/;

export const contactInquiryTypes = [
  "Wedding Film",
  "Commercial & Brand",
  "Documentary Film",
  "Event Coverage",
  "Photography Session",
  "General Inquiry",
] as const;

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long." })
    .max(100, { message: "Name cannot exceed 100 characters." }),
  email: z
    .string()
    .email({ message: "Please enter a valid email address." }),
  phone: z
    .string()
    .optional()
    .refine(
      (val) => !val || kenyanPhoneRegex.test(val.replace(/\s+/g, "")),
      { message: "Please provide a valid Kenyan phone number (e.g. +254 712 345 678)." }
    ),
  inquiryType: z.enum(contactInquiryTypes, {
    message: "Please select an inquiry type.",
  }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters long." })
    .max(2000, { message: "Message cannot exceed 2000 characters." }),
  // Anti-spam honeypot field (hidden from legitimate users, filled by bots)
  companyWebsite: z.string().max(0, { message: "Bot detected." }).optional(),
  // Anti-spam timestamp check (form rendered timestamp vs submitted timestamp)
  renderedAt: z.number().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
