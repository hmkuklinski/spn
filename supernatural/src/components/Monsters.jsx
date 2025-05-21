import JohnsJournal from './JohnsJournal';
import Monster from './Monster';
import Layout from './Layout';
import Search from './Search.jsx';
import SearchFailed from './SearchFailed.jsx';

import {monsters} from './monsterInfo.js';
import {useParams, useNavigate} from "react-router-dom";
import { useState } from 'react';

export default function Characters(){
    //get current /characters/:id (need to render correct page)
    const {id} = useParams();
    //to "change" the page if user types valid name in search bar and clicks button/enter
    const navigate = useNavigate(); 

    //for search bar function:
    const [searchEntry, setSearchEntry] = useState("");
    const [failed, setFailed]= useState(false);

    //for "fading" journal on fail:
    const journal = document.getElementById("jj");


    //find current character in characters array
    const currMonsterIndex = monsters.findIndex(monster => monster.id === id);

    //error --> character not in characters array (the web address is invalid!)
    if (currMonsterIndex === -1){
        return <Layout><SearchFailed buttonText="Glossary" buttonLink="/monsters" /></Layout>
    }

    //determined character exists since id matches ones in data --> get the character information:
    const currMonster = monsters[currMonsterIndex];
    
    //see if previous character: access if valid, set to null if invalid
    const prevCh =  currMonster.prev != null? monsters[currMonster.prev]: null;
    
    //variable to hold the previous link (for passing into component later to render proper page/navigatons)
    let prevLink = null;
    //dean redirects to glossary- else, has previous set to prev character's id
    if (currMonster.id === "ghost") 
        prevLink = "/monsters";
    else{
        if (prevCh) 
            prevLink=`/monsters/${prevCh.id}`;
    }

    //see if there are characters after current one (if last one--> redirect page)
    const nextCh =  currMonster.next != null? monsters[currMonster.next]: null;
    
    //variable to hold the next link (for passing into component later to render proper page/navigatons)
    let nextLink = null;
    
    //more characters in list, can set valid next link
    if(currMonsterIndex<monsters.length-1){
        nextLink = `/monsters/${nextCh.id}`;
    }
    else{ //no valid --> last character in array, redirect to glossary
        nextLink = "/monsters/redirect";
    }

    //function to check if user entered text is a valid spn character (and to display character entry if valid)
    const updateCurrMonster= ()=>{
        //useState variable trimmed and lowercased to ensure proper comparison/find funciton
        let finalSearch =searchEntry.trim().toLowerCase();

        //ensures that if user types Sam, will still be able to see Sam Winchester
        const matching = monsters.find(monster => monster.name.toLowerCase().includes(finalSearch));

        //a character was found, we can navigate to the character's "page"
        if (matching){
            //change boolean:
            setFailed(false);
            //clear input box:
            setSearchEntry("");
            //change the current address to matching character
            navigate(`/monsters/${matching.id}`);
        }
        else{
            journal.style.opacity= "0.5";
            //reset to false
            setFailed(false);
            //clear input box
            setSearchEntry("");
            setTimeout(() => {
                setFailed(true);
            }, 0);
        }
    }

    
    return (
        <Layout>
            <Search searchType="monster" placeholder="Enter Monster Name Here..." searchEntry={searchEntry} setSearchEntry={setSearchEntry} clickAction={updateCurrMonster} />
            {failed && <SearchFailed buttonText="Glossary" buttonLink ="/monsters" />}
            <JohnsJournal prevPageLink={prevLink} nextPageLink={nextLink}>
                <Monster {...currMonster} />
            </JohnsJournal>
        </Layout>
    );
}