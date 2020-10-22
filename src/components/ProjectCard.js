import React, { useState } from "react"
import "../projectCard.css"
import skills from "../data/skills.json"

const ProjectCard = ({
  style,
  imgSrc,
  index,
  name,
  description,
  process,
  appLink,
  repoLink,
  tech,
  isVisible,
}) => {
  const [why, setWhy] = useState(false)
  const [challenge, setChallenge] = useState(false)
  const [how, setHow] = useState(false)

  const handleMouseEnters = (hover) => {
    // hover === why ? setWhy(true) : setWhy(false)
    // hover === challenge ? setChallenge(true) : setChallenge(false)
    // hover === how ? setHow(true) : setHow(false)

    if (hover === why) setWhy(true)
    else if (hover === challenge) setChallenge(true)
    else setHow(true)
  }

  const handleMouseLeaves = () => {
    setWhy(false)
    setChallenge(false)
    setHow(false)
  }

  return (
    <section
      className={
        isVisible ? "project-card fade-in appear" : "project-card fade-in"
      }
      style={style}
    >
      <h3 className="project-name">{name}</h3>
      <div className="logos api">
        {tech.ios && <img src={skills.platforms[0].icon} alt="ios platform" />}
        {tech.appleMaps && (
          <img src={skills.apis[0].icon} alt="apple maps api" />
        )}
        {tech.googleAuth && (
          <img src={skills.apis[1].icon} alt="google auth api" />
        )}
        {tech.googleMaps && (
          <img src={skills.apis[2].icon} alt="google maps api" />
        )}
        {tech.googlePlaces && (
          <img src={skills.apis[3].icon} alt="google places api" />
        )}
        {tech.spotify && <img src={skills.apis[4].icon} alt="spotify api" />}
      </div>
      <img src={imgSrc} alt={index} />
      <div className="logos tech">
        {tech.cSharp && <img src={skills.languages[0].icon} alt="c sharp" />}
        {tech.html && <img src={skills.languages[1].icon} alt="html" />}
        {tech.css && <img src={skills.languages[2].icon} alt="css" />}
        {tech.js && <img src={skills.languages[3].icon} alt="javascript" />}
        {tech.python && <img src={skills.languages[4].icon} alt="python" />}

        {tech.react && <img src={skills.front[0].icon} alt="react" />}
        {tech.native && <img src={skills.front[1].icon} alt="react native" />}
        {tech.materialize && (
          <img src={skills.front[2].icon} alt="materialize" />
        )}
        {tech.ant && <img src={skills.front[3].icon} alt="ant design" />}

        {tech.node && <img src={skills.back[0].icon} alt="node.js" />}
        {tech.mongo && <img src={skills.back[1].icon} alt="mongoDB" />}
        {tech.express && <img src={skills.back[2].icon} alt="express" />}
        {tech.sql && <img src={skills.back[3].icon} alt="sql" />}
      </div>
      <div className="details">
        <section
          className="why-how"
          onMouseEnter={() => handleMouseEnters(why)}
          onMouseLeave={handleMouseLeaves}
        >
          <h3>The</h3>
          <h2>Why</h2>
        </section>
        <section
          className="why-how"
          onMouseEnter={() => handleMouseEnters(challenge)}
          onMouseLeave={handleMouseLeaves}
        >
          <h3>The</h3>
          <h2>Challenge</h2>
        </section>
        <section
          className="why-how"
          onMouseEnter={() => handleMouseEnters(how)}
          onMouseLeave={handleMouseLeaves}
        >
          <h3>The</h3>
          <h2>How</h2>
        </section>
      </div>
      <div className="info-panel">
        {!why && !challenge && !how && <p>{description}</p>}
        {why && <p>This explains why I did this project...</p>}
        {challenge && (
          <p>This explains the primary challenge of this project...</p>
        )}
        {how && <p>This explains how I overcame that challenge...</p>}
      </div>
      {/* <p>{process}</p> */}
      <div className="buttons">
        {appLink && (
          <>
            <a target="_blank" rel="noopener noreferrer" href={appLink}>
              <button>Check out the app</button>
            </a>
          </>
        )}
        <a target="_blank" rel="noopener noreferrer" href={repoLink}>
          <button>Check out the code</button>
        </a>
      </div>
    </section>
  )
}

export default ProjectCard
