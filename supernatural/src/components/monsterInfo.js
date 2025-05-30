export const monsters = [
  {
    id: "ghosts",
    name: "Ghosts",
    species: "Ghost",
    type: "Spirit",
    imgsrc: "/assets/monsters/ghost.gif",
    description: "Ghosts in Supernatural are the spirits of the dead who have not yet moved on to the afterlife. They often linger due to unfinished business, trauma, or strong emotional ties to the living world. Ghosts have the ability to move locations if they are tied to a specific object.",
    abilities: [
      "Can possess or influence the living",
      "Capable of interacting with the physical world (moving objects, creating disturbances)",
    ],
    weaknesses: [
      "Salt lines can block or trap them",
      "Being shot with rock salt or attacked with an iron weapon causes them to disappear",
    ],
    episodes: [
      "Season 1, Episode 5: Bloody Mary — showcases the concept of vengeful spirits",
      "Season 8, Episode 8: Hunteri Heroici — hunts a vengeful spirit haunting a video game"
    ],
    killedby: "Salt and burn the remains or personal object",
    mythology: "In many cultures, they represent spirits caught between realms due to improper burials, violent ends, or unfulfilled duties. From ancient Chinese ancestral beliefs to Celtic Samhain legends, ghosts serve as a bridge between the living and the dead, lingering until peace or resolution is found."
  },
  {
    id: "vampire",
    name: "Vampire",
    species: "Vampire",
    type: "Undead",
    imgsrc: "/assets/monsters/vampires.gif",
    description: "Vampires in Supernatural are reanimated humans who feed on blood. They possess enhanced strength, speed, and healing abilities. They typically live in nests of 8-10 vampires. They can turn a human into a vampire if they force the human to ingest or come into blood contact with vampire blood. ",
    abilities: [
      "Enhanced strength and agility",
      "Rapid healing",
    ],
    weaknesses: [
      "Sunlight exposure",
    ],
    episodes: [
      "Season 1, Episode 2: 'Wendigo' – Introduction to vampire lore",
      "Season 2, Episode 3: 'Bloodlines' – Exploration of vampire clans"
    ],
    killedby: "Can be killed only if they are beheaded",
    mythology: "Derived from European folklore, vampires are undead creatures that sustain themselves by drinking the blood of the living and often possess supernatural powers."
  },
  {
    id: "werewolves",
    name: "Werewolves",
    species: "Werewolf",
    type: "Lycanthrope",
    imgsrc: "/assets/monsters/werewolves.gif",
    description: "Werewolves are humans who transform into wolf-like creatures during the full moon. They have heightened senses and strength, and are often depicted as pack-oriented. They feast on human hearts and can turn humans by simply taking a bite.",
    abilities: [
      "Regular Werewolfs: Transformation under the full moon, Purebloods: Can transform anytime",
      "Enhanced senses and physical strength",
      "Super speed, agility, senses, and stamina"
    ],
    weaknesses: [
      "Driven by emotions",
      "Decapitation",
      "Silver"
    ],
    episodes: [
      "Season 1, Episode 17: 'Hell House' – First encounter with werewolves",
      "Season 3, Episode 7: 'Fresh Blood' – Introduction of Alpha Werewolf"
    ],
    killedby: "Killed by silver weapons, decapitation, or burning.",
    mythology: "Originates from European folklore describing humans cursed or infected to transform into wolves or wolf-like beasts during the full moon."
  },
  {
    id: "shapeshifters",
    name: "Shapeshifters",
    species: "Shapeshifter",
    type: "Mimic",
    imgsrc: "/assets/monsters/shapeshifter.gif",
    description: "Shapeshifters are creatures that can assume the appearance of any human they come into contact with. They often use this ability to commit crimes or manipulate others.",
    abilities: [
      "Mimicry of human appearance and voice",
      "Enhanced strength and agility",
      "Regeneration"
    ],
    weaknesses: [
      "Required to shed their skin for each transformation",
      "Eyes flare on cameras"
    ],
    episodes: [
      "Season 1, Episode 6: 'Skin' – First major encounter with a shapeshifter",
      "Season 4, Episode 6: 'Yellow Fever' – Exploration of shapeshifter psychology"
    ],
    killedby: "Can be killed by a silver bullet/silver blade to the heart",
    mythology: "Rooted in various folklore traditions, shapeshifters are beings capable of changing their form, often to deceive or harm humans."
  },
  {
    id: "djinn",
    name: "Djinn",
    species: "Djinn",
    type: "Evil Genie",
    imgsrc: "/assets/monsters/djinn.gif",
    description: "Djinn in Supernatural are malevolent beings that trap individuals in dream-like states, feeding on their life force while granting twisted versions of their desires.",
    abilities: [
      "Inducing vivid hallucinations",
      "Feeding on life energy",
      "Pyrokinesis"
    ],
    weaknesses: [
      "Iron",
      "Holy water",
      "Decapitation"
    ],
    episodes: [
      "Season 2, Episode 20: 'What Is and What Should Never Be' – Introduction of djinn",
      "Season 6, Episode 1: 'Exile on Main St.' – Further exploration of djinn lore"
    ],
    killedby: "Can be killed with a silver knife dipped in lamb's blood.",
    mythology: "Originating from Islamic and Middle Eastern folklore, djinn are supernatural beings created from smokeless fire that can be benevolent or malevolent."
  },
  {
    id: "fairies",
    name: "Fairies",
    species: "Fairy",
    type: "Fey",
    imgsrc: "/assets/monsters/fairies.gif",
    description: "Fairies in Supernatural are magical beings that can manipulate nature and possess various powers. They are often mischievous and have their own agendas.",
    abilities: [
      "Manipulation of natural elements",
      "Invisibility",
      "Illusion casting"
    ],
    weaknesses: [
      "Iron",
      "Cold iron",
      "Magical wards"
    ],
    episodes: [
      "Season 5, Episode 11: 'Sam, Interrupted' – Introduction to fairy lore",
      "Season 10, Episode 5: 'Fan Fiction' – Exploration of fairy mythology"
    ],
    killedby: "Killed or repelled by iron or cold iron and magical wards.",
    mythology: "Drawn from European folklore, fairies are magical beings associated with nature, often possessing both helpful and malicious traits."
  },
  {
    id: "hellhounds",
    name: "Hellhounds",
    species: "Hellhound",
    type: "Demonic Beast",
    imgsrc: "/assets/monsters/hellhounds.gif",
    description: "Hellhounds are large, black supernatural dogs that serve as enforcers for Hell. They are often sent to collect souls or punish those who have broken deals with demons. They are only visible to those who are hunted by the hellhounds or those who have glasses scorched in Holy Fire. They are only loyal to the demon they serve and cannnot be bargained with.",
    abilities: [
      "Invisibility to the human eye",
      "Enhanced strength and speed",
      "Tracking souls"
    ],
    weaknesses: [
      "Salt",
      "Angel Blades",
      "Goofer Dust"
    ],
    episodes: [
      "Season 2, Episode 17: 'Heart' – Introduction to hellhounds",
      "Season 3, Episode 16: 'No Rest for the Wicked' – Hellhound mythology explored"
    ],
    killedby: "Can be killed with the Demon-Killing Knife, the Colt, or Angel Blades. God and Nephilims can disintegrate them.",
    mythology: "Hellhounds are demonic beasts rooted in European folklore, often seen as guardians of the underworld or agents of death."
  },
  {
    id: "jefferson_starships",
    name: "Jefferson Starships",
    species: "Jefferson Starships",
    type: "Hybrid",
    imgsrc: "/assets/monsters/js.png",
    description: "Jefferson Starships are monster hybrids created by Eve that resemble humans, but possess advanced technology and abilities. They have the teeth of vampires and the spikes of wraiths. They were discovered and named by Dean Winchester.",
    abilities: [
      "Super strength, agility, stamina, speed",
      "Fangs, Spikes, Shape-shifting",
      "can turn humans with a single bite",
      "regeneration"
    ],
    weaknesses: [
      "Silver",
      "Retinal flare on camera/film"
    ],
    episodes: [
      "Season 6, Episode 19: 'The Man Who Would Be King' – Introduction of Jefferson Starships",
      "Season 7, Episode 3: 'The Girl Next Door' – Further exploration of alien lore"
    ],
    killedby: "Can be killed by decapitation or heart extraction",
    mythology: "They are a fictional alien species created for the show, parodying classic extraterrestrial invasion stories."
  },
  {
    id: "rakshasa",
    name: "Rakshasa",
    species: "Rakshasa",
    type: "Demonic Spirit",
    imgsrc: "/assets/monsters/rakshasa.gif",
    description: "Rakshasas are malevolent demonic spirits from Hindu mythology that possess the ability to shape-shift and consume human flesh. In Supernatural, they are depicted as bloodthirsty predators that can appear human but reveal their true monstrous form when attacking.",
    abilities: [
      "Shape-shifting to appear human",
      "Superhuman strength and agility",
      "invisibility",
      "Feeding on human flesh to sustain themselves"
    ],
    weaknesses: [
      "Pure Brass",
      "Must be invited into the home to enter",
    ],
    episodes: [
      "Season 2, Episode 2: 'Everybody Loves a Clown' – Introduction to the Rakshasa",
    ],
    killedby: "Can be killed with a brass knife.",
    mythology: "In Hindu mythology, Rakshasas are demonic beings known for their shape-shifting and malevolent behavior, often depicted as enemies of gods and humans."
  }
];
