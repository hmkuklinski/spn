import MonsterAPI from "../../src/components/api_results/MonsterAPI";
export default function ViewMonsterSpecies(){
    const fetchUrl = "http://supernatural-lore.vercel.app/api/monstersAPI?monster_name=reapers&type=get_species";
    const indexId = 39;
    const example_data = "Psychopomp";
    return <MonsterAPI monster_name="Reapers" fetchUrl={fetchUrl} example_data={example_data} indexId={indexId}/>;
}