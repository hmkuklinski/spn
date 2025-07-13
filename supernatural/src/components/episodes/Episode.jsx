export default function Episode({episode, onClick}){
    return (
        <div className="episode-container" onClick={onClick}>
            <div className="episode-preview">
                <img src={episode.photo} alt={episode.title} />
            </div>
            <div className="episode-content">
                <div className="episode-title">
                    <h2>{episode.num}. <b>{episode.title}</b></h2>
                </div>
                <div className="episode-length">
                    <p>{episode.description}</p>
                </div>
            </div>
        </div>
    );
}