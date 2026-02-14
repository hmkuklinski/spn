import Link from "next/link";

export default function EndpointPreview({apiLink, apiTitle, apiMethodType, apiDescription, apiCommand}){
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
            <Link href={apiLink} className="endpoint-title">
                <h2 className="api-method-title">
                    {apiTitle} 
                </h2>
                
            </Link>
            {apiMethodType==="GET" && getDiv}
            {apiMethodType === "POST" && postDiv}
            {apiMethodType === "DELETE" && deleteDiv}
            {apiMethodType === "PUT" && putDiv}
            </div>
            <p>{apiDescription}</p>
            <br />
            <code>{apiCommand}</code>
        </div>
    );
}