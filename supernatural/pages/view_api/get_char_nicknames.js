import CharacterAPI from "../../src/components/api_results/CharacterAPI";

export default function ViewCharacterNicknames(){
    const fetchUrl = "http://supernatural-lore.vercel.app/api/characterAPI?charId=dean&type=get_nicknames";
    const indexId = 27;
    const example_data = ("Squirrel/Not Moose (Crowley), Deano (Gabriel)");
    return <CharacterAPI character_name={"Dean Winchester"} fetchUrl={fetchUrl} example_data={example_data} indexId={indexId}/>;
}