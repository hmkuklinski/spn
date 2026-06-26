import SongAPI from "../../src/components/api_results/SongAPI";
export default function ViewSongTitle(){
    const fetchUrl = "http://supernatural-lore.vercel.app/api/songAPI?song_title=Carry%20On%20Wayward%20Son";
    const indexId = 50;
    const example_data = ([{"title":"Carry On Wayward Son","artist":" Vivien Elizabeth Armour, Alyssa Lynch, Kelli Ogmundson, Katie Sarife, Rachel Warkentin and Nina Winkler","season":"10","episode":"23"},{"title":"Carry On Wayward Son","artist":"Neoni","season":"15","episode":"20"}]);
    return <SongAPI fetchUrl={fetchUrl} example_data={example_data} indexId={indexId}/>;
}