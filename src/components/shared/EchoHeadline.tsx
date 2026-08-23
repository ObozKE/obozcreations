import React from "react";
import { cn } from "@/lib/utils";

interface EchoHeadlineProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "h4";
  className?: string;
  ghostClassName?: string;
}

export function EchoHeadline({
  text,
  as: Component = "h2",
  className,
  ghostClassName,
}: EchoHeadlineProps) {
  return (
    <div className="relative isolate overflow-hidden py-2 select-none">
      {/* Ghost / Echo headline layer - excluded from A11y tree */}
      <span
        aria-hidden="true"
        className={cn(
          "absolute -top-3 left-0 right-0 z-0 pointer-events-none select-none font-display uppercase tracking-tighter text-[1.1em] opacity-15 whitespace-nowrap overflow-hidden blur-[0.5px] transform -translate-y-1/3 leading-none text-current",
          ghostClassName
        )}
      >
        {text}
      </span>

      {/* Crisp foreground heading element */}
      <Component
        className={cn(
          "relative z-10 font-display uppercase tracking-tight text-current leading-[0.95] clamp-headline",
          className
        )}
      >
        {text}
      </Component>
    </div>
  );
}
