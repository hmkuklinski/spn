import CharacterAPI from "../../src/components/api_results/CharacterAPI";

export default function ViewCharacterStrengths(){
    const fetchUrl = "http://supernatural-lore.vercel.app/api/characterAPI?charId=dean&type=get_strengths";
    const indexId = 30;
    const example_data = ("Intelligence, Empathy, Communication");
    return <CharacterAPI character_name={"Dean Winchester"} fetchUrl={fetchUrl} example_data={example_data} indexId={indexId}/>;
}