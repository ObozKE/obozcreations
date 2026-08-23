import React from "react";
import type { Metadata } from "next";
import { EchoHeadline } from "@/components/shared/EchoHeadline";
import { SkewedImageStack } from "@/components/shared/SkewedImageStack";
import { NumberedListRow } from "@/components/shared/NumberedListRow";
import { ContactForm } from "@/components/shared/ContactForm";

export const metadata: Metadata = {
  title: "About the Studio",
  description: "Learn about ObozCreations, a Nairobi-based creative studio founded by cinematographer Martin Oboz, specializing in film, commercial videography, and photography.",
  openGraph: {
    title: "About ObozCreations Studio",
    description: "Nairobi-based creative studio crafting visual stories in shadow and light.",
  },
};

export default function AboutPage() {
  const values = [
    {
      index: "01",
      title: "Story First.",
      description: "Authentic narrative always takes precedence over empty technical style. We look for the emotional core in every project.",
    },
    {
      index: "02",
      title: "Crafted with Intention.",
      description: "Every lighting setup, camera focal length, camera movement, and sound effect is selected with deliberate artistic purpose.",
    },
    {
      index: "03",
      title: "Told in Shadow and Light.",
      description: "We embrace rich contrast, tactile textures, and natural atmospheric mood to build unforgettable cinematic imagery.",
    },
  ];

  return (
    <div className="w-full bg-bg-dark text-text-cream">
      {/* 1. HERO SECTION */}
      <section className="py-16 md:py-24 px-5 md:px-10 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="font-body text-xs uppercase tracking-[0.2em] text-accent font-semibold block">
              OUR IDENTITY
            </span>
            <EchoHeadline
              text="ABOUT THE STUDIO"
              as="h1"
              className="text-4xl md:text-6xl lg:text-7xl"
            />
            <p className="font-body text-base md:text-lg text-muted-cream leading-relaxed max-w-xl">
              ObozCreations is an independent videography, photography, and cinematography studio based in Nairobi, Kenya. Founded by Martin Oboz, we translate ideas, events, and brand visions into compelling visual cinema.
            </p>
          </div>

          <div className="lg:col-span-6">
            {/* Founder / Studio Portrait Stack */}
            <SkewedImageStack
              images={[
                {
                  src: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80",
                  alt: "Studio Founder Portrait {{TODO: real portrait}}",
                },
                {
                  src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80",
                  alt: "Cinematographer on set behind camera",
                },
              ]}
              variant="dark"
              priority
            />
          </div>
        </div>
      </section>

      {/* 2. CREAM VALUES BLOCK */}
      <section className="w-full bg-bg-cream text-text-dark py-20 md:py-32 px-5 md:px-10">
        <div className="max-w-[1440px] mx-auto space-y-16">
          <div className="space-y-4 max-w-3xl">
            <span className="font-body text-xs uppercase tracking-[0.2em] text-muted-dark font-semibold block">
              STUDIO ETHOS
            </span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[1.05]">
              WE EXIST TO SHAPE VISUAL STORIES.
            </h2>
          </div>

          <div className="w-full border-t border-muted-dark/30">
            {values.map((v) => (
              <NumberedListRow
                key={v.index}
                index={v.index}
                title={v.title}
                description={v.description}
                variant="expanded"
                theme="cream"
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. DARK "SHAPED BY HOW WE SEE" SECTION */}
      <section className="w-full bg-bg-dark text-text-cream py-20 md:py-32 px-5 md:px-10">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <SkewedImageStack
              images={[
                {
                  src: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
                  alt: "Shaped by how we see - Cinematic visual",
                },
                {
                  src: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80",
                  alt: "Atmospheric stage scene",
                },
              ]}
              variant="dark"
            />
          </div>

          <div className="lg:col-span-6 space-y-6">
            <span className="font-body text-xs uppercase tracking-[0.2em] text-accent font-semibold block">
              OUR PERSPECTIVE
            </span>
            <h2 className="font-display text-3xl md:text-5xl uppercase tracking-tight leading-[1.05]">
              SHAPED BY HOW WE SEE.
            </h2>
            <div className="font-body text-sm md:text-base text-muted-cream space-y-4 leading-relaxed">
              <p>
                Founded in Nairobi, ObozCreations was built on a passion for authentic African storytelling. We believe every couple, brand, musician, and community has a distinct visual rhythm waiting to be unearthed.
              </p>
              <p>
                Our team brings together expertise in direction, camera operation, drone piloting, audio recording, and color grading. We combine high-end cinema equipment with a nimble, detail-oriented workflow.
              </p>
              <p className="text-xs uppercase tracking-widest text-accent font-semibold pt-2">
                {"{{TODO: real studio biography & backstory from Martin}}"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FULL CONTACT FORM SECTION */}
      <section className="w-full bg-accent text-text-dark py-20 md:py-32 px-5 md:px-10">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-start">
          <div className="space-y-6">
            <span className="font-body text-xs uppercase tracking-[0.25em] text-text-dark/70 font-semibold block">
              CONNECT WITH US
            </span>
            <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tight leading-[1.02]">
              WORK WITH OBOZCREATIONS.
            </h2>
            <p className="font-body text-base text-text-dark/80 max-w-lg leading-relaxed">
              Whether you need full documentary production, commercial videography, wedding coverage, or striking photography in Kenya, let's bring your vision to life.
            </p>
          </div>

          <div className="bg-bg-accent/40 p-6 md:p-10 rounded-xl border border-text-dark/20">
            <ContactForm theme="chartreuse" />
          </div>
        </div>
      </section>
    </div>
  );
}
