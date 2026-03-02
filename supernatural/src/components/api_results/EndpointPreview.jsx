import Link from "next/link";

export default function EndpointPreview({apiLink, apiTitle, apiMethodType, apiDescription, setActiveTab, apiCommand}){
    const getDiv = (
        <div className="div-get">
            <h3>GET</h3>
        </div>
    );
    const postDiv = (
        <div className="div-post">
            <h3>POST</h3>
        </div>
    );
    const deleteDiv = (
        <div className="div-delete">
            <h3>DELETE</h3>
        </div>
    );
    const putDiv = (
        <div className="div-put">
            <h3>PUT</h3>
        </div>
    );


    
    return (
        <div className="api-endpoint">
            <div className="api-banner">
                <h2 className="api-method-title endpoint-title" onClick={() => { setActiveTab(apiLink); window.scrollTo({ top: 0, behavior: "smooth" });}} style={{ cursor: "pointer" }}>
                    {apiTitle}
                </h2>
                {apiMethodType==="GET" && getDiv}
                {apiMethodType === "POST" && postDiv}
                {apiMethodType === "DELETE" && deleteDiv}
                {apiMethodType === "PUT" && putDiv}
            </div>
            <p>{apiDescription}</p>
            <br />
            <code className="api-code">{apiCommand}</code>
        </div>
    );
}