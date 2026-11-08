import "./About.css";
import aboutImage from "./assets/about.svg";

function About() {
  return (
    <section id="about" className="about">
      <img className="about-image" src={aboutImage} alt="About Me Illustatrion" />

      <div className="about-text">
        <div id="about-header" className="about-header">
          <h1>Who am I?</h1>
        </div>

        <div id="about-intro" className="about-intro">
          <p>I'm Maria Jenica Herrera, a Computer Science graduate and tech enthusiast passionate about creating meaningful digital solutions. I enjoy working on projects that combine creativity and technology, from developing websites and software applications to crafting intuitive user interfaces. I value thoughtful design and practical functionality, with an interest in creating digital experiences that are both engaging and easy to use.</p>

          <p>I value a balanced approach to technology, combining creativity, critical thinking, and a strong willingness to learn. My experiences have shaped my ability to adapt to different situations, communicate effectively, and work well with others toward shared goals. I enjoy taking on new challenges, exploring fresh perspectives, and finding meaningful ways to turn ideas into reality. Each opportunity allows me to gain new insights, strengthen my approach to my work, and discover better ways to bring concepts to life. I strive to grow both personally and professionally while creating work that reflects my dedication and passion for technology.</p>
        </div>
      </div>
    </section>
  );
}

export default About;