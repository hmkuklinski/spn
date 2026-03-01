export const apiEndpointsInfo = [
    // Entire Season Information
    {
        "id": 1,
        "endpoint_name": "Entire Season Information",
        "base_url": "/api/episodesAPI?",
        "example_url": "http://supernatural-lore.vercel.app/api/episodesAPI?seasonNum=1",
        "parameters": [
            {"name": "seasonNum", "type": "int", "notes": "where the number is in the range 1-15 (inclusive)"}
        ],
        "outputs": [
            {"name": "title", "desc": "season number typed out", "valueType": "(string)"},
            {"name": "imgsrc", "desc": "a photo path of the season titlecard, used for seasons and episodes list", "valueType": "(string)"},
            {"name": "photo", "desc": "a photo path of the season titlecard gif, used for the season summary pages", "valueType": "(string)"},
            {"name": "description", "desc": "a short summary of the season", "valueType": "(string)"},
            {"name": "characterIntros", "desc": "a list that shows new characters introduced this season", "valueType": "(list - characterInfo objects)"},
            {"name": "majorDeaths", "desc": "a list that shows the characters that died this season with a short description", "valueType": "(list - characterInfo objects)"},
            {"name": "majorUpdates", "desc": "a list of characters that experience a major update this season", "valueType": "(list - characterInfo objects)"},
            {"name": "epNumbers", "desc": "the total number of episodes in the season", "valueType": "(string)"},
            {"name": "yearAired", "desc": "the year the season premiered", "valueType": "(string)"},
            {"name": "ratings", "desc": "the IMDb rating for the season", "valueType": "(string)"},
            {"name": "bodyCount", "desc": "the number of people that died this season", "valueType": "(int)"},
            {"name": "seasonMonsters", "desc": "a list of the monsters that are faced this season, along with their appearance count", "valueType": "(list - monsterInfo objects)"},
            {"name": "epInfo", "desc": "a list that contains information about each episode", "valueType": "(list - episodeInfo objects)"}

        ]
    },
    // Season- Episode List
    {
        "id":2,
        "endpoint_name": "Season Episode List",
        "base_url": "/api/episodesAPI?",
        "example_url": "http://supernatural-lore.vercel.app/api/episodesAPI?seasonNum=1&type=epList",
        "parameters": [
            {"name": "seasonNum", "type": "int", "notes": "where the number is in the range 1-15 (inclusive)"},
            {"name":"type", "type":"epList", "notes": "where epList is a string specifying that you want the season's episode list"}
        ],
        "outputs": [
            {"name": "epList", "desc":"A list of all the episodes in the season with information about the id, title, num, photo, description, date aired, directors, and writers.", "valueType":"(list)",}
        ]
    },
    //Season- Summary
    {
        "id":3,
        "endpoint_name": "Season Summary",
        "base_url": "/api/episodesAPI?",
        "example_url":"http://supernatural-lore.vercel.app/api/episodesAPI?seasonNum=1&type=summary",
        "parameters": [
            {"name": "seasonNum", "type": "int", "notes": "where the number is in the range 1-15 (inclusive)"},
            {"name":"type", "type":"summary", "notes": "where summary is a string specifying that you want to see a summary of the season."}
        ],
        "outputs":[
            {"name": "summary", "desc":"A paragraph that summarizes what happens this season- major plot points, conflicts, or themes.", "valueType": "(string)"}
        ]

    },
    //Season- Character Intros
    {
        "id":4,
        "endpoint_name": "Season Character Introductions",
        "base_url": "/api/episodesAPI?",
        "example_url":"http://supernatural-lore.vercel.app/api/episodesAPI?seasonNum=1&type=character_intro",
        "parameters": [
            {"name": "seasonNum", "type": "int", "notes": "where the number is in the range 1-15 (inclusive)"},
            {"name":"type", "type":"character_intro", "notes": "where character_intro is a string specifying that you want to see the information for characters introduced this season."}
        ],
        "outputs": [
            {"name": "characterIntros", "desc":"A list of characters that were introduced, with a short description.", "valueType":"(list)",}
        ]
    },
    //Season- Character Deaths
    {
        "id":5,
        "endpoint_name": "Season Character Deaths",
        "base_url": "/api/episodesAPI?",
        "example_url":"http://supernatural-lore.vercel.app/api/episodesAPI?seasonNum=1&type=major_deaths",
        "parameters": [
            {"name": "seasonNum", "type": "int", "notes": "where the number is in the range 1-15 (inclusive)"},
            {"name":"type", "type":"major_deaths", "notes": "where major_deaths is a string specifying that you want to see the information for characters died this season."}
        ],
        "outputs": [
            {"name": "majorDeaths", "desc":"A list of characters that died this season, with a short description of how.", "valueType":"(list)",}
        ]
    },
    //Season- Character Updates
    {
        "id":6,
        "endpoint_name": "Season Character Updates",
        "base_url": "/api/episodesAPI?",
        "example_url":"http://supernatural-lore.vercel.app/api/episodesAPI?seasonNum=1&type=major_updates",
        "parameters": [
            {"name": "seasonNum", "type": "int", "notes": "where the number is in the range 1-15 (inclusive)"},
            {"name":"type", "type":"major_updates", "notes": "where major_updates is a string specifying that you want to see the major character developments throughout this season."}
        ],
        "outputs": [
            {"name": "majorUpdates", "desc":"A list of characters that underwent major character development this season, with a short description of how.", "valueType":"(list)",}
        ]
    },
    //Season- Num Episodes
    {
        "id":7,
        "endpoint_name": "Season- Number of Episodes",
        "base_url": "/api/episodesAPI?",
        "example_url":"http://supernatural-lore.vercel.app/api/episodesAPI?seasonNum=1&type=num_episodes",
        "parameters": [
            {"name": "seasonNum", "type": "int", "notes": "where the number is in the range 1-15 (inclusive)"},
            {"name":"type", "type":"num_episodes", "notes": "where num_episodes is a string specifying that you want to see the number of episodes for the specified season."}
        ],
        "outputs": [
            {"name": "numEpisodes", "desc":"A string value that represents the number of episodes in the specified season.", "valueType":"(string)",}
        ]
    },
    //Season- Year Aired
    {
        "id":8,
        "endpoint_name": "Season- Year Aired",
        "base_url": "/api/episodesAPI?",
        "example_url":"http://supernatural-lore.vercel.app/api/episodesAPI?seasonNum=1&type=year_aired",
        "parameters": [
            {"name": "seasonNum", "type": "int", "notes": "where the number is in the range 1-15 (inclusive)"},
            {"name":"type", "type":"year_aired", "notes": "where year_aired is a string specifying that you want to see what year the season premiered."}
        ],
        "outputs": [
            {"name": "yearAired", "desc":"A string value that represents the year that the season premiered on television.", "valueType":"(string)"}
        ]
    },
    //seasons- IDBM rating
     {
        "id":9,
        "endpoint_name": "Season- Ratings",
        "base_url": "/api/episodesAPI?",
        "example_url":"http://supernatural-lore.vercel.app/api/episodesAPI?seasonNum=1&type=ratings",
        "parameters": [
            {"name": "seasonNum", "type": "int", "notes": "where the number is in the range 1-15 (inclusive)"},
            {"name":"type", "type":"ratings", "notes": "where ratings is a string specifying that you want to see the IDMB ratings for that season."}
        ],
        "outputs": [
            {"name": "rating", "desc":"A string value that represents the IDMB rating for the season.", "valueType":"(string)",}
        ]
    },
    //season- monster counter
    {
        "id":10,
        "endpoint_name": "Season- Monster Count",
        "base_url": "/api/episodesAPI?",
        "example_url":"http://supernatural-lore.vercel.app/api/episodesAPI?seasonNum=1&type=season_monsters",
        "parameters": [
            {"name": "seasonNum", "type": "int", "notes": "where the number is in the range 1-15 (inclusive)"},
            {"name":"type", "type":"season_monsters", "notes": "where season_monsters is a string specifying that you want to see the monsters that appeared throughout the specified season."}
        ],
        "outputs": [
            {"name": "season_monsters", "desc":"A list of monsters that were featured this season, with their id, the type, and how many times they appear in the season.", "valueType":"(list)",}
        ]
    },
    //season-body count
    {
        "id":11,
        "endpoint_name": "Season- Body Count",
        "base_url": "/api/episodesAPI?",
        "example_url":"http://supernatural-lore.vercel.app/api/episodesAPI?seasonNum=1&type=body_count",
        "parameters": [
            {"name": "seasonNum", "type": "int", "notes": "where the number is in the range 1-15 (inclusive)"},
            {"name":"type", "type":"body_count", "notes": "where body_count is a string specifying that you want to see what the body count is for the specified season."}
        ],
        "outputs": [
            {"name": "body_count", "desc":"The total number of people that are killed on screen.", "valueType":"(string)",}
        ]
    },
    //EPISODES- STARTS AT INDEX 11
    {
        "id":12,
        "endpoint_name": "Episode- Get All Episodes",
        "base_url": "/api/episodesAPI?",
        "example_url":"http://supernatural-lore.vercel.app/api/episodeListAPI?type=all_episodes",
        "parameters": [
            {"name":"type", "type":"all_episodes", "notes": "where all_episodes is a string specifying that you want to see all the episodes information in the series."}
        ],
        "outputs": [
            {"name": "all_episodes", "desc":"Information about each episode in the series.", "valueType":"(list)",}
        ]
    },
    //EPISODES- RANDOM EPISODE (ALL)
    {
        "id":13,
        "endpoint_name": "Episode- Get Random Episode (All Seasons)",
        "base_url": "/api/episodesAPI?",
        "example_url":"http://supernatural-lore.vercel.app/api/episodeListAPI?type=random_episode",
        "parameters": [
            {"name":"type", "type":"random_episode", "notes": "where random_episode is a string specifying that you want to see the episodes information for a randomly selected episode in the series."}
        ],
        "outputs": [
            {"name": "random_episode", "desc":"Information about the randomly selected episode in the series.", "valueType":"(object)",}
        ]
    },
    //Episodes- search by title
    {
        "id":14,
        "endpoint_name": "Episode- Search By Title",
        "base_url": "/api/episodesAPI?",
        "example_url":"http://supernatural-lore.vercel.app/api/episodeListAPI?type=search_title&title_keyword=mystery%20spot",
        "parameters": [
            {"name":"type", "type":"search_title", "notes": "where search_title is a string specifying that you want to search the episode list to get episodes information for the matching episode in the series."},
            {"name": "title_keyword", "type":"title", "notes": "where title is a string that represents the title they are trying to search for. The title must be completely lower cased and if there are spaces in the title, the user must add %20 or + between them. ie) Bloody Mary becomes title_search=bloody%20mary or title_search=bloody+mary"}
        ],
        "outputs": [
            {"name": "episode_info", "desc":"Information about the matching episode or an error message if no title exists/poor formatting.", "valueType":"(object)",}
        ]
    },
    //Episodes -get title
    {
        "id":15,
        "endpoint_name": "Episodes- Get Title",
        "base_url": "/api/episodesAPI?",
        "example_url":"https://supernatural-lore.vercel.app/api/episodeListAPI?seasonNum=1&epNum=2&type=get_title",
        "parameters": [
            {"name": "seasonNum", "type": "int", "notes": "where the number is in the range 1-15 (inclusive)"},
            {"name": "epNum", "type": "int", "notes": "where the number is a valid episode number of the specified season"},
            {"name":"type", "type":"get_title", "notes": "where get_title is a string specifying that you want to see what the title is for a specified episode."}
        ],
        "outputs": [
            {"name": "ep_title", "desc":"The title of the episode or an error stating that seasonNum or epNum is invalid", "valueType":"(string)",}
        ]
    },
    //episode- description
    {
        "id":16,
        "endpoint_name": "Episodes- Get Desc",
        "base_url": "/api/episodesAPI?",
        "example_url":"https://supernatural-lore.vercel.app/api/episodeListAPI?seasonNum=1&epNum=1&type=get_desc  or https://supernatural-lore.vercel.app/api/episodeListAPI?epId=s1e1&type=get_desc",
        "parameters": [
            {"name": "seasonNum", "type": "int", "notes": "where the number is in the range 1-15 (inclusive)"},
            {"name": "epNum", "type": "int", "notes": "where the number is a valid episode number of the specified season"},
            {"name": "epId", "type": "string", "notes":"An alternative string you can pass in both the seasonNum and epNum at the same time. in format s#e##"},
            {"name":"type", "type":"get_desc", "notes": "where get_desc is a string specifying that you want to see what the description is for a specified episode."}
        ],
        "outputs": [
            {"name": "ep_desc", "desc":"The description of the episode or an error stating that seasonNum or epNum is invalid", "valueType":"(string)"}
        ]
    },
    //episode- directors
      {
        "id":17,
        "endpoint_name": "Episodes- Get Directors",
        "base_url": "/api/episodesAPI?",
        "example_url":"https://supernatural-lore.vercel.app/api/episodeListAPI?seasonNum=1&epNum=1&type=get_director  or https://supernatural-lore.vercel.app/api/episodeListAPI?epId=s1e1&type=get_director",
        "parameters": [
            {"name": "seasonNum", "type": "int", "notes": "where the number is in the range 1-15 (inclusive)"},
            {"name": "epNum", "type": "int", "notes": "where the number is a valid episode number of the specified season"},
            {"name": "epId", "type": "string", "notes":"An alternative string you can pass in both the seasonNum and epNum at the same time. in format s#e##"},
            {"name":"type", "type":"get_director", "notes": "where get_director is a string specifying that you want to see who directed a specified episode."}
        ],
        "outputs": [
            {"name": "ep_director", "desc":"Returns the directors of the episode or an error stating that seasonNum or epNum is invalid", "valueType":"(string)"}
        ]
    },
    //episode- writers
    {
        "id":18,
        "endpoint_name": "Episodes- Get Writers",
        "base_url": "/api/episodesAPI?",
        "example_url":"https://supernatural-lore.vercel.app/api/episodeListAPI?seasonNum=1&epNum=1&type=get_writers  or https://supernatural-lore.vercel.app/api/episodeListAPI?epId=s1e1&type=get_writers",
        "parameters": [
            {"name": "seasonNum", "type": "int", "notes": "where the number is in the range 1-15 (inclusive)"},
            {"name": "epNum", "type": "int", "notes": "where the number is a valid episode number of the specified season"},
            {"name": "epId", "type": "string", "notes":"An alternative string you can pass in both the seasonNum and epNum at the same time. in format s#e##"},
            {"name":"type", "type":"get_writers", "notes": "where get_writers is a string specifying that you want to see who wrote a specified episode."}
        ],
        "outputs": [
            {"name": "ep_writers", "desc":"Returns the writers of the episode or an error stating that seasonNum or epNum is invalid", "valueType":"(string)"}
        ]
    },
     //episode- aired
    {
        "id":19,
        "endpoint_name": "Episodes- Get Air Date",
        "base_url": "/api/episodesAPI?",
        "example_url":"https://supernatural-lore.vercel.app/api/episodeListAPI?seasonNum=1&epNum=1&type=get_aired  or https://supernatural-lore.vercel.app/api/episodeListAPI?epId=s1e1&type=get_aired",
        "parameters": [
            {"name": "seasonNum", "type": "int", "notes": "where the number is in the range 1-15 (inclusive)"},
            {"name": "epNum", "type": "int", "notes": "where the number is a valid episode number of the specified season"},
            {"name": "epId", "type": "string", "notes":"An alternative string you can pass in both the seasonNum and epNum at the same time. in format s#e##"},
            {"name":"type", "type":"get_aired", "notes": "where get_aired is a string specifying that you want to see the aired date for a specified episode."}
        ],
        "outputs": [
            {"name": "ep_writers", "desc":"Returns the air date of the episode or an error stating that seasonNum or epNum is invalid", "valueType":"(string)"}
        ]
    },
    //CHARACTER-Start
    {
        "id":20,
        "endpoint_name": "Character- Get Character By Name",
        "base_url": "/api/characterAPI?",
        "example_url":"https://supernatural-lore.vercel.app/api/characterAPI?character_name=dean%20winchester",
        "parameters": [
            {"name": "character_name", "type": "string", "notes": "where the character_name is the full name of the character, with spaces using %20 or +."},
        ],
        "outputs": [
            {"name": "character", "desc":"Returns the character object with the matching character or returns an error", "valueType":"(object)"}
        ]
    },
    //character- get by id
    {
        "id":21,
        "endpoint_name": "Character- Get Character By ID",
        "base_url": "/api/characterAPI?",
        "example_url":"https://supernatural-lore.vercel.app/api/characterAPI?character_id=dean",
        "parameters": [
            {"name": "charId", "type": "string", "notes": "where charId is the first name of the character only, in lowercase."},
        ],
        "outputs": [
            {"name": "character", "desc":"Returns the character object with the matching character or returns an error", "valueType":"(object)"}
        ]
    },
    //character- get random
    {
        "id":22,
        "endpoint_name": "Character- Get Random Character",
        "base_url": "/api/characterAPI?",
        "example_url":"https://supernatural-lore.vercel.app/api/characterAPI?type=get_random",
        "parameters": [
            {"name": "get_random", "type": "string", "notes": "where get_random is a string specifying the user wants to get a random character"},
        ],
        "outputs": [
            {"name": "character", "desc":"Returns the character object with a randomly selected character or returns an error", "valueType":"(object)"}
        ]
    },
    //character- get description
    {
        "id":23,
        "endpoint_name": "Character- Get Character Description",
        "base_url": "/api/characterAPI?",
        "example_url":"https://supernatural-lore.vercel.app/api/characterAPI?charId=dean&type=get_description",
        "parameters": [
            {"name": "charId", "type": "string", "notes": "where charId is a string with the first name of the character they want to get the description of"},
            {"name": "character_name", "type": "string", "notes": "(alternative to charId) where character_name is a string with the full name of the character they want to get the description of"},
            {"name": "get_description", "type": "string", "notes": "where get_description is a string specifying the user wants to get the description of the character"},
       
        ],
        "outputs": [
            {"name": "description", "desc":"Returns a string with the description of the character", "valueType":"(string)"}
        ]
    },
    //character- get species
    {
        "id":24,
        "endpoint_name": "Character- Get Character Species/Type",
        "base_url": "/api/characterAPI?",
        "example_url":"https://supernatural-lore.vercel.app/api/characterAPI?charId=dean&type=get_species",
        "parameters": [
            {"name": "charId", "type": "string", "notes": "where charId is a string with the first name of the character they want to get the species/type of"},
            {"name": "character_name", "type": "string", "notes": "(alternative to charId) where character_name is a string with the full name of the character they want to get the species/type of"},
            {"name": "get_species", "type": "string", "notes": "where get_species is a string specifying the user wants to get the species/type of the character"},
       
        ],
        "outputs": [
            {"name": "species", "desc":"Returns a string with the description of the character's species/type", "valueType":"(string)"}
        ]
    },
    //character- get status
    {
        "id":25,
        "endpoint_name": "Character- Get Character Status",
        "base_url": "/api/characterAPI?",
        "example_url":"https://supernatural-lore.vercel.app/api/characterAPI?charId=dean&type=get_alive",
        "parameters": [
            {"name": "charId", "type": "string", "notes": "where charId is a string with the first name of the character they want to get the status of"},
            {"name": "character_name", "type": "string", "notes": "(alternative to charId) where character_name is a string with the full name of the character they want to get the status of"},
            {"name": "get_alive", "type": "string", "notes": "where get_alive is a string specifying the user wants to get the status of the character"},
       
        ],
        "outputs": [
            {"name": "status", "desc":"Returns a string that says whether the character is Alive or Dead.", "valueType":"(string)"}
        ]
    },
    //character- get occupation
    {
        "id":26,
        "endpoint_name": "Character- Get Character's Job",
        "base_url": "/api/characterAPI?",
        "example_url":"https://supernatural-lore.vercel.app/api/characterAPI?charId=dean&type=get_occupation",
        "parameters": [
            {"name": "charId", "type": "string", "notes": "where charId is a string with the first name of the character they want to get the job of"},
            {"name": "character_name", "type": "string", "notes": "(alternative to charId) where character_name is a string with the full name of the character they want to get the job of"},
            {"name": "get_occupation", "type": "string", "notes": "where get_occupation is a string specifying the user wants to get the job of the character"},
       
        ],
        "outputs": [
            {"name": "job", "desc":"Returns a string that says what the character's occupation is.", "valueType":"(string)"}
        ]
    },
    //character- get age
    {
        "id":27,
        "endpoint_name": "Character- Get Character's Age",
        "base_url": "/api/characterAPI?",
        "example_url":"https://supernatural-lore.vercel.app/api/characterAPI?charId=dean&type=get_age",
        "parameters": [
            {"name": "charId", "type": "string", "notes": "where charId is a string with the first name of the character they want to get the age of"},
            {"name": "character_name", "type": "string", "notes": "(alternative to charId) where character_name is a string with the full name of the character they want to get the age of"},
            {"name": "get_age", "type": "string", "notes": "where get_age is a string specifying the user wants to get the age of the character"},
       
        ],
        "outputs": [
            {"name": "age", "desc":"Returns a string that says what the character's age is.", "valueType":"(string)"}
        ]
    },
    //character- get nicknames
    {
        "id":28,
        "endpoint_name": "Character- Get Character's Nicknames",
        "base_url": "/api/characterAPI?",
        "example_url":"https://supernatural-lore.vercel.app/api/characterAPI?charId=dean&type=get_nicknames",
        "parameters": [
            {"name": "charId", "type": "string", "notes": "where charId is a string with the first name of the character they want to get the nicknames of"},
            {"name": "character_name", "type": "string", "notes": "(alternative to charId) where character_name is a string with the full name of the character they want to get the nicknames of"},
            {"name": "get_nicknames", "type": "string", "notes": "where get_nicknames is a string specifying the user wants to get the nicknames of the character"},
       
        ],
        "outputs": [
            {"name": "nicknames", "desc":"Returns a string that says what the character's nicknames are and who calls them that.", "valueType":"(string)"}
        ]
    },
    //character- get relationships
    {
        "id":29,
        "endpoint_name": "Character- Get Character's Relationships",
        "base_url": "/api/characterAPI?",
        "example_url":"https://supernatural-lore.vercel.app/api/characterAPI?charId=dean&type=get_relationships",
        "parameters": [
            {"name": "charId", "type": "string", "notes": "where charId is a string with the first name of the character they want to get the relationships of"},
            {"name": "character_name", "type": "string", "notes": "(alternative to charId) where character_name is a string with the full name of the character they want to get the relationships of"},
            {"name": "get_relationships", "type": "string", "notes": "where get_relationships is a string specifying the user wants to get the relationships of the character"},
       
        ],
        "outputs": [
            {"name": "relationships", "desc":"Returns a string that says what the character's relationships.", "valueType":"(string)"}
        ]
    },
    //character- get catchphrases
    {
        "id":30,
        "endpoint_name": "Character- Get Character's Catchphrases",
        "base_url": "/api/characterAPI?",
        "example_url":"https://supernatural-lore.vercel.app/api/characterAPI?charId=sam&type=get_catchphrases",
        "parameters": [
            {"name": "charId", "type": "string", "notes": "where charId is a string with the first name of the character they want to get the catchphrase of"},
            {"name": "character_name", "type": "string", "notes": "(alternative to charId) where character_name is a string with the full name of the character they want to get the catchphrase of"},
            {"name": "get_catchphrases", "type": "string", "notes": "where get_catchphrases is a string specifying the user wants to get the catchphrases of the character"},
       
        ],
        "outputs": [
            {"name": "catchphrases", "desc":"Returns a string that says what the character's catchphrases are.", "valueType":"(string)"}
        ]
    },
    //character- get strengths
    {
        "id":31,
        "endpoint_name": "Character- Get Character's Strengths",
        "base_url": "/api/characterAPI?",
        "example_url":"https://supernatural-lore.vercel.app/api/characterAPI?charId=dean&type=get_strengths",
        "parameters": [
            {"name": "charId", "type": "string", "notes": "where charId is a string with the first name of the character they want to get the strengths of"},
            {"name": "character_name", "type": "string", "notes": "(alternative to charId) where character_name is a string with the full name of the character they want to get the strengths of"},
            {"name": "get_strengths", "type": "string", "notes": "where get_strengths is a string specifying the user wants to get the strengths of the character"},
       
        ],
        "outputs": [
            {"name": "Strengths", "desc":"Returns a string that says what the character's strengths are.", "valueType":"(string)"}
        ]
    },
     //character- get weaknesses
    {
        "id":32,
        "endpoint_name": "Character- Get Character's Weaknesses",
        "base_url": "/api/characterAPI?",
        "example_url":"https://supernatural-lore.vercel.app/api/characterAPI?charId=dean&type=get_weaknesses",
        "parameters": [
            {"name": "charId", "type": "string", "notes": "where charId is a string with the first name of the character they want to get the weakness of"},
            {"name": "character_name", "type": "string", "notes": "(alternative to charId) where character_name is a string with the full name of the character they want to get the weakness of"},
            {"name": "get_weaknesses", "type": "string", "notes": "where get_weaknesses is a string specifying the user wants to get the weaknesses of the character"},
       
        ],
        "outputs": [
            {"name": "weaknesses", "desc":"Returns a string that says what the character's weaknesses are.", "valueType":"(string)"}
        ]
    },
     //character- get quotes
    {
        "id":33,
        "endpoint_name": "Character- Get Character's Quotes",
        "base_url": "/api/characterAPI?",
        "example_url":"https://supernatural-lore.vercel.app/api/characterAPI?charId=dean&type=get_char_quotes",
        "parameters": [
            {"name": "charId", "type": "string", "notes": "where charId is a string with the first name of the character they want to get the quotes of"},
            {"name": "character_name", "type": "string", "notes": "(alternative to charId) where character_name is a string with the full name of the character they want to get the quotes of"},
            {"name": "get_char_quotes", "type": "string", "notes": "where get_char_quotes is a string specifying the user wants to get the quotes of the character"},
       
        ],
        "outputs": [
            {"name": "character_quotes", "desc":"Returns a list of the character's quotes.", "valueType":"(list)"}
        ]
    },
    //character- get deaths
    {
        "id":34,
        "endpoint_name": "Character- Get Character's Deaths",
        "base_url": "/api/characterAPI?",
        "example_url":"https://supernatural-lore.vercel.app/api/characterAPI?charId=dean&type=get_deaths",
        "parameters": [
            {"name": "charId", "type": "string", "notes": "where charId is a string with the first name of the character they want to get the deaths of"},
            {"name": "character_name", "type": "string", "notes": "(alternative to charId) where character_name is a string with the full name of the character they want to get the deaths of"},
            {"name": "get_deaths", "type": "string", "notes": "where get_deaths is a string specifying the user wants to get the deaths of the character"},
       
        ],
        "outputs": [
            {"name": "deaths", "desc":"Returns a string of the total number of times the character died.", "valueType":"(string)"}
        ]
    },
    //character- get deaths
    {
        "id":35,
        "endpoint_name": "Character- Get Character's Death Info",
        "base_url": "/api/characterAPI?",
        "example_url":"https://supernatural-lore.vercel.app/api/characterAPI?charId=dean&type=get_deaths_info",
        "parameters": [
            {"name": "charId", "type": "string", "notes": "where charId is a string with the first name of the character they want to get the death info of"},
            {"name": "character_name", "type": "string", "notes": "(alternative to charId) where character_name is a string with the full name of the character they want to get the death info of"},
            {"name": "get_deaths_info", "type": "string", "notes": "where get_deaths_info is a string specifying the user wants to get the death information of the character"},
       
        ],
        "outputs": [
            {"name": "deaths", "desc":"Returns a list with information of each character's death.", "valueType":"(list)"}
        ]
    },
    //character- get actor
    {
        "id":36,
        "endpoint_name": "Character- Get Character's Actor/Actress",
        "base_url": "/api/characterAPI?",
        "example_url":"https://supernatural-lore.vercel.app/api/characterAPI?charId=dean&type=get_actor",
        "parameters": [
            {"name": "charId", "type": "string", "notes": "where charId is a string with the first name of the character they want to get the cast info of"},
            {"name": "character_name", "type": "string", "notes": "(alternative to charId) where character_name is a string with the full name of the character they want to get the cast info of"},
            {"name": "get_actor", "type": "string", "notes": "where get_actor is a string specifying the user wants to get the cast information of the character"},
       
        ],
        "outputs": [
            {"name": "actor", "desc":"Returns a string with information of each character's actor or actress.", "valueType":"(string)"}
        ]
    },
     //character- get funfacts
    {
        "id":37,
        "endpoint_name": "Character- Get Character's Funfacts",
        "base_url": "/api/characterAPI?",
        "example_url":"https://supernatural-lore.vercel.app/api/characterAPI?charId=dean&type=get_funfacts",
        "parameters": [
            {"name": "charId", "type": "string", "notes": "where charId is a string with the first name of the character they want to get the fun facts of"},
            {"name": "character_name", "type": "string", "notes": "(alternative to charId) where character_name is a string with the full name of the character they want to get the fun facts of"},
            {"name": "get_funfacts", "type": "string", "notes": "where get_funfacts is a string specifying the user wants to get the fun facts of the character"},
       
        ],
        "outputs": [
            {"name": "funfacts", "desc":"Returns a list with information of character's fun facts.", "valueType":"(list)"}
        ]
    },
];

