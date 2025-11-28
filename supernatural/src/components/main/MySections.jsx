import { sections } from "../data/sectionInfo"
import SectionDesc from "./SectionDesc"
export default function MySections(){
    return (
        <div className="my-sections">
            {sections.map((section, index)=>(
                <SectionDesc {...section} key ={index}/>
            ))}
        </div>
    )
}