# HI-Tech Project Instructions

## Read before UI work

Read `DESIGN.md` and `.agents/skills/hi-tech-gestalt/SKILL.md` before creating, refining, or reviewing project UI. The user's latest explicit decisions take precedence over project defaults. Apply general design skills within the approved HI-Tech foundations; do not silently replace them.

## Archive and working scope

Treat `phase-1-wireframe/` as a frozen reference. Build later phases outside it. Do not edit archived code, assets, or screenshots unless the user requests a baseline correction. Archive maintenance and documentation tasks do not authorize a redesign, React migration, deployment, or GitHub publication.

## Component decisions

All advanced UI components will be adapted from Aceternity UI or 21st.dev references provided by the user. Do not invent generic component structures.

If a required reference is missing, request that reference and continue independent preparation. Do not reopen decisions already approved. Before adaptation, record source URL, license, purpose, and required dependencies in `DESIGN.md`. Preserve the IBM type scale, spacing, palette, semantic hierarchy, and consultation goal. Do not add gradients, glass effects, 3D scenes, decorative grids, or animation solely to make the page appear modern.

## Skills and implementation

- Apply the project Gestalt skill to layout and component reviews.
- Use the installed `frontend-design` skill for composition and critique; the user's chosen visual direction and motion contract remain authoritative.
- Use the installed `anatomy` skill for requested technical illustrations. It is a design skill, not an animation runtime; use GSAP for this project's motion.
- Use Figma design-to-code workflows when implementing approved Figma nodes.
- The React/Vite stack in `DESIGN.md` is a recommendation for the next phase, not an existing application. Add 3D dependencies only with a concrete selected use case.

Animations must be premium, smooth, and deliberate. No bouncy, elastic, or chaotic motion. Use staggered fade-ups and subtle 2px hover lifts.

## Quality gate

Before handing off UI changes, inspect desktop and mobile screenshots; check 320, 390, 768, 1024, and 1440px for overflow and readable hierarchy. Verify keyboard navigation, visible focus, contrast, reduced motion, CTA destinations, and relevant interaction states. New 3D features need loading/error/WebGL-unavailable fallbacks and responsive performance checks. In React, clean up GSAP timelines, ScrollTriggers, listeners, and render resources on unmount.

Do not fabricate evidence of trust or identify the generated portrait as a real photograph of the founder. Report what changed, the references used, checks performed, and remaining limitations. Do not claim a plugin connection or deployment succeeded without confirmation.
