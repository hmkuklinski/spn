import MonsterAPI from "../../src/components/api_results/MonsterAPI";
import { monsters } from "../../src/components/data/monsterInfo";
export default function ViewRandomMonster(){
    const fetchUrl = "http://supernatural-lore.vercel.app/api/monstersAPI";
    const indexId = 38;
    const example_data = ({"id":"flying_monkeys","name":"Flying Monkeys","imgsrc":"/assets/monsters/flyingmonkey.jpg","species":"Enchanted Creature","type":"Magical Servant","description":"Flying Monkeys appear briefly in Supernatural as a reference to *The Wizard of Oz*, serving as minions to witches or magical beings.","abilities":["Flight","Loyalty to masters"],"weaknesses":["Standard monster vulnerabilities"],"episodes":["Season 9, Episode 4: 'Slumber Party' - Charlie and the boys fight Oz creatures"],"killedby":"Standard weapons or magic","mythology":"Originates from L. Frank Baum's Oz series, reimagined in Supernatural's magical crossovers."});
    return <MonsterAPI monster_name="Flying Monkeys" fetchUrl={fetchUrl} example_data={example_data} indexId={indexId}/>;
}