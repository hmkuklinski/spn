const fs = require("fs");
// const { characters } = require("../src/components/data/characterInfo");
//const {conventions} = require('../src/components/data/conventions');
const {sigils} = require('../src/components/data/sigilInfo');
// const data = require('./episodesInfoJSON.json');

// const character_deaths = data.flatMap(season =>
//   season.majorDeaths.map(ep => ({
//     ...ep,
//     season: season.num
//   }))
// );

fs.writeFileSync(
  "sigilInfoJSON.json",
  JSON.stringify(sigils, null, 2)
);
