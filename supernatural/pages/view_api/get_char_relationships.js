import CharacterAPI from "../../src/components/api_results/CharacterAPI";

export default function ViewCharacterRelationships(){
    const fetchUrl = "http://supernatural-lore.vercel.app/api/characterAPI?charId=dean&type=get_relationships";
    const indexId = 28;
    const example_data = ("John (Father), Sam (Brother), Mary (Mother), Adam (Half-Brother)");
    return <CharacterAPI character_name={"Dean Winchester"} fetchUrl={fetchUrl} example_data={example_data} indexId={indexId}/>;
}