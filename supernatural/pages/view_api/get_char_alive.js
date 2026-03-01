import CharacterAPI from "../../src/components/api_results/CharacterAPI";

export default function ViewCharacterStatus(){
    const fetchUrl = "http://supernatural-lore.vercel.app/api/characterAPI?charId=dean&type=get_alive";
    const indexId = 24;
    const example_data = ("Dead");
    return <CharacterAPI character_name={"Dean Winchester"} fetchUrl={fetchUrl} example_data={example_data} indexId={indexId}/>;
}