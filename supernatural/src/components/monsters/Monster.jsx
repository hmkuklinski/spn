import React from "react";

export default function Monster(props){
    return (
        <div className="pages" id="monster-pages">
            <div className="left-page">
                <div className="character-title">
                    <h1>{props.name}</h1>
                </div>
                <div className="character-img">
                    <img src={props.imgsrc} alt={props.name}/>
                </div>
                <div className="info-section">
                    <div className="info" id="monster-type">
                        <div className="info-title"><h4>Type </h4></div>
                        <div className="info-answer">{props.type}</div>
                    </div>          
                </div>
                <div className="info-long">
                    <div className="info-title2"><h4>Description </h4></div>
                    <div className="info-answer-long">{props.description}</div>
                </div>
            </div>
            <div className="right-page">
                <div className="info-long" id="killmethod">
                    <div className="info-title2"><h4>How to Kill Them:</h4></div>
                    <div className="info-answer-long">{props.killedby}</div>
                </div>
                <div className="info-long" id="originstory">
                    <div className="info-title2"><h4>Origin Story: </h4></div>
                    <div className="info-answer-long">{props.mythology}</div>
                </div>
                <div className="info-longer" id="abilities">
                    <div className="info-title2"><h4>Abilities</h4></div>
                    <ul className="info-list">
                    {Array.isArray(props.abilities) &&
                        props.abilities.map((ability, index) => (
                        <li key={index}>{ability}</li>
                    ))}
                    </ul>

                </div>
                <div className="info-longer" id="weaknesses">
                    <div className="info-title2"><h4>Weaknesses:</h4></div>
                    <ul className="info-list">
                    {Array.isArray(props.weaknesses) &&
                        props.weaknesses.map((weakness, index) => (
                        <li key={index}>{weakness}</li>
                    ))}
                    </ul>

                </div>
                <div className="info-longer">
                    <div className="info-title2"><h4>Notable Episodes</h4></div>
                    <div className="info-quotes-text">
                        <ul>
                            {Array.isArray(props.episodes) &&
                                props.episodes.map((ep, index) => (
                                <li key={index}>{ep}</li>
                            ))}
                        </ul>
                    </div>
                </div> 
            </div>
        </div>
    );
}