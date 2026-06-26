import SongAPI from "../../src/components/api_results/SongAPI";
export default function ViewSongRandom(){
    const fetchUrl = "http://supernatural-lore.vercel.app/api/type=get_random";
    const indexId = 55;
    const example_data = ({"title":"Fell on Black Days","artist":"Soundgarden","season":"8","episode":"6"});
    return <SongAPI fetchUrl={fetchUrl} example_data={example_data} indexId={indexId}/>;
}