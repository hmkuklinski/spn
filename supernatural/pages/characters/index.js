import Glossary from "../../src/components/journal/Glossary";

export default function CharacterGlossary(){
    const charGlossary = {title:"Character Glossary", imgsrc:"/assets/glossary/cglossary.png", description:"Learn more about your favorite characters!", nextLink:"/characters/dean", glossaryType:"characters",baseLink: "characters"};
    return <Glossary {...charGlossary}/>;
}