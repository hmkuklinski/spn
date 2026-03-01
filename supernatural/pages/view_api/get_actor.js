import CharacterAPI from "../../src/components/api_results/CharacterAPI";

export default function ViewCharacterActorInfo(){
    const fetchUrl = "http://supernatural-lore.vercel.app/api/characterAPI?charId=dean&type=get_actor";
    const indexId = 35;
    const example_data = ("Jensen Ackles");
    return <CharacterAPI character_name={"Dean Winchester"} fetchUrl={fetchUrl} example_data={example_data} indexId={indexId}/>;
}