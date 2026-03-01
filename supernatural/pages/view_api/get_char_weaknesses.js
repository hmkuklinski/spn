import CharacterAPI from "../../src/components/api_results/CharacterAPI";

export default function ViewCharacterWeaknesses(){
    const fetchUrl = "http://supernatural-lore.vercel.app/api/characterAPI?charId=dean&type=get_weaknesses";
    const indexId = 31;
    const example_data = ("Pie, Family, Healthy Relationships, Communication");
    return <CharacterAPI character_name={"Dean Winchester"} fetchUrl={fetchUrl} example_data={example_data} indexId={indexId}/>;
}