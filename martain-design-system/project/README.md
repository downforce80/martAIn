# MartAIn — Design System

> **Praktische AI voor ondernemers**
> *Slimme automatisering, advies en training door Martijn.*

A complete brand & UI design system for **MartAIn**, derived from the brand logo and company positioning. Use it to produce on-brand interfaces, marketing pages, decks, and prototypes — for production or throwaway mocks.

---

## 1. Company & product context

**MartAIn** helps Dutch **mkb** (small & medium-sized) businesses put AI to work *practically and responsibly*, so that routine, standardized work gets automated more intelligently and employees win back time for what matters: the customer, the process, the product, and the service they deliver.

> *MartAIn helpt mkb bedrijven om AI praktisch en verantwoord in te zetten, zodat standaardwerk slimmer wordt geautomatiseerd en medewerkers meer tijd krijgen voor klant, proces, product en dienstverlening.*

It is a **boutique advisory practice fronted by a person — "Martijn"** (the name is baked into the brand: **Mart** + **AI** + **n**). The offer, per the logo subline, is three-fold:
- **Slimme automatisering** — smart automation of standard work.
- **Advies** — advisory / consulting on where and how to apply AI.
- **Training** — upskilling teams to use AI responsibly.

The tone is **down-to-earth, trustworthy, hands-on** — the opposite of hype. "Praktisch en verantwoord" (practical and responsible) is the core promise. The audience is non-technical SMB owners and their teams, in Dutch.

### Primary surface
There is no existing product app or website in the brief — this is a **services/consultancy brand**. The natural digital surface is therefore a **marketing website** (offer, proof, contact/intake), plus **sales/training decks**. The UI kit in this system builds the marketing website.

### Sources provided
- `uploads/ChatGPT Image 4 jun 2026, 14_47_22.png` — the master brand logo (full lockup on transparent background). Copied & processed into `assets/` (see Index). **This was the only source asset.** No codebase, Figma file, website, or deck template was supplied.

> ⚠️ Because the only input was a single logo image, every token below is **inferred** from the mark + positioning, not extracted from production code. Treat colors/spacing as a faithful, internally-consistent *proposal* and refine against any real assets you have.

---

## 2. Content fundamentals (voice & copy)

**Language: Dutch (Netherlands).** All customer-facing copy is in Dutch. English is used only for established tech terms (AI, workflow, dashboard) where Dutch would feel forced.

**Person & address:** Speak to the reader as **"je/jij"** (informal you), not the formal "u" — MartAIn is approachable and peer-level, a partner not a vendor. Refer to the practice in the first person where the founder shows up ("ik help je…", "Martijn"). The brand name itself is personal.

**Tone:** *Nuchter, praktisch, geruststellend.* Plain-spoken and concrete. No hype, no jargon walls, no "revolutionary / game-changing." Lead with the **outcome for the business** (time saved, less repetitive work), not the technology.

**Casing:**
- Headlines & body use **sentence case** ("Slimme automatisering die werkt"), not Title Case.
- The one place ALL-CAPS appears is the **tagline lockup** under the logo — uppercase with wide tracking (~0.14em): `PRAKTISCHE AI VOOR ONDERNEMERS`. Reserve all-caps for that tagline treatment and short eyebrows only.

**Sentence style:** Short, active sentences. Verbs first. Concrete nouns (offerte, factuur, e-mail, planning) over abstractions. It's fine to use a warm, slightly personal serif-italic line as a signature flourish (echoing the logo subline), e.g. *"Geen ruis. Gewoon AI die je dag lichter maakt."*

**Vibe / examples:**
- Eyebrow: `VOOR HET MKB`
- H1: **"AI die gewoon je werk uit handen neemt."**
- Lead: "Ik help je de standaardklussen automatiseren — zodat jij en je team tijd overhouden voor klanten, proces en product."
- Button: "Plan een kennismaking" · "Bekijk wat ik doe"
- Serif accent: *"Praktisch en verantwoord — geen black box."*

