# HI-Tech landing page handoff

Open `index.html` in a browser. It is the complete single-file deliverable: both generated images, the Anatomy SVG, styling, and application JavaScript are embedded. Keep an internet connection for the requested Tailwind, GSAP, ScrollTrigger, and Google Fonts CDNs. No build step is required to preview it.

## What is connected

- Call and WhatsApp links use **+91 94286 26099**.
- The approved IBM Plex Sans typography, 12-column desktop grid, whitespace, and white/gray/charcoal/red palette are preserved.
- GSAP handles hero entrance, service and founder reveals, portrait parallax, CTA transitions, and the exact 2px service-card hover lift. Reduced-motion preferences disable spatial animation.
- The hero's **Try a sale** tab has an interactive Anatomy POS illustration. A sample sale updates stock, sales count, and the total from one model, with a restrained receipt animation. Sample data is explicitly labeled; it is not a live product integration.
- Navigation, tabs, and sample controls support keyboard use. Page content remains accessible when animation scripts fail to load.

## Anatomy

[Anatomy](https://skills.wheresryan.sh/anatomy) was installed to `C:/Users/RCPC/.codex/skills/anatomy`. Its kit was used to generate the embedded POS illustration. The installed skill is available for subsequent sessions; this build applied its instructions directly.

`build-anatomy.mjs` regenerates `assets/anatomy-pos.svg` using that locally installed kit. The generated SVG is already embedded in `index.html`; editing the standalone SVG does not automatically update the HTML. The MIT license is included in the HTML and `assets/anatomy-LICENSE.txt`.

## Generated assets

Generated with the built-in image-generation tool; no external image hosting is required. Original assets are saved separately for future editing, and their complete data URLs are embedded in `index.html`.

- `assets/workflow.png` — minimal Billing → Inventory → Business Reports illustration.
- `assets/founder-placeholder.png` — fictional corporate portrait, visibly labeled as an AI placeholder. It is not a likeness of Nilesh Chauhan.

### Workflow prompt

Use case: infographic-diagram. Create a premium B2B software consultancy website hero asset, square composition, flat vector aesthetic rendered as a clean raster illustration. Exact pale gray #F4F4F4 background, generous negative space. Three precise white rectangular modules connected in an understated stepped workflow from upper left to lower right, fine charcoal outlines, very restrained #DA1E28 red connector lines and status dots. First module minimal receipt/barcode icon, label exactly 'Billing'; second minimal inventory boxes icon, label exactly 'Inventory'; third minimal bar chart icon, label exactly 'Business Reports'. IBM Plex Sans-like typography. Extremely clean technical drafting aesthetic, crisp lines, no gradients, no 3D, no decorative extra text, no logos, no watermark. All labels large and legible. Professional enterprise visual.

### Portrait prompt

Use case: photorealistic-natural. Website founder portrait placeholder, fictional person, not a likeness of any real individual. A highly professional Indian businessman in his late 50s, salt-and-pepper hair, subtle natural smile, approachable experienced software consultant. Charcoal tailored blazer over a white open-collar shirt, no tie, tasteful rectangular glasses. Waist-up editorial corporate portrait, standing naturally in a quiet premium modern office, soft daylight from the side, neutral light gray background slightly out of focus, realistic skin texture. Vertical 4:5 composition with breathing room above head, subject centered, arms relaxed. Restrained desaturated tones, trustworthy and understated, no dramatic lighting, no text, no logos, no watermark.

## Validation

Playwright checks passed at 320, 390, 768, 1024, and 1440px with no horizontal overflow. Verified image loading, mobile menu and Escape behavior, tabs, sample-sale stock limits and reset, contact destinations, reduced motion, CDN failure fallback, ScrollTrigger registration, and the 2px card lift. No page JavaScript errors or failed HTTP responses were observed during the normal-load check.

`page-desktop.png` and `page-mobile.png` show the complete page. `anatomy-review.png` and `anatomy-detail.png` show the interactive figure. Verification scripts expect a local HTTP server on port 4173 and the installed Playwright Chromium executable.

## Before public launch

Replace the fictional founder portrait and provisional text logo with the real brand assets. The Tailwind browser CDN was retained as requested; [Tailwind documents it as a development tool](https://tailwindcss.com/docs/installation/play-cdn). Compile the Tailwind utilities into static CSS for public production hosting. This delivery is a renderable CDN edition and has not been deployed.
