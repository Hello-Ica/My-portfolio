import Navbar from "./Navbar";
import Hero from "./Hero";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <section id="about"><h1>About Me</h1></section>
      <section id="projects"><h1>My Projects</h1></section>
      <section id="contact"><h1>Contacts</h1></section>
    </>
  );
}

export default App;