import MonsterAPI from "../../src/components/api_results/MonsterAPI";
export default function ViewMonsterMythology(){
    const fetchUrl = "http://supernatural-lore.vercel.app/api/monstersAPI?monster_name=reapers&type=get_mythology";
    const indexId = 46;
    const example_data = ("Often equated with the Grim Reaper, reapers are psychopomps from various traditions (Greek Thanatos, Norse Valkyries). In Supernatural, they maintain balance in life and death, often acting under Death's orders.");
    return <MonsterAPI monster_name="Reapers" fetchUrl={fetchUrl} example_data={example_data} indexId={indexId}/>;
}