import React, { useRef } from "react"
import { useTrail, animated, useChain } from "react-spring"

const config = { mass: 1, tension: 170, friction: 26 }

export default function SkillCard({ data, isVisible, placeHolder }) {
  const trail = useTrail(data.length, {
    config,
    delay: 0,
    from: { opacity: 0, transform: "translate(100vw)" },
    to: { opacity: 1, transform: "translate(0vw)" },
  })

  return (
    <div className="skills-list">
      <div className="logos">
        {trail.map((props, index) =>
          !placeHolder ? (
            <animated.div key={index} className="animated" style={props}>
              <img key={index} src={data[index].icon} alt={data[index].name} />
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
