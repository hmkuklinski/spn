import JohnsJournal from './JohnsJournal';
import Character from './Character';
import Layout from './Layout';
import Search from './Search.jsx';
import SearchFailed from './SearchFailed.jsx';

import {characters} from './characterInfo.js';
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
    const currCharacterIndex = characters.findIndex(character => character.id === id);

    //error --> character not in characters array (the web address is invalid!)
    if (currCharacterIndex === -1){
        return <Layout><SearchFailed buttonText="Glossary" buttonLink="/characters" /></Layout>
    }

    //determined character exists since id matches ones in data --> get the character information:
    const currCharacter = characters[currCharacterIndex];
    
    //see if previous character: access if valid, set to null if invalid
    const prevCh =  currCharacter.prev != null? characters[currCharacter.prev]: null;
    
    //variable to hold the previous link (for passing into component later to render proper page/navigatons)
    let prevLink = null;
    //dean redirects to glossary- else, has previous set to prev character's id
    if (currCharacter.id === "dean") 
        prevLink = "/characters";
    else{
        if (prevCh) 
            prevLink=`/characters/${prevCh.id}`;
    }

    //see if there are characters after current one (if last one--> redirect page)
    const nextCh =  currCharacter.next != null? characters[currCharacter.next]: null;
    
    //variable to hold the next link (for passing into component later to render proper page/navigatons)
    let nextLink = null;
    
    //more characters in list, can set valid next link
    if(currCharacterIndex<characters.length-1){
        nextLink = `/characters/${nextCh.id}`;
    }
    else{ //no valid --> last character in array, redirect to glossary
        nextLink = "/characters/redirect";
    }

    //function to check if user entered text is a valid spn character (and to display character entry if valid)
    const updateCurrCharacter= ()=>{
        //useState variable trimmed and lowercased to ensure proper comparison/find funciton
        let finalSearch =searchEntry.trim().toLowerCase();

        //ensures that if user types Sam, will still be able to see Sam Winchester
        const matching = characters.find(character => character.name.toLowerCase().includes(finalSearch));

        //a character was found, we can navigate to the character's "page"
        if (matching){
            //change boolean:
            setFailed(false);
            //clear input box:
            setSearchEntry("");
            //change the current address to matching character
            navigate(`/characters/${matching.id}`);
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
            <Search searchType="character" placeholder="Enter Character Name Here..." searchEntry={searchEntry} setSearchEntry={setSearchEntry} clickAction={updateCurrCharacter} buttonLink="/characters" />
            {failed && <SearchFailed buttonText="Glossary" buttonLink ="/characters" />}
            <JohnsJournal prevPageLink={prevLink} nextPageLink={nextLink}>
                <Character {...currCharacter} />
            </JohnsJournal>
        </Layout>
    );
}