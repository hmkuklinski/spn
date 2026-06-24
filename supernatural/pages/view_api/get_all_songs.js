import SongAPI from "../../src/components/api_results/SongAPI";
export default function ViewAllSongs(){
    const fetchUrl = "http://supernatural-lore.vercel.app/api/songAPI?type=all_songs";
    const indexId = 47;
    const example_data = "[{'title':'Shot Down in Flames','artist':'AC/DC','season':'14','episode':'1'},...]";
    return <SongAPI fetchUrl={fetchUrl} example_data={example_data} indexId={indexId}/>;
}