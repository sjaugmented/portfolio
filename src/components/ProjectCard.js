import React, { useState } from "react"
import "../projectCard.css"
import skills from "../data/skills.json"

const ProjectCard = ({ style, project, index, isVisible }) => {
  const [info, setInfo] = useState({
    why: false,
    challenge: false,
    how: false,
  })

  const resetInfoDisplays = () => {
    setInfo({ why: false, challenge: false, how: false })
  }

  return (
    <section
      className={
        isVisible ? "project-card fade-in appear" : "project-card fade-in"
      }
      style={style}
    >
      <h3 className="project-name">{project.name}</h3>
      <div className="logos api">
        {project.tech.ios && (
          <img src={skills.platforms[0].icon} alt="ios platform" />
        )}
        {project.tech.appleMaps && (
          <img src={skills.apis[0].icon} alt="apple maps api" />
        )}
        {project.tech.googleAuth && (
          <img src={skills.apis[1].icon} alt="google auth api" />
        )}
        {project.tech.googleMaps && (
          <img src={skills.apis[2].icon} alt="google maps api" />
        )}
        {project.tech.googlePlaces && (
          <img src={skills.apis[3].icon} alt="google places api" />
        )}
        {project.tech.spotify && (
          <img src={skills.apis[4].icon} alt="spotify api" />
        )}
      </div>
      <img src={project.imgUrl} alt={index} />
      <div className="logos tech">
        {project.tech.cSharp && (
          <img src={skills.languages[0].icon} alt="c sharp" />
        )}
        {project.tech.js && (
          <img src={skills.languages[3].icon} alt="javascript" />
        )}
        {project.tech.css && <img src={skills.languages[2].icon} alt="css" />}
        {project.tech.python && (
          <img src={skills.languages[4].icon} alt="python" />
        )}
        {project.tech.html && <img src={skills.languages[1].icon} alt="html" />}
        {project.tech.react && <img src={skills.front[0].icon} alt="react" />}
        {project.tech.native && (
          <img src={skills.front[1].icon} alt="react native" />
        )}
        {project.tech.materialize && (
          <img src={skills.front[2].icon} alt="materialize" />
        )}
        {project.tech.ant && (
          <img src={skills.front[3].icon} alt="ant design" />
        )}
        {project.tech.node && <img src={skills.back[0].icon} alt="node.js" />}
        {project.tech.mongo && <img src={skills.back[1].icon} alt="mongoDB" />}
        {project.tech.express && (
          <img src={skills.back[2].icon} alt="express" />
        )}
        {project.tech.sql && <img src={skills.back[3].icon} alt="sql" />}
      </div>
      <div className="details">
        <section
          className="why-how"
          onMouseEnter={() => {
            setInfo({ why: true })
          }}
          onMouseLeave={resetInfoDisplays}
        >
          <h3>The</h3>
          <h2>Why</h2>
        </section>
        <section
          className="why-how"
          onMouseEnter={() => {
            setInfo({ challenge: true })
          }}
          onMouseLeave={resetInfoDisplays}
        >
          <h3>The</h3>
          <h2>Challenge</h2>
        </section>
        <section
          className="why-how"
          onMouseEnter={() => {
            setInfo({ how: true })
          }}
          onMouseLeave={resetInfoDisplays}
        >
          <h3>The</h3>
          <h2>How</h2>
        </section>
      </div>
      <div className="info-panel">
        {!info.why && !info.challenge && !info.how && <p>{project.summary}</p>}
        {info.why && <p>{project.why}</p>}
        {info.challenge && <p>{project.challenge}</p>}
        {info.how && <p>{project.how}</p>}
      </div>
      <div className="buttons">
        {project.appLink && (
          <>
            <a target="_blank" rel="noopener noreferrer" href={project.appLink}>
              <button>Check out the app</button>
            </a>
          </>
        )}
        <a target="_blank" rel="noopener noreferrer" href={project.repoLink}>
          <button>Check out the code</button>
        </a>
      </div>
    </section>
  )
}

export default ProjectCard
