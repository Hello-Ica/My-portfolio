import "./Skills.css";

import toolsPreview from "./assets/skills/tools-preview.svg";
import codePreview from "./assets/skills/code-preview.svg";

import figma from "./assets/skills/figma.svg";
import github from "./assets/skills/github.svg";
import git from "./assets/skills/git.svg";
import vscode from "./assets/skills/vscode.svg";
import xampp from "./assets/skills/xampp.svg";
import photoshop from "./assets/skills/photoshop.svg";
import obs from "./assets/skills/obs.svg";

import python from "./assets/skills/python.svg";
import html from "./assets/skills/html.svg";
import css from "./assets/skills/css.svg";
import javascript from "./assets/skills/javascript.svg";
import react from "./assets/skills/react.svg";
import nodejs from "./assets/skills/nodejs.svg";
import flask from "./assets/skills/flask.svg";

const softSkills = [
  "Leadership",
  "Communication",
  "Teamwork",
  "Time Management",
  "Adaptability",
  "Creativity",
  "Initiative",
];

const tools = [
  { name: "Figma", icon: figma },
  { name: "GitHub", icon: github },
  { name: "Git", icon: git },
  { name: "Visual Studio Code", icon: vscode },
  { name: "XAMPP", icon: xampp },
  { name: "Adobe Photoshop", icon: photoshop },
  { name: "OBS Studio", icon: obs },
];

const languages = [
  { name: "Python", icon: python },
  { name: "HTML5", icon: html },
  { name: "CSS3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "React", icon: react },
  { name: "Node.js", icon: nodejs },
  { name: "Flask", icon: flask },
];

function IconRow({ items }) {
  return (
    <ul className="icon-row">
      {items.map((item) => (
        <li key={item.name}>
          <span className="skill-icon" data-name={item.name} tabIndex={0}>
            <img src={item.icon} alt={item.name} />
          </span>
        </li>
      ))}
    </ul>
  );
}

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="soft-skills">
        <h2 className="soft-skills-title">Soft Skills</h2>
        <ul className="soft-list">
          {softSkills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>

      <div className="skills-cards">
        <div className="skills-group">
          <h3 className="group-title">Tools</h3>
          <div className="skills-card">
            <img className="card-preview" src={toolsPreview} alt="Design tools preview" />
            <IconRow items={tools} />
          </div>
        </div>

        <div className="skills-group">
          <h3 className="group-title">Programming Languages / Frameworks</h3>
          <div className="skills-card">
            <img className="card-preview" src={codePreview} alt="Code preview" />
            <IconRow items={languages} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;