import { characters } from "../../src/components/data/characterInfo";

export default function handler(request, response){
    const {character_name, charId, type} = request.query;

    
    let results = null;
    if (!character_name && charId && type != "random_character"){
        results = characters.find(character => character.id === charId);
    }
    else if (character_name && !charId && type != "random_character"){
        results = characters.find(character=> character_name.toLowerCase() === character.name.toLowerCase());
    }
    else if (character_name && charId){
        return response.status(404).json({error: "You cannot pass both a character id and a character name. Please pick one to continue your search."});
    }
    else if (type == "random_character"){
        const randomIndex = Math.floor(Math.random()*characters.length);
        results = characters[randomIndex];
    }

    if (!results){
        return response.status(404).json({error: "Unable to fetch the character. The character either doesn't exist or you do not have the correct arguments/format for your request. Please check the documentation and try again."});
    }

    switch(type){
        case "get_random":
            return response.status(200).json(results);
        case "get_description":
            return response.status(200).json(results.description);
        case "get_species":
            return response.status(200).json(results.species);
        case "get_alive":
            return response.status(200).json(results.status);
        case "get_occupation":
            return response.status(200).json(results.occupation);
        case "get_age":
            return response.status(200).json(results.age);
        case "get_nicknames":
            return response.status(200).json(results.nicknames);
        case "get_relationships":
            return response.status(200).json(results.relationships);
        case "get_catchphrases":
            return response.status(200).json(results.catchphrase);
        case "get_strengths":
            return response.status(200).json(results.strengths);
        case "get_weaknesses":
            return response.status(200).json(results.weaknesses);
        case "get_char_quotes":
            return response.status(200).json(results.quotes);
        case "get_deaths":
            return response.status(200).json(results.totalDeaths);
        case "get_deaths_info":
            return response.status(200).json(results.deaths);
        case "get_actor":
            return response.status(200).json(results.actor);
        case "get_funfacts":
            return response.status(200).json(results.funfacts);
        default:
            return response.status(200).json(results);
    }

}