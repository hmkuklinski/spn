export const monsters = [
    {
      id: "ghosts",
      name: "Ghosts",
      species: "Ghost",
      type: "Spirit / Supernatural Entity",
      description: "Ghosts in Supernatural are the spirits of the dead who have not yet moved on to the afterlife. They often linger due to unfinished business, trauma, or strong emotional ties to the living world. Unlike some other supernatural beings, ghosts in the show are usually tied to a particular location or object.",
      abilities: [
        "Can manifest visually and audibly to the living",
        "Can possess or influence the living to some extent",
        "Capable of interacting with the physical world (moving objects, creating disturbances)",
        "Vulnerable to salt, iron, and exorcism rituals"
      ],
      weaknesses: [
        "Salt lines and iron can block or trap them",
        "Rituals and prayers can help them move on",
        "Some are bound to unfinished business, which, once resolved, allows them to pass on peacefully"
      ],
      notableEpisodes: [
        "Season 1, Episode 5: Bloody Mary — showcases the concept of vengeful spirits",
        "Season 2, Episode 20: What Is and What Should Never Be — features spirit-related story arcs",
        "Season 8, Episode 8: Hunteri Heroici — hunts a vengeful spirit haunting a video game"
      ],
      trivia: [
        "Ghosts sometimes appear as they did at the moment of death",
        "Some ghosts seek revenge, others want closure or to warn the living"
      ],
      prev: null,
      next: 1    
    },
    //item 1: vampires
    {
        id: "vampire",
        species: "Vampire",
        name: "Vampire",
        type: "Undead / Supernatural",
        description: "Vampires in Supernatural are reanimated humans who feed on blood. They possess enhanced strength, speed, and healing abilities, and are typically vulnerable to decapitation and sunlight.",
        abilities: [
          "Enhanced strength and agility",
          "Rapid healing",
          "Hypnotic gaze",
          "Regeneration from blood consumption"
        ],
        weaknesses: [
          "Decapitation",
          "Sunlight exposure",
          "Silver weapons"
        ],
        notableEpisodes: [
          "Season 1, Episode 2: 'Wendigo' – Introduction to vampire lore",
          "Season 2, Episode 3: 'Bloodlines' – Exploration of vampire clans"
        ],
        trivia: [
          "Vampires in Supernatural are often portrayed as organized in familial structures.",
          "The show introduces the concept of 'Alpha Vampires', the progenitors of vampire species."
        ],
        prev: 0,
        next: 2
    },
    //item 2: werewolves
    {
        id: "werewolves",
        name: "Werewolves",
        species: "Werewolf",
        type: "Shapeshifter / Lycanthrope",
        description: "Werewolves are humans who transform into wolf-like creatures during the full moon. They have heightened senses and strength, and are often depicted as pack-oriented.",
        abilities: [
          "Transformation under the full moon",
          "Enhanced senses and physical strength",
          "Regeneration from injuries"
        ],
        weaknesses: [
          "Silver",
          "Decapitation",
          "Fire"
        ],
        notableEpisodes: [
          "Season 1, Episode 17: 'Hell House' – First encounter with werewolves",
          "Season 3, Episode 7: 'Fresh Blood' – Introduction of Alpha Werewolf"
        ],
        trivia: [
          "The show explores the moral dilemmas of werewolves who seek to control their urges.",
          "Alpha Werewolves are shown to have greater intelligence and leadership qualities."
        ],
        prev: 1,
        next: 3
    },
    //item 3:shapeshifters
    {
        id: "shapeshifters",
        name: "Shapeshifters",
        species: "Shapeshifter",
        type: "Shapeshifter / Mimic",
        description: "Shapeshifters are creatures that can assume the appearance of any human they come into contact with. They often use this ability to commit crimes or manipulate others.",
        abilities: [
          "Mimicry of human appearance and voice",
          "Enhanced strength and agility",
          "Regeneration"
        ],
        weaknesses: [
          "Silver",
          "Decapitation",
          "Fire"
        ],
        notableEpisodes: [
          "Season 1, Episode 6: 'Skin' – First major encounter with a shapeshifter",
          "Season 4, Episode 6: 'Yellow Fever' – Exploration of shapeshifter psychology"
        ],
        trivia: [
          "Shapeshifters often use their abilities to infiltrate human society.",
          "Some shapeshifters retain the memories and personalities of their victims."
        ],
        prev: 2,
        next: 4
    },
    //item 4: djinn
    {
        id: "djinn",
        name: "Djinn",
        species: "Djinn",
        type: "Genie / Wish Granting Entity",
        description: "Djinn in Supernatural are malevolent beings that trap individuals in dream-like states, feeding on their life force while granting twisted versions of their desires.",
        abilities: [
          "Inducing vivid hallucinations",
          "Feeding on life energy",
          "Granting twisted wishes"
        ],
        weaknesses: [
          "Iron",
          "Holy water",
          "Decapitation"
        ],
        notableEpisodes: [
          "Season 2, Episode 20: 'What Is and What Should Never Be' – Introduction of djinn",
          "Season 6, Episode 1: 'Exile on Main St.' – Further exploration of djinn lore"
        ],
        trivia: [
          "Djinn are based on Middle Eastern folklore, where they are often depicted as spirits of nature.",
          "In the show, djinn's wish-granting abilities are portrayed as dangerous and deceptive."
        ],
        prev: 3,
        next: 5
    },
    //item 5: YOU FIGHT THOSE FAIRIES
    {
        id: "fairies",
        name: "Fairies",
        species: "Fairy",
        type: "Fey / Magical Beings",
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
        notableEpisodes: [
          "Season 5, Episode 11: 'Sam, Interrupted' – Introduction to fairy lore",
          "Season 10, Episode 5: 'Fan Fiction' – Exploration of fairy mythology"
        ],
        trivia: [
          "Fairies in the show are depicted as more dangerous and less benevolent than traditional folklore.",
          "They often have a complex relationship with humans, ranging from helpful to hostile."
        ],
        prev: 4,
        next: 6
    },
    //item 6: hellhounds
    {
        id: "hellhounds",
        name: "Hellhounds",
        species: "Hellhound",
        type: "Demonic Beast",
        description: "Hellhounds are large, black, supernatural dogs that serve as enforcers for Hell. They are often sent to collect souls or punish those who have broken deals with demons.",
        abilities: [
          "Invisibility to the human eye",
          "Enhanced strength and speed",
          "Tracking souls"
        ],
        weaknesses: [
          "Hellhound repellant",
          "Decapitation",
          "Magical wards"
        ],
        notableEpisodes: [
          "Season 2, Episode 17: 'Heart' – Introduction to hellhounds",
          "Season 3, Episode 16: 'No Rest for the Wicked' – Hellhound mythology explored"
        ],
        trivia: [
          "Hellhounds are often associated with the souls of the damned.",
          "They are depicted as loyal servants to demons and Hell itself."
        ],
        prev: 5,
        next: 7
    },
    //item 7: Jefferson Starships
    {
        id: "jefferson_starships",
        name: "Jefferson Starships",
        species: "Jefferson Starships",
        type: "Alien / Extraterrestrial",
        description: "Jefferson Starships are alien creatures that resemble humans but possess advanced technology and abilities. They are often depicted as hostile invaders.",
        abilities: [
          "Advanced technology use",
          "Shape-shifting",
          "Mind control"
        ],
        weaknesses: [
          "Human weaknesses",
          "Technological malfunctions"
        ],
        notableEpisodes: [
          "Season 6, Episode 19: 'The Man Who Would Be King' – Introduction of Jefferson Starships",
          "Season 7, Episode 3: 'The Girl Next Door' – Further exploration of alien lore"
        ],
        trivia: [
          "The name 'Jefferson Starships' is a humorous reference to the band Jefferson Starship.",
          "They are portrayed as a parody of classic alien invasion tropes."
        ],
        prev: 6,
        next: 8
    },
    //item 8: rakshasa
    {
        id: "rakshasa",
        name: "Rakshasa",
        species: "Rakshasa",
        type: "Demonic Spirit / Shapeshifter",
        description: "Rakshasas are malevolent demonic spirits from Hindu mythology that possess the ability to shape-shift and consume human flesh. In Supernatural, they are depicted as bloodthirsty predators that can appear human but reveal their true monstrous form when attacking.",
        abilities: [
          "Shape-shifting to appear human",
          "Superhuman strength and agility",
          "Healing and regeneration",
          "Feeding on human flesh to sustain themselves"
        ],
        weaknesses: [
          "Decapitation",
          "Holy water",
          "Iron weapons"
        ],
        notableEpisodes: [
          "Season 6, Episode 5: 'Live Free or Twihard' – Introduction to the Rakshasa",
          "Season 6, Episode 6: 'You Can’t Handle the Truth' – Further encounter with the Rakshasa"
        ],
        trivia: [
          "Rakshasas are inspired by creatures in Hindu mythology, where they are often depicted as evil spirits or demons.",
          "In the show, they disguise themselves as actors to blend into human society."
        ],
        prev: 7,
        next: 9
      }
      
      
      
      
      
      
      
   
  ];
  