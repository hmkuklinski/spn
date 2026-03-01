import CharacterAPI from "../../src/components/api_results/CharacterAPI";

export default function ViewCharacterQuotes(){
    const fetchUrl = "http://supernatural-lore.vercel.app/api/characterAPI?charId=dean&type=get_char_quotes";
    const indexId = 32;
    const example_data = ([{"id":1,"text":"Driver picks the music, shotgun shuts his cakehole."},{"id":2,"text":"I don't have a plan, but what I do have is a GED and a give 'em hell attitude"},{"id":3,"text":"Dad's on a Hunting Trip and he hasn't been home in a few days."}]);
    return <CharacterAPI character_name={"Dean Winchester"} fetchUrl={fetchUrl} example_data={example_data} indexId={indexId}/>;
}