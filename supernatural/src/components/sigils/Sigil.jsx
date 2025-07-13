import InfoDiv from "../InfoDiv";

export default function Sigil({sig}){
    return (
        <div className="pages">
            <div className="left-page">
                <div className="sigil-preview">
                    <div className="sigil-title">
                        <h1>{sig.name}</h1>
                    </div>
                    <div className="sigil-img">
                        <img src={sig.imgsrc} alt={sig.name}/>
                    </div>
                    
                </div>
            </div>
            <div className="right-page">
                <div className="sigil-info">
                    
                    <InfoDiv title="Description" text={sig.about} infoType="long" />
                    <InfoDiv title="Target" text={sig.target} infoType="shortSpaced" />
                    <InfoDiv title="Sigil Type" text={sig.typeSigil} infoType="shortSpaced" />
                    {sig.effect && <InfoDiv title="Effects" text={sig.effect} infoType="shortSpaced" />}
                    {sig.activation && <InfoDiv title="Activation" text={sig.activation} infoType="long" />}
                    {sig.limits && <InfoDiv title="Limitations" text={sig.limits} infoType="long" />}
                </div>
            </div>
        </div>
    );
}