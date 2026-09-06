import React from "react";
import type { Metadata } from "next";
import { EchoHeadline } from "@/components/shared/EchoHeadline";
import { NumberedListRow } from "@/components/shared/NumberedListRow";
import { ContactCTABanner } from "@/components/shared/ContactCTABanner";

export const metadata: Metadata = {
  title: "Services & Capabilities",
  description: "Explore videography, photography, cinematography, drone aerial coverage, event filming, and post-production services offered by BoldCreations in Nairobi, Kenya.",
  openGraph: {
    title: "Services & Capabilities | BoldCreations",
    description: "Professional film production, photography, and post-production services in Nairobi, Kenya.",
  },
};

export default function ServicesPage() {
  const detailedServices = [
    {
      index: "01",
      title: "Videography",
      description:
        "High-definition commercial campaigns, music videos, promotional brand stories, and social content produced with creative flair and crisp cinematic movement.",
    },
    {
      index: "02",
      title: "Photography",
      description:
        "Studio portraits, editorial fashion stills, brand product photography, and documentary stillness captured with natural lighting and fine art composition.",
    },
    {
      index: "03",
      title: "Cinematography & Film",
      description:
        "Narrative filmmaking, short movies, documentary features, and cinematic commercial spots crafted with high dynamic range cameras and intentional lighting.",
    },
    {
      index: "04",
      title: "Drone & Aerial Coverage",
      description:
        "Licensed 4K aerial drone cinematography bringing grand spatial context, sweeping natural landscapes, and architectural perspectives to your production.",
    },
    {
      index: "05",
      title: "Event Coverage",
      description:
        "Comprehensive multi-camera documentation for luxury weddings, cultural festivals, fashion showcases, and corporate summits across East Africa.",
    },
    {
      index: "06",
      title: "Post-Production & Editing",
      description:
        "DaVinci Resolve color grading, custom sound design, rhythm-matched editorial cutting, and deliverable mastering for broadcast and web distribution.",
    },
  ];

  return (
    <div className="w-full bg-bg-cream text-text-dark min-h-screen">
      {/* Top CTA Banner */}
      <ContactCTABanner
        eyebrow="TAILORED PRODUCTIONS"
        headline="CREATIVE CAPABILITIES FOR EVERY FRAME."
        href="/#contact"
        buttonLabel="BOOK A CONSULTATION"
        variant="dark"
      />

      {/* Main Services Section */}
      <section className="py-20 md:py-32 px-5 md:px-10 max-w-[1440px] mx-auto space-y-16">
        <div className="space-y-4">
          <span className="font-body text-xs uppercase tracking-[0.2em] text-muted-dark font-semibold block">
            WHAT WE DO
          </span>
          <EchoHeadline
            text="SERVICES"
            as="h1"
            className="text-4xl md:text-7xl lg:text-8xl text-text-dark"
            ghostClassName="text-muted-dark opacity-10"
          />
          <p className="font-body text-base text-muted-dark max-w-2xl pt-2">
            From concept development and principal photography to final post-production, BoldCreations delivers full-service visual storytelling tailored for brands, agencies, and private clients.
          </p>
        </div>

        {/* Expanded Numbered List */}
        <div className="w-full border-t border-muted-dark/30 pt-4">
          {detailedServices.map((service) => (
            <NumberedListRow
              key={service.index}
              index={service.index}
              title={service.title}
              description={service.description}
              variant="expanded"
              theme="cream"
            />
          ))}
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <ContactCTABanner
        eyebrow="READY TO PRODUCE YOUR VISION?"
        headline="LET'S DISCUSS YOUR SCOPE AND TIMELINE."
        href="/#contact"
        buttonLabel="GET IN TOUCH"
        variant="cream"
      />
    </div>
  );
}
