import React, { useEffect, useState } from "react"
import { useScrollPosition } from "../hooks/useScrollPosition"

const Social = () => {
  const [screenY, setScreenY] = useState(0)

  useScrollPosition(({ prevPos, currPos }) => {
    console.log(screenY)

    setScreenY(currPos.y)
  })

  let style = {}

  screenY < -800
    ? (style = { color: "rgb(16, 105, 101)" })
    : (style = { color: "rgb(32, 209, 200)" })

  return (
    <div class="social-links">
      <a
        style={style}
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/sjaugmented"
      >
        <i className="fa fa-github" aria-hidden="true"></i>
      </a>
      <a
        style={style}
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/cineseth"
      >
        <i className="fa fa-linkedin" aria-hidden="true"></i>
      </a>
      <a
        style={style}
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.instagram.com/sether82/?hl=en"
      >
        <i className="fa fa-instagram" aria-hidden="true"></i>
      </a>
    </div>
  )
}

export default Social
