import ConventionEvents from "./ConventionEvents";

export default function ConventionLanding({imgsrc, desc, evList}){
    return (
        <div className="convention-landing-container">
            <div className="convention-landing-img">
                <img src={imgsrc} alt="landing" />
            </div>
            <div className="convention-landing-description">
                {desc}
            </div>
            <div className="convention-landing-events">
                <div className="convention-title">
                    <h3>Upcoming Events</h3>
                </div>
                <ConventionEvents eventList={evList} />
            </div>
        </div>
    );
}