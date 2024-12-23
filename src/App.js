import "./App.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particles from "./utils/particles.js";
import Home from "./pages/home/Home.jsx";
import About from "./pages/about/About.jsx";
import Contact from "./pages/contact/Contact.jsx";
import Resume from "./pages/resume/Resume.jsx";
import Portfolio from "./pages/portfolio/Portfolio.jsx";
import Skills from "./pages/skills/Skills.jsx";
import Navbar from "./components/navbar/navbar.jsx";
function App() {
  const location = useLocation();

  const renderLoc = location.pathname === "/";
  const handleInit = async (main) => {
    await loadFull(main);
  };
  return (
    <div className="App">
      {renderLoc && (
        <Particles id="tsparticles" options={particles} init={handleInit} />
      )}
      <Navbar />
      <div className="App__main-page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
