import Layout from "../../src/components/Layout";
import ApiNavbar from "../../src/components/api_results/ApiNavbar";
import EndpointPreview from "../../src/components/api_results/EndpointPreview";
import { apiPreviews } from "../../src/components/data/apiInfo";

export default function ShowAPIDoc(){
    return (
        <Layout>
            
            <div className="api-main-container">
                <ApiNavbar />
                <div className="api-overview">
                   <h2>API Overiew</h2> 
                   <p>
                        The Winchester's Archive API provides comprehensive access to information about the CW's hit series, Supernatural. 
                        It is designed for fans, developers, and researchers looking to programmatically access detailed series data.
                    </p>
                
                {apiPreviews.map((prev, key)=>(
                    <EndpointPreview apiTitle={prev.title} apiMethodType={prev.methodType} apiDescription={prev.description} apiCommand={prev.code} apiLink={prev.link} />
                ))}</div>
            </div>
        </Layout>
    );
}