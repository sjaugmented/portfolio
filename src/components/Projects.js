import React from "react"
import "../App.css"
import ProjectCard from "./ProjectCard"
import projects from "../data/projects.json"
import TrackVisibility from "react-on-screen"

const Projects = ({ id }) => {
  return (
    <section id="gallery">
      <div className="wrap">
        <h1 className="gallery-heading">What I've Done</h1>
        <div>
          {projects.map((project, index) => {
            if (project.printIt) {
              let style = {}
              // if (index % 2 === 0) {
              //   style = { backgroundColor: "rgb(30, 30, 30)" }
              // }
              return (
                <TrackVisibility
                  key={index}
                  once
                  partialVisibility
                  offset={-250}
                >
                  <ProjectCard style={style} key={index} project={project} />
                </TrackVisibility>
              )
            }
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
