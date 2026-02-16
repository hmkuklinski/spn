import {useEffect, useState} from "react";
import Layout from '../Layout';
import EndpointInfo from "./EndpointInfo";
import { apiEndpointsInfo } from "../data/apiInfo";
//this page shows the information about this API endpoint along with sample output
export default function SeasonAPI({ seasonNum, fetchUrl, indexId, example_data }){
    const [season, setSeason] = useState(example_data || null);

    useEffect(() => {
        if (!fetchUrl) return;
        fetch(fetchUrl)
        .then(res => res.json())
        .then(data => setSeason(data))
        .catch(err => console.error(err));
    }, [fetchUrl]);


    if (!season) {
        return <div>Loading...</div>;
    }

    //TODO: the Layout needs to be added on mobile only screen, with the addition of a separate apinavbar or maybe just a back button
    return (
        <div className="api-main-container">
            <div className="api-container">
                <div className="api-format">
                    <h1>{apiEndpointsInfo[indexId].endpoint_name}</h1>
                    <EndpointInfo indexId={indexId} />
                </div>
            </div>
        </div>
    );
}