import EpisodeAPI from "../../src/components/api_results/EpisodeAPI";

export default function ViewRandomEpisodeInfo(){
    const fetchUrl = `https://supernatural-lore.vercel.app/api/episodeListAPI?type=random_episode`;
    const example_data = ({"id":"s4e5","title":"Monster Movie","num":"5","photo":"/assets/episodes/season4/s4e5.jpg","description":"Dean and Sam investigate murders at Oktoberfest. Dean determines a shape-shifter demon is appearing as iconic monsters from old Hollywood movies.","dir":"Robert Singer","writ":"Ben Edlund","aired":"10/16/2008"});
    return <EpisodeAPI fetchUrl={fetchUrl} example_data={example_data} indexId={12}/>;
}