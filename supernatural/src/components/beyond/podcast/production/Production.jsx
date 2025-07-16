import Social from "../socials/social";
export default function Production(props){
    return (
        <div className="production">
            <div className="stats-title">
                <h2>{props.sectionTitle}</h2>
            </div>
            <div className="production-logo" id={`${props.id}-logo`}>
                <img src={props.logo} alt={props.id} />
            </div>
            {/* <div className="production-about">
                <p>{props.desc}</p>
            </div> */}
            <div className="productions-socials">
                {props.socials.map((soc)=>(
                    <Social {...soc} />
                ))}
            </div>
        </div>
    );
}