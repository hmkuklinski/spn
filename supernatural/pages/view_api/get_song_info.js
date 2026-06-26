import SongAPI from "../../src/components/api_results/SongAPI";
export default function ViewSongInfo(){
    const fetchUrl = "http://supernatural-lore.vercel.app/api/songAPI?song_title=Carry%20On%20Wayward%20Son&artist=Neoni";
    const indexId = 49;
    const example_data = ([{"title":"Carry On Wayward Son","artist":"Neoni","season":"15","episode":"20"}]);
    return <SongAPI fetchUrl={fetchUrl} example_data={example_data} indexId={indexId}/>;
}