import Glossary from "../../src/components/journal/Glossary";

export default function MonsterGlossary(){
    const monsterGlossary = {title:"Monster Glossary", imgsrc:"/assets/glossary/mglossary.png", description:"Explore the lore and learn how to defeat every monster that hunters have faced in the series!", nextLink:"/monsters/ghosts", glossaryType:"monsters",baseLink: "monsters"};
    return <Glossary {...monsterGlossary} />;
}