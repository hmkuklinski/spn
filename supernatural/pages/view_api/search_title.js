import EpisodeAPI from "../../src/components/api_results/EpisodeAPI";

export default function ViewSearchedEpisodeInfo(){
    const index= 13;
    const fetchUrl = `https://supernatural-lore.vercel.app/api/episodeListAPI?type=random_episode`;
    const example_data = ([{"id":"s3e11","title":"Mystery Spot","num":"11","photo":"/assets/episodes/season3/s3e11.jpg","description":"While Sam and Dean are investigating the disappearance of a man from a tourist location, Dean is shot and killed.","dir":"Kim Manners","writ":"Jeremy Carver and Emily McLaughlin","aired":"02/14/2008"}]);
    return <EpisodeAPI fetchUrl={fetchUrl} example_data={example_data} indexId={index}/>;
}