import MonsterAPI from "../../src/components/api_results/MonsterAPI";
export default function ViewMonsterEpisodes(){
    const fetchUrl = "http://supernatural-lore.vercel.app/api/monstersAPI?monster_name=reapers&type=get_episodes";
    const indexId = 44;
    const example_data = (["Season 2, Episode 1: In My Time of Dying — introduces Tessa the Reaper","Season 11, Episode 23: Alpha and Omega — Billie the reaper becomes important figure"]);
    return <MonsterAPI monster_name="Reapers" fetchUrl={fetchUrl} example_data={example_data} indexId={indexId}/>;
}