import { useState, useEffect } from "react";
import {Link} from "react-router-dom";

export default function SeasonMap({mapType, data}){
    const [showSpoilers, setShowSpoilers] = useState(mapType === "intro");

    useEffect(()=>{
        setShowSpoilers(mapType==="intro");
    },[mapType, data])
    //Show appropriate header based on mapType:
    let charTitle = (
        <div className="char-title">
            <h3>
                {mapType === "intro" && "New Characters Introduced"}
                {mapType === "update" && "Major Character Updates"}
                {mapType === "death" && "Major Deaths"}
            </h3>
        </div>
    );
    
    //if showSpoilers is true: render the information, else: hide the information
    //will pass in the array of information we're using (variable: data), the information includes character name with link and description (all contained in array)

    return (
        <div className="char-section">
            {charTitle}
            {!showSpoilers && (
                <div className={mapType === "death" ? "spoilers" : "updates"}>
                    <button onClick={() => setShowSpoilers(true)}>Unlock Spoilers</button>
                </div>
            )}
            {showSpoilers && (
                <div className={`${mapType}-container`}>
                    {data.map((char) => (
                        <div className="char-entry" key={char.id}>
                            <div className="char-name">
                                <Link to={`/characters/${char.id}`}>
                                    <h3>{char.name}</h3>
                                </Link>
                            </div>
                            <div className="char-text">
                                {char.text}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );






}