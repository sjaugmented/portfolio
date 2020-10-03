import React from "react"

export default function SkillCard({ data }) {
  return (
    <div className="skills-list">
      <div className="logos">
        {data.map((item, index) => {
          return <img key={index} src={item.icon} alt={item.name} />
        })}
      </div>
    </div>
  )
}
