import { apiEndpointsInfo } from "../data/apiInfo";
import SampleResult from "./SampleResult";
export default function EndpointInfo({ indexId }){
    const endpoint = apiEndpointsInfo[indexId];
    
    return (
        <div className="api-endpoint-info">
            <code>
                <h2 className="table-title">Example:</h2>{endpoint.example_url}
                <h2 className="table-title">Base URL:</h2>{endpoint.base_url}
                <div>
                    <h2 className="table-title">Query Parameters:</h2>

                    <table style={{ 
                        width: "100%", 
                        borderCollapse: "collapse", 
                        marginTop: "8px" 
                    }}>
                        <thead>
                            <tr>
                                <th style={{ 
                                    textAlign: "left", 
                                    borderBottom: "1px solid #ccc",
                                    padding: "6px"
                                }}>
                                    Parameter
                                </th>
                                <th style={{ 
                                    textAlign: "left", 
                                    borderBottom: "1px solid #ccc",
                                    padding: "6px"
                                }}>
                                    Details
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {endpoint.parameters.map((param, idx) => (
                                <tr key={idx}>
                                    <td style={{ 
                                        padding: "6px", 
                                        fontWeight: "bold",
                                        borderBottom: "1px solid #eee"
                                    }}>
                                        {param.name}
                                    </td>
                                    <td style={{ 
                                        padding: "6px",
                                        borderBottom: "1px solid #eee"
                                    }}>
                                        {param.type} — {param.notes}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div>
                    <h2 className="table-title">Output Fields:</h2>
                    <table style={{width: "100%", borderCollapse: "collapse", marginTop: "8px"}}>
                        <thead>
                            <tr>
                                <th style={{textAlign: "left", borderBottom: "1px solid #ccc",padding: "6px"}}>
                                    Field
                                </th>
                                <th
                                    style={{
                                        textAlign: "left",
                                        borderBottom: "1px solid #ccc",
                                        padding: "6px"
                                    }}
                                >
                                    Description
                                </th>
                                <th
                                    style={{
                                        textAlign: "left",
                                        borderBottom: "1px solid #ccc",
                                        padding: "6px"
                                    }}
                                >
                                    Type
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {endpoint.outputs.map((output, idx) => (
                                <tr key={idx}>
                                    <td
                                        style={{
                                            padding: "6px",
                                            fontWeight: "bold",
                                            borderBottom: "1px solid #eee"
                                        }}
                                    >
                                        {output.name}
                                    </td>
                                    <td
                                        style={{
                                            padding: "6px",
                                            borderBottom: "1px solid #eee"
                                        }}
                                    >
                                        {output.desc}
                                    </td>
                                    <td
                                        style={{
                                            padding: "6px",
                                            borderBottom: "1px solid #eee"
                                        }}
                                    >
                                        {output.valueType}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <SampleResult example_data={endpoint }/>
            </code>
        </div>
    );
}