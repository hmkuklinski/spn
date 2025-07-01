export default function Episode({photo, title, description, episodeNumber}){
    return (
        <div className="episode-container">
            <div className="episode-preview">
                <img src={photo} alt={title} />
            </div>
            <div className="episode-content">
                <div className="episode-title">
                    <h2>{episodeNumber}. <b>{title}</b></h2>
                </div>
                <div className="episode-length">
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
}