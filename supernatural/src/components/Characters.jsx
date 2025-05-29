import JohnsJournal from './JohnsJournal';
import Character from './Character';
import Layout from './Layout';
import Search from './Search.jsx';
import SearchFailed from './SearchFailed.jsx';
import {characters} from './characterInfo.js';
import {useParams, useNavigate} from "react-router-dom";
import { useState} from 'react';

export default function Characters(){
    //get current /characters/:id (need to render correct page)
    const {id} = useParams();
    //to "change" the page if user types valid name in search bar and clicks button/enter
    const navigate = useNavigate(); 

    //for search bar function:
    const [searchEntry, setSearchEntry] = useState("");
    const [failed, setFailed]= useState(false);
    


    //find current character in characters array
    const currCharacterIndex = characters.findIndex(character => character.id === id);

    //error --> character not in characters array (the web address is invalid!)
    if (currCharacterIndex === -1){
        return <Layout><SearchFailed buttonText="Glossary" buttonLink="/characters" /></Layout>
    }

    //determined character exists since id matches ones in data --> get the character information:
    const currCharacter = characters[currCharacterIndex];
    
    //see if previous character: access if valid, set to null if invalid
    const prevCh =  currCharacterIndex >0? characters[currCharacterIndex-1]: null;

    //see if there are characters after current one (if last one--> redirect page)
    const nextCh =  currCharacterIndex < characters.length-1? characters[currCharacterIndex+1]: null;
    
    let prevLink = prevCh ? `/characters/${prevCh.id}` : "/characters"; 
    let nextLink = nextCh ? `/characters/${nextCh.id}` : "/characters/redirect";

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
            const journal = document.getElementById("jj");
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
            <Search searchType="character" placeholder="Enter Character Name Here..." searchEntry={searchEntry} setSearchEntry={setSearchEntry} clickAction={updateCurrCharacter} buttonLink="/characters"/>
            {failed && <SearchFailed buttonText="Glossary" buttonLink ="/characters" />}
            <JohnsJournal prevPageLink={prevLink} nextPageLink={nextLink}>
                <Character {...currCharacter} />
            </JohnsJournal>
        </Layout>
    );
}