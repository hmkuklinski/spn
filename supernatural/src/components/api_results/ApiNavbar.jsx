import Link from "next/link";
import { apiPreviews } from "../data/apiInfo";
export default function ApiNavbar(){
    const getDiv = (
        <div className="div-get sidebar">
            <h3>GET</h3>
        </div>
    );
    const postDiv = (
        <div className="div-post sidebar">
            <h3>POST</h3>
        </div>
    );
    const deleteDiv = (
        <div className="div-delete sidebar">
            <h3>DELETE</h3>
        </div>
    );
    const putDiv = (
        <div className="div-put sidebar">
            <h3>PUT</h3>
        </div>
    );

    return (
        <nav className="api-navbar">
            <div className="api-seasons">
                <h3 className="api-section-title">Season Endpoints</h3>
                {apiPreviews.map((navlink, key)=>(
                    <div className="api-seasons-links">
                            {navlink.methodType==="GET" && getDiv}
                            {navlink.methodType === "POST" && postDiv}
                            {navlink.methodType === "DELETE" && deleteDiv}
                            {navlink.methodType === "PUT" && putDiv}
                            <Link href={navlink.link}><h5>{navlink.sideTitle}</h5></Link>
                    </div>
                ))}
            </div>
        </nav>
    );
}