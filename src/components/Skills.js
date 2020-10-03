import React from "react"
import TrackVisibility from "react-on-screen"
import skills from "../data/skills.json"
import SkillCard from "./SkillCard"

const Skills = () => {
  return (
    <section id="skills">
      <h2>What I know</h2>
      <div className="skills-section">
        <h3>Languages</h3>
        <TrackVisibility key="0" once partialVisibility offset={100}>
          {({ isVisible }) =>
            isVisible && <SkillCard data={skills.languages} />
          }
        </TrackVisibility>
      </div>
      <div className="skills-section">
        <h3>Front End</h3>
        <TrackVisibility key="0" once partialVisibility offset={100}>
          {({ isVisible }) =>
            isVisible && <SkillCard data={skills.front} reverse />
          }
        </TrackVisibility>
      </div>
      <div className="skills-section">
        <h3>Back End</h3>
        <TrackVisibility key="0" once partialVisibility offset={100}>
          {({ isVisible }) => isVisible && <SkillCard data={skills.back} />}
        </TrackVisibility>
      </div>
      <div className="skills-section">
        <h3>API's</h3>
        <TrackVisibility key="0" once partialVisibility offset={100}>
          {({ isVisible }) =>
            isVisible && <SkillCard data={skills.apis} reverse />
          }
        </TrackVisibility>
      </div>
      <div className="skills-section">
        <h3>Platforms</h3>
        <TrackVisibility key="0" once partialVisibility offset={100}>
          {({ isVisible }) =>
            isVisible && <SkillCard data={skills.platforms} />
          }
        </TrackVisibility>
      </div>
    </section>
  )
}

export default Skills
