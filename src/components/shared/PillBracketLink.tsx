import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface PillBracketLinkProps {
  label: string;
  href: string;
  variant?: "cream" | "dark" | "chartreuse";
  className?: string;
  external?: boolean;
  onClick?: () => void;
}

export function PillBracketLink({
  label,
  href,
  variant = "cream",
  className,
  external = false,
  onClick,
}: PillBracketLinkProps) {
  const variantStyles = {
    cream: {
      text: "text-text-cream hover:text-accent",
      bar: "bg-text-cream group-hover:bg-accent",
    },
    dark: {
      text: "text-text-dark hover:text-black",
      bar: "bg-text-dark group-hover:scale-y-110",
    },
    chartreuse: {
      text: "text-accent hover:text-text-cream",
      bar: "bg-accent group-hover:bg-text-cream",
    },
  }[variant];

  const content = (
    <span
      className={cn(
        "group inline-flex items-center gap-2.5 font-body text-xs md:text-sm font-semibold tracking-[0.18em] uppercase transition-colors duration-300 py-1.5 px-1 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm",
        variantStyles.text,
        className
      )}
    >
      {/* Left Pill Capsule Bracket */}
      <span
        className={cn(
          "w-1 h-3.5 md:h-4 rounded-full transition-all duration-300 ease-out group-hover:h-5",
          variantStyles.bar
        )}
        aria-hidden="true"
      />

      {/* Center Label Text */}
      <span className="relative top-[0.5px]">{label}</span>

      {/* Right Pill Capsule Bracket */}
      <span
        className={cn(
          "w-1 h-3.5 md:h-4 rounded-full transition-all duration-300 ease-out group-hover:h-5",
          variantStyles.bar
        )}
        aria-hidden="true"
      />
    </span>
  );

  if (external || href.startsWith("http")) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        aria-label={label}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} onClick={onClick} aria-label={label}>
      {content}
    </Link>
  );
}
