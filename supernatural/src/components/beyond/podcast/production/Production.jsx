import Social from "../socials/social";
export default function Production(props){
    return (
        <div className="production" id={`${props.id}-container`}>
            {props.sectionTitle && (
                <div className="stats-title" id={`${props.id}-title`}>
                    <h2>{props.sectionTitle}</h2>
                </div>
            )}
            <div className="production-logo" id={`${props.id}-logo`}>
                <img src={props.logo} alt={props.id} />
            </div>
            <div className="productions-socials"id={`${props.id}-socials`}>
                {props.socials.map((soc)=>(
                    <Social {...soc} />
                ))}
            </div>
        </div>
    );
}