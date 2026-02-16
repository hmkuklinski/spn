import SeasonAPI from "../../src/components/api_results/seasonAPI";

export default function ViewNumEpSeasonInfo(){
    const fetchUrl = `/api/episodesAPI?seasonNum=1&type=num_episodes`;
    const indexId = 6;
    const example_data = ("22");
    return <SeasonAPI seasonNum={1} fetchUrl={fetchUrl} example_data={example_data} indexId={indexId}/>;
}