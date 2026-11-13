# Phase 1 — Archived Baseline

**Status:** baseline archived; text wireframe and IBM direction approved, static visual layout described by the project owner as approximately 80% approved. This is a retrospective account of work completed before the initial Git commit.

## Problem and audience

Retailers, wholesalers, and manufacturing owners need software that matches their daily workflows. The page must explain HI-Tech's services and experience, then make calling or messaging for a consultation straightforward.

## Inputs and decisions

- User-provided business brief: founder Nilesh Chauhan, 25+ years of experience, custom billing/inventory and business-management software.
- IBM design-system direction, sourced from [getdesign.md](https://getdesign.md/design-md/ibm/DESIGN.md), adapted to the existing red brand accent.
- [Gestalt Principles](https://www.gestaltprinciples.com/) as the conceptual reference for grouping, alignment, hierarchy, and figure-ground separation.
- IBM Plex Sans, a 12-column desktop grid, restrained surfaces, and the approved white/gray/charcoal/red palette.
- Hero → Experience → Services → Founder → Contact as the page sequence. Phone and WhatsApp consultation are the primary actions.
- Instagram references were explored in the conversation but the user later chose to proceed with the IBM foundation without depending on them.

## What was built

The archived [single-file HTML baseline](../../phase-1-wireframe/index.html) contains responsive layouts, generated workflow imagery, a labeled fictional founder portrait, GSAP/ScrollTrigger motion, navigation, contact links, and an Anatomy POS demonstration. The demonstration updates sample stock and sales; it is not a live integration.

The phase name refers to the frozen baseline, not a purely static artifact: motion and interaction had already been added before archival. Desktop/mobile Figma and browser captures are preserved alongside the HTML.

## Evidence

- [Desktop page](../../phase-1-wireframe/page-desktop.png) and [mobile page](../../phase-1-wireframe/page-mobile.png).
- [Figma desktop capture](../../phase-1-wireframe/figma-desktop-review.png) and [Figma mobile capture](../../phase-1-wireframe/figma-mobile-review.png).
- [Interactive illustration capture](../../phase-1-wireframe/anatomy-review.png).
- [Original build notes](../../phase-1-wireframe/BUILD-NOTES.md) and archived verification scripts.

Earlier build notes report checks at 320, 390, 768, 1024, and 1440px, plus image loading, navigation, tabs, sample-sale bounds, contact links, reduced motion, script failure fallback, ScrollTrigger, and a 2px hover lift. These are historical results, not a new final-release audit.

Workspace organization moved 17 files into the archive and verified their contents using SHA-256 hashes. The archive remains a reference for later comparisons.

## Remaining issues and handoff

Final visual approval is incomplete. Replace the generated founder portrait and provisional text logo before launch. The browser-CDN implementation and machine-specific tooling are baseline limitations. Later work must preserve the approved foundations while adapting the user's chosen components, not silently redesign the archive.
