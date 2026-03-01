import {useEffect, useState} from "react";
import Layout from '../Layout';
import EndpointInfo from "./EndpointInfo";
import { apiEndpointsInfo } from "../data/apiInfo";
//this page shows the information about this API endpoint along with sample output
export default function CharacterAPI({fetchUrl, indexId, character_name, example_data }){
    const [character, setCharacter] = useState(character_name || null);

    useEffect(() => {
        if (!fetchUrl) return;
        fetch(fetchUrl)
        .then(res => res.json())
        .then(data => setCharacter(data))
        .catch(err => console.error(err));
    }, [fetchUrl]);


    if (!character) {
        return <div>Loading...</div>;
    }

    //TODO: the Layout needs to be added on mobile only screen, with the addition of a separate apinavbar or maybe just a back button
    return (
        <div className="api-main-container">
            <div className="api-container">
                <div className="api-format">
                    <h1>{apiEndpointsInfo[indexId].endpoint_name}</h1>
                    <EndpointInfo indexId={indexId} example_data={example_data} />
                </div>
            </div>
        </div>
    );
}