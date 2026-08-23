import React from "react";
import { Nav } from "@/components/shared/Nav";
import { Footer } from "@/components/shared/Footer";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-bg-dark text-text-cream selection:bg-accent selection:text-text-dark">
      <Nav />
      <main className="flex-1 pt-18 md:pt-20">{children}</main>
      <Footer />
    </div>
  );
}
