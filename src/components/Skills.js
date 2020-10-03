import React from "react"
import skills from "../data/skills.json"
import SkillCard from "./SkillCard"

const Skills = () => {
  return (
    <section id="skills">
      <h2>What I know</h2>
      <div className="skills-section">
        <h3>Languages</h3>
        <SkillCard data={skills.languages} />
      </div>
      <div className="skills-section">
        <h3>Front End</h3>
        <SkillCard data={skills.front} />
      </div>
      <div className="skills-section">
        <h3>Back End</h3>
        <SkillCard data={skills.back} />
      </div>
      <div className="skills-section">
        <h3>API's</h3>
        <SkillCard data={skills.apis} />
      </div>
      <div className="skills-section">
        <h3>Platforms</h3>
        <SkillCard data={skills.platforms} />
      </div>
    </section>
  )
}

export default Skills
