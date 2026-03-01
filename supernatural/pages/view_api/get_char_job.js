import CharacterAPI from "../../src/components/api_results/CharacterAPI";

export default function ViewCharacterJob(){
    const fetchUrl = "http://supernatural-lore.vercel.app/api/characterAPI?charId=dean&type=get_occupation";
    const indexId = 25;
    const example_data = ("Hunter");
    return <CharacterAPI character_name={"Dean Winchester"} fetchUrl={fetchUrl} example_data={example_data} indexId={indexId}/>;
}