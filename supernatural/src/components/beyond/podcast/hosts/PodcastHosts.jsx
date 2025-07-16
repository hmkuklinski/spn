import PodcastHost from "./PodcastHost";
export default function PodcastHosts(props){
    return (
        <div className="podcast-hosts-container">
            <div className="stats-title">
                <h2>Your Hosts</h2>
            </div>
            <div className="podcast-hosts-row">
                {props.hosts.map((host)=>(
                    <PodcastHost {...host} />
                ))}
            </div>
        </div>
    );
}