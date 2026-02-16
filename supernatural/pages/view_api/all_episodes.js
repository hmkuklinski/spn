import SeasonAPI from "../../src/components/api_results/seasonAPI";

export default function ViewAllEpisodesInfo(){
    const fetchUrl = `/api/episodeListAPI?type=all_episodes`;
    const indexId = 11;
    const example_data = ([{"id":"s1e1","title":"Pilot","num":"1","photo":"/assets/episodes/season1/s1e1.jpg","description":"Two brothers witness their mother's paranomal death and are trained to fight by their father, who aim to hunt down the thing that killed his wife.","dir":"David Nutter","writ":"Eric Kripke","aired":"9/13/2005"},{"id":"s1e2","title":"Wendigo","num":"2","photo":"/assets/episodes/season1/s1e2.jpg","description":"Sam and Dean follow the coordinates in their father's journal and land in Colorado, where they investigate the disappearance of several campers.","dir":"David Nutter","writ":"Eric Kripke, Ron Milbauer, and Terri Hughes Burton","aired":"9/20/2005"},{"id":"s1e3","title":"Dead in the Water","num":"3","photo":"/assets/episodes/season1/s1e3.jpg","description":"In a small town in Wisconsin, Sam and Dean investigate a series of mysterious drownings officially explained as suicides.","dir":"Kim Manners","writ":"Sera Gamble and Raelle Tucker","aired":"9/27/2005"}]);
    return <SeasonAPI seasonNum={1} fetchUrl={fetchUrl} example_data={example_data} indexId={indexId}/>;
}