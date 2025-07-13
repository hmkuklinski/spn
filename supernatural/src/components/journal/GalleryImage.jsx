export default function GalleryImage({imgSrc, caption, isPortrait}){
    return (
        <div className={`gallery-image ${isPortrait? " portrait": "" }`}>
            <div className="gallery-img">
                <img src={imgSrc} alt={caption}/>
            </div>
            <div className="gallery-caption">
                <p>{caption}</p>
            </div>
        </div>
    );
}