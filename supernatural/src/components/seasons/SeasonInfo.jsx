//takes title, imgsrc, description, majorUpdates, characterIntros, epNumbers, yearAired, totalMonsters, bodyCount
import { episodes } from "../data/episodeInfo";
import SeasonMap from "./SeasonMap";
import InfoDiv from "../InfoDiv";
import { useState} from "react";
import { useNavigate } from "react-router-dom";

export default function SeasonInfo({num}){

    //get the information for the current season:
    const myEp = episodes[num];

    //get the information to create a SeasonMap element (if needed):
    const introductions = myEp.characterIntros;
    //const updateInfo = myEp.majorUpdates;
    const deathInfo = myEp.majorDeaths;

    //check to make sure it has these sections!
    //const hasUpdates = Array.isArray(updateInfo) && updateInfo.length > 0;
    const hasDeaths = Array.isArray(deathInfo) && deathInfo.length > 0;


    //for the selections options:
    const [isOpen, setIsOpen] = useState(false); 
    const navigate = useNavigate();

    //function to know state of whether the selection menu is open:
    const handleToggle = () => setIsOpen((prev) => !prev);

    //navigate to correct episodes page of desired selection:
    const handleSeasonSelect = (num) => {
        navigate(`/seasons/${num}`);
        setIsOpen(false); //close it
    };

    const getContributors = (isAuthors) => {
        const seen = new Set();
        const uniqueContributors = [];

        for (let ep of myEp.epInfo) {
            //data to be used based on if isAuthors
            const raw = isAuthors ? ep.writ : ep.dir;

            // data entry types: single entry, double entry, and triple entry
            //double entry has: entry1 and entry2, triple entry has: entry1, entry2 and entry3
            const parts = raw.split(",").flatMap(part => part.split(" and "));

            //go through parts names and see if alread seen- if not, add.
            for (let name of parts) {
                const trimmed = name.trim();
                const normalized = trimmed.toLowerCase();

                //if not in the set, add it.
                if (!seen.has(normalized)) {
                    seen.add(normalized);
                    uniqueContributors.push(trimmed);
                }
            }
        }

        return uniqueContributors.join(", ");
    };

    
    const getAuthors = getContributors(true);
    const getDir = getContributors(false);

    const seasonDropdown = (
        <div className="season-selection" id="seasoninfo-selection">
            <button className="dropdown-button" onClick={handleToggle}>
                <span className="dropdown-text">Season {num+1}</span>
                <span className="dropdown-arrow"><ion-icon name="chevron-down-outline"></ion-icon></span>
            </button>

            {isOpen && (
                <ul className="dropdown-options">
                {episodes.map((ep) => (
                    <li
                    key={ep.num}
                    className="dropdown-option"
                    onClick={() => handleSeasonSelect(ep.num)}
                    >
                    Season {ep.num}
                    </li>
                ))}
                </ul>
            )}
        </div>
    );

    //variables to hold the stats- to put in stats section variable!
    const episodeDiv = <InfoDiv title="Episodes" text={myEp.epNumbers} infoType="short" />; 
    const yearDiv = <InfoDiv title="Year Aired" text={myEp.yearAired} infoType="short" />;
    const ratingDiv = <InfoDiv title="IMDb Rating" text={myEp.ratings} infoType="short" />;
    const deathCount = <InfoDiv title="Major Deaths" text={myEp.bodyCount} infoType="short" />;
    const writDiv = <InfoDiv title="Writers" text={getAuthors} infoType="long" />
    const dirDiv = <InfoDiv title="Directors" text={getDir} infoType="long" />

    //to store seasonStats: number of episodes, year aired, rating, death count:
    const seasonStats = (
        <div className="info-section">
            {episodeDiv}
            {yearDiv}
            {ratingDiv}
            {deathCount}
        </div>
    );


    return (
        <div className="pages">
            <div className="left-page" id="info-seasons">
                <div className="season-title">
                    {seasonDropdown}
                </div>
                <div className="season-gif">
                    <img src={myEp.photo} alt={myEp.title} />
                </div>
                {seasonStats}
                <div className="season-info">
                    <p>{myEp.description}</p>
                </div>
                {writDiv}
                {dirDiv}
            </div>
            <div className="right-page" id="season-spoilers">
                <SeasonMap mapType="intro" data={introductions} />
                {/* {hasUpdates && <SeasonMap mapType="update" data={updateInfo} />} */}
                {hasDeaths && <SeasonMap mapType="death" data={deathInfo} /> }
            </div>
            
        </div>
    );
}