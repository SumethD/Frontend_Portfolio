import Intro from "./components/intro/intro"
import Navbar from "./components/navbar";
import Skills from "./components/skill/skill";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact"
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Projects />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
