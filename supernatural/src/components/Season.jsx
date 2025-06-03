//This component is used for the season cards and routing to the appropriate season summary page

import { useNavigate } from "react-router-dom";

export default function Season({ seasonNumber, imgsrc, num }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/seasons/${num}`);
    };
    return (
        <div className="season-container" onClick={handleClick}>
            <div className="season-titlecard">
                <img src={imgsrc} alt={`season ${seasonNumber}`} />
            </div>
            <div className="season-text">
                <h4>{seasonNumber}</h4>
            </div>
        </div>
    );
}