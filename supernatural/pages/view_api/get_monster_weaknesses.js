import MonsterAPI from "../../src/components/api_results/MonsterAPI";
export default function ViewMonsterWeaknesses(){
    const fetchUrl = "http://supernatural-lore.vercel.app/api/monstersAPI?monster_name=reapers&type=get_weaknesses";
    const indexId = 43;
    const example_data = (["Reapers can be bound or trapped with spells","Can be killed by other powerful beings (e.g. angels, Death)"]);
    return <MonsterAPI monster_name="Reapers" fetchUrl={fetchUrl} example_data={example_data} indexId={indexId}/>;
}