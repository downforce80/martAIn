#!/usr/bin/env python3
"""Haalt mijn openstaande taken op uit Odoo via de externe API (JSON-RPC/XML-RPC).

Config wordt gelezen uit (in deze volgorde):
  1. Omgevingsvariabelen: ODOO_URL, ODOO_DB, ODOO_USER, ODOO_KEY
  2. Een JSON-bestand: pad in $ODOO_CONFIG, anders ~/.config/martain/odoo.json

Het configbestand hoort BUITEN de git-repo te staan, zodat je API-key nooit
wordt gecommit. Zie references/odoo_setup.md en config.example.json.

Uitvoer: JSON naar stdout met een lijst taken, klaar om als actielijst te tonen.
"""
import json
import os
import ssl
import sys
import xmlrpc.client
from pathlib import Path


def load_config():
    cfg = {
        "url": os.environ.get("ODOO_URL"),
        "db": os.environ.get("ODOO_DB"),
        "username": os.environ.get("ODOO_USER"),
        "api_key": os.environ.get("ODOO_KEY"),
    }
    if all(cfg.values()):
        return cfg

    path = Path(os.environ.get("ODOO_CONFIG", "~/.config/martain/odoo.json")).expanduser()
    if path.exists():
        file_cfg = json.loads(path.read_text())
        for k in cfg:
            cfg[k] = cfg[k] or file_cfg.get(k)

    missing = [k for k, v in cfg.items() if not v]
    if missing:
        sys.stderr.write(
            "Odoo-config ontbreekt: " + ", ".join(missing) + ".\n"
            "Vul ~/.config/martain/odoo.json (zie skills/odoo-check/config.example.json)\n"
            "of zet de ODOO_URL/ODOO_DB/ODOO_USER/ODOO_KEY omgevingsvariabelen.\n"
        )
        sys.exit(2)
    return cfg


def main():
    cfg = load_config()
    url = cfg["url"].rstrip("/")
    ctx = ssl.create_default_context()

    common = xmlrpc.client.ServerProxy(f"{url}/xmlrpc/2/common", context=ctx)
    uid = common.authenticate(cfg["db"], cfg["username"], cfg["api_key"], {})
    if not uid:
        sys.stderr.write("Inloggen bij Odoo mislukt — controleer db, gebruiker en API-key.\n")
        sys.exit(1)

    models = xmlrpc.client.ServerProxy(f"{url}/xmlrpc/2/object", context=ctx)

    # Openstaande taken die aan mij zijn toegewezen en nog niet afgerond.
    # In Odoo 14+ heet het veld user_ids (many2many); oudere versies gebruiken user_id.
    domain = [
        "|",
        ["user_ids", "in", [uid]],
        ["user_id", "=", uid],
        ["stage_id.fold", "=", False],  # niet-gevouwen fasen = nog te doen
    ]
    fields = ["name", "project_id", "stage_id", "date_deadline", "priority", "kanban_state"]

    try:
        tasks = models.execute_kw(
            cfg["db"], uid, cfg["api_key"],
            "project.task", "search_read",
            [domain], {"fields": fields, "limit": 100, "order": "date_deadline asc, priority desc"},
        )
    except xmlrpc.client.Fault:
        # Val terug op alleen user_id voor oudere Odoo-versies.
        domain = [["user_id", "=", uid], ["stage_id.fold", "=", False]]
        tasks = models.execute_kw(
            cfg["db"], uid, cfg["api_key"],
            "project.task", "search_read",
            [domain], {"fields": fields, "limit": 100, "order": "date_deadline asc, priority desc"},
        )

    def label(pair):
        return pair[1] if isinstance(pair, (list, tuple)) and len(pair) == 2 else None

    out = [
        {
            "id": t["id"],
            "name": t.get("name"),
            "project": label(t.get("project_id")),
            "stage": label(t.get("stage_id")),
            "deadline": t.get("date_deadline") or None,
            "priority": "hoog" if str(t.get("priority")) in ("1", "high") else "normaal",
            "blocked": t.get("kanban_state") == "blocked",
        }
        for t in tasks
    ]
    json.dump({"count": len(out), "tasks": out}, sys.stdout, ensure_ascii=False, indent=2)
    sys.stdout.write("\n")


if __name__ == "__main__":
    main()
