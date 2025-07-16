export default function PodcastStats(props){

    const statsText = (
        <div className="stats-text">
            <div className="stats-title">
                <h2>About the Podcast</h2>
            </div>
            <div className="stats-content">
                <p>{props.desc2}</p>
            </div>
        </div>
    );
    const statsPhoto = (
        <div className="stats-photo">
            <img src={props.statsImg} alt="stats" />
        </div>
    );
    return (
        <div className="stats-landing-container">
            {statsPhoto}
            {statsText}
        </div>
    );
    
    
}