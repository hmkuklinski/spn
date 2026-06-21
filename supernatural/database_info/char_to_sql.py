import sqlite3
import json
import os

# create a new database
connection = sqlite3.connect("supernatural.db")

# lets us execute SQL commands
cursor = connection.cursor()



# create characters, character_quotes, character_deaths, character_funfacts if not already created:
# characters - id, name, type, description, imgrsc, species, status, occupation, age, nicknames, relationships, catchphrase, strengths, weaknesses, totalDeaths, actor
# character_deaths - id, charId, deathText
# character_quotes - id, charId, quotesText
# character_funfacts - id, charId, factText

cursor.executescript("""

CREATE TABLE IF NOT EXISTS characters (
    id TEXT PRIMARY KEY,
    name TEXT,
    type TEXT,
    description TEXT,
    imgsrc TEXT,
    species TEXT,
    status TEXT,
    occupation TEXT,
    age TEXT,
    nicknames TEXT,
    relationships TEXT,
    catchphrase TEXT,
    strengths TEXT,
    weaknesses TEXT,
    totalDeaths TEXT,
    actor TEXT
);

CREATE TABLE IF NOT EXISTS character_quotes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    character_id TEXT,
    quote_text TEXT,

    FOREIGN KEY(character_id)
    REFERENCES characters(id)
);

CREATE TABLE IF NOT EXISTS character_deaths (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    character_id TEXT,
    death_text TEXT,

    FOREIGN KEY(character_id)
    REFERENCES characters(id)
);

CREATE TABLE IF NOT EXISTS character_funfacts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    character_id TEXT,
    fact_text TEXT,

    FOREIGN KEY(character_id)
    REFERENCES characters(id)
);

""")

# ensure that base directory is correct one:
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
json_path = os.path.join(BASE_DIR, "supernaturalCharacterInfo.json")

# open the supernatural character information
with open(json_path, "r", encoding="utf-8") as f:
    characters = json.load(f)

for c in characters:
    # insert into characters:
    cursor.execute("""
    INSERT INTO characters (
        id,
        name,
        type,
        description,
        imgsrc,
        species,
        status,
        occupation,
        age,
        nicknames,
        relationships,
        catchphrase,
        strengths,
        weaknesses,
        totalDeaths,
        actor
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    """, (

        c.get("id"),
        c.get("name"),
        c.get("type"),
        c.get("description"),
        c.get("imgsrc"),
        c.get("species"),
        c.get("status"),
        c.get("occupation"),
        str(c.get("age")),
        c.get("nicknames"),
        c.get("relationships"),
        c.get("catchphrase"),
        c.get("strengths"),
        c.get("weaknesses"),
        str(c.get("totalDeaths")),
        c.get("actor")
    ))

    # insert quotes into quotes character:
    for quote in c.get("quotes", []):

        cursor.execute("""
        INSERT INTO character_quotes (
            character_id,
            quote_text
        )
        VALUES (?, ?)
        """, (

            c.get("id"),
            quote.get("text")
        ))

    # insert deaths into character_deaths:
    for death in c.get("deaths", []):

        cursor.execute("""
        INSERT INTO character_deaths (
            character_id,
            death_text
        )
        VALUES (?, ?)
        """, (

            c.get("id"),
            death.get("text")
        ))

    # insert funfacts into character_funfacts:
    for fact in c.get("funfacts", []):

        cursor.execute("""
        INSERT INTO character_funfacts (
            character_id,
            fact_text
        )
        VALUES (?, ?)
        """, (

            c.get("id"),
            fact.get("text")
        ))

# save and close
connection.commit()
connection.close()
print(os.path.exists("supernatural.db"))
print("Completed")