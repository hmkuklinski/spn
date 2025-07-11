export default function PopUpInfo({cat, ans}){
    return (
        <div className="episode-info">
            <div className="info-header">
                <h3>{cat}</h3>
            </div>
            <div className="extra-answer">
                {ans}
            </div>
        </div>
    );
}