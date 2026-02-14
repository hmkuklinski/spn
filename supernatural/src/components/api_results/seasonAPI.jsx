import {useEffect, useState} from "react";
import Layout from '../Layout';
import SampleResult from "./SampleResult";
import EndpointInfo from "./EndpointInfo";
import { apiEndpointsInfo } from "../data/apiInfo";
//this page shows the information about this API endpoint along with sample output
export default function SeasonAPI({ seasonNum, indexId, example_data }){
    const [season, setSeason] = useState(null);

    useEffect(()=>{
        if (!seasonNum) return;

        fetch(`/api/episodesAPI?seasonNum=${seasonNum}`)
        .then(res=>res.json())
        .then(data => setSeason(data));
    }, [seasonNum]);

    if (!season) {
        return <div>Loading...</div>;
    }


    return (
        <Layout>
        <div className="api-container">
            <div className="api-format">
                <h1>{apiEndpointsInfo[indexId].endpoint_name}</h1>
                <EndpointInfo indexId={indexId} />
                
                <SampleResult example_data={example_data} /> 
            </div>
        </div>
        </Layout>
    );
}