import CharacterAPI from "../../src/components/api_results/CharacterAPI";

export default function ViewCharacterDesc(){
    const fetchUrl = "http://supernatural-lore.vercel.app/api/characterAPI?charId=dean&type=get_description";
    const indexId = 22;
    const example_data = ("The older Winchester brother, raised as a hunter by his dad after their mom was killed by a demon. Dean is fiercely protective of Sam and takes on the big-brother, soldier role. He's driven by loyalty, family, and a deep sense of responsibility—even when it eats him up inside.");
    return <CharacterAPI character_name={"Dean Winchester"} fetchUrl={fetchUrl} example_data={example_data} indexId={indexId}/>;
}