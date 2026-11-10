import "./Projects.css";

import mindlobby from "./assets/projects/mindlobby.svg";
import kaidevs from "./assets/projects/kaidevs.svg";
import whyteCafe from "./assets/projects/whyte-cafe.svg";

const projects = [
  { name: "Mindlobby", image: mindlobby, url: "https://mindlobby-production.up.railway.app/" },
  { name: "Kaidevs", image: kaidevs, url: "https://kaidevs.vercel.app" },
  { name: "Whyte Cafe", image: whyteCafe, url: "https://whyte-cafe-tan.vercel.app", featured: true },
];

function ProjectCard({ project }) {
  return (
    <a
      className="project-card"
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${project.name} (opens in a new tab)`}
    >
      <img className="project-image" src={project.image} alt={`${project.name} website preview`} />
      <span className="project-name">{project.name}</span>
    </a>
  );
}

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2 className="projects-title">My Projects</h2>

      <div className="projects-grid">
        <div className="projects-side">
          {projects
            .filter((p) => !p.featured)
            .map((p) => (
              <ProjectCard key={p.name} project={p} />
            ))}
        </div>

        <div className="projects-main">
          {projects
            .filter((p) => p.featured)
            .map((p) => (
              <ProjectCard key={p.name} project={p} />
            ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;