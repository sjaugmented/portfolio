import React from "react"
import "../App.css"
import ProjectCard from "./ProjectCard"
import projects from "../data/projects.json"

const Projects = () => {
  return (
    <section id="gallery">
      <div className="wrap">
        <h2>Project Gallery</h2>
        <div>
          {projects.map((project, index) => {
            return (
              <ProjectCard
                key={index}
                imgSrc={project.imgUrl}
                name={project.name}
                description={project.description}
                process={project.process}
                appLink={project.appLink}
                repoLink={project.repoLink}
                tech={project.tech}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
