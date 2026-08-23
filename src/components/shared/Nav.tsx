"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "WORK", href: "/work" },
  { label: "SERVICES", href: "/services" },
  { label: "ABOUT", href: "/about" },
  { label: "CONTACT", href: "/contact" },
];

export function Nav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-bg-dark/95 backdrop-blur-md border-b border-muted-dark/30 h-18 md:h-20 transition-colors">
        <div className="max-w-[1440px] mx-auto h-full px-5 md:px-10 flex items-center justify-between">
          {/* Logo Monogram */}
          <Link
            href="/"
            onClick={closeMenu}
            className="group flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
            aria-label="ObozCreations Home"
          >
            <span className="font-display text-2xl md:text-3xl tracking-tighter text-text-cream group-hover:text-accent transition-colors">
              OC
            </span>
            <span className="font-body text-[10px] uppercase tracking-[0.25em] text-muted-cream hidden sm:inline-block border-l border-muted-dark/60 pl-2">
              Studio
            </span>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "font-body text-xs lg:text-sm font-semibold tracking-[0.18em] uppercase transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm py-1",
                    isActive
                      ? "text-accent border-b-2 border-accent"
                      : "text-text-cream hover:text-accent"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Hamburger Trigger */}
          <button
            type="button"
            onClick={toggleMenu}
            className="md:hidden text-text-cream hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent p-2 rounded-md"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-7 h-7 text-accent" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </header>

      {/* Mobile Full-Screen Framer Motion Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-bg-dark text-text-cream flex flex-col justify-between p-8 pt-28 md:hidden"
          >
            <nav className="flex flex-col gap-6" aria-label="Mobile Navigation">
              {NAV_LINKS.map((link, idx) => {
                const isActive = pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href));
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.08 }}
                  >
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className={cn(
                        "font-display text-4xl uppercase tracking-tight block py-2 transition-colors",
                        isActive ? "text-accent" : "text-text-cream hover:text-accent"
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* Mobile Nav Footer Details */}
            <div className="border-t border-muted-dark/40 pt-6 space-y-2">
              <p className="font-body text-xs uppercase tracking-widest text-muted-cream">
                Nairobi, Kenya · Africa/Nairobi
              </p>
              <p className="font-body text-xs text-muted-cream">
                <a
                  href="https://wa.me/254700000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  WhatsApp: +254 700 000 000 {"{{TODO: confirm WhatsApp number}}"}
                </a>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
