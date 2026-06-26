import SongAPI from "../../src/components/api_results/SongAPI";
export default function ViewSongArtist(){
    const fetchUrl = "http://supernatural-lore.vercel.app/api/artist=AC/DC";
    const indexId = 51;
    const example_data = ([{"title":"Highway to Hell","artist":"AC/DC","season":"1","episode":"1"},{"title":"Back in Black","artist":"AC/DC","season":"1","episode":"1"},{"title":"Hells Bells","artist":"AC/DC","season":"3","episode":"1"},{"title":"You Shook Me All Night Long","artist":"AC/DC","season":"7","episode":"13"},{"title":"Thunderstruck","artist":"AC/DC","season":"5","episode":"1"},{"title":"For Those About to Rock","artist":"AC/DC","season":"9","episode":"4"},{"title":"If You Want Blood (You've Got It)","artist":"AC/DC","season":"12","episode":"9"},{"title":"Shot Down in Flames","artist":"AC/DC","season":"14","episode":"1"}]);
    return <SongAPI fetchUrl={fetchUrl} example_data={example_data} indexId={indexId}/>;
}