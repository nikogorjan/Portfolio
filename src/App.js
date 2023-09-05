import { Routes, Route, BrowserRouter as Router } from "react-router-dom"; // Import Router from react-router-dom
import './App.css';
import Main from "./Routes/Main/Main";
import Portfolio from "./Components/Portfolio/Portfolio";

function App() {
  return (
    <Router> {/* Wrap your entire app with Router */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Portfolio" element={<Portfolio />} />

      </Routes>
    </Router>
  );
}

export default App;
