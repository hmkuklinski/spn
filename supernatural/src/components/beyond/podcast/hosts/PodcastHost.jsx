export default function PodcastHosts(props){
    return (
        <div className="host-main-container">
            <div className="host-container">
                <div className="host-img">
                    <img src={props.imgsrc} alt="host" />
                </div>
                <div className="host-info">
                    <div className="host-name">
                        <h3>{props.name}</h3>
                    </div>
                    <div className="host-role">
                        <h5>{props.role}</h5>
                    </div>
                </div>
            </div>
            <div className="host-background">
                <p>{props.bg}</p>
            </div>
        </div>
    );
}