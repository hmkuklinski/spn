import { useState } from "react";
import { apiPreviews } from "../data/apiInfo";
import EndpointPreview from "./EndpointPreview";

export default function SectionPreview({passedState, isOpen, notOpen, infoType, setActiveTab, setSelectedEndpoint, startIndex, endIndex}){
    const [currState, setCurrState]= useState(passedState);
    return (
        <div>
            <h2 onClick={() => setCurrState(!currState)} style={{ cursor: "pointer" }}>
                {currState? isOpen : notOpen} {infoType.slice(0,1).toUpperCase()}{infoType.slice(1)} Information
            </h2>
            <p>Click an endpoint title to view {infoType} details:</p>
            {currState && (
                <div>
                {apiPreviews.slice(startIndex, endIndex).map((prev, key) => (
                    <div key={key} style={{ cursor: "pointer", margin: "5px 0" }} onClick={() => setActiveTab(prev.key)}>
                        <EndpointPreview
                        key={key}
                        apiTitle={prev.title}
                        apiMethodType={prev.methodType}
                        apiDescription={prev.description}
                        apiCommand={prev.code}
                        apiLink={prev.link}
                        setActiveTab={setActiveTab}
                        onClick={() => {
                        setSelectedEndpoint(prev);
                        }}
                        />
                    </div>
                ))}
                </div>
            )}
            </div>
    );
}