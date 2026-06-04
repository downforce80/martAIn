---
name: martain-design
description: Use this skill to generate well-branded interfaces and assets for MartAIn ("Praktische AI voor ondernemers"), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, documents, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## What's here
- `README.md` — brand context, content/voice rules, visual foundations, iconography, manifest. **Start here.**
- `colors_and_type.css` — design tokens (color scales, gradients, semantic roles, type scale, radii, shadows, spacing, motion) + opt-in `.ds-*` element styles. Link or copy this.
- `assets/` — logo lockups (full, white, navy), wordmark, and the brain mark (+ white) for app icon / glyph.
- `fonts/` — webfont note (Google Fonts substitutes; swap in real files here).
- `preview/` — design-system specimen cards (type, color, spacing, components, brand).
- `ui_kits/website/` — interactive marketing-site recreation with reusable JSX components.
- `documents/` — branded document examples (e.g. client `Sessieverslag` / session-report template).

## House rules (quick)
- Dutch, informal "je/jij", sentence case, nuchter & praktisch — no hype, no emoji.
- Primary cobalt blue `#0061D1`; violet `#7A2BD6` as AI-accent; the blue→violet gradient is the signature — use it sparingly.
- Cool navy-tinted neutrals, soft cool shadows, 14px card radius, generous whitespace.
- Icons: Lucide (outline, 1.75 stroke). Never hand-draw SVG icons or use emoji.
- Never hide content behind opacity-based entrance animations as a base state (breaks PDF/print/screenshots).
