import MonsterAPI from "../../src/components/api_results/MonsterAPI";
export default function ViewMonsterAbilities(){
    const fetchUrl = "http://supernatural-lore.vercel.app/api/monstersAPI?monster_name=reapers&type=get_abilities";
    const indexId = 42;
    const example_data = (["Invisibility to the living","Teleportation and intangibility","Can kill or reap with a touch"]);
    return <MonsterAPI monster_name="Reapers" fetchUrl={fetchUrl} example_data={example_data} indexId={indexId}/>;
}