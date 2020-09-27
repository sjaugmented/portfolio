import React from "react"
import "../projectCard.css"

const logos = {
  js: "https://i.imgur.com/YggAT7k.png",
  node: "https://i.imgur.com/YmyweW2.png",
  mongo: "https://i.imgur.com/ayWrp2i.png",
  react: "https://i.imgur.com/ZNxz1vd.png",
  native: "https://i.imgur.com/ZxtHdTj.png",
  ios: "https://i.imgur.com/lR4SrPL.png",
}

const ProjectCard = ({
  imgSrc,
  index,
  name,
  description,
  process,
  appLink,
  repoLink,
  tech,
}) => {
  return (
    <section>
      <h3>{name}</h3>
      <img src={imgSrc} alt={index} />
      <div className="logos">
        {tech.react && <img src={logos.react} />}
        {tech.native && <img src={logos.native} />}
        {tech.ios && <img src={logos.ios} />}
        {tech.node && <img src={logos.node} />}
        {tech.js && <img src={logos.js} />}
        {tech.mongo && <img src={logos.mongo} />}
      </div>
      <p>{description}</p>
      <p>{process}</p>
      <div className="buttons">
        {appLink && (
          <>
            <a target="_blank" href={appLink}>
              <button>Check out the app</button>
            </a>
          </>
        )}
        <a target="_blank" href={repoLink}>
          <button>Check out the code</button>
        </a>
      </div>
    </section>
  )
}

export default ProjectCard
