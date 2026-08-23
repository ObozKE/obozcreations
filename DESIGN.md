# ObozCreations — Design System

> **Source:** Design system extracted from the uploaded screen recording (a dark/cream "bold-agency" style site — production-studio template, footer-credited to "AHD.DESIGN," built on Webflow with a linked style guide/license).
>
> **Note on originality:** The reference is a licensed commercial Webflow template. This document captures the *layout patterns, type pairing, color system, and interaction motifs* — which are generic design conventions — and re-applies them to ObozCreations' own brand, copy, and content. No logo, copy, or imagery is carried over. Treat this as "inspired by," not a clone, same approach used on prior projects (e.g. Baharini Hotel).

---

## 1. Brand Identity

| Element | Spec |
|---|---|
| Site name | ObozCreations |
| Wordmark / logo mark | Monogram in nav, e.g. **"OC"** (bold, all-caps, matches reference's "FH" treatment) |
| Tagline (hero) | `{{TODO: one-line positioning statement, e.g. "A Nairobi-based creative building brands, sites, and stories."}}` |
| Voice | Confident, minimal, declarative short sentences. Statement-style headlines ("BUILT FOR STORY" → adapt to Oboz's own POV statement) |

---

## 2. Color Palette

Exact values sampled from the reference footage:

| Token | Hex | Usage |
|---|---|---|
| `--bg-dark` | `#100F0E` | Primary background (nav, hero, dark sections, footer) |
| `--bg-cream` | `#FEFFE4` | Secondary/alternating section background |
| `--accent-chartreuse` | `#E7F637` | CTA sections, active nav state, highlight accents |
| `--text-cream` | `#FDFFE5` | Headlines/body text on dark backgrounds |
| `--text-dark` | `#141310` | Headlines/body text on cream & chartreuse backgrounds |
| `--text-muted-dark` | `#55564A` | Secondary/meta text on cream backgrounds |
| `--text-muted-cream` | `#B8BBA0` | Secondary/meta text on dark backgrounds (e.g. director credits, timestamps) |

**Pattern:** the site alternates full-bleed sections between `bg-dark` and `bg-cream`, with a single high-voltage `accent-chartreuse` reserved almost exclusively for the contact CTA band and active nav indicator — never used broadly, which is what keeps it feeling premium rather than loud.

> Optional variant: swap `--accent-chartreuse` for Oboz's existing brand orange `#FF5100` if continuity with past work is preferred. Structure below is accent-color-agnostic.

---

## 3. Typography

Two-font system, deliberately contrasted: a **heavy grotesque display face** for impact, and a **rounded geometric sans** for everything functional/readable.

| Role | Font (closest open match) | Weight | Treatment |
|---|---|---|---|
| Display / Hero / Section headers | **Archivo Black** (or General Sans Black / Clash Display Extrabold) | 900 | Tight leading, all-caps or sentence case, huge scale (clamp ~48px–140px), sometimes duplicated as a ghost/echo layer behind itself for depth (see §6) |
| Body / Nav / UI / Labels | **Poppins** (Regular/Medium) | 400–500 | Rounded geometric sans, generous letter-spacing on caps labels (nav, eyebrows, meta labels) |
| Numerals (01, 02, 03…) | Same as Display | 900 | Oversized, used as structural/graphic elements, not just labels |

**Type scale (desktop):**
- Hero wordmark/headline: `96–140px`, weight 900, `-0.02em` tracking
- Section headline (e.g. "SERVICES", statement lines): `56–72px`, weight 900
- Sub-headline / pillar titles: `28–32px`, weight 900 (Poppins-adjacent bold acceptable here for variety)
- Body paragraph: `16–18px`, weight 400, `1.6` line-height
- Eyebrow / nav / meta labels: `12–13px`, weight 500–600, `0.15em` letter-spacing, uppercase

---

## 4. Layout & Grid

- Max content width: `1440px`, generous outer gutters (`~40px` desktop, `20px` mobile)
- Full-bleed section backgrounds (color blocks span 100vw; content stays in the constrained grid)
- Sections are alternated dark → cream → dark → chartreuse (CTA) → dark (footer) to create rhythm as the user scrolls
- Thin `1px` horizontal rules used generously to divide numbered lists and section headers from content
- Generous vertical rhythm: sections breathe with `100–160px` top/bottom padding

---

## 5. Navigation

- Fixed/sticky top bar, `--bg-dark`, ~`72px` height
- Left: monogram logo mark ("OC")
- Right (or center-right): horizontal nav — `WORK`, `SERVICES`, `ABOUT`, `CONTACT` — uppercase, letter-spaced, weight 500
- **Active state:** current page's nav item switches to `--accent-chartreuse`, others stay `--text-cream`
- No visible hamburger in the captured recording (desktop) — for mobile, follow Oboz's existing pattern: full-screen Framer Motion nav overlay

---

## 6. Signature Components

### 6.1 Hero — Echo Headline
Oversized display headline with a faint duplicate of itself bleeding off the top edge (ghost/echo repetition), sitting above the crisp foreground line. Creates depth without extra imagery.
```
[ghost copy, ~40% opacity, cropped at top]
FULL HEADLINE (crisp, foreground)
```
Below it: a short two-line subheading, centered, flanked by a pair of **rounded pill "bracket" bars** (small vertical capsules) — a recurring motif used to frame short text throughout the site (subheadings, "EXPLORE," "ABOUT US," "BOOK A CALL," "CONTACT US").

### 6.2 Hero Carousel — Work Showcase
Full-width slides cycling through 3–4 featured projects. Each slide:
- Full-bleed background image/video (project still)
- Top-left: category eyebrow (e.g. "SHORT FILM") + large project title (display font, 2-line max)
- Bottom-left: credit line (e.g. director/role) in muted small text
- Bottom-right (or top-right): `| EXPLORE |` pill-bracket link
- Top-right: optional social-proof badge — star rating + quote + source name (adapt to Oboz: could become "client testimonial chip" instead of press quote)

### 6.3 Skewed Image Stack
A signature visual treatment: 2–3 project images layered in a cascading stack, each trapezoid-skewed (subtle perspective/shear transform) and slightly offset, largest on top. Used in: hero carousel transitions, the "pillars" section, the Work page list items, and the About page portrait. Recommend implementing as CSS `clip-path`/`transform: skew()` on stacked absolutely-positioned image divs, or Framer Motion parallax on scroll.

### 6.4 Numbered List (Services / Values)
Two-column row pattern, repeated with `1px` divider rules:
```
01   Production
02   SFX & Practical Effects
03   Production Design
04   Cinematography
```
Left: 2-digit index in display font. Right: item title in body font (Poppins) at ~28px, no description in the compact version. A second usage (About page "values") pairs the same left-number pattern with a short right-aligned sentence instead of a single word.

### 6.5 Three-Pillar Section
Dark background, 3-column layout, each column:
- Large display-font numeral (01/02/03) sitting *behind/around* a skewed image stack (see 6.3), image overlapping the numeral
- Bold sub-headline (Poppins bold, ~28px)
- Short supporting paragraph (Poppins regular, muted-cream, centered, ~2–3 lines)

### 6.6 Pill-Bracket Buttons/Links
Recurring text-link style used everywhere for CTAs: `| LABEL |` — uppercase, letter-spaced label flanked by two thin vertical bars/pill caps in the same color as the text. Used for "EXPLORE," "ABOUT US," "BOOK A CALL," "CONTACT US." No filled button background — this stays a minimal text-link treatment except for the form's submit button (6.7).

### 6.7 Contact Section
Full-bleed `--accent-chartreuse` background, two-column:
- Left: eyebrow "CONTACT US," bold display headline (2–3 lines, dark text), short supporting line, `| BOOK A CALL |` pill link
- Right: form with **underline-only inputs** (no boxes/borders — just a bottom `1px` dark rule), stacked fields: Name*, Email*, Inquiry Type* (select dropdown), Message* (textarea)
- Submit button: solid `--bg-dark` fill, `--text-cream` label, small rounded-rect, bottom-right aligned
- This same contact block is reused as a compact CTA banner (headline + "CONTACT US" label only, no form) inserted near the top of secondary pages (Work, Services, About) before their main content

### 6.8 Footer
`--bg-dark`, generous padding:
- Row 1: logo monogram (left) + repeated nav links (right)
- Divider rule
- Row 2: `© 2026 OBOZCREATIONS | Built by {{studio/credit}}` (left) · secondary links e.g. `RESUME` / `CV` (center) · social icons (right — suggest Instagram, LinkedIn, X, GitHub/Behance in place of Threads/TikTok)
- Optional: oversized ghost wordmark repeating below the fold as a closing visual flourish (mirrors hero echo treatment)

---

## 7. Motion & Interaction

- Hero carousel: auto-advancing slides, image scales/crossfades on transition
- Numbered list rows: subtle background highlight or index color shift on hover
- Skewed image stacks: gentle parallax/scale on scroll into view (Framer Motion `whileInView`)
- Nav active state: instant color swap to chartreuse, no transition delay needed
- Section transitions: dark→cream/cream→dark blocks snap cleanly at section boundaries (no gradient blend) — reinforces the bold color-blocking

---

## 8. Page Structure

**Home**
1. Hero (echo headline + subheading + pill brackets)
2. Hero carousel — 3–4 featured work slides
3. Cream statement section ("BUILT FOR STORY"–style headline) → Services numbered list
4. Dark pillar section — "WE SHAPE ___" statement + 3-pillar numbered showcase
5. About teaser (brief, links to About)
6. Contact (full form, chartreuse)
7. Footer

**Work** (`/work`)
1. "ALL WORK" hero statement
2. Repeated project rows: title + skewed image stack + `EXPLORE` link + divider
3. Compact contact CTA banner
4. Footer

**Services** (`/services`)
1. Compact contact CTA banner (top)
2. "SERVICES" headline + numbered list (reuse 6.4)
3. Footer

**About** (`/about`)
1. Skewed portrait hero image
2. Cream statement block ("WE EXIST TO ___") + numbered values list (reuse 6.4 variant)
3. Dark "SHAPED BY HOW WE SEE"–style section with supporting image
4. Contact (full form)
5. Footer

**Contact** (`/contact`) — or anchor/modal off nav, per reference behavior
- Full contact section (6.7) as standalone page if a dedicated route is preferred

---

## 9. Content To Confirm (`{{TODO}}`)

- [ ] Final tagline / hero subheading copy
- [ ] Oboz's 6 services — names + 1-line descriptions for the numbered list
- [ ] 3–4 featured work items for hero carousel + Work page (title, category, credit line, image/video)
- [ ] About page statement copy + values (3 short lines)
- [ ] Real social links for footer
- [ ] Confirm accent color: chartreuse (as captured) vs. existing brand orange `#FF5100`
- [ ] Confirm form destination (Resend / Formspree / Web3Forms — matches stack used on prior projects)

---

## 10. Stack Notes (for Antigravity build prompt, next step)

Consistent with prior projects: Next.js App Router, React 19, TypeScript, Tailwind CSS v4, shadcn/ui, Framer Motion, `next/image`. No backend/database needed unless work items are pulled from a CMS — static/local data array is sufficient for a portfolio of this size.