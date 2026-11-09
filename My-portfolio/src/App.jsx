import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <section id="projects"><h1>My Projects</h1></section>
      <section id="contact"><h1>Contacts</h1></section>
    </>
  );
}

export default App;