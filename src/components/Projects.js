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
            let style = {}
            if (index % 2 === 0) {
              style = { backgroundColor: "rgb(202, 201, 201)" }
            }
            return (
              <ProjectCard
                style={style}
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
