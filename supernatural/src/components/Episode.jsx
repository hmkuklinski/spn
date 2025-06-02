export default function Episode({imgsrc, title, description, gueststars}){
    return (
        <div className="episode-container">
            <div className="episode-preview">
                <img src={imgsrc} alt={title} />
            </div>
            <div className="episode-content">
                <div className="episode-title">
                    <h2>{title}</h2>
                </div>
                <div className="episode-length">
                    <p>{description}</p>
                </div>
                <div className="episode-gueststars">
                    <p>{gueststars}</p>
                </div>
            </div>
        </div>
    );
}