import SeasonAPI from "../../src/components/api_results/seasonAPI";

export default function ViewRatingsInfo(){
    const fetchUrl = `/api/episodesAPI?seasonNum=1&type=ratings`;
    const indexId = 8;
    const example_data = ("8.9");
    return <SeasonAPI seasonNum={1} fetchUrl={fetchUrl} example_data={example_data} indexId={indexId}/>;
}