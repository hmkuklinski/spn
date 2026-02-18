import EpisodeAPI from "../../src/components/api_results/EpisodeAPI";

export default function ViewEpDesc(){
    const index= 15;
    const fetchUrl = `https://supernatural-lore.vercel.app/api/episodeListAPI?seasonNum=1&epNum=1&type=get_desc`;
    const example_data = ("Two brothers witness their mother's paranomal death and are trained to fight by their father, who aim to hunt down the thing that killed his wife.");
    return <EpisodeAPI fetchUrl={fetchUrl} example_data={example_data} indexId={index}/>;
}