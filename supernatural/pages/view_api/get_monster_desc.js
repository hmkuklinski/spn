import MonsterAPI from "../../src/components/api_results/MonsterAPI";
export default function ViewMonsterDesc(){
    const fetchUrl = "http://supernatural-lore.vercel.app/api/monstersAPI?monster_name=reapers&type=get_description";
    const indexId = 41;
    const example_data = "Reapers guide the souls of the dead to the afterlife. They exist in the veil between life and death, unseen by the living unless near death. Though generally neutral, rogue reapers have acted on personal agendas.";
    return <MonsterAPI monster_name="Reapers" fetchUrl={fetchUrl} example_data={example_data} indexId={indexId}/>;
}