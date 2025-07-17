import Home from './components/main/Home';
import Sigils from './components/sigils/Sigils';
import Seasons from './components/seasons/Seasons';
import SeasonRouting from './components/seasons/SeasonRouting';
import Characters from './components/characters/Characters';
import Glossary from './components/journal/Glossary';
import BeyondSpn from './components/beyond/BeyondSpn';
import NotFound from './components/NotFound';
import JournalRedirect from './components/journal/JournalRedirect';
import TheLore from './components/monsters/TheLore';
import Episodes from './components/episodes/Episodes';
import Podcast from './components/beyond/podcast/Podcast';
import Conventions from './components/beyond/conventions/Conventions';
import {Route, Routes} from "react-router-dom";
import { useState, useEffect } from 'react';
import './App.css';
import ScrollToTop from './ScrollToTop';

function App() {
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <img src="https://technometrics.net/wp-content/uploads/2020/11/loading-icon-animated-gif-19-1.gif" alt="loading-gif"/>
      </div>
    );
  }

  const charGlossary = {title:"Character Glossary", imgsrc:"/assets/glossary/cglossary.png", description:"Learn more about your favorite characters!", nextLink:"/characters/dean", glossaryType:"characters",baseLink: "characters"};
  const monsterGlossary = {title:"Monster Glossary", imgsrc:"/assets/glossary/mglossary.png", description:"Explore the lore and learn how to defeat every monster that hunters have faced in the series!", nextLink:"/monsters/ghosts", glossaryType:"monsters",baseLink: "monsters"};
  const sigilGlossary = {title:"Sigil Glossary", imgsrc:"/assets/glossary/sigilGlossary.png", description:"Learn more about what sigils you can use to target dangerous monsters or supernatural beings!", nextLink:"/sigils/devils-trap", glossaryType:"sigils", baseLink:"sigils"};
  return (
    <div className="App">
      <div className="container">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sigils" element={<Glossary {...sigilGlossary} />} />
          <Route path="/sigils/:id" element={<Sigils />} />
          <Route path="/sigils/redirect" element={<JournalRedirect redirect="sigils" />} />
          <Route path="/episodes" element={<Seasons isEpisodes={true} />} />
          <Route path="/episodes/:id" element={<Episodes />} />
          <Route path="/episodes/redirect" element={<JournalRedirect redirect="episodes" />} /> 
          <Route path="/seasons" element={<Seasons />} />
          <Route path="/seasons/:num" element={<SeasonRouting />} />
          <Route path="/seasons/redirect" element={<JournalRedirect redirect="season" />} />
          <Route path="/characters" element={<Glossary {...charGlossary}/>} />
          <Route path="/characters/:id" element={<Characters />}/>
          <Route path="/characters/redirect" element={<JournalRedirect redirect="character" />} />
          <Route path="/monsters" element={<Glossary {...monsterGlossary} />}  />
          <Route path="/monsters/:id" element={<TheLore />} />
          <Route path="/monsters/redirect" element={<JournalRedirect redirect="thelore" />} />
          <Route path="/beyondspn" element={<BeyondSpn />} />
          <Route path="/podcast" element={<Podcast/>} />
          <Route path="/conventions" element={<Conventions />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
