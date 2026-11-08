import "./Hero.css";  
import heroImage from "./assets/hero.svg";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-text">
        <div id="hero-header" className="hero-header">
          <h1>Hello, There!</h1>
        </div>

        <div id="intro" className="intro">
          <p>Glad you stopped by. This little corner of the internet is where ideas, creativity, and code come together. Every project has its own story, from the first spark of an idea to the little details that bring it all to life. Some are experiments, some are challenges, and others are ideas that grew into something bigger.</p>

          <p>Here, you'll find a collection of my work in web development, software systems, applications, and UI/UX design. Each piece reflects a part of my learning journey, the skills I've explored, and the creativity I've put into bringing ideas to life. From designing user-friendly interfaces to developing functional systems, every project represents an opportunity to turn concepts into practical solutions. They also showcase my growth as a developer, highlighting the different technologies, approaches, and ideas I've explored along the way. So take a look around, explore the projects, and see what I've been creating!</p>
        </div>
      </div>

   <img className="hero-image" src={heroImage} alt="Hero Section Illustration" /> 
  </section>
  );
}

export default Hero;