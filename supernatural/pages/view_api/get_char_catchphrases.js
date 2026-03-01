import CharacterAPI from "../../src/components/api_results/CharacterAPI";

export default function ViewCharacterCatchphrases(){
    const fetchUrl = "http://supernatural-lore.vercel.app/api/characterAPI?charId=sam&type=get_catchphrases";
    const indexId = 29;
    const example_data = ("According to the Lore, So Get This...");
    return <CharacterAPI character_name={"Sam Winchester"} fetchUrl={fetchUrl} example_data={example_data} indexId={indexId}/>;
}