export const apiPreviews = [
    //all season information
    {
        "id":1,
        "key": "season_info",
        "title": "Season- All Information",
        "sideTitle": "All",
        "methodType": "GET",
        "category":"seasons",
        "link": "/view_api/season_info",
        "description": "Fetches detailed information about a specific Supernatural season, including the season title, titlecard images, episode list, character introductions, major deaths, episode count, ratings, and other season metadata.",
        "code": "sample request: GET http://supernatural-lore.vercel.app/api/episodesAPI?seasonNum=1"
    },
    //all season episodes
    {
        "id": 2,
        "key": "ep_list",
        "title": "Season- Episode List",
        "sideTitle":"Episode List",
        "methodType": "GET",
        "category":"seasons",
        "link":"/view_api/epList",
        "description": "Fetches detailed information about the episodes of a specific Supernatural season, including information about the id, title, num, photo, description, date aired, directors, and writers.",
        "code": "sample request: GET http://supernatural-lore.vercel.app/api/episodesAPI?seasonNum=1&type=epList"
    },
    //season- summary
    {
        "id":3,
        "key": "summary",
        "title": "Season- Summary",
        "sideTitle":"Summary",
        "methodType": "GET",
        "category":"seasons",
        "link":"/view_api/summary",
        "description": "Fetches a generated summary about what the main themes of the specified season are.",
        "code": "sample request: GET http://supernatural-lore.vercel.app/api/episodesAPI?seasonNum=1&type=summary"
    },
    //season- character intros
    {
        "id":4,
        "key": "character_intro",
        "title": "Season- Character Introductions",
        "sideTitle":"Character Intros",
        "methodType": "GET",
        "category":"seasons",
        "link": "/view_api/character_intro",
        "description": "Fetches a generated list that holds character objects (containing the name, character id, description of the character.",
        "code": "sample request: GET http://supernatural-lore.vercel.ap/api/episodesAPI?seasonNum=1&type=character_intro"
    },
    //season- character deaths
    {
        "id":5,
        "key": "major_deaths",
        "title": "Season- Character Deaths",
        "sideTitle":"Character Deaths",
        "methodType": "GET",
        "category":"seasons",
        "link": "/view_api/major_deaths",
        "description": "Fetches a generated list that holds character objects (containing the name, character id, description of how character died.",
        "code": "sample request: GET http://supernatural-lore.vercel.ap/api/episodesAPI?seasonNum=1&type=major_deaths"
    },
    //season- character updates
    {
        "id":6,
        "key": "major_updates",
        "title": "Season- Major Character Updates",
        "sideTitle":"Character Updates",
        "methodType": "GET",
        "category":"seasons",
        "link": "/view_api/major_updates",
        "description": "Fetches a generated list that holds character objects (containing the name, character id and description of what the major character update was for the season.",
        "code": "sample request: GET http://supernatural-lore.vercel.ap/api/episodesAPI?seasonNum=1&type=major_updates"
    },
    //season- num episodes
    {
        "id":7,
        "key": "num_episodes",
        "title": "Season- Number of Episodes",
        "sideTitle":"Total Episodes",
        "methodType": "GET",
        "category":"seasons",
        "link": "/view_api/num_episodes",
        "description": "Gets the number of episodes that premiered in the specified season",
        "code": "sample request: GET http://supernatural-lore.vercel.ap/api/episodesAPI?seasonNum=1&type=num_episodes"
    },
    //season- year aired
    {
        "id":8,
        "key": "year_aired",
        "title": "Season- Year Aired",
        "sideTitle":"Year Aired",
        "methodType": "GET",
        "category":"seasons",
        "link": "/view_api/year_aired",
        "description": "Gets the year that the specified season premiered on television.",
        "code": "sample request: GET http://supernatural-lore.vercel.ap/api/episodesAPI?seasonNum=1&type=year_aired"
    },
    //season- ratings
    {
        "id":9,
        "key": "ratings",
        "title": "Season- Ratings",
        "sideTitle":"Ratings",
        "methodType": "GET",
        "category":"seasons",
        "link": "/view_api/ratings",
        "description": "Gets the IDMB rating for the specified season.",
        "code": "sample request: GET http://supernatural-lore.vercel.ap/api/episodesAPI?seasonNum=1&type=ratings"
    },
    //season- monsters:
    {
        "id":10,
        "key": "monsters",
        "title": "Season- Monster Count",
        "sideTitle":"Monsters",
        "methodType": "GET",
        "category":"seasons",
        "link": "/view_api/monsters",
        "description": "Gets information about the type of monsters that appear and how frequently they appear in the specified season",
        "code": "sample request: GET http://supernatural-lore.vercel.ap/api/episodesAPI?seasonNum=1&type=season_monsters"
    },
    //season- body count
    {
        "id":11,
        "key": "body_count",
        "title": "Season- Body Count",
        "sideTitle":"Death Count",
        "methodType": "GET",
        "category":"seasons",
        "link": "/view_api/bodycount",
        "description": "Gets information about how many people are killed on screen in the specified season.",
        "code": "sample request: GET http://supernatural-lore.vercel.ap/api/episodesAPI?seasonNum=1&type=body_count"
    },
    //EPISODES STARTS AT INDEX 11
    {
        "id":12,
        "key": "all_episodes",
        "title": "Episodes- Get All Episodes",
        "sideTitle":"All Episodes",
        "methodType": "GET",
        "category":"episodes",
        "link": "/view_api/all_episodes",
        "description": "Gets information about every episode in the series",
        "code": "sample request: GET http://supernatural-lore.vercel.ap/api/episodeListAPI?type=all_episodes"
    },
    //Episodes- Randomly Generated Ep
    {
        "id":13,
        "key": "random_episode",
        "title": "Episodes- Get Random Episode (All)",
        "sideTitle":"Random Episode",
        "methodType": "GET",
        "category":"episodes",
        "link": "/view_api/random_episode",
        "description": "Randomly selects an episode in the series and returns its information",
        "code": "sample request: GET http://supernatural-lore.vercel.ap/api/episodeListAPI?type=random_episode"
    },
    //Episodes- search title
    {
        "id":14,
        "key": "search_title",
        "title": "Episodes- Search By Title",
        "sideTitle":"Search for Title",
        "methodType": "GET",
        "category":"episodes",
        "link": "/view_api/search_title",
        "description": "Goes through all the episodes to see if the episode matches a title",
        "code": "sample request: GET http://supernatural-lore.vercel.ap/api/episodeListAPI?type=search_title&title_keyword=mystery%20spot"
    },
    //episodes - get title
     {
        "id":15,
        "key": "get_title",
        "title": "Episodes- Get Title",
        "sideTitle":"Get Title",
        "methodType": "GET",
        "category":"episodes",
        "link": "/view_api/get_title",
        "description": "Gets the individual episode data based on passed seasonNum and epNum values and returns the title",
        "code": "sample request: GET https://supernatural-lore.vercel.app/api/episodeListAPI?seasonNum=1&epNum=2&type=get_title"
    },
    //episodes- get desc
    {
        "id":16,
        "key": "get_desc",
        "title": "Episodes- Get Description",
        "sideTitle":"Get Description",
        "methodType": "GET",
        "category":"episodes",
        "link": "/view_api/get_desc",
        "description": "Gets the individual episode data based on passed seasonNum and epNum values and returns the episode description",
        "code": "sample request: GET https://supernatural-lore.vercel.app/api/episodeListAPI?seasonNum=1&epNum=1&type=get_desc or GET http://supernatural-lore.vercel.app/api/episodeListAPI?epId=s1e1&type=get_desc"
    },
    //episodes- directors
    {
        "id":17,
        "key": "get_director",
        "title": "Episodes- Get Director",
        "sideTitle":"Get Director",
        "methodType": "GET",
        "category":"episodes",
        "link": "/view_api/get_director",
        "description": "Gets the information who the directors were on a passed seasonNum and epNum values",
        "code": "sample request: GET https://supernatural-lore.vercel.app/api/episodeListAPI?seasonNum=1&epNum=1&type=get_director or GET http://supernatural-lore.vercel.app/api/episodeListAPI?epId=s1e1&type=get_director"
    },
     //episodes- writers
     {
        "id":18,
        "key": "get_writers",
        "title": "Episodes- Get Writers",
        "sideTitle":"Get Writers",
        "methodType": "GET",
        "category":"episodes",
        "link": "/view_api/get_writers",
        "description": "Gets the information who the writers were on a passed seasonNum and epNum values",
        "code": "sample request: GET https://supernatural-lore.vercel.app/api/episodeListAPI?seasonNum=1&epNum=1&type=get_writers or GET http://supernatural-lore.vercel.app/api/episodeListAPI?epId=s1e1&type=get_writers"
    },
    //episodes- air date
    {
        "id":19,
        "key": "get_aired",
        "title": "Episodes- Get Aired Date",
        "sideTitle":"Get Aired Date",
        "methodType": "GET",
        "category":"episodes",
        "link": "/view_api/get_aired",
        "description": "Gets the original air date of the episode based on the passed seasonNum and epNum values",
        "code": "sample request: GET https://supernatural-lore.vercel.app/api/episodeListAPI?seasonNum=1&epNum=1&type=get_aired or GET http://supernatural-lore.vercel.app/api/episodeListAPI?epId=s1e1&type=get_aired"
    },
    //CHARACTER!!! - get by name
    {
        "id":20,
        "key": "get_character",
        "title": "Character- Get Character by Name",
        "sideTitle":"Character (by NAME)",
        "methodType": "GET",
        "category":"character",
        "link": "/view_api/get_character",
        "description": "Gets the character object of the character searched (if applicable). otherwise returns error.",
        "code": "sample request: GET https://supernatural-lore.vercel.app/api/characterAPI?character_name=dean%20winchester"
    },
    //character- get by id
    {
        "id":21,
        "key": "get_character_by_id",
        "title": "Character- Get Character by ID",
        "sideTitle":"Character (by ID)",
        "methodType": "GET",
        "category":"character",
        "link": "/view_api/get_character_by_id",
        "description": "Gets the character object of the character searched (if applicable). The character's ID is normally their first name only, in lowercase. otherwise returns error.",
        "code": "sample request: GET https://supernatural-lore.vercel.app/api/characterAPI?character_id=dean"
    },
    //character- get random
    {
        "id":22,
        "key": "get_random_character",
        "title": "Character- Get Random Character",
        "sideTitle":"Random Character",
        "methodType": "GET",
        "category":"character",
        "link": "/view_api/get_random_character",
        "description": "Gets the character object of a randomly generated character.",
        "code": "sample request: GET https://supernatural-lore.vercel.app/api/characterAPI?type=get_random"
    },
    //character- get description
    {
        "id":23,
        "key": "get_char_desc",
        "title": "Character- Get Character Description",
        "sideTitle":"Character Description",
        "methodType": "GET",
        "category":"character",
        "link": "/view_api/get_char_desc",
        "description": "Gets the character description of a specified character.",
        "code": "sample request: GET https://supernatural-lore.vercel.app/api/characterAPI?charId=dean&type=get_description OR GET https://supernatural-lore.vercel.app/api/characterAPI?character_name=dean%20winchester&type=get_description"
    },
    //character- get species
    {
        "id":24,
        "key": "get_char_species",
        "title": "Character- Get Character Species/Type",
        "sideTitle":"Character Type",
        "methodType": "GET",
        "category":"character",
        "link": "/view_api/get_char_species",
        "description": "Gets the species of a specified character.",
        "code": "sample request: GET https://supernatural-lore.vercel.app/api/characterAPI?charId=dean&type=get_species OR GET https://supernatural-lore.vercel.app/api/characterAPI?character_name=dean%20winchester&type=get_species"
    },
    //character- get alive
    {
        "id":25,
        "key": "get_char_alive",
        "title": "Character- Get Character Status",
        "sideTitle":"Character Alive",
        "methodType": "GET",
        "category":"character",
        "link": "/view_api/get_char_alive",
        "description": "Gets the status of a specified character.",
        "code": "sample request: GET https://supernatural-lore.vercel.app/api/characterAPI?charId=dean&type=get_alive OR GET https://supernatural-lore.vercel.app/api/characterAPI?character_name=dean%20winchester&type=get_alive"
    },
    //character- get job
    {
        "id":26,
        "key": "get_char_job",
        "title": "Character- Get Character's Job",
        "sideTitle":"Character's Job",
        "methodType": "GET",
        "category":"character",
        "link": "/view_api/get_char_job",
        "description": "Gets the job of a specified character.",
        "code": "sample request: GET https://supernatural-lore.vercel.app/api/characterAPI?charId=dean&type=get_occupation OR GET https://supernatural-lore.vercel.app/api/characterAPI?character_name=dean%20winchester&type=get_occupation"
    },
    //character- get age
    {
        "id":27,
        "key": "get_char_age",
        "title": "Character- Get Character's Age",
        "sideTitle":"Character's Age",
        "methodType": "GET",
        "category":"character",
        "link": "/view_api/get_char_age",
        "description": "Gets the age of a specified character.",
        "code": "sample request: GET https://supernatural-lore.vercel.app/api/characterAPI?charId=dean&type=get_age OR GET https://supernatural-lore.vercel.app/api/characterAPI?character_name=dean%20winchester&type=get_age"
    },
    //character- get nicknames
    {
        "id":28,
        "key": "get_char_nicknames",
        "title": "Character- Get Character's Nicknames",
        "sideTitle":"Character's Nicknames",
        "methodType": "GET",
        "category":"character",
        "link": "/view_api/get_char_nicknames",
        "description": "Gets the nicknames of a specified character.",
        "code": "sample request: GET https://supernatural-lore.vercel.app/api/characterAPI?charId=dean&type=get_nicknames OR GET https://supernatural-lore.vercel.app/api/characterAPI?character_name=dean%20winchester&type=get_nicknames"
    },
    //character- get relationships
    {
        "id":29,
        "key": "get_char_relationships",
        "title": "Character- Get Character's Relationships",
        "sideTitle":"Character's Relationships",
        "methodType": "GET",
        "category":"character",
        "link": "/view_api/get_char_relationships",
        "description": "Gets the relationships of a specified character.",
        "code": "sample request: GET https://supernatural-lore.vercel.app/api/characterAPI?charId=dean&type=get_relationships OR GET https://supernatural-lore.vercel.app/api/characterAPI?character_name=dean%20winchester&type=get_relationships"
    },
    //character- get catchphrases
    {
        "id":30,
        "key": "get_char_catchphrases",
        "title": "Character- Get Character's Catchphrases",
        "sideTitle":"Character's Catchphrases",
        "methodType": "GET",
        "category":"character",
        "link": "/view_api/get_char_catchphrases",
        "description": "Gets the catchphrases of a specified character.",
        "code": "sample request: GET https://supernatural-lore.vercel.app/api/characterAPI?charId=sam&type=get_catchphrases OR GET https://supernatural-lore.vercel.app/api/characterAPI?character_name=sam%20winchester&type=get_catchphrases"
    },
    //character- get strengths
    {
        "id":31,
        "key": "get_char_strengths",
        "title": "Character- Get Character's Strengths",
        "sideTitle":"Character's Strengths",
        "methodType": "GET",
        "category":"character",
        "link": "/view_api/get_char_strengths",
        "description": "Gets the strengths of a specified character.",
        "code": "sample request: GET https://supernatural-lore.vercel.app/api/characterAPI?charId=dean&type=get_strengths OR GET https://supernatural-lore.vercel.app/api/characterAPI?character_name=dean%20winchester&type=get_strengths"
    },
    //character- get weaknesses
    {
        "id":32,
        "key": "get_char_weaknesses",
        "title": "Character- Get Character's Weaknesses",
        "sideTitle":"Character's Weaknesses",
        "methodType": "GET",
        "category":"character",
        "link": "/view_api/get_char_weaknesses",
        "description": "Gets the weaknesses of a specified character.",
        "code": "sample request: GET https://supernatural-lore.vercel.app/api/characterAPI?charId=dean&type=get_weaknesses OR GET https://supernatural-lore.vercel.app/api/characterAPI?character_name=dean%20winchester&type=get_weaknesses"
    },
    //character- get weaknesses
    {
        "id":33,
        "key": "get_char_quotes",
        "title": "Character- Get Character's Quotes",
        "sideTitle":"Character's Quotes",
        "methodType": "GET",
        "category":"character",
        "link": "/view_api/get_char_quotes",
        "description": "Gets the quotes of a specified character.",
        "code": "sample request: GET https://supernatural-lore.vercel.app/api/characterAPI?charId=dean&type=get_char_quotes OR GET https://supernatural-lore.vercel.app/api/characterAPI?character_name=dean%20winchester&type=get_char_quotes"
    },
    //character- get death count
    {
        "id":34,
        "key": "get_deaths",
        "title": "Character- Get Character's Death Count",
        "sideTitle":"Character's Death Count",
        "methodType": "GET",
        "category":"character",
        "link": "/view_api/get_deaths",
        "description": "Gets the number of deaths of a specified character.",
        "code": "sample request: GET https://supernatural-lore.vercel.app/api/characterAPI?charId=dean&type=get_deaths OR GET https://supernatural-lore.vercel.app/api/characterAPI?character_name=dean%20winchester&type=get_deaths"
    },
    //character- get death info
    {
        "id":35,
        "key": "get_deaths_info",
        "title": "Character- Get Character's Death Information",
        "sideTitle":"Character's Death Info",
        "methodType": "GET",
        "category":"character",
        "link": "/view_api/get_deaths_info",
        "description": "Gets information about the deaths of a specified character.",
        "code": "sample request: GET https://supernatural-lore.vercel.app/api/characterAPI?charId=dean&type=get_deaths_info OR GET https://supernatural-lore.vercel.app/api/characterAPI?character_name=dean%20winchester&type=get_deaths_info"
    },
    //character- get cast info
    {
        "id":36,
        "key": "get_actor",
        "title": "Character- Get Character's Cast Information",
        "sideTitle":"Character's Actor/Actress",
        "methodType": "GET",
        "category":"character",
        "link": "/view_api/get_actor",
        "description": "Gets information about the actor/actress of a specified character.",
        "code": "sample request: GET https://supernatural-lore.vercel.app/api/characterAPI?charId=dean&type=get_actor OR GET https://supernatural-lore.vercel.app/api/characterAPI?character_name=dean%20winchester&type=get_actor"
    },
    //character- get funfacts
    {
        "id":37,
        "key": "get_char_funfacts",
        "title": "Character- Get Character's Fun Facts",
        "sideTitle":"Character's Fun Facts",
        "methodType": "GET",
        "category":"character",
        "link": "/view_api/get_char_funfacts",
        "description": "Gets fun facts about a specified character.",
        "code": "sample request: GET https://supernatural-lore.vercel.app/api/characterAPI?charId=dean&type=get_funfacts OR GET https://supernatural-lore.vercel.app/api/characterAPI?character_name=dean%20winchester&type=get_funfacts"
    },
];