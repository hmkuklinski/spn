import EpisodeAPI from "../../src/components/api_results/EpisodeAPI";

export default function ViewDirectors(){
    const index= 16;
    const fetchUrl = `https://supernatural-lore.vercel.app/api/episodeListAPI?seasonNum=1&epNum=1&type=get_dir`;
    const example_data = ("David Nutter");
    return <EpisodeAPI fetchUrl={fetchUrl} example_data={example_data} indexId={index}/>;
}