import Home from './components/Home';
import About from './components/About';
import Episodes from './components/Episodes';
import Characters from './components/Characters';
import Glossary from './components/Glossary';
import RoadMap from './components/RoadMap';
import BeyondSpn from './components/BeyondSpn';
import NotFound from './components/NotFound';
import JournalRedirect from './components/JournalRedirect';
import {Route, Routes} from "react-router-dom";
import './App.css';

function App() {
  const charGlossary = {title:"Character Glossary", imgsrc:"https://pbs.twimg.com/media/FUGzeJzWAAA_TMy.jpg:large", description:"Learn more about your favorite characters!", nextLink:"/characters/dean", glossaryType:"characters",baseLink: "characters"};
  const monsterGlossary = {title:"Monster Glossary", imgsrc:"", description:"Explore the lore and learn how to defeat every monster that hunters have faced in the series!", nextLink:"/characters/demon", glossaryType:"monsters",baseLink: "monsters"};
  return (
    <div className="App">
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/episodes" element={<Episodes />} />
          <Route path="/characters" element={<Glossary {...charGlossary}/>} />
          <Route path="/characters/:id" element={<Characters />}/>
          <Route path="/characters/redirect" element={<JournalRedirect redirect="character" />} />
          <Route path="/thelore" element={<Glossary {...monsterGlossary} />}  />
          <Route path="/roadmap" element={<RoadMap />} />
          <Route path="/beyondspn" element={<BeyondSpn />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
