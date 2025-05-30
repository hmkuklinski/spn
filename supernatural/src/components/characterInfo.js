//{name: "", id: "", prev:"", next:"", imgsrc: "", species: "", status: "", occupation: "", age: 0, nicknames: "", relationships: "", catchphrase: "", strengths: "", weaknesses: "", quotes: [{id: 0, text: ""}], totalDeaths: , deaths: [{id: 0, text: ""}], fact: "" , actor:""}
export const characters= [
    {name: "Dean Winchester", id: "dean", 
    imgsrc: "/assets/characters/dean.gif",
    species:"Human", status: "Dead",occupation: "Hunter", age: 39, nicknames: "Squirrel (Crowley), Deano (Gabriel)", relationships: "John (Father), Sam (Brother), Mary (Mother), Adam (Half-Brother)", catchphrase: "Son of a Bitch", strengths: "Monster Hunting, Sarcasm, Self-Loathing", weaknesses: "Pie, Family, Healthy Relationships, Communication",
    quotes: [
        { id: 1, text: "Driver picks the music, shotgun shuts his cakehole." },
        { id: 2, text: "I don't have a plan, but what I do have is a GED and a give 'em hell attitude" },
        {id: 3, text: "Dad's on a Hunting Trip and he hasn't been home in a few days."}
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
    {name: "Sam Winchester", id: "sam",  
        imgsrc: "/assets/characters/sam.gif",
        species:"Human", status: "Dead", occupation: "Hunter", age: 70, nicknames: "Sammy (Dean), Moose (Crowley)", relationships: "Dean (Brother), John (Father), Mary(Mother), Adam (Half-Brother)", catchphrase: "According to the Lore, So Get This...", strengths: "Intelligence, Empathy, Communication", weaknesses: "Demon Blood, Dean, Clowns", 
        quotes: [{id:1, text: "I've been tortured by the devil himself, what can you do to me?"}, {id:2, text:"If there is a key, then there must also be a lock"}, {id: 3, text:"Yesterday was Tuesday, but today is Tuesday too!"}], 
        totalDeaths: 8, 
        deaths: [{id: 1, text: "Stabbed"}, {id:2, text:"Shot"}, {id:3, text:"Witchcraft"}, {id:4, text:"Natural Causes"}, {id:5, text:"Struck by Lightning"}, {id:6, text:"Attacked by Vampires"}], fact: "Jared Padalecki is married to the actress who played Ruby.", actor:"Jared Padalecki"
    },
    //index 2: Bobby Singer
    {name: "Robert \"Bobby\" Singer", id: "bobby", 
        imgsrc: "/assets/characters/bobby.gif", 
        species:"Human", status: "Dead", occupation: "Hunter", age: 64, nicknames: "Bobby (Sam/Dean)", relationships: "Karen (wife), Dean (adopted son), Sam (adopted son)", catchphrase: "Idgits, Balls", strengths: "Intelligent, Resourceful, Networking/Personal Connections", weaknesses: "Paranoia, Sam and Dean Winchester", quotes: [{id: 1, text: "As fate would have it, I adopted two boys and they grew up great. They grew up heroes!"}, {id: 2, text: "Get the hell of my property before I blast you so full of rocksalt you're gonna crap margaritas."}, {id:3, text:"Family don't end with bloody, boy."}], totalDeaths: 4, deaths: [{id: 1, text: "Killed by Lucifer"}, {id: 2, text: "Shot by Dick Roman"}], fact: "His character was created because Missouri Mosely's actress got an offer for Grey's Anatomy and could not stay for Supernatural." , actor:"Jim Beaver"
    },
    // index 3: Jody Mills
    {name: "Jody Mills", id: "jody", imgsrc: "/assets/characters/jody.gif", species:"Human", status: "Alive", occupation: "Sheriff", age: 40, nicknames: "Sheriff Mills", relationships: "Claire Novak (adopted daughter), Alex (adopted daughter)", catchphrase: "This is my town.", strengths: "Brave, Skilled with firearms, Compassionate", weaknesses: "Lacks supernatural powers", quotes: [{id: 1, text: "I’m the sheriff, not your babysitter."}, {id: 2, text: "You don’t mess with my family."}], totalDeaths: 0, deaths: [], fact: "Jody became a recurring ally and mother figure in later seasons.", actor: "Kim Rhodes"},

    // index 4: Claire Novak
    {name: "Claire Novak", id: "claire", imgsrc: "/assets/characters/claire.gif", species:"Human", status: "Alive", occupation: "Hunter", age: 20, nicknames: "Novak", relationships: "Jody Mills (Guardian), Castiel (Guardian), Jimmy (Father), Amelia (Mother)", catchphrase: "I’m not just a kid anymore.", strengths: "Determined, Growing hunter skills", weaknesses: "Inexperience, Emotional vulnerability", quotes: [{id: 1, text: "I’m not afraid anymore."}, {id: 2, text: "I want to do more than just survive."}], totalDeaths: 0, deaths: [], fact: "Claire is the daughter of Jimmy Novak, Castiel’s vessel.", actor: "Kathryn Newton"},

    //index 27: adam
    {name:"Adam Milligan",id:"adam",imgsrc:"/assets/characters/adam.gif",species:"Human",status:"Alive",occupation:"Student",age:"Adult",nicknames:"Adam",relationships:"John (Father), Sam and Dean (half-brothers)",catchphrase:"I just want a normal life.",strengths:"Resilience, strong moral compass",weaknesses:"Lack of combat training, human vulnerability",quotes:[{id:1,text:"Why am I involved in all this?"},{id:2,text:"I want to be normal."}, {id:3,text:"Since when do we get what we deserve?"}],totalDeaths:0,deaths:[],fact:"Half-brother of Sam and Dean, caught in supernatural conflicts.",actor:"Jake Abel"},
    
    //index 28: john
    {name:"John Winchester",id:"john",imgsrc:"/assets/characters/john.gif",species:"Human",status:"Dead",occupation:"Hunter",age:"Deceased",nicknames:"John",relationships:"Henry (Father), Mary (wife), Sam and Dean (sons)",catchphrase:"We hunt what goes bump in the night.",strengths:"Expert hunter, tactical skills, determination",weaknesses:"Obsessiveness, family sacrifice",quotes:[{id:1,text:"Family don't end with blood."},{id:2,text:"I'll always be there for you."}],totalDeaths:1,deaths:[{id:1,text:"Killed by Azazel"}],fact:"Father of Sam and Dean, whose death motivates their fight against evil.",actor:"Jeffrey Dean Morgan"},
    
    //index 29: mark
    {name:"Mary Winchester",id:"mary",imgsrc:"/assets/characters/mary.gif",species:"Human",status:"Dead",occupation:"Hunter",age:"Deceased",nicknames:"Mary",relationships:"Samuel (Father), John (husband), Sam and Dean(sons)",catchphrase:"Love will keep you alive.",strengths:"Skilled hunter, resilience, maternal instincts",weaknesses:"Limited combat experience, vulnerability to demons",quotes:[{id:1,text:"We fight to protect the family."},{id:2,text:"I did what I had to do."}],totalDeaths:1,deaths:[{id:1,text:"Killed by Azazel"}],fact:"Sam and Dean’s mother, killed early in their lives, her legacy shapes their path.",actor:"Samantha Smith"},
    
    //index 30: henry
    {name:"Henry Winchester",id:"henry",imgsrc:"/assets/characters/henry.gif",species:"Human",status:"Dead",occupation:"A Men of Letters",age:"Deceased",nicknames:"Henry",relationships:"John (son), Sam and Dean (grandsons)",catchphrase:"Knowledge is power in the hunt.",strengths:"Research skills, hunting expertise",weaknesses:"Age, vulnerability in combat",quotes:[{id:1,text:"The past holds many secrets."},{id:2,text:"We fight to protect the future."}],totalDeaths:1,deaths:[{id:1,text:"Killed by demons"}],fact:"John Winchester’s father, a skilled hunter and scholar of the supernatural.",actor:"Riley Chamberlin"},
    
    //index 31: samuel
    {name:"Samuel Campbell",id:"samuel",imgsrc:"/assets/characters/samuel.gif",species:"Human",status:"Dead",occupation:"Hunter",age:"Deceased",nicknames:"Sam Campbell",relationships:"Mary (daughter), Dean and Sam (grandsons)",catchphrase:"Family is everything.",strengths:"Hunting skills, leadership",weaknesses:"Family vulnerability",quotes:[{id:1,text:"We protect our own."},{id:2,text:"The hunt runs in the blood."}],totalDeaths:1,deaths:[{id:1,text:"Killed in battle"}],fact:"Mary Winchester’s father and hunter, linked to the Campbell family legacy.",actor:"C. Thomas Howell"},
    
    //index 32: charlie
    {name:"Charlie Bradbury",id:"charlie",imgsrc:"/assets/characters/charlie.gif",species:"Human",status:"Alive",occupation:"Hacker",age:"Unknown",nicknames:"Charlie",relationships:"Sam and Dean (friends)",catchphrase:"Let's get geeky!",strengths:"Tech skills, hacking, bravery",weaknesses:"Physical combat, emotional vulnerability",quotes:[{id:1,text:"Geek is the new badass."},{id:2,text:"I'm not just a sidekick."}],totalDeaths:0,deaths:[],fact:"A skilled hacker and beloved ally to the Winchesters.",actor:"Felicia Day"},
    
    //index 33: jo
    {name:"Jo Harvelle",id:"jo",imgsrc:"/assets/characters/jo.gif",species:"Human",status:"Dead",occupation:"Hunter",age:"Young Adult",nicknames:"Jo",relationships:"Ellen (mother)",catchphrase:"We’re not just hunters, we’re family.",strengths:"Marksmanship, combat skills",weaknesses:"Inexperience, emotional vulnerability",quotes:[{id:1,text:"I’m not afraid to fight."}],totalDeaths:1,deaths:[{id:1,text:"Killed by a vampire"}],fact:"A brave hunter who fought alongside the Winchesters and her mother.",actor:"Alona Tal"},
    
    //index 34: ash
    {name:"Ash",id:"ash",imgsrc:"/assets/characters/ash.gif",species:"Human",status:"Dead",occupation:"Hacker",age:"Unknown",nicknames:"Ash",relationships:"Ellen, Jo",catchphrase:"I bring chaos with a grin.",strengths:"Demonic powers, strategy",weaknesses:"Holy water, exorcism",quotes:[{id:1,text:"You can't outsmart the devil."}],totalDeaths:1,deaths:[{id:1,text:"Exorcised by Dean"}],fact:"A cunning demon adversary known for his twisted intellect.",actor:"Chad Lindberg"},
    
    //index 35: ellen
    {"name":"Ellen Harvelle","id":"ellen","imgsrc":"/assets/characters/ellen.gif","species":"Human","status":"Dead","occupation":"Hunter","age":"Middle-aged","nicknames":"Ellen","relationships":"Jo (daughter)","catchphrase":"We fight to protect what matters.","strengths":"Hunting knowledge, leadership","weaknesses":"Physical vulnerability, maternal instincts","quotes":[{"id":1,"text":"Family is everything."}],"totalDeaths":1,"deaths":[{"id":1,"text":"Killed in battle"}],"fact":"Owner of Harvelle’s Roadhouse, a hunter gathering place and mother to Jo.","actor":"Samantha Ferris"},
    
    //index 36: rufus
    {"name":"Rufus Turner","id":"rufus","imgsrc":"/assets/characters/rufus.gif","species":"Human","status":"Dead","occupation":"Hunter","age":"Older Adult","nicknames":"Rufus","relationships":"Bobby (Best Friend)","catchphrase":"Knowledge is the best weapon.","strengths":"Research, experience, hunting skills","weaknesses":"Physical vulnerability, gruff demeanor","quotes":[{"id":1,"text":"Been there, done that."}],"totalDeaths":1,"deaths":[{"id":1,"text":"Killed by a monster"}],"fact":"A grizzled hunter and close friend of the Winchesters who provided crucial help.","actor":"Steven Williams"},
    
    //index 37: lisa
    {"name":"Lisa Braeden","id":"lisa","imgsrc":"/assets/characters/lisa.gif","species":"Human","status":"Alive","occupation":"Civilian","age":"Adult","nicknames":"Lisa","relationships":"Ben (son), Dean (ex-boyfriend)","catchphrase":"I want a normal life.","strengths":"Supportive, resilient","weaknesses":"No supernatural powers","quotes":[{"id":1,"text":"Dean, you don’t have to do this alone."}],"totalDeaths":0,"deaths":[],"fact":"Dean Winchester’s love interest who tried to maintain a normal life away from hunting.","actor":"Cindy Sampson"},

    //index 38: mick 
    {"name":"Mick Davies","id":"mick","imgsrc":"/assets/characters/mick.gif","species":"Human","status":"Alive","occupation":"British Men of Letters Operative","age":"Middle-aged","nicknames":"Mick","relationships":"Winchesters (adversaries)","catchphrase":"Order must be maintained.","strengths":"Tactical, resourceful, combat skills","weaknesses":"Rigid loyalty, moral ambiguity","quotes":[{"id":1,"text":"We’re cleaning up your mess."}],"totalDeaths":0,"deaths":[],"fact":"A member of the British Men of Letters with a complex relationship with the Winchesters.","actor":"Damon Dayoub"},
    //index 39: ketchf
    {"name":"Arthur Ketch","id":"ketch","imgsrc":"/assets/characters/ketch.gif","species":"Human","status":"Alive","occupation":"British Men of Letters Hunter","age":"Adult","nicknames":"Ketch","relationships":"Mick Davies (ally), Winchesters (sometimes enemy)","catchphrase":"Hunting is the only way.","strengths":"Skilled hunter, loyal, resourceful","weaknesses":"Conflicted loyalties","quotes":[{"id":1,"text":"We do what needs to be done."}],"totalDeaths":0,"deaths":[],"fact":"A highly skilled and often ruthless hunter working for the British Men of Letters.","actor":"David Haydn-Jones"},

    // index 10: Elaine
    {name: "Eileen", id: "eileen", imgsrc: "/assets/characters/eileen.gif", species: "Human", status: "Alive", occupation: "Hunter", age: 35, nicknames: "", relationships: "Sam", catchphrase: "Keep your eyes open.", strengths: "Tracking, Combat skills", weaknesses: "Trust issues", quotes: [{id: 1, text: "You never know what’s out there."}, {id: 2, text: "Stay sharp."}], totalDeaths: 0, deaths: [], fact: "Eileen is a strong hunter, who is hard of hearing. She's also a love interest for Sam.", actor: "Unknown"},

    // index 9: Rowena
    {name: "Rowena MacLeod", id: "rowena",imgsrc: "/assets/characters/rowena.gif", species: "Human", status: "Deceased", occupation: "Witch", age: "Centuries old", nicknames: "The Queen of Hell, Red", relationships: "Crowley (son)", catchphrase: "Magic’s just a tool, darling.", strengths: "Powerful magic, Cunning, Knowledge of spells", weaknesses: "Pride, Family issues", quotes: [{id: 1, text: "I’m full of surprises."}, {id: 2, text: "Don’t cross me."}], totalDeaths: 1, deaths: [{id: 1, text: "Killed by Sam for a magical spell"}], fact: "Rowena is Crowley’s mother and a powerful witch with a complicated past.", actor: "Ruth Connell"},

    //MONSTERS-----------------------------------------
    // index 12: Benny Lafeyette
    { name: "Benny Lafeyette", id: "benny", imgsrc: "/assets/characters/benny.gif", species: "Vampire", status: "Alive", occupation: "Hunter", age: "Unknown", nicknames: "Vampire Ally", relationships: "Dean (Friend)", catchphrase: "You don’t have to trust me, just don’t kill me.", strengths: "Superhuman strength, Loyalty, Combat skills", weaknesses: "Sunlight, Holy water", quotes: [{ id: 1, text: "I’m not the bad guy." }, { id: 2, text: "Sometimes the enemy of my enemy is my friend." }], totalDeaths: 0, deaths: [], fact: "Benny is a vampire who becomes an ally and friend to Dean Winchester.", actor: "Ty Olsson" },

    //index 13: Garth
    { name: "Garth Fitzgerald IV", id: "garth", imgsrc: "/assets/characters/garth.gif", species: "Human", status: "Alive", occupation: "Hunter", age: 40, nicknames: "Garth", relationships: "Sam (son), Castiel (son)", catchphrase: "Sometimes I’m just a regular guy.", strengths: "Loyal, Knowledgeable in hunting lore", weaknesses: "Occasional cowardice", quotes: [{ id: 1, text: "I’m just trying to keep up." }, { id: 2, text: "We’re all a little scared sometimes." }], totalDeaths: 0, deaths: [], fact: "Garth started as a nervous hunter but grows into a dependable ally.", actor: "DJ Qualls" },

    //DEMONS --------------------------------------------------
    // index 8: Crowley
    {name: "Crowley", id: "crowley", imgsrc: "/assets/characters/crowley.gif", species: "Demon", status: "Deceased", occupation: "King of Hell", age: "Centuries old", nicknames: "The King of Hell", relationships: "Rowena (Mother), Gavin (Son)", catchphrase: "Kiss my ass", strengths: "Powerful demon, Manipulation, Deal making", weaknesses: "Trust issues, Loyalty conflicts", quotes: [{id: 1, text: "I’m a lover, not a fighter."}, {id: 2, text: "You’re only as strong as the company you keep."}, {id: 2, text: "You don't know what it's like to be HUMAN!"}], totalDeaths: 1, deaths: [{id: 1, text: "Sacraficed himself for the Winchester Boys"}], fact: "Crowley was once a crossroads demon before becoming King of Hell.", actor: "Mark Sheppard"},

    //index 15: Lilith
    { name: "Lilith", id: "lilith", imgsrc: "/assets/characters/lilith.gif", species: "Demon", status: "Dead", occupation: "First Demon", age: "Ancient", nicknames: "Queen of Demons", relationships: "Lucifer (Master), Meg (follower)", catchphrase: "I am the beginning and the end.", strengths: "Possession, soul manipulation, necromancy", weaknesses: "Exorcism, demon-killing knives, holy water", quotes: [{ id: 1, text: "The cage was never meant to hold me." }, { id: 2, text: "You’ll all burn in hell." }], totalDeaths: 1, deaths: [{ id: 1, text: "Killed by Sam Winchester with demon-killing knife" }], fact: "The first demon created by Lucifer, responsible for breaking the first seal.", actor: "Katherine Boecher" },

    //index 16: Meg Masters
    { name: "Meg Masters", id: "meg", imgsrc: "/assets/characters/meg.gif", species: "Demon", status: "Alive", occupation: "Hunter, Demon", age: "Unknown", nicknames: "Meg", relationships: "Crowley (ally), Lucifer (master)", catchphrase: "I’m your worst nightmare.", strengths: "Demonic powers, possession, cunning", weaknesses: "Exorcism, holy water, demon weapons", quotes: [{ id: 1, text: "You think you can trust me?" }, { id: 2, text: "I do what I want." }], totalDeaths: 0, deaths: [], fact: "Portrayed by Rachel Miner and later by other actresses in earlier seasons.", actor: "Rachel Miner" },

    //index 17: Ruby
    { name: "Ruby", id: "ruby", imgsrc: "/assets/characters/ruby.gif", species: "Demon", status: "Dead", occupation: "Hunter, Demon", age: "Unknown", nicknames: "Ruby", relationships: "Sam Winchester (relationship)", catchphrase: "You have no idea what I’m capable of.", strengths: "Possession, demon magic, manipulation", weaknesses: "Exorcism, demon weapons, betrayal", quotes: [{ id: 1, text: "You need me, Sam." }, { id: 2, text: "Trust me, I’m the good guy." }], totalDeaths: 1, deaths: [{ id: 1, text: "Killed by Sam Winchester" }], fact: "Initially helps Sam but has secret plans for the apocalypse.", actor: "Genevieve Cortese" },

    //index 19: Cain
    { name: "Cain", id: "cain", imgsrc: "/assets/characters/cain.gif", species: "Knight of Hell", status: "Dead", occupation: "Original Knight of Hell", age: "Ancient", nicknames: "The First Killer", relationships: "Colette (Wife), Dean Winchester (successor)", catchphrase: "I’m the one who broke the first mark.", strengths: "Mark of Cain, superhuman strength, combat", weaknesses: "The Mark’s curse, divine weapons", quotes: [{ id: 1, text: "To kill is to live." }, { id: 2, text: "You want power, you pay a price." }], totalDeaths: 1, deaths: [{ id: 1, text: "Killed by Dean Winchester" }], fact: "The first murderer, cursed with the Mark of Cain, mentor to Dean.", actor: "Timothy Osmund" },

    //ANGELS AND CELESTIALS --------------------------------------------------------
    {name: "Castiel", id: "castiel",
        imgsrc: "/assets/characters/castiel.gif",
        species: "Angel", status: "Dead", occupation: "Seraph", age: "Centuries Old", nicknames: "Cas (Dean), Clarence (Meg), Feathers (Crowley)", relationships: "Chuck (Father), Angels (Siblings), Jack Kline (nephew)", catchphrase: "Hey, Assbutt.", strengths: "Strength, Healing, Loyalty", weaknesses: "The Winchester Brothers", 
        quotes: [{id: 1, text: "I'm the one who gripped you tight and raised you from perdition."}, {id: 2, text: "I'm hunted. I rebelled. I did all of it, for you."}, {id:3, text:"Why is 6 afraid of 7? Well, probably because it is a prime number and prime numbers can be intimidating..."}], 
        totalDeaths: 6, 
        deaths: [{id: 1, text: "exploded"},{id: 2, text: "overconsumption of leviathan souls"},{id: 3, text: "Stabbed by an angel blade (x2)"},{id: 4, text: "Deal with the Shadow"}], fact: "The character's name was chosen because Supernatural runs on Thursdays.", actor: "Misha Collins"
    },
    // index 7: Gabriel
     {name: "Gabriel", id: "gabriel",  imgsrc: "/assets/characters/gabriel.gif", species: "Archangel", status: "Deceased", occupation: "Trickster", age: "Immortal", nicknames: "The Trickster, Gabe", relationships: "Chuck (Father), Michael (Brother), Lucifer (Brother)", catchphrase: "Life’s a joke, and I’m the punchline.", strengths: "Immortality, Reality manipulation, Illusions", weaknesses: "Family conflict, Emotional attachment", quotes: [{id: 1, text: "You really don’t know when to quit, do you?"}, {id: 2, text: "I like to play."}], totalDeaths: 1, deaths: [{id: 1, text: "Killed by Lucifer"}], fact: "Gabriel was originally introduced as the Trickster but revealed to be an archangel.", actor: "Richard Speight Jr."},
    
    //index 14: Lucifer
    { name: "Lucifer", id: "lucifer", imgsrc: "/assets/characters/lucifer.gif", species: "Archangel", status: "Alive", occupation: "The Devil", age: "Eternal", nicknames: "The Devil, Satan", relationships: "God (Father), Michael (brother), Gabriel (brother)", catchphrase: "I'm the Devil, and I’m the only one who can save you.", strengths: "Immense power, manipulation, immortality", weaknesses: "The Mark of Cain, angel blade, divine weapons", quotes: [{ id: 1, text: "Good Morning Vietnam!" }, { id: 2, text: "I’m not a monster, I’m just ahead of the curve." }], totalDeaths: 1, deaths: [{ id: 1, text: "Trapped in Cage by Sam and Dean" }], fact: "Portrayed by Mark Pellegrino; originally the first fallen archangel.", actor: "Mark Pellegrino" },

    
     //index 21: Metatron
    { name: "Metatron", id: "metatron", imgsrc: "/assets/characters/metatron.gif", species: "Angel", status: "Alive", occupation: "Scribe of God", age: "Ancient", nicknames: "The Scribe", relationships: "Chuck (Father), Angels (Siblings)", catchphrase: "I write the words of God.", strengths: "Angel powers, knowledge of heavenly secrets", weaknesses: "Pride, ambition", quotes: [{ id: 1, text: "I am the voice of God." }, { id: 2, text: "Power corrupts." }], totalDeaths: 0, deaths: [], fact: "Former scribe of God who becomes a villain.", actor: "Curtis Armstrong" },
    
    //index 22: Gadreel
    {name:"Gadreel",id:"gadreel",imgsrc:"/assets/characters/gadreel.gif",species:"Angel",status:"Dead",occupation:"Fallen Angel, Possessor of Sam",age:"Ancient",nicknames:"The Guardian Angel",relationships:"Chuck (Father), Angels (Siblings)",catchphrase:"I only want to protect.",strengths:"Angel powers, combat, possession",weaknesses:"Exorcism, angel blades",quotes:[{id:1,text:"I am the protector you never knew you had."},{id:2,text:"I must atone for my sins."}],totalDeaths:1,deaths:[{id:1,text:"Killed by Sam Winchester"}],fact:"Once a protector angel who fell and possessed Sam.",actor:"Tahmoh Penikett"},
    
    //index 23: hannah
    {name:"Hannah",id:"hannah",imgsrc:"/assets/characters/hannah.gif",species:"Angel",status:"Alive",occupation:"Angel of Heaven",age:"Ancient",nicknames:"Hannah",relationships:"Chuck (Father), Angels (Siblings)",catchphrase:"Faith is the light that guides us.",strengths:"Angel powers, healing, combat",weaknesses:"Free will conflicts, angel weapons",quotes:[{id:1,text:"We are messengers of the divine."},{id:2,text:"Trust in the plan."}],totalDeaths:0,deaths:[],fact:"A loyal angel and ally to Castiel and the Winchesters.",actor:"Jessica Harmon"},
    
    //index 24: michael
    {name:"Michael",id:"michael",imgsrc:"/assets/characters/michael.gif",species:"Archangel",status:"Alive",occupation:"Archangel, Warrior of Heaven",age:"Eternal",nicknames:"The Archangel",relationships:"Chuck (Father), Lucifer (brother), Gabriel (brother)",catchphrase:"The war in Heaven is not over.",strengths:"Immense power, archangel abilities, leadership",weaknesses:"Family conflicts, divine limits",quotes:[{id:1,text:"I fight for order."},{id:2,text:"You cannot win against Heaven."}],totalDeaths:0,deaths:[],fact:"The oldest and most powerful archangel in Heaven.",actor:"Jake Abel"},
    
    //index 25: zachariah
    {name:"Zachariah",id:"zachariah",imgsrc:"/assets/characters/zachariah.gif",species:"Angel",status:"Dead",occupation:"High-ranking Angel of Heaven",age:"Ancient",nicknames:"Zachariah",relationships:"Chuck (Father), Angels (Siblings)",catchphrase:"You will do as Heaven commands.",strengths:"Angel powers, manipulation",weaknesses:"Rebellion, angel blades",quotes:[{id:1,text:"I serve Heaven’s will."},{id:2,text:"Obedience is strength."}],totalDeaths:1,deaths:[{id:1,text:"Killed by Castiel"}],fact:"Tried to force the apocalypse to happen, died resisting rebellion.",actor:"Kurt Fuller"},
    
    //index 26: anna
    {name:"Anna Milton",id:"anna",imgsrc:"/assets/characters/anna.gif",species:"Angel",status:"Alive",occupation:"Fallen Angel, Rebel",age:"Ancient",nicknames:"Anna",relationships:"Chuck (Father), Angels (Siblings)",catchphrase:"Free will is a curse and a blessing.",strengths:"Angel powers, free will, healing",weaknesses:"Heaven’s laws, angel blades",quotes:[{id:1,text:"I chose to fall to be free."},{id:2,text:"I will not be a pawn."}],totalDeaths:0,deaths:[],fact:"Fell from grace to live a human life and fight Heaven’s control.",actor:"Julie McNiven"},
    
    //index 20: Amara (The Darkness)
    { name: "Amara", id: "amara", imgsrc: "/assets/characters/amara.gif", species: "Deity", status: "Alive", occupation: "The Darkness", age: "Primordial", nicknames: "The Darkness, Sister of God", relationships: "God (brother)", catchphrase: "I am the end and the beginning.", strengths: "Immense cosmic power, reality manipulation", weaknesses: "Divine intervention, family ties", quotes: [{ id: 1, text: "You cannot hide from the darkness." }, { id: 2, text: "I am older than time itself." }], totalDeaths: 0, deaths: [], fact: "A primordial force and sister to God in the Supernatural universe.", actor: "Emily Swallow" },

    // index 4: Chuck Shurley
    {name: "Chuck Shurley", id: "chuck", imgsrc: "/assets/characters/chuck.gif", species: "Prophet / God", status: "Alive", occupation: "Writer", age: "Unknown", nicknames: "Carver Edlund", relationships: "Angels (creations), Humans (creations)", catchphrase: "It’s all been written.", strengths: "Omniscience, Reality manipulation", weaknesses: "Limited intervention, Human emotions", quotes: [{id: 1, text: "What we do in life echoes in eternity."}, {id: 2, text: "I write what's meant to happen."}], totalDeaths: 1, deaths: [{id: 1, text: "Killed by God (his true self)"}], fact: "Chuck was revealed to be God himself in later seasons.", actor: "Rob Benedict"},

    // index 11: Jack Kline
    { name: "Jack Kline", id: "jack", imgsrc: "/assets/characters/jack.gif", species: "Nephilim", status: "Alive", occupation: "Hunter", age: "Teen", nicknames: "The Son of Lucifer", relationships: "Lucifer (Father), Kelly (Mother), Castiel (Guardian)", catchphrase: "I want to help.", strengths: "Powerful angelic abilities, Healing, Strength", weaknesses: "Inexperience, Emotional struggles", quotes: [{ id: 1, text: "I want to be good." }, { id: 2, text: "I’m still learning who I am." }], totalDeaths: 0, deaths: [], fact: "Jack is the son of Lucifer and a human mother, with immense powers.", actor: "Alexander Calvert" },

    //DEATH AND REAPERS
    //index 18: Billie
    { name: "Billie", id: "billie", imgsrc: "/assets/characters/billie.gif", species: "Reaper", status: "Alive", occupation: "Death Reaper, later Death", age: "Immortal", nicknames: "Death", relationships: "No Known", catchphrase: "Death is not the end.", strengths: "Control over life and death, reaping souls", weaknesses: "Rules of Death, cosmic balance", quotes: [{ id: 1, text: "You think you’re the only ones who can cheat death?" }, { id: 2, text: "Death always wins." }], totalDeaths: 0, deaths: [], fact: "Replaces Death as the cosmic reaper in later seasons.", actor: "Lisa Berry" },

];