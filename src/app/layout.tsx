import type { Metadata, Viewport } from "next";
import { Archivo_Black, Poppins } from "next/font/google";
import "./globals.css";

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "BoldCreations | Videography & Cinematography Studio Nairobi",
    template: "%s | BoldCreations",
  },
  description: "Marketing and portfolio website for BoldCreations, a videography, photography, and cinematography studio based in Nairobi, Kenya. Crafting visual stories in film and light.",
  keywords: [
    "BoldCreations",
    "Videography Nairobi",
    "Cinematography Kenya",
    "Photography Studio Nairobi",
    "Film Production Kenya",
    "Commercial Videography",
    "Wedding Film Nairobi"
  ],
  authors: [{ name: "BoldCreations" }],
  openGraph: {
    title: "BoldCreations | Videography & Cinematography Studio Nairobi",
    description: "Nairobi-based creative studio crafting film, photography, and visual stories.",
    type: "website",
    locale: "en_KE",
    siteName: "BoldCreations",
  },
  twitter: {
    card: "summary_large_image",
    title: "BoldCreations | Videography & Cinematography Studio",
    description: "Nairobi-based creative studio crafting film, photography, and visual stories.",
  },
};

export const viewport: Viewport = {
  themeColor: "#100F0E",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${archivoBlack.variable} ${poppins.variable} dark antialiased`}
    >
      <body className="min-h-screen bg-bg-dark text-text-cream font-body selection:bg-accent selection:text-text-dark flex flex-col">
        {children}
      </body>
    </html>
  );
}
