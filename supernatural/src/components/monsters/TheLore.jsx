import JohnsJournal from '../journal/JohnsJournal.jsx';
import Layout from '../Layout.jsx';
import Search from '../searchbar/Search.jsx';
import SearchFailed from '../searchbar/SearchFailed.jsx';
import Monster from './Monster.jsx';
import { monsters } from '../data/monsterInfo.js';
import { useState} from 'react';
import { useRouter } from 'next/router.js';
import Link from 'next/link.js';

export default function TheLore({ monsterId }){
    //get current /monsters/:id (need to render correct page)
    const id = monsterId;
    //to "change" the page if user types valid name in search bar and clicks button/enter
    const router = useRouter();

    //for search bar function:
    const [searchEntry, setSearchEntry] = useState("");
    const [failed, setFailed]= useState(false);
    


    //find current monsters in monsters array
    const currMonstersIndex = monsters.findIndex(monsters => monsters.id === id);

    //error --> monsters not in monsters array (the web address is invalid!)
    if (currMonstersIndex === -1){
        return <Layout><SearchFailed buttonText="Glossary" buttonLink="/monsters" /></Layout>
    }

    //determined monsters exists since id matches ones in data --> get the monsters information:
    const currMonsters = monsters[currMonstersIndex];
    
    //see if previous monsters: access if valid, set to null if invalid
    const prevCh =  currMonstersIndex >0? monsters[currMonstersIndex-1]: null;

    //see if there are monsters after current one (if last one--> redirect page)
    const nextCh =  currMonstersIndex < monsters.length-1? monsters[currMonstersIndex+1]: null;
    
    let prevLink = prevCh ? `/monsters/${prevCh.id}` : "/monsters"; 
    let nextLink = nextCh ? `/monsters/${nextCh.id}` : "/monsters/redirect";

    //function to check if user entered text is a valid spn monsters (and to display monsters entry if valid)
    const updateCurrMonsters= ()=>{
        //useState variable trimmed and lowercased to ensure proper comparison/find funciton
        let finalSearch =searchEntry.trim().toLowerCase();

        //ensures that if user types Sam, will still be able to see Sam Winchester
        const matching = monsters.find(monsters => monsters.name.toLowerCase().includes(finalSearch));

        //a monsters was found, we can navigate to the monsters's "page"
        if (matching){
            //change boolean:
            setFailed(false);
            //clear input box:
            setSearchEntry("");
            //change the current address to matching monsters
            router.push(`/monsters/${matching.id}`);
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

    const homeBtn = (
        <Link href="/monsters" className="page-nav bottom-middle" aria-label="Next page">
            <ion-icon name="home-outline"></ion-icon>
        </Link>
    );

    return (
        <Layout>
            <Search searchType="monsters" placeholder="Enter Monsters Name Here..." searchEntry={searchEntry} setSearchEntry={setSearchEntry} clickAction={updateCurrMonsters} buttonLink="/monsters"/>
            {failed && <SearchFailed buttonText="Glossary" buttonLink ="/monsters" />}
            <JohnsJournal prevPageLink={prevLink} nextPageLink={nextLink}>
                <Monster {...currMonsters} />
                {homeBtn}
            </JohnsJournal>
        </Layout>
    );
}