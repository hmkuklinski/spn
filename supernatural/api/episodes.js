import { episodes } from "../../src/components/data/episodeInfo";

export default function handler(request, response){
    //grab season number from query
    const {seasonNum, type} = request.query;

    //search through episodes to get the season
    const season = episodes.find(s=> s.num === seasonNum);

    if (!season){
        return response.status(404).json({error: "Invalid Season Number Entered. Try entering a number from 1-15"});
    }

    //return information based on type passed:
    switch(type){
        case "epList":
            return response.status(200).json(season.epInfo);
        case "summary":
            return response.status(200).json(season.description);
        case "character_intro":
            return response.status(200).json(season.characterIntros);
        case "major_deaths":
            return response.status(200).json(season.majorDeaths);
        case "major_updates":
            return response.status(200).json(season.majorUpdates);
        case "num_episodes":
            return response.status(200).json(season.epNumbers);
        case "year_aired":
            return response.status(200).json(season.yearAired);
        case "ratings":
            return response.status(200).json(season.ratings);
        case "season_monsters":
            return response.status(200).json(season.seasonMonsters);
        case "body_count":
            return response.status(200).json(season.bodyCount);
        default:
            return response.status(200).json(season);
    }

}