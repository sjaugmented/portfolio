import React, { useRef } from "react"
import { useSpring, animated, useChain } from "react-spring"
import "../App.css"

const Header = () => {
  const refOne = useRef()
  const nameSpring = useSpring({
    ref: refOne,
    delay: 300,
    config: { duration: 500, mass: 250, tension: 100, friction: 10 },
    from: { opacity: 0, zoom: "75%" },
    to: { opacity: 1, zoom: "100%" },
  })

  const refTwo = useRef()
  const tagSpring = useSpring({
    ref: refTwo,
    delay: 300,
    config: { duration: 500, mass: 0.5, tension: 100, friction: 10 },
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  useChain([refOne, refTwo])

  return (
    <header className="vertical-center">
      <div className="title">
        <animated.div style={nameSpring}>
          <h1>
            <a href="#contact">Seth Johnson</a>
          </h1>
        </animated.div>
        <animated.div style={tagSpring}>
          <h2>
            A Software Engineer Who <span className="underline">Won't</span>{" "}
            Kidnap and Murder You
          </h2>
        </animated.div>
      </div>
    </header>
  )
}

export default Header
