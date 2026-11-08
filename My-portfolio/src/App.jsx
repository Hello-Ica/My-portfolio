import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <section id="skills"><h1>Skills</h1></section>
      <section id="projects"><h1>My Projects</h1></section>
      <section id="contact"><h1>Contacts</h1></section>
    </>
  );
}

export default App;