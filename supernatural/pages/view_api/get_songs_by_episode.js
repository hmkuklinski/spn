import SongAPI from "../../src/components/api_results/SongAPI";
export default function ViewSongEpisode(){
    const fetchUrl = "http://supernatural-lore.vercel.app/api/season=1&episode=1";
    const indexId = 54;
    const example_data = ([{"title":"Highway to Hell","artist":"AC/DC","season":"1","episode":"1"},{"title":"Back in Black","artist":"AC/DC","season":"1","episode":"1"},{"title":"Gasoline","artist":"Torch Ginger","season":"1","episode":"1"},{"title":"Whatcha Gonna Do","artist":"Classic","season":"1","episode":"1"},{"title":"Speaking in Tongues","artist":"Eagles of Death Metal","season":"1","episode":"1"},{"title":"Ramblin' Man","artist":"Allman Brothers Band","season":"1","episode":"1"},{"title":"A Gift to the World","artist":"Loveless","season":"1","episode":"1"},{"title":"My Cheatin' Ways","artist":"Kid Gloves Music","season":"1","episode":"1"}]);
    return <SongAPI fetchUrl={fetchUrl} example_data={example_data} indexId={indexId}/>;
}