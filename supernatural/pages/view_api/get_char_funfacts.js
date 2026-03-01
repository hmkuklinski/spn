import CharacterAPI from "../../src/components/api_results/CharacterAPI";

export default function ViewCharacterFunfacts(){
    const fetchUrl = "http://supernatural-lore.vercel.app/api/characterAPI?charId=dean&type=get_funfacts";
    const indexId = 36;
    const example_data = ([{"id":1,"text":"Dean died over 100 times in Mystery Spot Alone!"}]);
    return <CharacterAPI character_name={"Dean Winchester"} fetchUrl={fetchUrl} example_data={example_data} indexId={indexId}/>;
}