import { monsters } from "../../src/components/data/monsterInfo";

export default function handler(request, response){
    const {monster_name, type } = request.query;
    let found_monster = monsters;
    if (monster_name){
        found_monster = monsters.find(m=>m.name.toLowerCase()== monster_name.toLowerCase());
        if (!found_monster){
            return response.status(400).json({error:"The monster name you entered does not match a monster in the data set. Please check your spelling or formatting."});
        }
    }
    else if (type==="get_random"){
        found_monster = monsters[Math.floor(Math.random()*monsters.length)];
    }

    switch(type){
        case "get_species":
            return response.status(200).json(found_monster.species);
        case "get_type":
            return response.status(200).json(found_monster.type);
        case "get_description":
            return response.status(200).json(found_monster.description);
        case "get_abilities":
            return response.status(200).json(found_monster.abilities);
        case "get_weaknesses":
            return response.status(200).json(found_monster.weaknesses);
        case "get_episodes":
            return response.status(200).json(found_monster.episodes);
        case "get_killedby":
            return response.status(200).json(found_monster.killedby);
        case "get_mythology":
            return response.status(200).json(found_monster.mythology);   
        case "all_monsters":
            return response.status(200).json(found_monster);
        default:
            return response.status(200).json(found_monster);
    }

    
}