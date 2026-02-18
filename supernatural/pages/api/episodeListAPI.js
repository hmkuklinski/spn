import { episodes } from "../../src/components/data/episodeInfo";

export default function handler(request, response){
    const {epId, seasonNum, epNum, type, title_keyword} = request.query;

    //generate entire episode list:
    const allEpisodes = [];

    episodes.forEach(season => {
        season.epInfo.forEach(episode => {
            allEpisodes.push(episode);
        });
    });

    //will determine what to showcase:
    let results=null;
    
    //if they know the season and episode number: /api/episodeListAPI?epId=s1e1
    if (epId && !seasonNum && !epNum){
        results = allEpisodes.find(episode => episode.id ===epId);
        if (!results){
            return response.status(404).json({error: "Error with episodeId. episodeId are in the form of s1e1. Please try with this format."});
        }
    }
    //want to pass in seasonNum and epNum, don't know epId?: /api/episodeListAPI?seasonNum=1&epNum=1
    else if (seasonNum && epNum && !epId){
        const seasonIndex = Number(seasonNum)-1;
        const episodeIndex = Number(epNum)-1;

        //valid season number
        if (seasonIndex<0 || seasonIndex>=15){
            return response.status(404).json({error:"Season number must be between 1-15."});
        }
        
        //valid epNumber
        const totalEpSeason = episodes[seasonIndex].epInfo.length;
        if (episodeIndex<0 || episodeIndex>=totalEpSeason){
            return response.status(404).json({error:"Episode number is outside of the scope of the specified season. "});
        }

        //generate epId:
        let epId = `s${seasonNum}e${epNum}`;
        results = allEpisodes.find(episode => episode.id ===epId);

        //invalid epId:
        if (!results){
            return response.status(404).json({error: "Error retrieving information. Please check your seasonNum and epNum values."});
        }
    }
    else if (type === "random_episode"){
        let randomSelected = Math.floor(Math.random()*allEpisodes.length);
        results = allEpisodes[randomSelected];
    }
    else if (type ==="search_title" && title_keyword){
        results = allEpisodes.filter(ep =>
            ep.title.toLowerCase().includes(title_keyword.toLowerCase())
        );
       if (results.length === 0) {
            return response.status(404).json({error: "No titles match your search."});
        }

    }
    else{
        results = allEpisodes;
    }

    //error getting episode information
    if (!results){
        return response.status(404).json({error: "Error fetching episode information"});
    }

    
    //return information based on type passed:
    switch(type){
        // can use (/api/episodeListAPI?epId=s1e1&type=get_title) or (/api/episodeListAPI?seasonNum=1&epNum=1&type=get_title)
        case "get_title":
            return response.status(200).json(results.title);
        //can use (/api/episodeListAPI?epId=s1e1&type=get_desc) or(/api/episodeListAPI?seasonNum=1&epNum=1&type=get_desc)
        case "get_desc":
            return response.status(200).json(results.description);
        case "get_director":
            return response.status(200).json(results.dir);
        case "get_writers":
            return response.status(200).json(results.writ);
        case "get_aired":
            return response.status(200).json(results.aired);
        case "search_title":
            return response.status(200).json(results);
        // (/api/episodeListAPI?type=random_episode)
        case "random_episode":
            return response.status(200).json(results);
        // (/api/episodeListAPI?type=all_episodes)
        case "all_episodes":
            return response.status(200).json(results);
        default:
            return response.status(200).json(results);
    }

}