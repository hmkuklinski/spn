import {useState} from 'react';
import JohnsJournal from './JohnsJournal';
import Layout from './Layout';
import Search from './Search';
import SearchFailed from './SearchFailed';
import { characters } from './characterInfo';
import {monsters} from './monsterInfo';
import { Link, useNavigate} from 'react-router-dom';

export default function Glossary(props){
    
    //input for search
    const [searchEntry, setSearchEntry] = useState('');
    //was search successful?
    const [failed, setFailed] = useState(false); 
    //was help button clicked?
    const [showHelp, setShowHelp] = useState(false);

    //to "change" the page if user types valid name in search bar and clicks button/enter
    const navigate = useNavigate();

    const chFirst = characters[0].id;
    const monFirst = monsters[0].id;

    const nextPageLink = props.glossaryType === "characters"? `/characters/${chFirst}`: `/monsters/${monFirst}`;
    const dataInfo = props.glossaryType === "characters"? characters: monsters;

    const leftStop = 24;

    const filterText =  "Character List";

    //function to check if user entered text is a valid entry (and to display entry if valid)
    const updateCurrEntry= ()=>{
        //useState variable trimmed and lowercased to ensure proper comparison/find funciton
        let finalSearch =searchEntry.trim().toLowerCase();

        //ensures that if user types Sam, will still be able to see Sam Winchester
        const matching = dataInfo.find(item => item.id.toLowerCase().includes(finalSearch));


        //a character was found, we can navigate to the character's "page"
        if (matching){
            //change boolean:
            setFailed(false);
            //clear input box:
            setSearchEntry("");
            //change the current address to matching character
            navigate(`/${props.baseLink}/${matching.id}`);

              

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

    const displayHelp = () => {
        setShowHelp(prev => !prev);
    };


    return (
        <Layout>
            <Search searchType={props.glossaryType} placeholder={`Enter ${props.glossaryType} Name Here...`} searchEntry={searchEntry} setSearchEntry={setSearchEntry} clickAction={updateCurrEntry} buttonLink={props.baseLink} hasFilter={false} hasHelper={true} toggleHelp={displayHelp} hasHome={false}/>    
            {failed && <SearchFailed buttonText="Glossary" buttonLink ={`/${props.baseLink}`} />}
             {showHelp && <div className='helper'>
                <p>1. <b>To Search:</b> Enter the name of the character and then click the search button or hit enter. 
                <br />If there is a valid search, it will direct you to the page!</p>
                <p>2. <b>To Turn the Page:</b> Scroll down to the bottom of the display and click the right arrow.</p>    
            </div>}
            <JohnsJournal prevPageLink={null} nextPageLink={nextPageLink}>
                <div className="left-page" id="glossary-left">
                    <div className="glossary-title">
                        <h2>{props.title}</h2>
                    </div>
                    <div className="glossary-image">
                        <img src={props.imgsrc} alt={props.title} />
                    </div>
                    <div className="glossary-description">
                        {props.description}
                    </div>
                    <ol className="glossary-ul">
                        {dataInfo.slice(0, leftStop).map(item => (
                        <li key={item.id} className="glossary-li">
                            <Link to={`/${props.baseLink}/${item.id}`}>
                            {item.name}
                            </Link>
                        </li>
                        ))}
                    </ol>
                    
                </div>
                <div className="right-page" id="glossary-right">
                    <h2>{filterText}</h2>
                    <ol className="glossary-ul" start={leftStop + 1}>
                        {dataInfo.slice(leftStop, dataInfo.length).map(item => (
                        <li key={item.id} className="glossary-li">
                            <Link to={`/${props.baseLink}/${item.id}`}>
                            {item.name}
                            </Link>
                        </li>
                        ))}
                    </ol>
                </div>
            </JohnsJournal>
        </Layout>
    );
}