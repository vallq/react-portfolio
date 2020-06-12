import React from "react";
import projects from "../projects";
import "./Projects.css";

const Projects = () => {
  const allProjects = projects.map((proj) => {
    return (
      <div className="card">
        <h3 id="p-name">{proj.name}</h3>
        <p id="p-description">{proj.description}</p>
        <a id="p-link" href={proj.link} rel="noopener noreferrer" target="_blank">
          github link
        </a>
      </div>
    );
  });
  return <div className="projects">{allProjects}</div>;
};

export default Projects;
