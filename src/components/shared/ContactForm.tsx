"use client";

import React, { useState, useEffect } from "react";
import { contactFormSchema, contactInquiryTypes, type ContactFormData } from "@/lib/validations";
import { cn } from "@/lib/utils";

interface ContactFormProps {
  theme?: "chartreuse" | "dark" | "cream";
  className?: string;
}

export function ContactForm({ theme = "chartreuse", className }: ContactFormProps) {
  const [formData, setFormData] = useState<Partial<ContactFormData>>({
    name: "",
    email: "",
    phone: "",
    inquiryType: "Wedding Film",
    message: "",
    companyWebsite: "",
  });

  const [renderedAt, setRenderedAt] = useState<number>(0);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState<string>("");

  useEffect(() => {
    setRenderedAt(Date.now());
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setStatus("loading");
    setServerMessage("");

    const payload = {
      ...formData,
      renderedAt,
    };

    const validation = contactFormSchema.safeParse(payload);

    if (!validation.success) {
      const fieldErrors: Record<string, string> = {};
      validation.error.issues.forEach((issue) => {
        if (issue.path[0]) {
          fieldErrors[issue.path[0].toString()] = issue.message;
        }
      });
      setErrors(fieldErrors);
      setStatus("error");
      setServerMessage("Please fix the highlighted errors above.");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validation.data),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to submit form. Please try again.");
      }

      setStatus("success");
      setServerMessage(
        "Thank you! Your inquiry has been sent successfully. We will be in touch shortly."
      );
      setFormData({
        name: "",
        email: "",
        phone: "",
        inquiryType: "Wedding Film",
        message: "",
        companyWebsite: "",
      });
    } catch (err: unknown) {
      setStatus("error");
      setServerMessage(
        err instanceof Error ? err.message : "An unexpected error occurred. Please try again."
      );
    }
  };

  const isChartreuse = theme === "chartreuse";
  const isDark = theme === "dark";

  const inputBorder = isChartreuse
    ? "border-text-dark/40 focus:border-text-dark text-text-dark placeholder:text-muted-dark/60"
    : isDark
    ? "border-muted-cream/30 focus:border-accent text-text-cream placeholder:text-muted-cream/50"
    : "border-muted-dark/40 focus:border-black text-text-dark placeholder:text-muted-dark/60";

  const labelColor = isChartreuse
    ? "text-text-dark"
    : isDark
    ? "text-text-cream"
    : "text-text-dark";

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("w-full space-y-6 md:space-y-8", className)}
      noValidate
    >
      {/* Hidden Honeypot Field */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="companyWebsite">Website</label>
        <input
          type="text"
          id="companyWebsite"
          name="companyWebsite"
          tabIndex={-1}
          value={formData.companyWebsite || ""}
          onChange={handleChange}
          autoComplete="off"
        />
      </div>

      {/* Name Field */}
      <div className="space-y-1">
        <label
          htmlFor="name"
          className={cn("block font-body text-xs uppercase tracking-widest font-semibold", labelColor)}
        >
          Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name || ""}
          onChange={handleChange}
          placeholder="e.g. Martin Oduor"
          className={cn(
            "w-full bg-transparent border-b py-2 md:py-3 text-base focus:outline-none transition-colors duration-200",
            inputBorder
          )}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          required
        />
        {errors.name && (
          <p id="name-error" className="text-xs text-red-600 font-semibold mt-1">
            {errors.name}
          </p>
        )}
      </div>

      {/* Email & Phone Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* Email Field */}
        <div className="space-y-1">
          <label
            htmlFor="email"
            className={cn("block font-body text-xs uppercase tracking-widest font-semibold", labelColor)}
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email || ""}
            onChange={handleChange}
            placeholder="e.g. martin@example.com"
            className={cn(
              "w-full bg-transparent border-b py-2 md:py-3 text-base focus:outline-none transition-colors duration-200",
              inputBorder
            )}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            required
          />
          {errors.email && (
            <p id="email-error" className="text-xs text-red-600 font-semibold mt-1">
              {errors.email}
            </p>
          )}
        </div>

        {/* Phone Field */}
        <div className="space-y-1">
          <label
            htmlFor="phone"
            className={cn("block font-body text-xs uppercase tracking-widest font-semibold", labelColor)}
          >
            Phone / WhatsApp <span className="text-muted-dark text-[10px] font-normal">(Optional)</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone || ""}
            onChange={handleChange}
            placeholder="+254 712 345 678"
            className={cn(
              "w-full bg-transparent border-b py-2 md:py-3 text-base focus:outline-none transition-colors duration-200",
              inputBorder
            )}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
          {errors.phone && (
            <p id="phone-error" className="text-xs text-red-600 font-semibold mt-1">
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      {/* Inquiry Type Select */}
      <div className="space-y-1">
        <label
          htmlFor="inquiryType"
          className={cn("block font-body text-xs uppercase tracking-widest font-semibold", labelColor)}
        >
          Inquiry Type <span className="text-red-500">*</span>
        </label>
        <select
          id="inquiryType"
          name="inquiryType"
          value={formData.inquiryType || "Wedding Film"}
          onChange={handleChange}
          className={cn(
            "w-full bg-transparent border-b py-2 md:py-3 text-base focus:outline-none transition-colors duration-200 cursor-pointer",
            inputBorder,
            isChartreuse ? "bg-bg-accent" : isDark ? "bg-bg-dark" : "bg-bg-cream"
          )}
          aria-invalid={!!errors.inquiryType}
          aria-describedby={errors.inquiryType ? "inquiry-error" : undefined}
        >
          {contactInquiryTypes.map((type) => (
            <option key={type} value={type} className="bg-bg-dark text-text-cream py-1">
              {type}
            </option>
          ))}
        </select>
        {errors.inquiryType && (
          <p id="inquiry-error" className="text-xs text-red-600 font-semibold mt-1">
            {errors.inquiryType}
          </p>
        )}
      </div>

      {/* Message Field */}
      <div className="space-y-1">
        <label
          htmlFor="message"
          className={cn("block font-body text-xs uppercase tracking-widest font-semibold", labelColor)}
        >
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message || ""}
          onChange={handleChange}
          placeholder="Tell us about your project, timeline, location, and vision..."
          className={cn(
            "w-full bg-transparent border-b py-2 md:py-3 text-base focus:outline-none transition-colors duration-200 resize-y",
            inputBorder
          )}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          required
        />
        {errors.message && (
          <p id="message-error" className="text-xs text-red-600 font-semibold mt-1">
            {errors.message}
          </p>
        )}
      </div>

      {/* Accessible Feedback Region */}
      <div aria-live="polite" className="min-h-[24px]">
        {serverMessage && (
          <div
            className={cn(
              "p-3 rounded text-sm font-medium border",
              status === "success"
                ? "bg-emerald-950/80 text-emerald-200 border-emerald-500/40"
                : "bg-red-950/80 text-red-200 border-red-500/40"
            )}
          >
            {serverMessage}
          </div>
        )}
      </div>

      {/* Submit Button */}
      <div className="flex justify-end pt-2">
        <button
          type="submit"
          disabled={status === "loading"}
          className={cn(
            "inline-flex items-center justify-center px-8 py-3.5 rounded-md font-body text-xs uppercase tracking-[0.18em] font-semibold transition-all duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2",
            isChartreuse
              ? "bg-bg-dark text-text-cream hover:bg-black hover:scale-[1.02] focus:ring-bg-dark"
              : "bg-accent text-text-dark hover:bg-white hover:scale-[1.02] focus:ring-accent",
            status === "loading" && "opacity-60 cursor-not-allowed"
          )}
        >
          {status === "loading" ? "SENDING INQUIRY..." : "SUBMIT INQUIRY"}
        </button>
      </div>
    </form>
  );
}
