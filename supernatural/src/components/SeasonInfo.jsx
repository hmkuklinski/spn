//takes title, imgsrc, description, majorUpdates, characterIntros, epNumbers, yearAired, totalMonsters, bodyCount
import { episodes } from "./episodeInfo";
import { useState } from "react";
export default function SeasonInfo({num}){
    const myEp = episodes[num];
    const [spoilers, setSpoilers] = useState(false);
    const showDeaths=()=>{
        setSpoilers(true);
    }
    return (
        <div className="pages">
            <div className="left-page">
                <div className="season-info">
                    <h2>{myEp.title}</h2>
                </div>
                {Array.isArray(myEp.majorUpdates) && (
                    <div className="char-updates">
                        {myEp.majorUpdates.map((update) => (
                            <div className="update-container" key={update.id}>
                                <div className="char-name"><h3>{update.id}</h3></div>
                                <div className="update">{update.text}</div>
                            </div>
                        ))}

                    </div>
                )}
                {Array.isArray(myEp.characterIntros) && (
                     <div className="char-intros">
                        {myEp.characterIntros.map((intro)=>(
                            <div className="intro-container">
                                <div className="char-name"><h3>{intro.id}</h3></div>
                                <div className="update">{intro.text}</div>
                            </div>
                        ))}
                    </div>
                )}
                {Array.isArray(myEp.majorDeaths) && (
                    <div className="char-deaths">
                        <div className="" id="btn-death">
                            {!spoilers && <button onClick={showDeaths()}>Unlock Lore</button>}
                            {spoilers &&
                                Array.isArray(myEp.majorDeaths) &&
                                myEp.majorDeaths.map((char) => (
                                    <div className="characters" key={char.id}>
                                        <p>{char.id}: {char.text}</p>
                                    </div>
                                ))
                            }
                        </div>
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
                        <div className="info-answer">{myEp.episodes}</div>
                    </div>
                    <div className="info">
                        <div className="info-title"><h4>Year Aired </h4></div>
                        <div className="info-answer">{myEp.yearAired}</div>
                    </div>
                    <div className="info">
                        <div className="info-title"><h4>Total Monsters </h4></div>
                        <div className="info-answer">{myEp.totalMonsters}</div>
                    </div>
                    <div className="info">
                        <div className="info-title"><h4>Body Count</h4></div>
                        <div className="info-answer">{myEp.bodyCount}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}