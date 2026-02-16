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

];