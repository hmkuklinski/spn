import InfoDiv from "../InfoDiv";

export default function Monster(props){
    const monsterType = <InfoDiv title="Type" infoType="short" text={props.type} />;
    const descriptionDiv = <InfoDiv title="Description" infoType="long" text={props.description} />
    const killMethod = <InfoDiv title="How to Kill" infoType="long" text={props.killedby} />
    const originStory = <InfoDiv title="Origin Story" infoType="long" text={props.mythology} />
    const strengths = <InfoDiv title="Abilities" infoType="long" text={props.abilities?.join(", ")} />
    const weaknesses = <InfoDiv title="Weaknesses" infoType="long" text={props.weaknesses?.join(", ")} />
    const appearances = <InfoDiv title="Notable Episodes" infoType="infolist" text={props.episodes} />
    return (
        <div className="pages" id="monster-pages">
            <div className="left-page">
                <div className="character-title">
                    <h1>{props.name}</h1>
                </div>
                <div className="character-img" id="monster-img">
                    <img src={props.imgsrc} alt={props.name}/>
                </div>
                {monsterType}          
                {descriptionDiv}
            </div>
            <div className="right-page">
                {killMethod}
                {originStory}
                {strengths}
                {weaknesses}
                {appearances}
                
            </div>
        </div>
    );
}