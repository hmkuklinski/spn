import CharacterAPI from "../../src/components/api_results/CharacterAPI";

export default function ViewCharacterSpecies(){
    const fetchUrl = "http://supernatural-lore.vercel.app/api/characterAPI?charId=dean&type=get_species";
    const indexId = 23;
    const example_data = ("Human");
    return <CharacterAPI character_name={"Dean Winchester"} fetchUrl={fetchUrl} example_data={example_data} indexId={indexId}/>;
}