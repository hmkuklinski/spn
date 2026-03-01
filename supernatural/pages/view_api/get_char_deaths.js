import CharacterAPI from "../../src/components/api_results/CharacterAPI";

export default function ViewCharacterDeathCount(){
    const fetchUrl = "http://supernatural-lore.vercel.app/api/characterAPI?charId=dean&type=get_deaths";
    const indexId = 33;
    const example_data = ("100+");
    return <CharacterAPI character_name={"Dean Winchester"} fetchUrl={fetchUrl} example_data={example_data} indexId={indexId}/>;
}