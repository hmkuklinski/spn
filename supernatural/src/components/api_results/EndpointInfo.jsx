import { apiEndpointsInfo } from "../data/apiInfo";
export default function EndpointInfo({ indexId }){
    const endpoint = apiEndpointsInfo[indexId];
    
    return (
        <div>
            <code>
                <p>{endpoint.example_url}</p>
                <p><b>Base URL: </b>{endpoint.base_url}</p>
                <p>
                    <b>Query Parameter:</b> 
                    <div>
                        {endpoint.parameters.map((param, idx) => (
                            <p key={idx}>
                            <i>{param.name}</i> = {param.type}, {param.notes}
                            </p>
                        ))}
                    </div>
                </p>
                <p><b>Output Fields: </b></p>
                <div className="outputs">
                    {endpoint.outputs.map((output, idx) => (
                        <p key={idx}>
                        <i>{output.name}</i> - {output.desc} {output.valueType}
                        </p>
                    ))}
                </div>
            </code>
        </div>
    );
}