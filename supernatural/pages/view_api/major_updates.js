import SeasonAPI from "../../src/components/api_results/seasonAPI";

export default function ViewSeasonUpdatesInfo(){
    const fetchUrl = `/api/episodesAPI?seasonNum=1&type=major_updates`;
    const indexId = 5;
    const example_data = ([{"id":"sam","name":"Sam Winchester","text":"Leaves Stanford and joins Dean to find dad and hunt all things Supernatural."}]);
    return <SeasonAPI seasonNum={1} fetchUrl={fetchUrl} example_data={example_data} indexId={indexId}/>;
}