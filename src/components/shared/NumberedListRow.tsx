import React from "react";
import { cn } from "@/lib/utils";

interface NumberedListRowProps {
  index: string;
  title: string;
  description?: string;
  variant?: "compact" | "expanded";
  theme?: "dark" | "cream";
  className?: string;
}

export function NumberedListRow({
  index,
  title,
  description,
  variant = "compact",
  theme = "dark",
  className,
}: NumberedListRowProps) {
  const isCream = theme === "cream";

  return (
    <div
      className={cn(
        "group relative border-b py-6 md:py-8 transition-colors duration-300 px-2 md:px-4",
        isCream ? "border-muted-dark/30 hover:bg-black/5" : "border-muted-dark/40 hover:bg-white/5",
        className
      )}
    >
      <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 md:gap-8">
        {/* Left: Oversized Index Number + Title */}
        <div className="flex items-baseline gap-6 md:gap-10">
          <span
            className={cn(
              "font-display text-2xl md:text-4xl transition-colors duration-300 font-extrabold tracking-tight select-none",
              isCream
                ? "text-muted-dark group-hover:text-text-dark"
                : "text-muted-cream/60 group-hover:text-accent"
            )}
          >
            {index}
          </span>
          <h3
            className={cn(
              "font-body text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight uppercase transition-colors duration-300",
              isCream
                ? "text-text-dark group-hover:text-black"
                : "text-text-cream group-hover:text-white"
            )}
          >
            {title}
          </h3>
        </div>

        {/* Right: Expanded Description (if variant='expanded' or description provided) */}
        {variant === "expanded" && description && (
          <p
            className={cn(
              "md:max-w-md font-body text-sm md:text-base leading-relaxed pl-12 md:pl-0",
              isCream ? "text-muted-dark" : "text-muted-cream"
            )}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
