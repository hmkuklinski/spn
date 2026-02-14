import JohnsJournal from '../journal/JohnsJournal.jsx';
import Character from './Character';
import Layout from '../Layout.jsx';
import Search from '../searchbar/Search.jsx';
import SearchFailed from '../searchbar/SearchFailed.jsx';
import {characters} from '../data/characterInfo.js';
import { useState} from 'react';
import Link from 'next/link.js';
import { useRouter } from 'next/router';


export default function Characters({ characterId }){
    //get current /characters/:id (need to render correct page)
    const id= characterId;
    const router = useRouter();

    //for search bar function:
    const [searchEntry, setSearchEntry] = useState("");
    const [failed, setFailed]= useState(false);
    const [showHelp, setShowHelp] = useState(false);


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
            router.push(`/characters/${matching.id}`);
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

    const displayHelp=()=>{
        setShowHelp(prev =>!prev);
    }
    const homeBtn = (
        <Link href="/characters" className="page-nav bottom-middle" aria-label="Next page">
            <ion-icon name="home-outline"></ion-icon>
        </Link>
    );

    return (
        <Layout>
            <Search searchType="character" placeholder="Enter Character Name Here..." searchEntry={searchEntry} setSearchEntry={setSearchEntry} clickAction={updateCurrCharacter} buttonLink="/characters" hasHelper={true} toggleHelp={displayHelp} hasHome={true}/>
            {failed && <SearchFailed buttonText="Glossary" buttonLink ="/characters" />}
            {showHelp && <div className='helper'>
                <p>1. <b>To Search:</b> Enter the name of the character and then click the search button or hit enter. If there is a valid search, it will direct you to the page!</p>
                <p>2. <b>To Turn the Page:</b> Click the arrow on the bottom of the left page to go back and the arrow on the bottom of the right page to go to the next page.</p>   
                <p>3. <b>To Return to Glossary: </b>Click the home icon at the bottom of the page in between the navigation arrows.</p> 
            </div>}
            <JohnsJournal prevPageLink={prevLink} nextPageLink={nextLink}>
                <Character {...currCharacter} />
                {homeBtn}
            </JohnsJournal>
        </Layout>
    );
}