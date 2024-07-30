// import DarkModeDetection from './components/DarkModeDetection/DarkModeDetection'
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import Courses from "./pages/Courses/Courses";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/NotFound/NotFound";
import Services from "./pages/Services/Services";
import BackToTop from "./components/Reusable Components/BackToTop/BackToTop";

function App() {
  return (
    <>
      <div className="main">
        {/* <DarkModeDetection/> */}
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
