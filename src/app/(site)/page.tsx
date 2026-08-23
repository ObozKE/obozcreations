import React from "react";
import Metadata from "next";
import { EchoHeadline } from "@/components/shared/EchoHeadline";
import { PillBracketLink } from "@/components/shared/PillBracketLink";
import { SkewedImageStack } from "@/components/shared/SkewedImageStack";
import { NumberedListRow } from "@/components/shared/NumberedListRow";
import { HeroCarousel } from "@/components/shared/HeroCarousel";
import { ContactForm } from "@/components/shared/ContactForm";
import { getFeaturedWork } from "@/lib/work-data";

export default function HomePage() {
  const featuredWorks = getFeaturedWork();

  const services = [
    { index: "01", title: "Videography", desc: "High-definition event, music, and promotional commercial video production." },
    { index: "02", title: "Photography", desc: "Studio, portrait, editorial, and documentary stillness captured with intent." },
    { index: "03", title: "Cinematography & Film", desc: "Narrative filmmaking, short movies, and high-production brand cinema." },
    { index: "04", title: "Drone & Aerial Coverage", desc: "Licensed 4K drone cinematography showcasing sweeping African landscapes." },
    { index: "05", title: "Event Coverage", desc: "Comprehensive multi-cam wedding, festival, and corporate event documentation." },
    { index: "06", title: "Post-Production & Editing", desc: "DaVinci Resolve color grading, sound design, and rhythm-first video editing." },
  ];

  const pillars = [
    {
      numeral: "01",
      title: "STORY FIRST",
      text: "Every frame we capture serves a higher narrative purpose. We focus on authentic human emotion and raw storytelling over superficial tricks.",
      images: [
        { src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80", alt: "Story First - Frame shot" },
        { src: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80", alt: "Story First - Portrait shot" },
      ],
    },
    {
      numeral: "02",
      title: "SHOT WITH INTENT",
      text: "Lighting, camera angle, and lens choice are chosen deliberately. We sculpt with shadow and natural light to give every production a timeless film texture.",
      images: [
        { src: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80", alt: "Shot with Intent - Neon night frame" },
        { src: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80", alt: "Shot with Intent - Stage lighting" },
      ],
    },
    {
      numeral: "03",
      title: "DELIVERED WITH CRAFT",
      text: "From color grading to acoustic soundscapes and final cut, post-production receives meticulous care so your story reverberates powerfully.",
      images: [
        { src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80", alt: "Delivered with Craft - Wedding frame" },
        { src: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80", alt: "Delivered with Craft - Motion frame" },
      ],
    },
  ];

  return (
    <div className="w-full">
      {/* 1. HERO SECTION (Dark Background) */}
      <section className="w-full bg-bg-dark text-text-cream pt-8 pb-16 px-5 md:px-10 max-w-[1440px] mx-auto">
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <EchoHeadline
            text="OBOZCREATIONS"
            as="h1"
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tighter"
          />

          <div className="flex items-center justify-center gap-3 pt-2">
            <span className="w-1 h-5 rounded-full bg-accent" aria-hidden="true" />
            <p className="font-body text-xs md:text-sm lg:text-base font-medium tracking-[0.15em] uppercase text-muted-cream max-w-xl">
              A Nairobi-based studio crafting film, photography, and visual stories. {"{{TODO: confirm hero positioning statement}}"}
            </p>
            <span className="w-1 h-5 rounded-full bg-accent" aria-hidden="true" />
          </div>
        </div>

        {/* Hero Showcase Carousel */}
        <HeroCarousel slides={featuredWorks} />
      </section>

      {/* 2. CREAM STATEMENT & SERVICES SECTION */}
      <section className="w-full bg-bg-cream text-text-dark py-20 md:py-32 px-5 md:px-10">
        <div className="max-w-[1440px] mx-auto space-y-16">
          {/* Big Statement */}
          <div className="max-w-4xl border-l-4 border-text-dark pl-6 md:pl-10 py-2">
            <span className="font-body text-xs uppercase tracking-[0.2em] text-muted-dark font-semibold block mb-2">
              Our Studio Philosophy
            </span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[1.05]">
              BUILT FOR THE FRAME. CRAFTED FOR THE EMOTION. {"{{TODO: confirm statement copy}}"}
            </h2>
          </div>

          {/* Services Headline + List */}
          <div className="space-y-8 pt-8">
            <EchoHeadline
              text="SERVICES"
              as="h2"
              className="text-3xl md:text-5xl text-text-dark"
              ghostClassName="text-muted-dark opacity-10"
            />

            <div className="w-full border-t border-muted-dark/30">
              {services.map((s) => (
                <NumberedListRow
                  key={s.index}
                  index={s.index}
                  title={s.title}
                  description={s.desc}
                  variant="compact"
                  theme="cream"
                />
              ))}
            </div>

            <div className="flex justify-end pt-4">
              <PillBracketLink label="VIEW DETAILED SERVICES" href="/services" variant="dark" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. THREE-PILLAR SECTION (Dark Background) */}
      <section className="w-full bg-bg-dark text-text-cream py-20 md:py-32 px-5 md:px-10">
        <div className="max-w-[1440px] mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="font-body text-xs uppercase tracking-[0.2em] text-accent font-semibold block">
              Core Pillars
            </span>
            <EchoHeadline
              text="WE SHAPE VISUAL STORIES"
              as="h2"
              className="text-3xl md:text-5xl lg:text-6xl"
            />
          </div>

          {/* 3-Column Pillar Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 pt-8">
            {pillars.map((p) => (
              <div key={p.numeral} className="flex flex-col items-center text-center space-y-6 group">
                <div className="relative w-full">
                  {/* Oversized Numeral sitting behind Skewed Image Stack */}
                  <span
                    aria-hidden="true"
                    className="absolute -top-10 left-1/2 -translate-x-1/2 font-display text-8xl md:text-9xl text-muted-dark/20 pointer-events-none select-none z-0"
                  >
                    {p.numeral}
                  </span>
                  <div className="relative z-10 pt-6">
                    <SkewedImageStack images={p.images} variant="dark" />
                  </div>
                </div>

                <div className="space-y-3 relative z-20 pt-4">
                  <h3 className="font-display text-xl md:text-2xl uppercase tracking-tight text-text-cream group-hover:text-accent transition-colors">
                    {p.title}
                  </h3>
                  <p className="font-body text-sm text-muted-cream leading-relaxed max-w-sm mx-auto">
                    {p.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ABOUT TEASER SECTION (Cream Background) */}
      <section className="w-full bg-bg-cream text-text-dark py-20 md:py-28 px-5 md:px-10 border-t border-muted-dark/20">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="font-body text-xs uppercase tracking-[0.2em] text-muted-dark font-semibold block">
              About ObozCreations
            </span>
            <h2 className="font-display text-3xl md:text-5xl uppercase tracking-tight leading-[1.05]">
              PASSION FOR LIGHT. DEDICATION TO CINEMA.
            </h2>
            <p className="font-body text-base text-muted-dark leading-relaxed">
              Based in Nairobi, Kenya, ObozCreations is an independent creative studio founded by cinematographer Martin Oboz. We craft films, commercials, and photographic stories across East Africa and beyond.
            </p>
            <div className="pt-2">
              <PillBracketLink label="ABOUT THE STUDIO" href="/about" variant="dark" />
            </div>
          </div>

          <div className="w-full">
            <SkewedImageStack
              images={[
                { src: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80", alt: "Studio Founder Portrait" },
                { src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80", alt: "Camera setup on set" },
              ]}
              variant="cream"
            />
          </div>
        </div>
      </section>

      {/* 5. CONTACT FORM SECTION (Chartreuse Accent Banner) */}
      <section className="w-full bg-accent text-text-dark py-20 md:py-32 px-5 md:px-10" id="contact">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-start">
          <div className="space-y-6">
            <span className="font-body text-xs uppercase tracking-[0.25em] text-text-dark/70 font-semibold block">
              GET IN TOUCH
            </span>
            <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tight leading-[1.02]">
              LET'S START YOUR PROJECT.
            </h2>
            <p className="font-body text-base text-text-dark/80 max-w-lg leading-relaxed">
              Have a wedding, commercial campaign, film project, or photography session in mind? Send us a message and let's discuss your timeline and vision.
            </p>
            <div className="pt-4 space-y-2 font-body text-sm font-semibold">
              <p>📍 Location: Nairobi, Kenya</p>
              <p>
                📲 WhatsApp:{" "}
                <a
                  href="https://wa.me/254700000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:opacity-80"
                >
                  +254 700 000 000 {"{{TODO: confirm WhatsApp number}}"}
                </a>
              </p>
            </div>
          </div>

          <div className="bg-bg-accent/40 p-6 md:p-10 rounded-xl border border-text-dark/20">
            <ContactForm theme="chartreuse" />
          </div>
        </div>
      </section>
    </div>
  );
}
