export default function SampleResult({ example_data }){
    return(
       <div className="code-preview">
            <h2 className="table-title">Sample Output:</h2>
            <pre style={{ whiteSpace:"pre-wrap",padding: "1.5rem", fontSize:"14px"}}>
                {JSON.stringify(example_data, null, 2)}
            </pre>
        </div> 
    )
}