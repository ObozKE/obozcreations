"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface StackImage {
  src: string;
  alt: string;
}

interface SkewedImageStackProps {
  images: StackImage[];
  className?: string;
  variant?: "dark" | "cream";
  priority?: boolean;
}

export function SkewedImageStack({
  images,
  className,
  variant = "dark",
  priority = false,
}: SkewedImageStackProps) {
  const shouldReduceMotion = useReducedMotion();

  // Standardize to 3 image slots max, fallback if fewer provided
  const displayImages = images.slice(0, 3);
  const topImage = displayImages[0] || {
    src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80",
    alt: "ObozCreations photography frame placeholder",
  };
  const middleImage = displayImages[1] || topImage;
  const backImage = displayImages[2] || middleImage;

  const stackItems = [
    {
      img: backImage,
      zIndex: 10,
      offset: "translate-x-6 translate-y-6 md:translate-x-10 md:translate-y-10",
      skew: "rotate-[-4deg] skew-y-[-2deg]",
      opacity: "opacity-60",
    },
    {
      img: middleImage,
      zIndex: 20,
      offset: "translate-x-3 translate-y-3 md:translate-x-5 md:translate-y-5",
      skew: "rotate-[-2deg] skew-y-[-1deg]",
      opacity: "opacity-85",
    },
    {
      img: topImage,
      zIndex: 30,
      offset: "translate-x-0 translate-y-0",
      skew: "rotate-0 skew-y-0",
      opacity: "opacity-100",
    },
  ];

  return (
    <div
      className={cn(
        "relative w-full aspect-[4/3] max-w-xl mx-auto my-4 group cursor-pointer",
        className
      )}
    >
      {stackItems.map((item, idx) => (
        <motion.div
          key={idx}
          style={{ zIndex: item.zIndex }}
          className={cn(
            "absolute inset-0 overflow-hidden rounded-md border shadow-2xl transition-transform duration-500 ease-out",
            variant === "dark"
              ? "border-muted-dark/40 bg-bg-dark"
              : "border-muted-cream/40 bg-bg-cream",
            !shouldReduceMotion && item.skew,
            item.offset,
            item.opacity,
            !shouldReduceMotion && "group-hover:translate-x-0 group-hover:translate-y-0 group-hover:rotate-0 group-hover:skew-y-0 group-hover:opacity-100"
          )}
          initial={
            shouldReduceMotion
              ? { opacity: 1 }
              : { opacity: 0, scale: 0.95 }
          }
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: idx * 0.1 }}
        >
          <Image
            src={item.img.src}
            alt={item.img.alt}
            fill
            sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 600px"
            priority={priority && idx === 2}
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/60 via-transparent to-transparent pointer-events-none" />
        </motion.div>
      ))}
    </div>
  );
}
