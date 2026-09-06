import React from "react";
import { PillBracketLink } from "./PillBracketLink";
import { cn } from "@/lib/utils";

interface ContactCTABannerProps {
  eyebrow?: string;
  headline?: string;
  href?: string;
  buttonLabel?: string;
  variant?: "dark" | "cream";
  className?: string;
}

export function ContactCTABanner({
  eyebrow = "READY TO CREATE?",
  headline = "LET'S SHAPE YOUR NEXT VISUAL STORY TOGETHER.",
  href = "/#contact",
  buttonLabel = "CONTACT US",
  variant = "dark",
  className,
}: ContactCTABannerProps) {
  const isCream = variant === "cream";

  return (
    <section
      className={cn(
        "w-full py-16 md:py-24 px-6 md:px-12 border-t border-b transition-colors",
        isCream
          ? "bg-bg-cream text-text-dark border-muted-dark/20"
          : "bg-bg-dark text-text-cream border-muted-dark/40",
        className
      )}
    >
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="max-w-2xl">
          <span
            className={cn(
              "font-body text-xs md:text-sm font-semibold tracking-[0.2em] uppercase block mb-3",
              isCream ? "text-muted-dark" : "text-accent"
            )}
          >
            {eyebrow}
          </span>
          <h2
            className={cn(
              "font-display text-2xl md:text-4xl lg:text-5xl uppercase tracking-tight leading-[1.05]",
              isCream ? "text-text-dark" : "text-text-cream"
            )}
          >
            {headline}
          </h2>
        </div>

        <div>
          <PillBracketLink
            label={buttonLabel}
            href={href}
            variant={isCream ? "dark" : "chartreuse"}
          />
        </div>
      </div>
    </section>
  );
}
