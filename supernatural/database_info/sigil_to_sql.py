import sqlite3
import json
import os

# add to supernatural db:
connection = sqlite3.connect("supernatural.db")
cursor = connection.cursor()

# sigils: id, name, imgsrc, target, about, effect, activation, limits, typeSigil

cursor.executescript("""

CREATE TABLE IF NOT EXISTS sigils (
    id TEXT PRIMARY KEY,
    name TEXT,
    imgsrc TEXT,
    target TEXT,
    about TEXT,
    effect TEXT,
    activation TEXT,
    limits TEXT,
    typeSigil TEXT            
);
""")

# ensure that base directory is correct one:
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
json_path = os.path.join(BASE_DIR, "sigilInfoJSON.json")

# open the supernatural sigil information
with open(json_path, "r", encoding="utf-8") as f:
    sigils = json.load(f)

# add to table:
for sigil in sigils:
    cursor.execute("""
    INSERT INTO sigils (
        id, name, imgsrc, target, about, effect, activation, limits, typeSigil
    )
    VALUES (?,?,?,?,?,?,?,?,?)
    """, (
        sigil.get("id"),
        sigil.get("name"),
        sigil.get("imgsrc"),
        sigil.get("target"),
        sigil.get("about"),
        sigil.get("effect"),
        sigil.get("activation"),
        sigil.get("limits"),
        sigil.get("typeSigil")
    ))

# save and close
connection.commit()
connection.close()

print("completed sigils")