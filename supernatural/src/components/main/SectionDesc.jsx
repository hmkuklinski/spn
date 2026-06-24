import Link from "next/link";

export default function SectionDesc({title, imgsrc, desc, buttonLink, subtitle=null}){
    return (<Link href={buttonLink} className="section-link">
        <div className="section-info">
            <div className="section-img">
                <img src={imgsrc} alt="section graphic here" />
            </div>
            <div className="section-content">
                <div className="section-title">
                    <h2>
                        {title}
                        {subtitle && (
                            <div className='section-subtitle'>
                                <h4>{subtitle}</h4>
                            </div>
                        )}
                    </h2>
                </div>
                
                <div className="section-description">
                    <p>{desc}</p>
                </div>
            </div>
        </div></Link>
    );
}