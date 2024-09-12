import { Routes, Route, BrowserRouter as Router } from "react-router-dom"; // Import Router from react-router-dom
import './App.css';
import Main from "./Routes/Main/Main";
import Portfolio from "./Components/Portfolio/Portfolio";
import Projects from "./Routes/Projects/Projects";
import Contact from "./Routes/Contact/Contact";
import Tree from "./Routes/Projects/Websites/Tree/Tree";
import Center from "./Routes/Projects/Websites/Center/Center";
import Elra from "./Routes/Projects/Websites/Elra/Elra";
import Acc from "./Routes/Projects/Websites/Acc/Acc";
import Tm from "./Routes/Projects/Websites/Tm/Tm";
import Horion from "./Routes/Projects/Websites/horion/Horion";
import Haus from "./Routes/Projects/Websites/haus/Haus";
import Velins from "./Routes/Projects/Websites/Velins/Velins";
import Media from "./Routes/Projects/Websites/Media/Media";
import Jasha from "./Routes/Projects/Websites/Jasha/Jasha";

function App() {
  return (
    <Router> {/* Wrap your entire app with Router */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Projects/VanPeltsTrees" element={<Tree />} />
        <Route path="/Projects/CenterGibanja" element={<Center />} />
        <Route path="/Projects/ElektroElra" element={<Elra />} />
        <Route path="/Projects/AccountingApp" element={<Acc />} />
        <Route path="/Projects/TMLifestyleCoaching" element={<Tm />} />
        <Route path="/Projects/horion" element={<Horion />} />
        <Route path="/Projects/Hausbetreung" element={<Haus />} />
        <Route path="/Projects/VelinsShop" element={<Velins />} />
        <Route path="/Projects/MediaM" element={<Media />} />
        <Route path="/Projects/JashaBrewing" element={<Jasha />} />

      </Routes>
    </Router>
  );
}

export default App;
