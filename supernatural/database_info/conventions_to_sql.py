import sqlite3
import json
import os

# add to existing db:
connection = sqlite3.connect("supernatural.db")
cursor = connection.cursor()

cursor.executescript("""

CREATE TABLE IF NOT EXISTS conventions (
    id TEXT PRIMARY KEY,
    location TEXT,
    eventLocation TEXT,
    startMonth TEXT,
    startDate TEXT,
    startYear TEXT,    
    guests TEXT                   
);
                    
""")

# ensure that base directory is correct one:
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
json_path = os.path.join(BASE_DIR, "conventionsInfoJSON.json")

# open the supernatural character information
with open(json_path, "r", encoding="utf-8") as f:
    cons = json.load(f)

for con in cons:
    cursor.execute("""
    INSERT INTO conventions (
        id, location, eventLocation, startMonth, startDate, startYear
    )
    VALUES (?, ?, ?, ?, ?, ?)
    """, (
        con.get("id"),
        con.get("location"),
        con.get("eventLocation"),
        con.get("startMonth"),
        con.get("startDate"),
        con.get("startYear")
    ))

connection.commit()
connection.close()
print("Completed conventions")