**Emoji:** Not used in the brand. Avoid emoji in product/marketing copy. Use the icon system instead (see §5).

**Numbers & proof:** Use proof sparingly and concretely ("3 workflows", "8 uur per week"). No invented vanity stats.

---

## 3. Visual foundations

The entire visual language flows from one device in the logo: a **left-to-right blue→violet gradient** crossing a bright cyan highlight, paired with a **deep navy ink**. Left = human/organic (rounded brain lobes, warm blue); right = machine/AI (violet circuit traces). That **human + AI** duality is the core motif.

### Color
- **Primary is cobalt blue `#0061D1`.** It carries CTAs, links, and brand moments.
- **Violet `#7A2BD6`** is the AI-accent — used in gradients, secondary highlights, "AI"-flavored UI, never as the only signal of an action.
- **Cyan/sky `#15B4FD`** is a highlight only — gradient midpoints, glints, small accents. Not a fill for large areas.
- **Ink navy `#0A1640`** is the primary text color and the dark-section background.
- Neutrals are **cool, navy-tinted grays** (not pure neutral) so they sit under the blue/violet without clashing.
- The **brand gradient** (`--grad-brand`, cobalt→cyan→violet) is the signature. Use it on: the wordmark, one hero accent, gradient text, key icon mark, a single primary button style. **Don't** flood backgrounds with it or stack multiple gradients — restraint is what keeps it premium. Full-bleed dark sections use the calmer `--grad-deep` (navy→indigo).

### Type
- **Poppins** (geometric, friendly, bold) for display & headings — it echoes the rounded geometric wordmark.
- **Plus Jakarta Sans** for body & UI — humanist, highly legible, distinct from Inter/Roboto.
- **Lora italic** for the occasional serif accent line — directly references the logo's italic subline. Use sparingly (one per section max).
- Headings are tight-tracked (`-0.02em`) and weighty (600–700). Body is 16px, line-height ~1.55. Eyebrows are uppercase, 0.14em tracking, blue.

### Spacing & layout
- 4px base grid; section rhythm in 8/16/24/48/80 steps.
- Generous whitespace — the brand is calm and uncluttered. Content max-width ~1200px; text columns ~640–720px.
- Layout is **left-aligned and grounded**, not centered-everything. Fixed sticky header (translucent white + blur on scroll). Cards sit on a soft `#F6F8FC` page; white surfaces lift with cool shadows.

