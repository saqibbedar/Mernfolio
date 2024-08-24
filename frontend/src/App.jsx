// import DarkModeDetection from './components/DarkModeDetection/DarkModeDetection'
import "./index.css";
import { Routes, Route } from "react-router-dom";
import {Navbar, Footer} from './components/components.js'
import {Home, About, Blog, Contact, Courses, NotFound, Projects, Services} from './pages/pages.js'
import BackToTop from "./components/Reusable Components/BackToTop/BackToTop";

function App() {
  return (
    <>
      <div className="main">
          <Navbar />
          <BackToTop/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/Courses" element={<Courses />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
      </div>
        <Footer />
    </>
  );
}

export default App;

/*
npm install locomotive-scroll@beta
import LocomotiveScroll from 'locomotive-scroll';

const locomotiveScroll = new LocomotiveScroll();

*/
