import React from "react"
import skills from "../data/skills.json"
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
              {skills.languages.map((item, index) => {
                return <img key={index} src={item.icon} alt={item.name} />
              })}
            </div>
          </div>
        </div>
        <div className="skills-section">
          <h3>Front End</h3>
          <div className="skills-list">
            <div className="logos">
              {skills.front.map((item, index) => {
                return <img key={index} src={item.icon} alt={item.name} />
              })}
            </div>
          </div>
        </div>
        <div className="skills-section">
          <h3>Back End</h3>
          <div className="skills-list">
            <div className="logos">
              {skills.back.map((item, index) => {
                return <img key={index} src={item.icon} alt={item.name} />
              })}
            </div>
          </div>
        </div>
        <div className="skills-section">
          <h3>API's</h3>
          <div className="skills-list">
            <div className="logos">
              {skills.apis.map((item, index) => {
                return <img key={index} src={item.icon} alt={item.name} />
              })}
            </div>
          </div>
        </div>
        <div className="skills-section">
          <h3>Platforms</h3>
          <div className="skills-list">
            <div className="logos">
              {skills.platforms.map((item, index) => {
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
