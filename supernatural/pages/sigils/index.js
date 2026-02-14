import Glossary from "../../src/components/journal/Glossary";

export default function SigilsGlossary(){
    const sigilGlossary = {title:"Sigil Glossary", imgsrc:"/assets/glossary/sigilGlossary.png", description:"Learn more about what sigils you can use to target dangerous monsters or supernatural beings!", nextLink:"/sigils/devils-trap", glossaryType:"sigils", baseLink:"sigils"};
    return <Glossary {...sigilGlossary} />;
}