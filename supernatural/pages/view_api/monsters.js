import SeasonAPI from "../../src/components/api_results/seasonAPI";

export default function ViewSeasonMonsterInfo(){
    const fetchUrl = `/api/episodesAPI?seasonNum=1&type=season_monsters`;
    const indexId = 9;
    const example_data = ([{"id":"women-in-white","name":"Woman in White","count":1},{"id":"wendigo","name":"Wendigo","count":1},{"id":"vengeful-spirit","name":"Vengeful Spirit","count":3},{"id":"demon","name":"Demon","count":2},{"id":"shapeshifter","name":"Shapeshifter","count":1},{"id":"violent-spirit","name":"Violent Spirit","count":3},{"id":"cursed-insects","name":"Cursed Insects","count":1},{"id":"poltergeist","name":"Poltergeist","count":1},{"id":"deity","name":"Deity","count":1},{"id":"reaper","name":"Reaper","count":1},{"id":"tulpa","name":"Tulpa","count":1},{"id":"shtriga","name":"Shtriga","count":1},{"id":"vampire","name":"Vampire","count":1}]);
    return <SeasonAPI seasonNum={1} fetchUrl={fetchUrl} example_data={example_data} indexId={indexId}/>;
}