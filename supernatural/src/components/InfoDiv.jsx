//This component formats the different stats/information for characters or seasons
//must pass in: title and infoType. basic elements will pass text. if they have a list, will pass as quoteFacts or deaths.

export default function InfoDiv({title, text=null, infoType, stat=null, quoteFacts=[], hasDeaths=null, deaths=[]}){
    //where the title and answer are next to each other:
    const infoShort = (
        <div className="info">
            <div className="info-title"><h4>{title}</h4></div>
            <div className="info-answer">{text}</div>
        </div>
    );

    //where the div has a larger margin/padding (extra spacing)
    const infoShortSpaced = (
        <div className="info-slogan">
            <div className="info-title"><h4>{title}</h4></div>
            <div className="info-answer">{text}</div>
        </div>
    );

    //where the title and answer are on separate lines- title above text
    const infoLong = (
        <div className="info-long">
            <div className="info-title2"><h4>{title}</h4></div>
            <div className="info-answer-long">{text}</div>
        </div>
    );

    //where the title is center and the quotes are mapped- elements are surrounded by quotation marks
    const infoQuotes = (
        <div className="info-quotes">
            <div className="info-title2">
                <h4>{title}</h4>
            </div>
            <div className="info-quotes-text">
                <ul>
                    {quoteFacts.map((quote)=>(
                        <li key={quote.id}>"{quote.text}"</li>

                    ))}
                </ul>
            </div>
        </div> 
    );

    //where the title is center and the facts are mapped- elements are numbered 
    const infoFacts = (
        <div className="info-quotes">
            <div className="info-title2">
                <h4>Interesting Facts: </h4>
            </div>
            <div className="info-quotes-text">
                <ul>
                {quoteFacts.map((fact)=>(
                    <li key={fact.id}>{fact.id}. {fact.text}</li>
                ))}
                </ul>
            </div>
        </div> 
    );

    //where the title is above the text- where the elements are in a single line, separated by a comma
    const infoList = (
        <div className="info-long" style={{ height: !hasDeaths ? "150px" : "auto" }}>
            <div className="info-title2"><h4>{title}: {stat}</h4></div>
                {hasDeaths && (
                    <div className="info-text">
                        <p>{deaths.map(death => death.text).join(', ')}</p>
                    </div>
                )}
        </div> 
    );

    //for strengths and weaknesses: converts array into single line with , as delimiter
    const infoListText = (
        <div className="info-longer">
            <div className="info-title2"><h4>{title}</h4></div>
            <div className="info-quotes-text">
                <ul>
                    {Array.isArray(text) && text.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );


    //map to appropriate format based on infoType
    const infoFormat = {
        short: infoShort,
        shortSpaced: infoShortSpaced,
        long: infoLong,
        quotes: infoQuotes,
        deaths: infoList,
        facts: infoFacts,
        infolist: infoListText
    }
    
    //return the div of specified info type or return nothing (in case of invalid infoType)
    return infoFormat[infoType] || null;
}