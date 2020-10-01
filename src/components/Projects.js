import React, { useState } from "react"
import "../App.css"
import ProjectCard from "./ProjectCard"
import projects from "../data/projects.json"
// import useWindowSize from "../hooks/useWindowSize"
import TrackVisibility from "react-on-screen"

const Projects = ({ id }) => {
  // const size = useWindowSize()

  return (
    <section id="gallery">
      <div className="wrap">
        <h2 className="gallery-heading">Project Gallery</h2>
        <div>
          {projects.map((project, index) => {
            let style = {}
            if (index % 2 !== 0) {
              style = { backgroundColor: "rgb(240, 240, 240)" }
            }
            return (
              <TrackVisibility once partialVisibility offset={-250}>
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
              </TrackVisibility>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
