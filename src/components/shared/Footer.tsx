import React from "react";
import Link from "next/link";
import { PillBracketLink } from "./PillBracketLink";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-bg-dark text-text-cream border-t border-muted-dark/40 pt-16 pb-12 overflow-hidden relative isolate">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 space-y-12">
        {/* Row 1: Brand & Nav Links - All Redirecting to Homepage */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <Link
              href="/"
              className="font-display text-4xl md:text-5xl tracking-tighter text-text-cream hover:text-accent transition-colors"
              aria-label="BoldCreations Home"
            >
              BC
            </Link>
            <p className="font-body text-xs uppercase tracking-[0.2em] text-muted-cream mt-2">
              Videography · Photography · Cinematography
            </p>
          </div>

          <nav className="flex flex-wrap items-center gap-6 md:gap-8" aria-label="Footer Navigation">
            <Link
              href="/#work"
              className="font-body text-xs md:text-sm font-semibold tracking-widest uppercase hover:text-accent transition-colors"
            >
              WORK
            </Link>
            <Link
              href="/#services"
              className="font-body text-xs md:text-sm font-semibold tracking-widest uppercase hover:text-accent transition-colors"
            >
              SERVICES
            </Link>
            <Link
              href="/#about"
              className="font-body text-xs md:text-sm font-semibold tracking-widest uppercase hover:text-accent transition-colors"
            >
              ABOUT
            </Link>
            <Link
              href="/#contact"
              className="font-body text-xs md:text-sm font-semibold tracking-widest uppercase hover:text-accent transition-colors"
            >
              CONTACT
            </Link>
          </nav>
        </div>

        {/* Divider Rule */}
        <div className="w-full h-px bg-muted-dark/40" />

        {/* Row 2: Location, Copyright & WhatsApp Link */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 font-body text-xs text-muted-cream">
          <div className="space-y-1">
            <p className="uppercase tracking-widest">
              © {currentYear} BOLDCREATIONS. ALL RIGHTS RESERVED.
            </p>
            <p className="text-muted-cream/70">
              Nairobi, Kenya · Timezone: Africa/Nairobi
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <PillBracketLink
              label="WHATSAPP CHAT"
              href="https://wa.me/254700000000"
              variant="chartreuse"
              external
            />
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent uppercase tracking-wider transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://vimeo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent uppercase tracking-wider transition-colors"
            >
              Vimeo
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent uppercase tracking-wider transition-colors"
            >
              YouTube
            </a>
          </div>
        </div>

        {/* Oversized Ghost Wordmark Repeat */}
        <div className="pt-8 select-none pointer-events-none aria-hidden overflow-hidden" aria-hidden="true">
          <span className="font-display text-[12vw] leading-none uppercase tracking-tighter text-muted-dark/15 block text-center whitespace-nowrap">
            BOLDCREATIONS
          </span>
        </div>
      </div>
    </footer>
  );
}
