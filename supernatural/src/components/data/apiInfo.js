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
    }
];

export const apiPreviews = [
    {
        "id":1,
        "title": "Season Information",
        "methodType": "GET",
        "link": "/view_api/season/1",
        "description": "Fetches detailed information about a specific Supernatural season, including the season title, titlecard images, episode list, character introductions, major deaths, episode count, ratings, and other season metadata.",
        "code": "sample request: GET http://supernatural-lore.vercel.app/api/episodesAPI?seasonNum=1"
    }
];