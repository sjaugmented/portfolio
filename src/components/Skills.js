import React from "react"

const tech = {
  js: "https://i.imgur.com/YggAT7k.png",
  node: "https://i.imgur.com/YmyweW2.png",
  mongo: "https://i.imgur.com/ayWrp2i.png",
  react: "https://i.imgur.com/ZNxz1vd.png",
  native: "https://i.imgur.com/ZxtHdTj.png",
  ios: "https://i.imgur.com/lR4SrPL.png",
}

const apis = {
  // api icons
}

const Skills = () => {
  return (
    <section id="skills">
      <div className="front-back">
        <h2>What I know</h2>
        <div className="frontend">
          <h3>Front End</h3>
        </div>
        <div className="backend">
          <h3>Back End</h3>
        </div>
      </div>
      <div className="apis">
        <h3>API's</h3>
      </div>
    </section>
  )
}

export default Skills
