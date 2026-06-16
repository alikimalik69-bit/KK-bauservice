# PRD – KK Bauservice Website

## Original Problem Statement
Premium, high-end German business website for **KK Bauservice**. Focus (clarified by user): **Glasfaserausbau / Digitalisierung** ("Wir digitalisieren Europa") – NOT generic building construction. Must be visually impressive, trustworthy, conversion-oriented, fully responsive, with logo/images/videos integration, smooth scroll animations, and custom-domain ready.

## User Choices
- Language: **Deutsch**
- Company name: **KK Bauservice**
- Services: Glasfaserausbau, Kabelverlegung, Tiefbau, Asphaltarbeiten
- Contact form: display-only (no DB persistence) — confirmed by user
- Primary focus: **Fiber optic / digital infrastructure**

## Architecture
- Frontend-only marketing site (React 19 + Tailwind + framer-motion). Backend untouched (template).
- Single-page composition in `App.js` with section components in `src/components/site/`.
- Content/data centralized in `src/lib/content.js`.

## Implemented (2026-06-16)
- Dark luxury theme (Outfit/Manrope fonts, obsidian base, fiber-cyan + industrial-amber accents).
- Sections: Sticky glass Header, Hero (autoplay muted bg video + logo + CTAs + stats), About, Services (4 cards), Projects (masonry + lightbox w/ keyboard-free prev/next), Video Showcase (4 cards, IntersectionObserver autoplay-on-visibility + mute toggle), Why Choose Us (6 items), Testimonials (auto slider), Contact (form w/ toast, phone/email/address, WhatsApp button, embedded Google Map), Footer.
- Provided logo used in header/footer/hero/favicon. Provided 3 project images in gallery. Royalty-free Mixkit fiber/network/trenching videos (commercial license, no attribution).
- SEO meta tags, German lang, responsive, scroll-reveal animations.

## Backlog
- P1: Real contact data (phone/email/address/WhatsApp/Maps location) — currently placeholders.
- P1: Connect custom domain (via Deploy → custom domain settings).
- P2: Replace placeholder testimonials with real customer reviews.
- P2: Impressum & Datenschutz pages (legal requirement in Germany).
- P2: Optional backend persistence + admin view for contact submissions.

## Next Tasks
- Collect real business details & legal pages content from user.
