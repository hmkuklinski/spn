export default function PodcastPreview({ep, img}){
    return (
        <div className="pod-ep-container">
            <div className="pod-ep-photo">
                <img src={img} alt="pod-prev" />
            </div>
            <div className="pod-content">
                <div className="pod-title">
                    {ep.title}
                </div>
                <div className="pod-guests">
                    {ep.guests}
                </div>
                <div className="pod-link">
                    <a href={ep.link}><ion-icon name="play-outline"></ion-icon> Listen Now  </a>
                </div>
            </div>
        </div>
    );
}