import React from "react"
import tech from "../data/tech.json"
import SkillCard from "./SkillCard"

const Skills = () => {
  return (
    <section id="skills">
      <h2>What I know</h2>
      <div className="skills-container">
        <div className="skills-section">
          <h3>Languages</h3>
          <div className="skills-list">
            <div className="logos">
              {tech.langugage.map((item, index) => {
                return <img key={index} src={item.icon} alt={item.name} />
              })}
            </div>
          </div>
        </div>
        <div className="skills-section">
          <h3>Front End</h3>
          <div className="skills-list">
            <div className="logos">
              {tech.front.map((item, index) => {
                return <img key={index} src={item.icon} alt={item.name} />
              })}
            </div>
          </div>
        </div>
        <div className="skills-section">
          <h3>Back End</h3>
          <div className="skills-list">
            <div className="logos">
              {tech.back.map((item, index) => {
                return <img key={index} src={item.icon} alt={item.name} />
              })}
            </div>
          </div>
        </div>
        <div className="skills-section">
          <h3>API's</h3>
          <div className="skills-list">
            <div className="logos">
              {tech.api.map((item, index) => {
                return <img key={index} src={item.icon} alt={item.name} />
              })}
            </div>
          </div>
        </div>
        <div className="skills-section">
          <h3>Platforms</h3>
          <div className="skills-list">
            <div className="logos">
              {tech.platforms.map((item, index) => {
                return <img key={index} src={item.icon} alt={item.name} />
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
