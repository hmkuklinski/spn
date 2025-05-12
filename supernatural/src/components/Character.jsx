import React from "react";

export default function Character(props){
    return (
        <div className="pages">
            <div className="left-page">
                <div className="character-title">
                    <h1>{props.name}</h1>
                </div>
                <div className="character-img">
                    <img src={props.imgsrc} alt={props.name}/>
                </div>
                <div className="info-section">
                    <div className="info">
                        <div className="info-title"><h4>Species: </h4></div>
                        <div className="info-answer">{props.species}</div>
                    </div>
                    <div className="info">
                        <div className="info-title"><h4>Status: </h4></div>
                        <div className="info-answer">{props.status}</div>
                    </div>
                    <div className="info">
                        <div className="info-title"><h4>Occupation: </h4></div>
                        <div className="info-answer">{props.occupation}</div>
                    </div>
                    <div className="info">
                        <div className="info-title"><h4>Age: </h4></div>
                        <div className="info-answer">{props.age}</div>
                    </div>
                    <div className="info">
                        <div className="info-title"><h4>Actor: </h4></div>
                        <div className="info-answer">{props.actor}</div>
                    </div>  
                    <div className="info">
                        <div className="info-title"><h4>Slogan</h4></div>
                        <div className="info-answer">{props.catchphrase}</div>
                    </div>
                </div>
                <div className="info-long">
                        <div className="info-title"><h4>Relationships: </h4></div>
                        <div className="info-answer-long">{props.relationships}</div>
                    </div> 
            </div>
            <div className="right-page">
                    <div className="info-long">
                        <div className="info-title"><h4>Nicknames: </h4></div>
                        <div className="info-answer-long">{props.nicknames}</div>
                    </div>
                <div className="info-long">
                    <div className="info-title"><h4>Strengths: </h4></div>
                    <div className="info-answer-long">{props.strengths}</div>
                </div> 
                <div className="info-long">
                    <div className="info-title"><h4>Weaknesses: </h4></div>
                    <div className="info-answer-long">{props.weaknesses}</div>
                </div> 
                <div className="info-multiple">
                    <div className="info-title"><h4>Memorable Quotes: </h4></div>
                    <div className="info-multiple-text">
                        <ul>
                        {props.quotes.map((quote)=>(
                            <li key={quote.id}>"{quote.text}"</li>
        
                        ))}
                        </ul>
                    </div>
                </div> 
                <div className="info-multiple">
                    <div className="info-title"><h4>Total Deaths: {props.totalDeaths}</h4></div>
                    <div className="info-multiple-text">
                        <p>{props.deaths.map(death => death.text).join(', ')}</p>
                    </div>
                </div> 
                {/* <div className="info-long">
                    <div className="info-title"><h4>Fun Fact: </h4></div>
                    <div className="info-answer-long">{props.fact}</div>
                </div> */}
            </div>
        </div>
    );
}