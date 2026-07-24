# Odoo koppelen — eenmalige setup

De odoo-check-skill praat rechtstreeks met jouw Odoo via de officiële externe
API. Daarvoor heb je vier gegevens nodig. Je zet ze **één keer** in een bestand
buiten deze repo, zodat je API-key nooit wordt gecommit.

## 1. Je gegevens verzamelen

| Veld       | Wat het is                        | Waar te vinden |
|------------|-----------------------------------|----------------|
| `url`      | Adres van je Odoo                 | De URL in je browser, bijv. `https://franciegroup.odoo.com` |
| `db`       | Databasenaam                      | Bij Odoo Online meestal je subdomein (`franciegroup`). Twijfel? Ga naar `<url>/web/database/selector`. |
| `username` | Je login (meestal je e-mail)      | Waarmee je inlogt |
| `api_key`  | Persoonlijke API-sleutel          | Zie stap 2 |

## 2. API-key aanmaken

In Odoo: **klik op je avatar rechtsboven → Mijn profiel → tabblad
Accountbeveiliging → Nieuwe API-sleutel**. Geef hem een naam (bijv. "martain")
en kopieer de sleutel meteen — hij is daarna niet meer zichtbaar.

> Staat het tabblad er niet? Zet ontwikkelaarsmodus aan via
> Instellingen → onderaan "Ontwikkelaarshulpmiddelen activeren".

## 3. Config opslaan

Maak het bestand `~/.config/martain/odoo.json` met jouw waarden. Gebruik
`config.example.json` in deze map als sjabloon:

```bash
mkdir -p ~/.config/martain
cp skills/odoo-check/config.example.json ~/.config/martain/odoo.json
# open ~/.config/martain/odoo.json en vul je echte gegevens in
chmod 600 ~/.config/martain/odoo.json
```

Als alternatief kun je de gegevens als omgevingsvariabelen zetten
(`ODOO_URL`, `ODOO_DB`, `ODOO_USER`, `ODOO_KEY`); die hebben voorrang.

## 4. Testen

```bash
python3 skills/odoo-check/scripts/fetch_tasks.py
```

Krijg je JSON met je taken terug, dan werkt de koppeling. Fouten:

- *Inloggen mislukt* → controleer `db`, `username` en `api_key`.
- *Config ontbreekt* → het JSON-bestand staat niet op de juiste plek of mist een veld.
- *Verbindingsfout* → controleer de `url` (mét `https://`, zonder slash op het eind).

## Veiligheid

- Het configbestand met je API-key hoort **nooit** in git. Bewaar het onder
  `~/.config/martain/`, niet in de repo.
- Een API-key geeft toegang tot je Odoo alsof je zelf ingelogd bent. Verlies je
  hem, of vertrouw je hem niet meer? Verwijder de sleutel in Odoo (zelfde scherm
  als waar je hem aanmaakte) en maak een nieuwe.
