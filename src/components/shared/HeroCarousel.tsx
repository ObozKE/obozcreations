"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PillBracketLink } from "./PillBracketLink";
import type { WorkItem } from "@/lib/work-data";
import { cn } from "@/lib/utils";

interface HeroCarouselProps {
  slides: WorkItem[];
}

export function HeroCarousel({ slides }: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const touchStartX = useRef<number | null>(null);

  const activeSlide = slides[currentIndex] || slides[0];

  useEffect(() => {
    if (shouldReduceMotion || isPaused || slides.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [slides.length, isPaused, shouldReduceMotion]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) handleNext();
      else handlePrev();
    }
    touchStartX.current = null;
  };

  if (!slides || slides.length === 0) return null;

  return (
    <div
      className="relative w-full h-[70vh] min-h-[500px] max-h-[850px] overflow-hidden rounded-xl border border-muted-dark/40 shadow-2xl bg-bg-dark my-8 group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-label="Featured Works Showcase"
      role="region"
    >
      {/* Background Image / Slide Crossfade */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSlide.id}
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0"
        >
          {activeSlide.images[0] && (
            <Image
              src={activeSlide.images[0].src}
              alt={activeSlide.images[0].alt}
              fill
              priority
              sizes="(max-width: 1440px) 100vw, 1440px"
              className="object-cover object-center"
            />
          )}
          {/* Subtle gradient overlays for contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/40 to-bg-dark/30" />
        </motion.div>
      </AnimatePresence>

      {/* Slide Overlay Content */}
      <div className="relative z-20 h-full max-w-[1440px] mx-auto p-6 md:p-12 flex flex-col justify-between">
        {/* Top Eyebrow & Optional Testimonial Chip */}
        <div className="flex items-start justify-between gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full border border-white/10">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="font-body text-[11px] font-semibold tracking-widest uppercase text-accent">
              {activeSlide.category}
            </span>
          </div>

          {/* Testimonial Chip Placeholder per §0.6 */}
          <div className="hidden sm:flex items-center gap-2 bg-black/70 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10 max-w-xs text-xs text-text-cream/90">
            <span className="text-accent text-sm">★ 5.0</span>
            <span className="truncate italic">
              "Masterful vision & execution." {"{{TODO: real client quote}}"}
            </span>
          </div>
        </div>

        {/* Bottom Slide Info: Title, Credit & Link */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pt-12">
          <div className="space-y-2 max-w-2xl">
            <h3 className="font-display text-3xl md:text-5xl lg:text-6xl uppercase tracking-tight text-text-cream leading-tight drop-shadow-md">
              {activeSlide.title}
            </h3>
            {activeSlide.credit && (
              <p className="font-body text-xs md:text-sm uppercase tracking-wider text-muted-cream">
                {activeSlide.credit}
              </p>
            )}
          </div>

          <div className="flex items-center gap-4">
            <PillBracketLink
              label="EXPLORE PROJECT"
              href={`/work#${activeSlide.slug}`}
              variant="chartreuse"
            />
          </div>
        </div>
      </div>

      {/* Controls & Slide Indicators */}
      <div className="absolute bottom-6 right-6 md:bottom-12 md:right-12 z-30 flex items-center gap-3">
        <button
          type="button"
          onClick={handlePrev}
          className="p-2.5 rounded-full bg-black/60 hover:bg-accent hover:text-text-dark text-text-cream backdrop-blur-md border border-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-accent"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <span className="font-body text-xs uppercase tracking-widest text-text-cream font-mono px-2">
          0{currentIndex + 1} / 0{slides.length}
        </span>

        <button
          type="button"
          onClick={handleNext}
          className="p-2.5 rounded-full bg-black/60 hover:bg-accent hover:text-text-dark text-text-cream backdrop-blur-md border border-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-accent"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
