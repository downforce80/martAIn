# Fonts

The MartAIn logo's exact typefaces were **not provided** with the brief (the only source was the logo image). This system uses the closest free **Google Fonts**, loaded via CDN in `colors_and_type.css`:

- **Poppins** — display & headings (echoes the geometric, rounded, bold wordmark)
- **Plus Jakarta Sans** — body & UI text
- **Lora** (italic) — serif accent lines (echoes the logo's italic subline)

No local font files are bundled because they are served from Google Fonts.

## If you have the real brand fonts
Drop the `.woff2` / `.ttf` files into this folder and replace the `@import` at the top of `../colors_and_type.css` with `@font-face` rules pointing here. Keep the CSS variables (`--font-display`, `--font-sans`, `--font-serif`) — only the font sources change.
