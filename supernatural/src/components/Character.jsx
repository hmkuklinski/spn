import InfoDiv from "./InfoDiv";

export default function Character(props){
    //for the title of the page:
    const charTitle = (
        <div className="character-title">
            <h1>{props.name}</h1>
        </div>
    );
    //an image of the character:
    const charImg = (
        <div className="character-img">
            <img src={props.imgsrc} alt={props.name}/>
        </div>
    );

    //variables that hold my infodiv components for each stat/information/quote:
    const speciesDiv = <InfoDiv title="Species" text={props.species} infoType="short"/>;
    const statusDiv = <InfoDiv title="Status" text={props.status} infoType="short" />;
    const ageDiv = <InfoDiv title="Age" text={props.age} infoType="short" />;
    const nicknameDiv = <InfoDiv title="Nicknames" text={props.nicknames} infoType="long" />;
    const occupationHunterDiv = <InfoDiv title="Occupation" text={props.occupation} infoType="short" />;
    const occupationDiv = <InfoDiv title="Occupation" text={props.occupation} infoType="long" />;
    const relationshipDiv = <InfoDiv title="Relationships" text={props.relationships} infoType="long" />;
    const actorDiv = <InfoDiv title="Actor" text={props.actor} infoType="shortSpaced" />;
    const catchphraseDiv = <InfoDiv title="Slogan" text={props.catchphrase} infoType="shortSpaced" />;
    const strengthsDiv = <InfoDiv title="Strengths" text={props.strengths} infoType="long" />;
    const weaknessesDiv = <InfoDiv title="Weaknesses" text={props.weaknesses} infoType="long" />;
    const quotesDiv = <InfoDiv title="Memorable Quotes" quoteFacts={props.quotes} infoType="quotes" />;
    const deathsDiv = <InfoDiv title="Total Deaths" stat={props.totalDeaths} hasDeaths={props.deaths} deaths={props.deaths} infoType="deaths"/>;
    const factsDiv = <InfoDiv title="Interesting Facts" quoteFacts={props.funfacts} infoType="facts" />;

    return (
        <div className="pages">
            <div className="left-page">
                {charTitle}
                {charImg}
                <div className="info-section">
                    {speciesDiv}
                    {statusDiv}
                    {ageDiv}
                    {props.occupation &&  props.occupation === "Hunter" && occupationHunterDiv}
                </div>
                {props.occupation && props.occupation !== "Hunter" && occupationDiv}
                {props.nicknames && nicknameDiv}
                {actorDiv}
                {props.catchphrase &&  catchphraseDiv}
            </div>
            <div className="right-page">
                {relationshipDiv}
                {strengthsDiv}
                {weaknessesDiv}
                {quotesDiv}
                {deathsDiv}
                {factsDiv}
            </div>
        </div>
    );
}