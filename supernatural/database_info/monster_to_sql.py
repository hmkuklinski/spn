import sqlite3
import json
import os

# connect to the existing supernatural database:
connection = sqlite3.connect("supernatural.db")

# create cursor object:
cursor = connection.cursor()

# create monsters, abilities, weaknesses, episodes
# monsters- id, name, imgsrc, species, type, description, killedby, mythology
# abilities - id, ability
# weakness - id, weakness
# episodes - id, ep

cursor.executescript("""

CREATE TABLE IF NOT EXISTS monsters (
    id TEXT PRIMARY KEY,
    name TEXT,
    imgsrc TEXT,
    species TEXT,
    type TEXT,
    description TEXT,
    killedBy TEXT,
    mythology TEXT
);
                     
CREATE TABLE IF NOT EXISTS monster_abilities (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    monster_id TEXT,
    ability TEXT,
                     
    FOREIGN KEY(monster_id)
    REFERENCES monsters(id)
);
                     
CREATE TABLE IF NOT EXISTS monster_weaknesses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    monster_id TEXT,
    weakness TEXT,
                     
    FOREIGN KEY(monster_id)
    REFERENCES monsters(id)                   
);

CREATE TABLE IF NOT EXISTS monster_episodes(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    monster_id TEXT,
    episode TEXT,
                     
    FOREIGN KEY(monster_id)
    REFERENCES monsters(id)                   
);
                     
""")

# ensure that base directory is correct one:
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
json_path = os.path.join(BASE_DIR, "monsterInfoJSON.json")

# open the supernatural monster information
with open(json_path, "r", encoding="utf-8") as f:
    monsters = json.load(f)


for monster in monsters:
    # insert into monsters:
    cursor.execute("""
    INSERT INTO monsters (
        id, name, imgsrc, species, type, description, killedBy, mythology
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    """,(
        monster.get("id"),
        monster.get("name"),
        monster.get("imgsrc"),
        monster.get("species"),
        monster.get("type"),
        monster.get("description"),
        monster.get("killedBy"),
        monster.get("mythology")
    ))

    # insert abilities into monster_abilities:
    for ability in monster.get("abilities", []):
        cursor.execute("""
        INSERT INTO monster_abilities (
            monster_id, ability
        )
        VALUES (?, ?)
        """, (
            monster["id"], ability
        ))
    
    # insert abilities into monster_weaknesses:
    for weakness in monster.get("weaknesses", []):
        cursor.execute("""
        INSERT INTO monster_weaknesses (
            monster_id, weakness
        )
        VALUES (?, ?)
        """, (
            monster["id"], weakness
        ))
    
    # insert abilities into monster_episodes:
    for ep in monster.get("episodes", []):
        cursor.execute("""
        INSERT INTO monster_episodes (
            monster_id, episode
        )
        VALUES (?, ?)
        """, (
            monster["id"], ep
        ))

# save and close
connection.commit()
connection.close()
print("completed monsters")