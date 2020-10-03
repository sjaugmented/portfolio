import React, { useState } from "react"
import "../projectCard.css"
import skills from "../data/skills.json"

const logos = {
  js: "https://i.imgur.com/YggAT7k.png",
  node: "https://i.imgur.com/YmyweW2.png",
  mongo: "https://i.imgur.com/ayWrp2i.png",
  react: "https://i.imgur.com/ZNxz1vd.png",
  native: "https://i.imgur.com/ZxtHdTj.png",
  ios: "https://i.imgur.com/lR4SrPL.png",
}

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
  const [vis, setVis] = useState(false)

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
      <p>{description}</p>
      <p>{process}</p>
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