### Backgrounds
- Default page: **soft cool off-white `#F6F8FC`** (never pure white for full pages).
- Feature/CTA sections: **dark `--grad-deep`** (navy→indigo) for contrast and gravity.
- No photography is mandated, but if used it should be **bright, real, workplace-warm** (Dutch SMB settings — workshops, desks, hands) with a subtle cool grade so it harmonizes with the blue. No stocky "robot/hologram" AI clichés.
- Optional subtle texture: faint **circuit-trace line motif** (echoing the brain's right hemisphere) at very low opacity in dark sections — never busy.
- No heavy gradient meshes, no purple-blob backgrounds.

### Borders, radius, elevation
- **Corner radius is friendly but not bubbly:** 14px (`--radius-md`) for cards/inputs, 10px for small controls, pill for tags/CTAs where playful, 20–28px for large feature panels.
- **Borders** are 1px cool gray `#DDE4EF`. Dark surfaces use 1px white at ~10% opacity.
- **Shadows are cool/navy-tinted and soft** (see `--shadow-*`). Cards use `--shadow-sm`→`--shadow-md` on hover. Brand/primary buttons may carry a colored `--shadow-brand`. Avoid hard black shadows.
- Cards = white surface + 1px border + soft shadow + 14px radius. Light, airy, never heavy outlines.

### Motion
- **Calm and confident.** Durations 140–380ms, default `cubic-bezier(0.22,1,0.36,1)` (gentle ease-out). Fades + small upward transl(8–16px) on entrance. No bounces, no springy overshoot, no infinite loops on content.
- The brand gradient may **slowly drift** on a hero accent (subtle, optional), respecting `prefers-reduced-motion`.

### Interaction states
- **Hover:** primary buttons darken one step (`--blue-600`) and lift slightly (`translateY(-1px)` + stronger shadow). Secondary/ghost: fill tints to `--blue-50`. Links: underline appears / color → `--blue-600`.
- **Press/active:** drop the lift (`translateY(0)`), darken one more step. No scale-shrink.
- **Focus:** 2px `--ring` (brand blue) outline with 2px offset — always visible, never removed.
- **Disabled:** 40% opacity, no shadow, `not-allowed` cursor.

### Transparency & blur
- Used deliberately: the **sticky header** is `white / ~80%` + `backdrop-filter: blur(12px)`. Overlays/modals dim the page with `rgba(10,22,64,0.45)`. Glass effects are reserved for chrome (header, menus), not decoration.

---

## 4. (Content fundamentals & visual foundations are above — §2 and §3.)

---

## 5. Iconography

There was **no icon set in the source material** (logo only). Recommendation, documented here and used across the kit:

- **Library: [Lucide](https://lucide.dev)** — loaded from CDN. Lucide's **1.5px–2px rounded-stroke, outline** style matches the brand's friendly-geometric, approachable feel and pairs cleanly with Poppins/Plus Jakarta Sans. **This is a substitution** — flag to the client if they have a preferred set.
- **Style rules:** outline (not filled) by default; stroke width 1.75; `currentColor` so icons inherit text color; size in 4px steps (16/20/24). Use the **brand gradient or blue** only on hero/feature "spot" icons, never on dense inline icons.
- **The brain mark** (`assets/logo-mark.png`) is the one piece of bespoke iconography — use it as the app/favicon and a feature glyph, not as a generic UI icon.
- **No emoji.** **No unicode-glyph icons.** Use Lucide for everything functional.
- CDN: `<script src="https://unpkg.com/lucide@latest"></script>` then `lucide.createIcons()`, or use inline `<i data-lucide="name">`.

---

## 6. Index / manifest

**Root**
- `README.md` — this file (context, voice, visual foundations, iconography, index).
- `colors_and_type.css` — all design tokens: color scales, semantic roles, gradients, type scale, radii, shadows, spacing, motion, plus opt-in `.ds-*` element styles.
- `SKILL.md` — Agent-Skill front-matter wrapper so this system is usable in Claude Code.

**`assets/`** — brand visuals
- `logo-source.png` — original full-resolution upload (untouched).
- `logo-full.png` — cropped full lockup (wordmark + brain + tagline + subline), transparent.
- `logo-full-white.png` / `logo-full-navy.png` — mono knockouts for dark / light backgrounds.
- `logo-wordmark.png` — "MartAIn" wordmark only.
- `logo-mark.png` / `logo-mark-white.png` — the brain mark alone (app icon / favicon / glyph).

**`fonts/`** — note on webfonts (we link Google Fonts; see font note below).

**`preview/`** — Design System tab cards (color, type, spacing, component specimens).

**`ui_kits/website/`** — MartAIn marketing website UI kit
- `README.md`, `index.html` (interactive demo), and JSX components (header, hero, service cards, etc.).

**`documents/`** — branded document examples
- `Sessieverslag - Reham.html` — client session-report template (A4, print-ready), filled with the Reham example. Save as PDF or paste into Google Docs.

---

## Font note (substitution — action needed)

The exact fonts used to draw the logo were **not provided**. This system substitutes the closest free Google Fonts:
| Role | Substitute | Why |
|---|---|---|
| Display / headings | **Poppins** | geometric, rounded, bold — matches the wordmark |
| Body / UI | **Plus Jakarta Sans** | humanist, legible, modern |
| Serif accent (italic) | **Lora** | echoes the logo's italic subline |

➡️ **If you have the brand's real typefaces, send the files** and we'll drop them into `fonts/` and rewire `colors_and_type.css`.
