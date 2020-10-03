import React from "react"

export default function SkillCard({ data, index }) {
  return (
    <div className="skill-card">
      <img key={index} src={data.icon} alt={data.name} />
      {/* <p>{data.name}</p> */}
    </div>
  )
}
