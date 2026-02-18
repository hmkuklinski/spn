import EpisodeAPI from "../../src/components/api_results/EpisodeAPI";

export default function ViewEpTitle(){
    const index= 14;
    const fetchUrl = `https://supernatural-lore.vercel.app/api/episodeListAPI?seasonNum=1&epNum=2&type=get_title`;
    const example_data = ("Wendigo");
    return <EpisodeAPI fetchUrl={fetchUrl} example_data={example_data} indexId={index}/>;
}