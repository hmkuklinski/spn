import JohnsJournal from './JohnsJournal';
import Sigil from './Sigil.jsx';
import { sigils } from './sigilInfo.js';
import Layout from './Layout';
import Search from './Search.jsx';
import SearchFailed from './SearchFailed.jsx';
import {Link, useParams, useNavigate} from "react-router-dom";
import { useState} from 'react';

export default function Sigils(){
    //get current /sigils/:id (need to render correct page)
    const {id} = useParams();
    //to "change" the page if user types valid name in search bar and clicks button/enter
    const navigate = useNavigate(); 

    //for search bar function:
    const [searchEntry, setSearchEntry] = useState("");
    const [failed, setFailed]= useState(false);
    const [showHelp, setShowHelp] = useState(false);


    //find current character in sigils array
    const currSigilIndex = sigils.findIndex(sigil => sigil.id === id);

    //error --> character not in sigils array (the web address is invalid!)
    if (currSigilIndex === -1){
        return <Layout><SearchFailed buttonText="Glossary" buttonLink="/sigils" /></Layout>
    }

    //determined character exists since id matches ones in data --> get the character information:
    const currSigil = sigils[currSigilIndex];
    
    //see if previous character: access if valid, set to null if invalid
    const prevSig =  currSigilIndex >0? sigils[currSigilIndex-1]: null;

    //see if there are sigils after current one (if last one--> redirect page)
    const nextSig =  currSigilIndex < sigils.length-1? sigils[currSigilIndex+1]: null;
    
    let prevLink = prevSig ? `/sigils/${prevSig.id}` : "/sigils"; 
    let nextLink = nextSig ? `/sigils/${nextSig.id}` : "/sigils/redirect";

    //function to check if user entered text is a valid spn character (and to display character entry if valid)
    const updateCurrCharacter= ()=>{
        //useState variable trimmed and lowercased to ensure proper comparison/find funciton
        let finalSearch =searchEntry.trim().toLowerCase();

        //ensures that if user types Sam, will still be able to see Sam Winchester
        const matching = sigils.find(sigil => sigil.name.toLowerCase().includes(finalSearch));

        //a character was found, we can navigate to the character's "page"
        if (matching){
            //change boolean:
            setFailed(false);
            //clear input box:
            setSearchEntry("");
            //change the current address to matching character
            navigate(`/sigils/${matching.id}`);
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
        <Link to="/sigils" className="page-nav bottom-middle" aria-label="Next page">
            <ion-icon name="home-outline"></ion-icon>
        </Link>
    );

    return (
        <Layout>
            <Search searchType="character" placeholder="Enter Character Name Here..." searchEntry={searchEntry} setSearchEntry={setSearchEntry} clickAction={updateCurrCharacter} buttonLink="/sigils" hasHelper={true} toggleHelp={displayHelp} hasHome={true}/>
            {failed && <SearchFailed buttonText="Glossary" buttonLink ="/sigils" />}
            {showHelp && <div className='helper'>
                <p>1. <b>To Search:</b> Enter the sigil name and then click the search button or hit enter. 
                <br />If there is a valid search, it will direct you to the page!</p>
                <p>2. <b>To Turn the Page:</b> Click the arrow at the bottom of the right page to go forward and the arrow at the bottom of the left page to go backwards.</p>   
                <p>3. <b>To Return to Glossary: </b>Click the home icon</p> 
            </div>}
            <JohnsJournal prevPageLink={prevLink} nextPageLink={nextLink}>
                <Sigil sig={currSigil} />
                {homeBtn}
            </JohnsJournal>
        </Layout>
    );
}