export default function SampleResult({ example_data }){
    return(
       <div className="code-preview">
            <p>Sample Output</p>
            <pre style={{ whiteSpace:"pre-wrap", background: '#242424', color: "rgb(8, 120, 249)", padding: "2.5rem", fontSize:"15px", fontFamily:"Arial", textAlign:"justify"}}>
                {JSON.stringify(example_data, null, 2)}
            </pre>
        </div> 
    )
}