import React from "react";
import type { Metadata } from "next";
import { EchoHeadline } from "@/components/shared/EchoHeadline";
import { PillBracketLink } from "@/components/shared/PillBracketLink";
import { SkewedImageStack } from "@/components/shared/SkewedImageStack";
import { ContactCTABanner } from "@/components/shared/ContactCTABanner";
import { getAllWork } from "@/lib/work-data";

export const metadata: Metadata = {
  title: "Selected Work | Portfolio",
  description: "Explore selected videography, photography, and cinematography projects by ObozCreations studio in Nairobi, Kenya.",
  openGraph: {
    title: "Selected Work | ObozCreations Portfolio",
    description: "Cinematic films, commercial campaigns, wedding stories, and music videos by ObozCreations.",
  },
};

export default function WorkPage() {
  const allWork = getAllWork();

  return (
    <div className="w-full bg-bg-dark text-text-cream">
      {/* Page Hero */}
      <section className="py-16 md:py-24 px-5 md:px-10 max-w-[1440px] mx-auto">
        <div className="space-y-4">
          <span className="font-body text-xs uppercase tracking-[0.2em] text-accent font-semibold block">
            PORTFOLIO SHOWCASE
          </span>
          <EchoHeadline
            text="ALL WORK"
            as="h1"
            className="text-4xl md:text-7xl lg:text-8xl"
          />
          <p className="font-body text-sm md:text-base text-muted-cream max-w-xl pt-2">
            A curated selection of films, commercials, documentaries, and photographic work created across Kenya and East Africa.
          </p>
        </div>
      </section>

      {/* Work Showcase List */}
      <section className="pb-24 px-5 md:px-10 max-w-[1440px] mx-auto space-y-20 md:space-y-32">
        {allWork.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <div key={item.id} id={item.slug} className="scroll-mt-28 space-y-12">
              <div className="w-full h-px bg-muted-dark/40" />

              <div
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Text Content */}
                <div
                  className={`lg:col-span-5 space-y-6 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="space-y-2">
                    <span className="font-body text-xs font-semibold tracking-widest uppercase text-accent">
                      0{index + 1} // {item.category}
                    </span>
                    <h2 className="font-display text-3xl md:text-5xl uppercase tracking-tight text-text-cream">
                      {item.title}
                    </h2>
                  </div>

                  {item.credit && (
                    <p className="font-body text-xs uppercase tracking-wider text-muted-cream">
                      {item.credit}
                    </p>
                  )}

                  {item.summary && (
                    <p className="font-body text-sm md:text-base text-muted-cream/90 leading-relaxed">
                      {item.summary}
                    </p>
                  )}

                  {item.servicesProvided && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {item.servicesProvided.map((service) => (
                        <span
                          key={service}
                          className="px-2.5 py-1 bg-white/5 rounded border border-white/10 text-[11px] font-body text-muted-cream uppercase tracking-wider"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="pt-4">
                    <PillBracketLink
                      label="CONTACT ABOUT THIS WORK"
                      href={`/contact?inquiry=${encodeURIComponent(item.category)}`}
                      variant="chartreuse"
                    />
                  </div>
                </div>

                {/* Skewed Image Stack */}
                <div
                  className={`lg:col-span-7 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <SkewedImageStack images={item.images} variant="dark" priority={index === 0} />
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Contact Banner */}
      <ContactCTABanner
        eyebrow="HAVE A PROJECT IN MIND?"
        headline="LET'S CRAFT YOUR NEXT VISUAL STORY."
        href="/contact"
        buttonLabel="START A CONVERSATION"
        variant="cream"
      />
    </div>
  );
}
