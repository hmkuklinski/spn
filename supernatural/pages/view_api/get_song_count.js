import SongAPI from "../../src/components/api_results/SongAPI";
export default function ViewSongCount(){
    const fetchUrl = "http://supernatural-lore.vercel.app/api/songAPI?song_title=Carry%20On%20Wayward%20Son&type=get_count";
    const indexId = 48;
    const example_data = "3";
    return <SongAPI fetchUrl={fetchUrl} example_data={example_data} indexId={indexId}/>;
}