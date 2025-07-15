export default function Event(props){
    return (
        <div className="event-container">
            <div className="event-left">
                <div className="event-day">
                    {props.startDate}
                </div>
                <div className="event-month">
                    {props.startMonth}
                </div>
            </div>
            <div className="event-right">
                <div className="event-location">
                    {props.location}
                </div>
                <div className="event-host-site">
                    {props.eventLocation}
                </div>
            </div>
        </div>
    );
}