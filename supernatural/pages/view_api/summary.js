import SeasonAPI from "../../src/components/api_results/seasonAPI";

export default function ViewSummaryInfo(){
    const fetchUrl = `/api/episodesAPI?seasonNum=1&type=summary`;
    const indexId = 2;
    const example_data = ("Brothers Sam and Dean Winchester reunite after years apart when their father goes missing during a hunting trip. As they travel across the country battling urban legends and supernatural creatures, they uncover clues about their family's tragic past and the demon responsible for their mother's death. The main conflict revolves around locating their father and confronting the Yellow-Eyed Demon, Azazel, who is revealed to be connected to a sinister plan involving Sam.");
    return <SeasonAPI seasonNum={1} fetchUrl={fetchUrl} example_data={example_data} indexId={indexId}/>;
}