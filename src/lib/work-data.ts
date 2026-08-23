export interface WorkImage {
  src: string;
  alt: string;
}

export interface WorkItem {
  id: string;
  slug: string;
  category: string;
  title: string;
  credit?: string;
  summary?: string;
  description?: string;
  year?: string;
  location?: string;
  client?: string;
  servicesProvided?: string[];
  images: WorkImage[];
  videoUrl?: string;
  featured?: boolean;
}

// Typed local dataset for ObozCreations portfolio items.
// Content can later be powered by an external CMS or API without touching component signatures.
// {{TODO: Replace placeholder work items with real client projects, high-resolution stills, and video links}}
export const WORK_ITEMS: WorkItem[] = [
  {
    id: "work-1",
    slug: "savannah-echoes",
    category: "DOCUMENTARY FILM",
    title: "SAVANNAH ECHOES",
    credit: "Director & Cinematographer: Martin Oboz",
    summary: "A visual exploration into northern Kenya's pastoralist landscapes and heritage.",
    description: "Savannah Echoes captures the rhythmic pulse of life across northern Kenya's vast landscapes. Shot over three weeks with natural lighting and raw acoustic soundscapes, this documentary highlights the intimate bond between community and environment.",
    year: "2025",
    location: "Samburu & Turkana, Kenya",
    client: "Heritage Arts Foundation {{TODO: confirm client}}",
    servicesProvided: ["Cinematography", "Sound Design", "Color Grading", "Post-Production"],
    images: [
      {
        src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1600&q=80",
        alt: "Savannah Echoes - Golden hour silhouette across Kenya savannas",
      },
      {
        src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80",
        alt: "Savannah Echoes - Dramatic clouds and landscape overview",
      },
      {
        src: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80",
        alt: "Savannah Echoes - Close portrait detail under natural lighting",
      },
    ],
    featured: true,
  },
  {
    id: "work-2",
    slug: "urban-pulse-nairobi",
    category: "COMMERCIAL & BRAND",
    title: "URBAN PULSE NAIROBI",
    credit: "Production Studio: ObozCreations",
    summary: "High-octane commercial campaign highlighting contemporary urban fashion and rhythm.",
    description: "Commissioned to capture the vibrant kinetic energy of Nairobi's creative scene. Utilizing dynamic handheld camera movement, high-contrast night cinematography, and precise beat-matched editing.",
    year: "2025",
    location: "Nairobi, Kenya",
    client: "Streetwear Brand {{TODO: confirm client}}",
    servicesProvided: ["Direction", "Aerial Footage", "Lighting", "Editing"],
    images: [
      {
        src: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1600&q=80",
        alt: "Urban Pulse Nairobi - Vibrant neon nighttime street visuals",
      },
      {
        src: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80",
        alt: "Urban Pulse Nairobi - Dynamic motion blur and urban choreography",
      },
      {
        src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1200&q=80",
        alt: "Urban Pulse Nairobi - Stylized close-up frame",
      },
    ],
    featured: true,
  },
  {
    id: "work-3",
    slug: "timeless-vows-rift-valley",
    category: "WEDDING FILM",
    title: "TIMELESS VOWS AT RIFT VALLEY",
    credit: "Cinematography: ObozCreations Team",
    summary: "An intimate, cinematic wedding film set along the cliffs of Lake Naivasha.",
    description: "A celebration of love framed by breathtaking African landscapes. Crafted with cinematic depth, soft color tones, and emotive sound design that immortalizes every glance and spoken vow.",
    year: "2024",
    location: "Naivasha, Kenya",
    client: "Private Couple {{TODO: confirm client details}}",
    servicesProvided: ["Full Day Videography", "Drone Aerials", "Highlight Reel", "Feature Film"],
    images: [
      {
        src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80",
        alt: "Timeless Vows - Sunset wedding reception setup",
      },
      {
        src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
        alt: "Timeless Vows - Intimate moment framed against rift valley backdrop",
      },
      {
        src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80",
        alt: "Timeless Vows - Cinematic candlelit dinner lighting",
      },
    ],
    featured: true,
  },
  {
    id: "work-4",
    slug: "rhythm-and-shadow",
    category: "MUSIC VIDEO",
    title: "RHYTHM & SHADOW",
    credit: "Director of Photography: Martin Oboz",
    summary: "Moody, high-concept musical performance film with rich atmospheric lighting.",
    description: "Designed around a rich palette of deep shadows and single-source key lighting. Rhythm & Shadow blends fine art cinematography with narrative musical storytelling.",
    year: "2024",
    location: "Nairobi Studio",
    client: "Afro-Fusion Collective {{TODO: confirm client}}",
    servicesProvided: ["Cinematography", "Lighting Rigging", "Color Grading"],
    images: [
      {
        src: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1600&q=80",
        alt: "Rhythm & Shadow - Stage lighting and silhouettes",
      },
      {
        src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80",
        alt: "Rhythm & Shadow - Atmospheric haze and dramatic rim light",
      },
    ],
    featured: false,
  },
];

export function getFeaturedWork(): WorkItem[] {
  return WORK_ITEMS.filter((item) => item.featured);
}

export function getAllWork(): WorkItem[] {
  return WORK_ITEMS;
}

export function getWorkBySlug(slug: string): WorkItem | undefined {
  return WORK_ITEMS.find((item) => item.slug === slug);
}
