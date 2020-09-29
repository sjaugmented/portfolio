import React, { useEffect, useState } from "react"
import { useScrollPosition } from "../hooks/useScrollPosition"

const Social = () => {
  const [hideOnScroll, setHideOnScroll] = useState(true)

  useScrollPosition(({ prevPos, currPos }) => {
    console.log(currPos.x)
    console.log(currPos.y)
  })

  return (
    <div class="social-links">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/sjaugmented"
      >
        <i className="fa fa-github" aria-hidden="true"></i>
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/cineseth"
      >
        <i className="fa fa-linkedin" aria-hidden="true"></i>
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.instagram.com/sether82/?hl=en"
      >
        <i class="fa fa-instagram" aria-hidden="true"></i>
      </a>
    </div>
  )
}

export default Social
