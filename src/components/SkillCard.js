import React from "react"
import { useTrail, animated } from "react-spring"

const config = { mass: 1, tension: 170, friction: 26 }

export default function SkillCard({ data, isVisible, placeHolder, reverse }) {
  const trail = useTrail(data.length, {
    config,
    delay: 0,
    from: {
      opacity: 0,
      transform: reverse ? "translate(-100vw)" : "translate(100vw)",
    },
    to: { opacity: 1, transform: "translate(0vw)" },
  })

  return (
    <div className="skills-list">
      <div className="logos">
        {trail.map((props, index) =>
          !placeHolder ? (
            <animated.div key={index} className="animated" style={props}>
              <img key={index} src={data[index].icon} alt={data[index].name} />
              <p>{data[index].name}</p>
            </animated.div>
          ) : (
            <div key={index} className="placeholder" style={props}>
              <img key={index} src={data[index].icon} alt={data[index].name} />
            </div>
          )
        )}
      </div>
    </div>
  )
}
