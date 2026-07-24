# Mijn leven-skills

Vier persoonlijke skills om mijn dag mee in te richten. Elke skill is een snelle
check die eindigt in een korte, scanbare actielijst — niet een rapport, maar
"wat wacht er op mij".

| Skill | Aanroep | Doet | Bron |
|-------|---------|------|------|
| **agenda-check** | `/agenda-check` · "check mijn agenda" | Agenda → actiepunten (voorbereiden, reageren, keuzes) | Google Calendar |
| **email-mustdo** | `/email-mustdo` · "wat moet ik nog doen" | Inbox → must-do's waar de bal bij mij ligt | Gmail |
| **track-trace** | `/track-trace` · "is mijn pakket bezorgd" | Verzendmail → is het écht afgeleverd of onderweg | Gmail |
| **odoo-check** | `/odoo-check` · "welke taken staan open" | Odoo → openstaande taken, deadlines eerst | Odoo-API |

## Installatie

De skills werken pas als ze in de skills-map van Claude staan
(`~/.claude/skills/`). Kopieer ze daarheen:

```bash
cp -r skills/agenda-check skills/email-mustdo skills/track-trace skills/odoo-check ~/.claude/skills/
```

- **agenda-check, email-mustdo, track-trace** werken meteen zolang de Google
  Calendar- en Gmail-koppelingen actief zijn.
- **odoo-check** vraagt een eenmalige setup — zie
  `odoo-check/references/odoo_setup.md`. Je Odoo API-key komt in een lokaal
  configbestand (`~/.config/martain/odoo.json`) buiten deze repo, nooit in git.

## Samen draaien

Vraag "doe mijn dagcheck" of noem meerdere checks, dan draaien de skills achter
elkaar en krijg je één overzicht. Elke skill is ook los aan te roepen.
