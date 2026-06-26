import { songs } from "../../src/components/data/songInfo";

export default function handler(request, response){
    const {song_title, artist, season, episode, type, seasonStart, seasonEnd} = request.query;

    let results= null;

    //get number of times song was used:
    if (song_title && type=='get_count'){
        results = songs.filter(song=> song.title.toLowerCase() === song_title.toLowerCase()).length;
        results = `${results}`;
    }
    //get song by song title and artist
    else if (song_title && artist){
        results = songs.filter(song=> song.title.toLowerCase() === song_title.toLowerCase() && song.artist.toLowerCase() === artist.toLowerCase());
    }
    //get a song by song title- distinct values (to account for original and possible covers)--> ie. Carry On Wayward Son (Kansas, Musical Episode, Neoni-finale)
    else if (song_title){
        results = songs.filter(song=> song.title.toLowerCase() === song_title.toLowerCase());
        results = [...new Map(results.map(song => [song.artist.toLowerCase(), song])).values()];
    }
    //get a song by artist- count total songs used (even if repeated)
    else if (artist && type == 'get_count'){
        results = songs.filter(song=> song.artist.toLowerCase() === artist.toLowerCase()).length;
    }
    //filtered by artists - distinct values for songs
    else if (artist){
        results = songs.filter(song=> song.artist.toLowerCase() === artist.toLowerCase());
        results = [...new Map(results.map(song => [song.title.toLowerCase(), song])).values()];
    }
    
    //get by episode
    else if (season && episode){
        results = songs.filter(song=> song.season === season && song.episode === episode);
    }
    //get songs for season range
    else if (seasonStart && seasonEnd){
        let seasonStartInt= parseInt(seasonStart,10);
        let seasonEndInt = parseInt(seasonEnd,10);
        if (isNaN(seasonStartInt) || isNaN(seasonEndInt)) {
            return response.status(400).json({ error: "Season values must be numbers." });
        }
        if (seasonStartInt<1){
            return response.status(400).json({error:"Invalid seasonStart value passed. Must be a value greater than 1"});
        }
        if (seasonEndInt>15){
            return response.status(400).json({catch:"Invalid seasonEnd value passed. Must be less than 15"});
        }
        results = songs.filter(song => {
            const season = parseInt(song.season, 10);
            return season >= seasonStartInt && season <= seasonEndInt;
        });
    }
    //filtered by season 
    else if (season){
        results = songs.filter(song=> song.season === season);
        results = [...new Map(results.map(song => [song.artist.toLowerCase(), song])).values()];
    }
    //get random song
    else if (type == "get_random"){
        const randomIndex = Math.floor(Math.random()*songs.length);
        return response.status(200).json(songs[randomIndex]);
    }
    //get all songs- distinct entries
    else if (type == "all_songs"){
        results = [...new Map(songs.map(song => [song.artist.toLowerCase(), song])).values()];
    }

    //invalid arguments passed or lack of arguments required
    if (!results){
        return response.status(404).json({error: "Unable to fetch the character. The character either doesn't exist or you do not have the correct arguments/format for your request. Please check the documentation and try again."});
    }
    
    return response.status(200).json(results);
       
}