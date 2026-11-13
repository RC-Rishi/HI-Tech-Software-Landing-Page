---
name: hi-tech-gestalt
description: Apply and audit Gestalt grouping, hierarchy, whitespace, CTA emphasis, and restrained motion for HI-Tech Software Consultancy landing-page components. Use during this project's UI design, component adaptation, and visual review.
---

# HI-Tech Gestalt UI Rules

Read the repository-root `DESIGN.md` first. Apply this skill to the active UI, using `phase-1-wireframe/` only as a reference. The rules below are project-specific applications of [Gestalt Principles](https://www.gestaltprinciples.com/), not a reproduction of that site's text. Numerical values come from the HI-Tech design contract.

## Proximity: make relationships visible

Keep each service's icon, title, description, feature list, and action inside one common region. Title-to-description spacing is 16px; feature-row spacing is 12px. Desktop card separation is 32px; mobile card separation is 24px. Default card padding is 32px.

Group Call and WhatsApp actions with a 16px gap; separate the group from introductory copy by 32px. Keep supporting GST/customization copy 16px below the actions. Never place a service action closer to a neighboring card's description than to its own content. Check grouping at every responsive layout, not only desktop.

## Similarity: make roles predictable

Use one service-card anatomy and H3 token across Billing/POS, Inventory/Production, and ERP/Business Management. Use consistent 32px service icons, padding, and aligned action positions. Use the same red primary action wherever consultation is requested; distinguish the secondary action with an outline. Similar appearance must signal similar behavior. Do not give static decoration button styling or hover lifts.

## Continuity: preserve the reading path

Align section headings to the shared container and align related content to grid columns. Follow Hero → Experience → Services → Founder → Contact. Visual reordering must not contradict keyboard or screen-reader order. Workflow arrows follow Billing → Inventory → Business Reports, with clear endpoints and no decorative branches. On mobile, stack content in the same logical sequence; never require horizontal scrolling to read essential content.

## Figure-ground: make the next action clear

Use the approved white, alternate-gray, and charcoal section surfaces. Keep body copy legible and primary actions distinguishable from their surrounding surface. Whitespace around the action group should reinforce its role. Maintain the contrast requirements in `DESIGN.md`; color alone cannot communicate selection, focus, or an error. Keep the red/white brand mark on charcoal. Avoid overlays or 3D scenes behind essential text unless legibility is demonstrated in all states.

## Common region and coordinated motion

Use a shared card boundary to group a service's content, not a separate box for every sentence. Stagger related service reveals as one family. Avoid unrelated looping effects that compete with the consultation action.

Animations must be premium, smooth, and deliberate. No bouncy, elastic, or chaotic motion. Use staggered fade-ups and subtle 2px hover lifts.

Follow the exact GSAP values and reduced-motion behavior in `DESIGN.md`. Never animate the same element's transform through multiple libraries. For React, scope and clean up animation instances. For 3D, retain readable HTML content and an accessible static alternative.

## Reference-led adaptation

All advanced UI components will be adapted from Aceternity UI or 21st.dev references provided by the user. Do not invent generic component structures.

Missing reference: request the specific link; prepare content and tokens meanwhile. Preserve the existing Anatomy exception documented in `DESIGN.md`. Adapt source styling to HI-Tech rather than importing an unrelated theme. Do not add unsupported proof, decorative labels, or features unrelated to retail, wholesale, manufacturing, or consultation.

## Review and handoff

For each changed component, state its purpose, source, grouping, alignment, surface, and motion choice. Inspect its smallest supported layout, desktop layout, focus state, and reduced-motion state. Report failures with a component/file location and concrete correction. Verify real behavior rather than treating these rules as a guarantee of quality. Obtain a user decision only when a new reference or change to an approved foundation is actually needed.
