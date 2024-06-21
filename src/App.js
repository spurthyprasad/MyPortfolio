import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import Works from "./components/Works/works";
import Project from "./components/Projects/project";
import Footer from "./components/Footer/footer";
import Education from './components/Education/education';
import CertificationsPage from "./components/Certification/certification";



function App() {
  return (
    <div className="App">
     <Navbar/>
     <Intro/> 
     <Skills/>
     <Education/>
     {/* <Works/> */}
     <CertificationsPage/>
     <Project/>
     <Footer/>
    </div>
  );
} 

export default App;
