import SeasonAPI from "../../src/components/api_results/seasonAPI";

export default function ViewBodyCountInfo(){
    const fetchUrl = `/api/episodesAPI?seasonNum=1&type=body_count`;
    const indexId = 10;
    const example_data = "3";
    return <SeasonAPI seasonNum={1} fetchUrl={fetchUrl} example_data={example_data} indexId={indexId}/>;
}