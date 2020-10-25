import React from "react"
import TrackVisibility from "react-on-screen"
import skills from "../data/skills.json"
import SkillCard from "./SkillCard"

const Skills = () => {
  return (
    <section id="skills">
      <h1>What I know</h1>
      <div className="skills-section">
        <h3>Languages I Write</h3>
        <TrackVisibility key="0" once partialVisibility offset={100}>
          {({ isVisible }) =>
            isVisible && <SkillCard data={skills.languages} />
          }
        </TrackVisibility>
      </div>
      <div className="frameworks">
        <div className="skills-section">
          <h3>Front End Frameworks</h3>
          <TrackVisibility key="0" once partialVisibility offset={100}>
            {({ isVisible }) =>
              isVisible && <SkillCard data={skills.front} reverse />
            }
          </TrackVisibility>
        </div>
        <div className="spacer"></div>
        <div className="skills-section">
          <h3>Back End Frameworks</h3>
          <TrackVisibility key="0" once partialVisibility offset={100}>
            {({ isVisible }) => isVisible && <SkillCard data={skills.back} />}
          </TrackVisibility>
        </div>
      </div>
      <div className="skills-section">
        <h3>API's I've Conquered</h3>
        <TrackVisibility key="0" once partialVisibility offset={100}>
          {({ isVisible }) =>
            isVisible && <SkillCard data={skills.apis} reverse />
          }
        </TrackVisibility>
      </div>
      <div className="skills-section">
        <h3>Platforms I Deploy To</h3>
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
