import {useState, useEffect} from "react";
import Feature from "./Feature.jsx";
import { characters } from "../data/characterInfo.js";
import {monsters} from '../data/monsterInfo.js';
import {episodes} from '../data/episodeInfo.js';

export default function Features(){
    //states
    const [myChar, setMyChar] = useState(null);
    const [myMon, setMyMon] = useState(null);
    const [myEp, setMyEp] = useState(null);


    useEffect(()=>{
        //length variables
        const charLength = characters.length;
        const monLength = monsters.length;
        const seasonLength = episodes.length;

        //to generate and store info for random character:
        const randomChar = () =>{
            const randomSelect = Math.floor(Math.random() * charLength);
            const selected = characters[randomSelect];
            setMyChar({...selected, feature: "Featured Character", link:`/characters/${selected.id}`, linkText:"Character Profile"});

        }
        //to generate and store info for random monster:
        const randomMon = () =>{
            const randomSelectMon = Math.floor(Math.random() * monLength);
            const selectedMon = monsters[randomSelectMon];
            setMyMon({...selectedMon, feature: `Featured Monster`, link:`/monsters/${selectedMon.id}`, linkText:"Check out the Lore"});
        }

        //to generate and store info for random episode:
        const randomEp = () =>{
            const seasonSelected = Math.floor(Math.random()* seasonLength);
            const season = episodes[seasonSelected];
            if (!season || !Array.isArray(season.epInfo)) return;

            const numEpisodes = season.epInfo.length;
            const episodeSelected = Math.floor(Math.random()*numEpisodes);
            const episode = season.epInfo[episodeSelected];

            setMyEp({...episode, feature:"Featured Episode", linkText:"Visit the Archives"});
        }

        randomChar();
        randomMon();
        randomEp();
    }, []);


    //feature, imgsrc, subtitle, description, link, linkText
    return (
        <div className="features-container">
            <Feature {...myMon} contentType="monster" />
            <Feature {...myEp} contentType="episode"/>
            <Feature {...myChar} contentType="character" />
        </div>
    );
}