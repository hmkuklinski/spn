import PodcastPreview from "./PodcastPreview";
export default function PodcastPreviews({podcast}){
    return (
        <div className="podcast-previews-container">
            <div className="pod-pre-title">
                <h3>Start Your Journey</h3>
            </div>
            <div className="pod-pre-row">
                {podcast.episodes.map((ep)=>(
                    <PodcastPreview ep={ep} img={podcast.coverImg} />
                ))}
            </div>
        </div>
    );
}