import React, { useRef } from "react"
import { useSpring, animated, useChain } from "react-spring"
import "../App.css"

const Header = () => {
  const refOne = useRef()
  const nameSpring = useSpring({
    ref: refOne,
    delay: 300,
    config: { duration: 500, mass: 250, tension: 100, friction: 10 },
    from: { opacity: 0, zoom: "125%" },
    to: { opacity: 1, zoom: "100%" },
  })

  const refTwo = useRef()
  const tagSpring1 = useSpring({
    ref: refTwo,
    config: { duration: 500, mass: 0.5, tension: 100, friction: 10 },
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  const refThree = useRef()
  const tagSpring2 = useSpring({
    ref: refThree,
    delay: 200,
    config: { duration: 500, mass: 0.5, tension: 100, friction: 10 },
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  const refFour = useRef()
  const tagSpring3 = useSpring({
    ref: refFour,
    config: { duration: 500, mass: 0.5, tension: 100, friction: 10 },
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  useChain([refOne, refTwo, refThree, refFour])

  return (
    <header className="vertical-center">
      <div className="title">
        <animated.div style={nameSpring}>
          <h1>
            <a href="#contact">Seth Johnson</a>
          </h1>
        </animated.div>
        <animated.div className="subtitle" style={tagSpring1}>
          <h2>A Full Stack Storyteller</h2>
        </animated.div>
        {/* <animated.div className="subtitle" style={tagSpring2}>
          <h2>With a narrative</h2>
        </animated.div> */}
        {/* <animated.div className="subtitle" style={tagSpring3}>
          <h2>Creative</h2>
        </animated.div> */}
      </div>
    </header>
  )
}

export default Header
