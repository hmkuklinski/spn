import { Link } from "react-router-dom";
export default function SectionDesc({title, imgsrc, desc, buttonLink}){
    return (
        <div className="section-info">
            <div className="section-img">
                <img src={imgsrc} alt="section graphic here" />
            </div>
            <div className="section-content">
                <div className="section-title">
                    <h2>{title}</h2>
                </div>
                <div className="section-description">
                    <p>{desc}</p>
                </div>
                <button className="btn-section">
                    <Link to={buttonLink}>{title}</Link></button>
            </div>
        </div>
    );
}