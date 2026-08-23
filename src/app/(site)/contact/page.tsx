import React from "react";
import type { Metadata } from "next";
import { EchoHeadline } from "@/components/shared/EchoHeadline";
import { ContactForm } from "@/components/shared/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Inquiry",
  description: "Get in touch with ObozCreations videography & photography studio in Nairobi, Kenya. Book a call or submit a project inquiry.",
  openGraph: {
    title: "Contact ObozCreations Studio",
    description: "Book videography, photography, or film services with ObozCreations in Nairobi, Kenya.",
  },
};

export default function ContactPage() {
  return (
    <div className="w-full bg-accent text-text-dark min-h-screen py-16 md:py-28 px-5 md:px-10">
      <div className="max-w-[1440px] mx-auto space-y-16">
        <div className="space-y-4">
          <span className="font-body text-xs uppercase tracking-[0.25em] text-text-dark/70 font-semibold block">
            GET IN TOUCH
          </span>
          <EchoHeadline
            text="CONTACT US"
            as="h1"
            className="text-4xl md:text-7xl lg:text-8xl text-text-dark"
            ghostClassName="text-text-dark opacity-10"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Studio Details & WhatsApp */}
          <div className="lg:col-span-5 space-y-8 font-body">
            <div className="space-y-4">
              <h2 className="font-display text-2xl md:text-3xl uppercase tracking-tight text-text-dark">
                LET'S TALK VISUALS.
              </h2>
              <p className="text-base text-text-dark/80 leading-relaxed">
                Whether you have a confirmed production date or are still refining your concept, we would love to hear from you.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-text-dark/20 text-sm">
              <div>
                <span className="text-xs uppercase tracking-widest font-semibold text-text-dark/60 block">
                  LOCATION & TIMEZONE
                </span>
                <p className="font-semibold text-text-dark">Nairobi, Kenya {"{{TODO: confirm public address, if any}}"}</p>
                <p className="text-xs text-text-dark/70">Timezone: Africa/Nairobi (EAT)</p>
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest font-semibold text-text-dark/60 block">
                  WHATSAPP CLICK-TO-CHAT
                </span>
                <a
                  href="https://wa.me/254700000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-text-dark underline hover:opacity-80 transition-opacity"
                >
                  +254 700 000 000 {"{{TODO: confirm WhatsApp number}}"}
                </a>
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest font-semibold text-text-dark/60 block">
                  EMAIL INQUIRIES
                </span>
                <p className="font-semibold text-text-dark">
                  info@obozcreations.com {"{{TODO: confirm destination email}}"}
                </p>
              </div>
            </div>
          </div>

          {/* Right Form Container */}
          <div className="lg:col-span-7 bg-bg-accent/50 p-6 md:p-10 rounded-xl border border-text-dark/20 shadow-xl">
            <ContactForm theme="chartreuse" />
          </div>
        </div>
      </div>
    </div>
  );
}
