import Home from './components/Home';
import Sigils from './components/Sigils';
import Episodes from './components/Episodes';
import Characters from './components/Characters';
import Glossary from './components/Glossary';
import BeyondSpn from './components/BeyondSpn';
import NotFound from './components/NotFound';
import JournalRedirect from './components/JournalRedirect';
import TheLore from './components/TheLore';
import {Route, Routes} from "react-router-dom";
import './App.css';

function App() {
  const charGlossary = {title:"Character Glossary", imgsrc:"https://pbs.twimg.com/media/FUGzeJzWAAA_TMy.jpg:large", description:"Learn more about your favorite characters!", nextLink:"/characters/dean", glossaryType:"characters",baseLink: "characters"};
  const monsterGlossary = {title:"Monster Glossary", imgsrc:"", description:"Explore the lore and learn how to defeat every monster that hunters have faced in the series!", nextLink:"/monsters/ghosts", glossaryType:"monsters",baseLink: "thelore"};
  return (
    <div className="App">
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sigils" element={<Sigils />} />
          <Route path="/episodes" element={<Episodes />} />
          <Route path="/characters" element={<Glossary {...charGlossary}/>} />
          <Route path="/characters/:id" element={<Characters />}/>
          <Route path="/characters/redirect" element={<JournalRedirect redirect="character" />} />
          <Route path="/monsters" element={<Glossary {...monsterGlossary} />}  />
          <Route path="/monsters/:id" element={<TheLore />} />
          <Route path="/monsters/redirect" element={<JournalRedirect redirect="thelore" />} />
          <Route path="/beyondspn" element={<BeyondSpn />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
