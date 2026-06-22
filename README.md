# Velvety

![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=flat-square&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React_19-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![shadcn](https://img.shields.io/badge/shadcn-000000?style=flat-square&logo=shadcnui&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white)
![SVGR](https://img.shields.io/badge/SVGR-FFD4FF?style=flat-square&logo=webpack&logoColor=black)

Skincare brand landing page — organic facial products inspired by traditional First Nations pharmacopoeia.

## Tech Stack

| Technology               | Version  | Purpose                                   |
| ------------------------ | -------- | ----------------------------------------- |
| Next.js                  | 16.2.9   | Framework (App Router + Turbopack)        |
| React                    | 19.2.4   | UI library                                |
| TypeScript               | ^5       | Type safety                               |
| Tailwind CSS             | v4       | Styling                                   |
| shadcn                   | ^4.11.0  | Component CLI/style (`base-nova`)         |
| Framer Motion            | ^12.40.0 | Animations (header dropdown, mobile menu) |
| class-variance-authority | ^0.7.1   | Variant API for Button                    |
| clsx + tailwind-merge    | latest   | Class name utility (`cn()`)               |
| @svgr/webpack            | ^8       | SVG as React components                   |

**Fonts:** Aileron (body, 300/400/700) · Ivy Mode (headings, 300/400)

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Command         | Description             |
| --------------- | ----------------------- |
| `npm run dev`   | Development server      |
| `npm run build` | Production build        |
| `npm run start` | Start production server |
| `npm run lint`  | Run ESLint              |

## Project Structure

```
velvety/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout (fonts + Footer)
│   ├── page.tsx                  # Homepage (11 section composition)
│   ├── globals.css               # Tailwind v4 theme + oklch tokens
│   ├── fonts/                    # Aileron (otf) + Ivy Mode (ttf)
│   └── assets/                   # Co-located images & SVGs (bundled)
│       ├── icons/                # 10 SVG icons (arrow, star, social, etc.)
│       ├── partners/             # 5 SVG brand logos (Vogue, Forbes, WWD, etc.)
│       ├── CTAProgram/           # 3 SVG loyalty program icons
│       ├── products/             # 6 .webp product images
│       ├── Logo.svg              # Wordmark (uses currentColor)
│       └── *.webp / *.png        # Hero, ingredients, services images
│
├── components/
│   ├── ui/                       # Primitives (Button via Base UI)
│   ├── shared/                   # Reusable (SectionHeader, ProductCard)
│   └── sections/                 # Page-level sections (13 folders)
│
├── config/
│   └── navigation.ts             # Centralized nav + footer link data
│
├── lib/
│   └── utils.ts                  # `cn()` helper (clsx + tailwind-merge)
│
└── public/                       # Static files served as-is
```

## Routing & Page Status

Currently a single homepage. All nav links point to future routes (placeholders).

| Route                            | Status      | Description                                                                                             |
| -------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------- |
| `/`                              | **Done**    | Homepage (Hero, Ingredients, Featured, About, Product, Services, Testimonial, CTAProgram, CTASubscribe) |
| `/shop`                          | Coming Soon | Product listing                                                                                         |
| `/about`                         | Coming Soon | About page                                                                                              |
| `/product/:id`                   | Coming Soon | Product detail                                                                                          |
| `/blog` · `/blog/:id`            | Coming Soon | Blog & posts                                                                                            |
| `/checkout` · `/checkout-paypal` | Coming Soon | Checkout flow                                                                                           |
| `/contact`                       | Coming Soon | Contact page                                                                                            |
| `/sign-in`                       | Coming Soon | Auth page                                                                                               |
| `/order-confirmation`            | Coming Soon | Post-purchase                                                                                           |
| `/styleguide`                    | Coming Soon | Design system reference                                                                                 |

## Components

### UI Primitives

| Component | Description                                                                                                                       |
| --------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `Button`  | Button built on Base UI, with CVA variants (`default`, `outline`, `hero`, `pillActive`, `pillInactive`) + custom `withArrow` prop |

### Shared Components

| Component       | Description                                                  |
| --------------- | ------------------------------------------------------------ |
| `SectionHeader` | Eyebrow + title heading block                                |
| `ProductCard`   | Product card with image, title, price, 5-star rating display |

### Section Components

| Component      | Description                                                                      |
| -------------- | -------------------------------------------------------------------------------- |
| `Header`       | Responsive nav header (overlay on hero, scroll-lock, auto-close on route change) |
| `DesktopNav`   | Desktop nav with hover-triggered mega-dropdown (Framer Motion animated)          |
| `MobileMenu`   | Full-screen mobile menu with accordion sub-section                               |
| `Hero`         | Hero banner with rotated product image + decorative diamond dots                 |
| `Ingredients`  | Split layout with ingredient cards (polymorphic icon props)                      |
| `Featured`     | Row of 3 product cards                                                           |
| `About`        | Brand story + "As seen in" partner logos grid                                    |
| `CTAProducts`  | Small CTA banner with arrow                                                      |
| `Product`      | Product list with pill filter buttons (4 cards)                                  |
| `Services`     | Skin diagnosis service CTA                                                       |
| `Testimonial`  | Customer review with circular image + star rating                                |
| `CTAProgram`   | Loyalty program cards (3 tiers)                                                  |
| `CTASubscribe` | Email newsletter subscribe form                                                  |
| `Footer`       | Footer rendered at layout level (links from `config/navigation.ts`)              |

## Color Palette

Tokens defined in `app/globals.css` using `oklch()` color space — a green-tinted neutral palette.

| Token               | oklch Value                | Usage                             |
| ------------------- | -------------------------- | --------------------------------- |
| `--background`      | `oklch(0.968 0.01 131.7)`  | Page background (cream/off-white) |
| `--foreground`      | `oklch(0.311 0.048 144.4)` | Text & foreground (deep green)    |
| `--primary`         | `oklch(0.311 0.048 144.4)` | Primary brand (deep green)        |
| `--primary-hover`   | `oklch(0.481 0.08 135.7)`  | Primary hover state               |
| `--primary-pressed` | `oklch(0.211 0.029 144.5)` | Primary pressed state             |
| `--primary-surface` | `oklch(0.934 0.018 135.1)` | Light primary surface             |
| `--primary-border`  | `oklch(0.864 0.037 135.1)` | Primary-tinted border             |
| `--gray-100`        | `oklch(0.311 0.048 144.4)` | Darkest gray (headings)           |
| `--gray-80`         | `oklch(0.445 0.071 142.5)` | Strong gray                       |
| `--gray-40`         | `oklch(0.678 0.043 142.9)` | Medium gray                       |
| `--gray-20`         | `oklch(0.85 0.018 143)`    | Light gray                        |
| `--gray-0`          | `oklch(0.968 0.01 131.7)`  | Lightest gray                     |
| `--border`          | `oklch(0.864 0.037 135.1)` | Global border                     |
| `--ring`            | `oklch(0.481 0.08 135.7)`  | Focus ring                        |

### Typography

| Role    | Font     | Weights       | Where                                            |
| ------- | -------- | ------------- | ------------------------------------------------ |
| Heading | Ivy Mode | 300, 400      | `h1`–`h5` via `--font-heading`                   |
| Body    | Aileron  | 300, 400, 700 | `html` via `--font-sans`, body uses `font-light` |

## Architecture Notes

- **Static-first:** No API routes, no server actions, no database. All product data is hardcoded inline in section components. Designed as a pure marketing/landing page.
- **App Router:** Uses Next.js App Router (not Pages Router). All pages are Server Components by default; only `Header` sub-components (interactive nav/mobile menu) use `"use client"`.
- **Base UI (not Radix):** Unlike most shadcn setups, primitives come from `@base-ui/react` rather than `@radix-ui`. Configured via `components.json` with style `base-nova`.
- **Variant system:** `Button` uses `class-variance-authority` (CVA) with 5 variants + 4 sizes, plus a custom `withArrow` prop that appends an inline `ArrowRight` SVG.
- **Data-driven navigation:** All nav and footer links live in `config/navigation.ts` and are rendered via `.map()`, keeping presentation decoupled from content.
- **SVG loading:** Configured via `@svgr/webpack` in `next.config.ts` (both Turbopack + webpack rules). SVGs are imported as React components and inherit `currentColor` for theming flexibility.
- **Asset strategy:** SVGs and raster images (`.webp`, `.png`) are co-located in `app/assets/` and imported as typed modules for type-safe `next/image` usage. The `public/` directory is essentially unused.
- **Footer placement:** `Footer` is rendered in `app/layout.tsx` (not `page.tsx`), so it persists across all future routes.
- **Path alias:** `@/*` maps to project root (configured in `tsconfig.json`).
- **Design motif:** Rotated 45° square "diamond dots" used as decorative progress/carousel indicators across Hero and Testimonial sections.
