//{name: "", id: "", prev:"", next:"", imgsrc: "", species: "", status: "", occupation: "", age: 0, nicknames: "", relationships: "", catchphrase: "", strengths: "", weaknesses: "", quotes: [{id: 0, text: ""}], totalDeaths: , deaths: [{id: 0, text: ""}], fact: "" , actor:""}
export const characters= [
    {name: "Dean Winchester", id: "dean", prev: null, next: 1,
    imgsrc: "https://64.media.tumblr.com/c1d284bb7d32be4a29285cf8019476ca/99df14e743f75fa4-a1/s500x750/cee9c32dfc41c51f1b7f0f1385037c931fdd3522.gif",
    species: "Human", status: "Dead",occupation: "Hunter", age: 39, nicknames: "Squirrel (Crowley), Deano (Gabriel)", relationships: "John (Father), Sam (Brother), Mary (Mother)", catchphrase: "Son of a Bitch", strengths: "Monster Hunting, Sarcasm, Self-Loathing", weaknesses: "Pie, Family, Healthy Relationships, Communication",
    quotes: [
        { id: 1, text: "Driver picks the music, shotgun shuts his cakehole." },
        { id: 2, text: "I don't have a plan, but what I do have is a GED and a give 'em hell attitude" },
        { id: 3, text: "Accidents don't just happen accidentally" }
    ],          
    totalDeaths: 100,
    deaths: [
        { id: 1, text: "Suffocation" },
        { id: 2, text: "Electrocution" },
        { id: 3, text: "Hit by a Car" },
        { id: 4, text: "Heart Attack" },
        { id: 5, text: "Attacked by Hell-Hounds" },
        { id: 6, text: "Shot" },
        { id: 7, text: "Impaled" },
        { id: 8, text: "Drug Overdoses (Suicide Attempt)" }
    ],          
    fact: "Dean died over 100 times in Mystery Spot Alone!", actor: "Jensen Ackles"},
    //index 1: Sam Winchester
    {name: "Sam Winchester", id: "sam", prev:0, next:2, 
        imgsrc: "https://i.pinimg.com/originals/29/56/fe/2956fe05ec332cbe21989eb59dc184b6.gif",
        species: "Human", status: "Dead", occupation: "Hunter", age: 70, nicknames: "Sammy (Dean), Moose (Crowley)", relationships: "Dean (Brother), John (Father), Mary(Mother)", catchphrase: "According to the Lore", strengths: "Intelligence, Empathy, Communication", weaknesses: "Demon Blood, Dean, Clowns", 
        quotes: [{id:1, text: "I've been tortured by the devil himself, what can you do to me?"}, {id:2, text:"If there is a key, then there must also be a lock"}, {id: 3, text:"Yesterday was Tuesday, but today is Tuesday too!"}], 
        totalDeaths: 8, 
        deaths: [{id: 1, text: "Stabbed"}, {id:2, text:"Shot"}, {id:3, text:"Witchcraft"}, {id:4, text:"Natural Causes"}], fact: "Jared Padalecki is married to the actress who played Ruby.", actor:"Jared Padalecki"
    },
    //index 2: Castiel
    {name: "Castiel", id: "castiel", prev:1, next:3, 
        imgsrc: "https://img.wattpad.com/942359dfe26da91dea9323c0d0c93e8bdfbdafc0/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f76536274736f5a557659376577773d3d2d3739323733303532372e313563626663653031356163333333623838353435313237373137352e676966",
        species: "Angel", status: "Dead", occupation: "Seraph", age: 100000000000, nicknames: "Cas (Dean), Clarence (Meg), Feathers (Crowley)", relationships: "Chuck (Father), Angels (Siblings), Jack Kline (nephew)", catchphrase: "Hey, Assbutt.", strengths: "Strength, Healing, Loyalty", weaknesses: "The Winchester Brothers", 
        quotes: [{id: 1, text: "I'm the one who gripped you tight and raised you from perdition."}, {id: 2, text: "I'm hunted. I rebelled. I did all of it, for you."}], 
        totalDeaths: 6, 
        deaths: [{id: 1, text: "exploded"},{id: 2, text: "overconsumption of leviathan souls"},{id: 3, text: "Stabbed by an angel blade (x2)"},{id: 4, text: "Deal with the Shadow"}], fact: "The character's name was chosen because Supernatural runs on Thursdays.", actor: "Misha Collins"
    },
    //index 3: Bobby Singer
    {name: "Robert \"Bobby\" Singer", id: "bobby", prev:2, next:4, 
        imgsrc: "https://64.media.tumblr.com/3e45f6e2c8681afe15b010952d453bfc/tumblr_inline_mu3165ryXG1rlji9a.gif", 
        species: "Human", status: "Dead", occupation: "Hunter", age: 64, nicknames: "Bobby (Sam/Dean)", relationships: "Karen (wife), Dean (adopted son), Sam (adopted son)", catchphrase: "Idgits, Balls", strengths: "Intelligent, Resourceful, Networking/Personal Connections", weaknesses: "Paranoia, Sam and Dean Winchester", quotes: [{id: 1, text: "As fate would have it, I adopted two boys and they grew up great. They grew up heroes!"}, {id: 2, text: "Get the hell of my property before I blast you so full of rocksalt you're gonna crap margaritas."}], totalDeaths: 4, deaths: [{id: 1, text: "Killed by Lucifer"}, {id: 2, text: "Shot by Dick Roman"}], fact: "His character was created because Missouri Mosely's actress got an offer for Grey's Anatomy and could not stay for Supernatural." , actor:"Jim Beaver"
    }
];