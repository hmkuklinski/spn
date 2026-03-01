import CharacterAPI from "../../src/components/api_results/CharacterAPI";

export default function ViewCharacterAge(){
    const fetchUrl = "http://supernatural-lore.vercel.app/api/characterAPI?charId=dean&type=get_age";
    const indexId = 26;
    const example_data = ("39");
    return <CharacterAPI character_name={"Dean Winchester"} fetchUrl={fetchUrl} example_data={example_data} indexId={indexId}/>;
}