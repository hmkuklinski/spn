import EpisodeAPI from "../../src/components/api_results/EpisodeAPI";

export default function ViewWriters(){
    const index= 17;
    const fetchUrl = `https://supernatural-lore.vercel.app/api/episodeListAPI?seasonNum=1&epNum=1&type=get_writers`;
    const example_data = ("Eric Kripke");
    return <EpisodeAPI fetchUrl={fetchUrl} example_data={example_data} indexId={index}/>;
}