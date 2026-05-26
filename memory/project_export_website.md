---
name: project-export-website
description: Static Astro site for Citizen Foods × Top Class dual-brand Indian food export company, deployed on Cloudflare Pages
metadata:
  type: project
---

Astro 4 + Tailwind CSS v3 static site for "Citizen Foods × Top Class" — a dual-brand Indian food export company.

**Why:** Client needed a deploy-ready export marketing website with product catalogues for both brands.

**How to apply:** When asked to extend or modify this site, use the existing component patterns (Header, Footer, ProductCard, StatCounter, CertBadge, InquiryForm).

## Tech stack
- Astro 4 (`output: 'static'`), Tailwind CSS v3, Google Fonts (Playfair Display + DM Sans)
- Forms: Web3Forms (free, no backend) — access key placeholder in `InquiryForm.astro`
- Deploy: Cloudflare Pages — `wrangler.toml` + `.node-version` (18) already configured
- Build: `npm run build` → `dist/` (504KB total)

## Pages built (13 total)
- `/` — Homepage with hero, stats, products, about, why us, Top Class callout, marquee, certs, CTA
- `/citizen` — Citizen Foods catalogue (onion table, garlic cuts, powders grid)
- `/citizen/onions`, `/citizen/garlic`, `/citizen/powders-flakes` — product detail pages
- `/citizen/about`, `/citizen/contact` — brand about + inquiry form
- `/topclass` — Top Class catalogue (sauces table, pastes table, masalas grid)
- `/topclass/sauces`, `/topclass/pastes`, `/topclass/masalas` — product detail pages
- `/topclass/about`, `/topclass/contact` — brand about + inquiry form

## Key components (`src/components/`)
- `Header.astro` — sticky, backdrop-blur on scroll, hamburger mobile drawer
- `Footer.astro` — 4-col + WhatsApp floating button (bottom-right, fixed)
- `InquiryForm.astro` — `brand` prop switches product dropdown between citizen/topclass
- `StatCounter.astro` — Intersection Observer count-up animation
- `CertBadge.astro`, `ProductCard.astro` — reusable card components

## Color system (Tailwind custom `brand.*`)
- `brand-primary`: #D97706 (amber)
- `brand-dark`: #1C1917 (near-black)
- `brand-light`: #FFFBF5 (warm white)
- `brand-accent`: #92400E (dark amber)
- `brand-muted`: #78716C (stone gray)

## Web3Forms
Form `access_key` is set to `YOUR_WEB3FORMS_ACCESS_KEY` placeholder in `InquiryForm.astro:11`. Client needs to replace with their real key from web3forms.com.
