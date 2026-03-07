import MonsterAPI from "../../src/components/api_results/MonsterAPI";
export default function ViewMonsterType(){
    const fetchUrl = "http://supernatural-lore.vercel.app/api/monstersAPI?monster_name=reapers&type=get_type";
    const indexId = 40;
    const example_data = "Death Entity";
    return <MonsterAPI monster_name="Reapers" fetchUrl={fetchUrl} example_data={example_data} indexId={indexId}/>;
}