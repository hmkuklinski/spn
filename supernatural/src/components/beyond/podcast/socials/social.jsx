export default function social(props){
    return (
        <div className="social-container" onClick={() => window.open(props.link, "_blank", "noopener,noreferrer")}>
            <div className="social-img">
                <img src={props.imgsrc} alt="social" className="icons"/>
            </div>
        </div>
    );
}