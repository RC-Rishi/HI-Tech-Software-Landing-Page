# HI-Tech Software Consultancy — Design Contract

## Purpose and baseline

Build trust with retailers, wholesalers, and manufacturers seeking software fitted to their daily operations. Lead with 25+ years of experience and clear capabilities. Primary conversion: call or WhatsApp +919428626099.

The frozen baseline is `phase-1-wireframe/index.html`. It includes existing motion and the Anatomy demo; archiving does not imply final design approval. Open it directly in a browser. Assets, screenshots, Figma state, original build notes, and verification scripts live beside it. Run those scripts from the archive directory; their browser executable and Anatomy installation paths are machine-specific.

Page sequence: Hero → Experience / social proof → Core services → Founder and roots → Contact footer. Preserve factual copy; never invent testimonials, customer logos, ratings, or performance claims. The generated founder portrait must remain labeled as illustrative until replaced with Nilesh Chauhan's real photo.

## Foundations

- Font: IBM Plex Sans. Desktop H1: 60px/1.17, weight 300; H2: 42px/1.2, weight 300; H3: 24px/1.33, weight 400. Body: 16px/1.5; lead: 18px/1.5; small/buttons: 14px/1.29. Mobile H1: 42px/1.17, weight 300; H2: 32px/1.25, weight 400.
- Colors: white `#FFFFFF`, alternate gray `#F4F4F4`, charcoal `#161616`, primary red `#DA1E28`, hover red `#B81922`, muted text `#525252`, borders `#E0E0E0`. Put the red/white logo on charcoal.
- Desktop: 12 columns, 32px gutters, maximum content width 1248px. At 1440px this produces 96px outer margins. Mobile: 4 columns, 16px gutters, 24px outer margins; stack service cards and keep reading order logical.
- Spacing tokens: 4, 8, 12, 16, 24, 32, 48, 64, 96px. Main section padding: 96px desktop / 48px mobile; footer: 64px desktop. These are project choices, not numerical laws of Gestalt psychology.
- Maintain text contrast of at least 4.5:1, or 3:1 for qualifying large text. Essential controls and focus indicators need 3:1 contrast against adjacent colors. Do not use the light divider token as the sole control boundary.

## Gestalt applications

Based on [Gestalt Principles](https://www.gestaltprinciples.com/); detailed project rules are in `.agents/skills/hi-tech-gestalt/SKILL.md`.

- Proximity: use 16px between each service title and description, 12px between feature rows, and 32px between desktop cards. Keep consultation buttons together, with 32px separating the action group from the preceding paragraph.
- Similarity: service cards share heading levels, icon sizes, padding, borders, and action placement. Primary consultation actions share the red treatment; secondary actions use an outline.
- Continuity: align section headings and content to the same grid. Keep the visible sequence and DOM order consistent. Workflow connectors must follow Billing → Inventory → Business Reports.
- Figure-ground: use white for hero/services, alternate gray for experience/founder, and charcoal for the contact footer. Give the primary CTA clear whitespace and sufficient contrast without making every surface compete for attention.

## Motion contract

Animations must be premium, smooth, and deliberate. No bouncy, elastic, or chaotic motion. Use staggered fade-ups and subtle 2px hover lifts.

Use GSAP and ScrollTrigger. Hero: 20px fade-up, 0.85s duration, 0.14s stagger, `power3.out`; illustration: 1s fade with 0.4s delay. Services: 24px fade-up, 0.8s, 0.12s stagger. Founder: 20px fade-up, 0.85s, 0.1s stagger. Reveal once. Portrait parallax: -2% to +2%, linear easing, scrub 1.5. Interactive cards: translateY(-2px), 0.3s, `power2.out`, subtle shadow. Red CTA hover: `#B81922`, 0.25s.

Respect reduced motion: show content immediately and disable spatial reveals, parallax, and hover translation. Animation failure must never hide content. Avoid scroll hijacking and decorative perpetual motion.

## Component sourcing and next-phase technology

All advanced UI components will be adapted from Aceternity UI or 21st.dev references provided by the user. Do not invent generic component structures.

References are pending. Record each chosen URL, author/license, intended section, useful behavior, and adaptation to our tokens before implementation. Existing Anatomy artwork is a retained baseline asset. Proposed 3D exceptions require a user-selected reference.

Recommended next-phase stack: React + TypeScript + Vite, compiled Tailwind CSS, GSAP/ScrollTrigger. Migration has not started. Use compatible stable releases and a lockfile when scaffolding. Add Three.js + React Three Fiber only for a selected 3D feature; lazy-load it, provide a static fallback, pause offscreen work, and keep essential copy/CTAs outside the canvas. Assess prerendering before launch so this marketing page ships meaningful HTML. Do not introduce a second animation library without an explicit need and decision.
