//takes title, imgsrc, description, majorUpdates, characterIntros, epNumbers, yearAired, totalMonsters, bodyCount
import { episodes } from "./episodeInfo";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function SeasonInfo({num}){
    const myEp = episodes[num];
    const [showDeaths, setShowDeaths] = useState(false);
    const [showUpdates, setShowUpdates] = useState(false);

    useEffect(()=>{
        setShowDeaths(false);
        setShowUpdates(false);
    }, [num]);
    return (
        <div className="pages">
            <div className="left-page">
                <div className="season-title">
                    <h2>{myEp.title}</h2>
                </div>
                <div className="season-info">
                    <p>{myEp.description}</p>
                </div>
                {Array.isArray(myEp.characterIntros) && (
                <div className="char-section">
                    <div className="char-title">
                    <h3>New Characters Introduced</h3>
                    </div>
                    {myEp.characterIntros.map((intro) => (
                    <div className="char-entry" key={intro.id}>
                        <div className="char-name">
                        <Link to={`/characters/${intro.id}`}><h3>{intro.name}</h3></Link>
                        </div>
                        <div className="char-text">{intro.text}</div>
                    </div>
                    ))}
                </div>
                )}

                {Array.isArray(myEp.majorUpdates) && (
                <div className="char-section" id="intros">
                    <div className="char-title">
                        <h3>Major Character Updates</h3>
                    </div>
                    {!showUpdates && <div className="updates"><button onClick={() => setShowUpdates(true)}>Unlock Spoilers</button></div>}
                    {showUpdates && (
                    <>
                        
                        {myEp.majorUpdates.map((update) => (
                        <div className="char-entry" key={update.id}>
                            <div className="char-name">
                            <Link to={`/characters/${update.id}`}>
                                <h3>{update.name}</h3>
                            </Link>
                            </div>
                            <div className="char-text">{update.text}</div>
                        </div>
                        ))}
                    </>
                    )}
                </div>
                )}

                

            </div>
            <div className="right-page">
                <div className="season-gif">
                    <img src={myEp.photo} alt={myEp.title} />
                </div>
                <div className="info-section">
                    <div className="info">
                        <div className="info-title"><h4>Episodes </h4></div>
                        <div className="info-answer">{myEp.epNumbers}</div>
                    </div>
                    <div className="info">
                        <div className="info-title"><h4>Year Aired </h4></div>
                        <div className="info-answer">{myEp.yearAired}</div>
                    </div>
                    <div className="info">
                        <div className="info-title"><h4>IMDb Rating</h4></div>
                        <div className="info-answer">{myEp.ratings}</div>
                    </div>
                    <div className="info">
                        <div className="info-title"><h4>Major Deaths</h4></div>
                        <div className="info-answer">{myEp.bodyCount}</div>
                    </div>
                </div>
                {Array.isArray(myEp.majorDeaths) && (
                <div className="char-section" id="deaths">
                    <div className="char-title">
                        <h3>Major Deaths</h3>
                    </div>
                    {!showDeaths && <div className="spoilers"><button onClick={() => setShowDeaths(true)}>Unlock Spoilers</button></div>}
                    {showDeaths && (
                    <>
                        
                        {myEp.majorDeaths.map((char) => (
                        <div className="char-entry" key={char.id}>
                            <div className="char-name">
                            <Link to={`/characters/${char.id}`}>
                                <h3>{char.name}{char.text ? `: ${char.text}` : ''}</h3>
                            </Link>
                            </div>
                        </div>
                        ))}
                    </>
                    )}
                </div>
                )}
            </div>
        </div>
    );
}