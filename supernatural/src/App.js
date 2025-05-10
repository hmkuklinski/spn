import Home from './components/Home';
import About from './components/About';
import Episodes from './components/Episodes';
import Characters from './components/Characters';
import TheLore from './components/TheLore';
import RoadMap from './components/RoadMap';
import BeyondSpn from './components/BeyondSpn';
import NotFound from './components/NotFound';
import {Route, Routes} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/episodes" element={<Episodes />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/thelore" element={<TheLore />} />
          <Route path="/roadmap" element={<RoadMap />} />
          <Route path="/beyondspn" element={<BeyondSpn />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
