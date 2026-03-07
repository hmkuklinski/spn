import MonsterAPI from "../../src/components/api_results/MonsterAPI";
export default function ViewKillMonster(){
    const fetchUrl = "http://supernatural-lore.vercel.app/api/monstersAPI?monster_name=reapers&type=get_killedby";
    const indexId = 45;
    const example_data = ("Can be killed by specific spells or powerful beings");
    return <MonsterAPI monster_name="Reapers" fetchUrl={fetchUrl} example_data={example_data} indexId={indexId}/>;
}