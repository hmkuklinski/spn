import SongAPI from "../../src/components/api_results/SongAPI";
export default function ViewSongArtistCount(){
    const fetchUrl = "http://supernatural-lore.vercel.app/api/artist=AC/DC&type=get_count";
    const indexId = 52;
    const example_data = `9`;
    return <SongAPI fetchUrl={fetchUrl} example_data={example_data} indexId={indexId}/>;
}