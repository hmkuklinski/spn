import Event from "./Event";
export default function ConventionEvents({eventList}){
    return (
        <div className="all-events">
            {eventList.map((event)=>(
                <Event {...event} />
            ))}
        </div>
    );
}