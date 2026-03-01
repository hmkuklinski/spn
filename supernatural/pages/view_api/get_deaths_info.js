import CharacterAPI from "../../src/components/api_results/CharacterAPI";

export default function ViewCharacterDeathInfo(){
    const fetchUrl = "http://supernatural-lore.vercel.app/api/characterAPI?charId=dean&type=get_deaths_info";
    const indexId = 34;
    const example_data = ([{"id":1,"text":"Suffocation"},{"id":2,"text":"Electrocution"},{"id":3,"text":"Hit by a Car"},{"id":4,"text":"Heart Attack"},{"id":5,"text":"Attacked by Hell-Hounds"},{"id":6,"text":"Shot"},{"id":7,"text":"Impaled"},{"id":8,"text":"Drug Overdoses (Suicide Attempt)"}]);
    return <CharacterAPI character_name={"Dean Winchester"} fetchUrl={fetchUrl} example_data={example_data} indexId={indexId}/>;
}