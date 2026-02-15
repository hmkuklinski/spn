import SeasonAPI from "../../../src/components/api_results/seasonAPI";

export default function ViewSummaryInfo(){
    const fetchUrl = `/api/episodesAPI?seasonNum=1&type=major_deaths`;
    const indexId = 4;
    const example_data = ([{"id":"jessica","name":"Jessica Moore","text":"Killed by Azazel, then pinned to the ceiling and set on fire. Her death mirrored Mary Winchester's."}]);
    return <SeasonAPI seasonNum={1} fetchUrl={fetchUrl} example_data={example_data} indexId={indexId}/>;
}