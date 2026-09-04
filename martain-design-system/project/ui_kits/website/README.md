# MartAIn — Website UI kit

A high-fidelity, interactive recreation of the **MartAIn marketing website** — the primary digital surface for this consultancy brand. Built with the design-system tokens in `../../colors_and_type.css`.

> ⚠️ No production website or codebase was provided with the brief (only the logo). This kit is an **on-brand proposal** for the marketing site, not a recreation of an existing build. Treat it as the starting reference for the real site.

## Run it
Open `index.html`. It's a single-page site with working interactions:
- Sticky header that turns translucent + blurred on scroll; mobile hamburger menu.
- Smooth in-page navigation (Wat ik doe / Werkwijze / Resultaat / Contact).
- Contact form that submits to **Netlify Forms** (see below), with sending / success / error states.

## Contactformulier (Netlify Forms)
The form posts to Netlify Forms, so it only works once the site is deployed on Netlify. Locally the submit fails and shows the error message; that is expected.

How it is wired:
- `index.html` contains a hidden static form `name="contact"` with the same fields (`naam`, `email`, `bericht`) plus a `bot-field` honeypot. Netlify scans this at deploy time to register the form. Keep the names in sync with `Contact.jsx`.
- `Contact.jsx` posts the fields url-encoded (including `form-name=contact`) to the current page path with `fetch`.
- The repo-root `netlify.toml` publishes `martain-design-system/project` and rewrites `/` to this page, so the site lives at the root URL.

Deploy: the GitHub repo `downforce80/martAIn` is connected to Netlify; every push to `main` deploys. Submissions appear under **Forms** in the Netlify dashboard; enable e-mail notifications there if you want them. The free tier allows 100 submissions per month.

## Components (JSX)
| File | What it is |
|---|---|
| `Icon.jsx` | Lucide icon wrapper (self-upgrades `<i data-lucide>` → SVG on mount) |
| `Header.jsx` | Sticky nav: brand lockup, links, primary CTA, mobile menu |
| `Hero.jsx` | Eyebrow + gradient headline + lead + CTAs + dark visual panel with brain mark & floating proof chips |
| `Services.jsx` | Three service cards (Automatisering, AI-advies, Training) with gradient spot-icons |
| `Process.jsx` | 4-step werkwijze (Kennismaken → Analyse → Bouwen → Begeleiden) |
| `Proof.jsx` | Eyebrow + heading + three stats (testimonial removed) |
| `Contact.jsx` | Dark CTA panel + Netlify Forms contact form (sending / success / error) |
| `Footer.jsx` | Dark footer: white logo, link columns, signature line |
| `App.jsx` | Composes the page, wires smooth-scroll nav, initial icon upgrade |

## Conventions
- All CSS lives in `index.html`'s `<style>` block; components are class-name only (no per-component style objects → no global collisions).
- **Icons:** Lucide via CDN. Each `Icon` self-upgrades on mount, so icons added by later state changes (e.g. the form success check) convert reliably.
- **No opacity-based entrance animations** as a base state — content is always visible so it renders correctly in screenshots/PDF/print and throttled preview frames. (IntersectionObserver and CSS transitions are unreliable in hidden iframes.)
- Brand assets referenced from `../../assets/` (brain mark, white lockup).

## Known substitutions
- Fonts: Poppins / Plus Jakarta Sans / Lora (Google Fonts) — see root `README.md` font note.
- Icons: Lucide — flag if the client has a preferred set.
- All copy is sample Dutch marketing copy in the brand voice; the stats are illustrative placeholders, not real client data.
- Dutch copy uses commas, colons or full stops where an em-dash might appear in English; do not reintroduce em-dashes in visible text.
