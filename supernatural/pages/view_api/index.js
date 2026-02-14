import Layout from "../../src/components/Layout";
import EndpointPreview from "../../src/components/api_results/EndpointPreview";
import { apiPreviews } from "../../src/components/data/apiInfo";
export default function ShowAPIDoc(){
    
    const entireSeasonInfo = <EndpointPreview apiTitle={apiPreviews[0].title} apiMethodType={apiPreviews[0].methodType} apiDescription={apiPreviews[0].description} apiCommand={apiPreviews[0].code} apiLink={apiPreviews[0].link} />
    return (
        <Layout>
            <div className="api-main-container">
                <h1>Winchester's Archive API</h1>
                <div>
                   <h2>Overiew</h2> 
                   <p>
                        The Winchester's Archive API provides comprehensive access to information about the CW's hit series, Supernatural. 
                        It is designed for fans, developers, and researchers looking to programmatically access detailed series data.
                    </p>
                </div>
                
                {entireSeasonInfo}
            </div>
        </Layout>
    );
}