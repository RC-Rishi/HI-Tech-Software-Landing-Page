# Phase 2 — Component Research & Refinement

**Status:** in progress. Annotated Canva layouts, final asset selections, and specific component references are pending. No React migration, new 3D scene, or advanced component implementation has started.

## Working method

The project owner is collecting descriptively named assets in the root `assets/` folder and will annotate the archived desktop/mobile screenshots in Canva. Matching section IDs connect proposed layouts, arrows, behavior notes, reference URLs, and files.

| ID | Section |
| --- | --- |
| NAV | Header and navigation |
| 01 | Hero |
| 02 | Experience and trust |
| 03A / 03B / 03C | Billing/POS, Inventory/Production, ERP/Business Management |
| 04 | Founder and roots |
| 05 | Contact and footer |

For each proposed change, supply the reference URL, what should be adapted, desktop/mobile behavior, interaction or motion details, and any associated asset filename. Export the annotated layouts as images or PDF and retain URLs as selectable text. Separate confirmed choices from undecided ideas.

## Reference policy

All advanced UI components will be adapted from Aceternity UI or 21st.dev references provided by the user. Do not invent generic component structures.

Research starting points: [Aceternity UI](https://ui.aceternity.com/) and [21st.dev](https://21st.dev/community/components). These links are catalogs, not selected components. Other libraries discussed are research options, not approved implementation sources.

Before adapting each selected component, record the following in the design contract:

| Field | Required detail |
| --- | --- |
| Source | Specific URL and author |
| Rights | Component license, attribution, or access restrictions |
| Purpose | Section ID and user need |
| Adaptation | Structure/behavior retained and changes to HI-Tech tokens |
| Dependencies | Required packages and reason for each |
| Review | Proposed, approved, implemented, or replaced |
| Evidence | Desktop/mobile captures and relevant test results |

**Selected references:** none recorded yet.

## Technical direction

React + TypeScript + Vite, compiled Tailwind CSS, and GSAP are recommended for the next implementation. This is not yet a scaffolded application. A 3D feature needs a selected reference and concrete purpose; load it separately, preserve essential content in HTML, and provide a static alternative. Consult the [design contract](../../DESIGN.md) and [project skill](../../.agents/skills/hi-tech-gestalt/SKILL.md).

## Completion criteria

The user-selected desktop/mobile composition is mapped to section IDs; component sources and rights are recorded; typography, spacing, contrast, and motion adaptations are explicit; and the user has resolved any changes to previously approved foundations. Implementation and validation evidence will be added when those activities occur.
