import React, { useState } from "react"
import { useScrollPosition } from "../hooks/useScrollPosition"
import { social } from "../data/navItems.json"

const Social = ({ scrollAware, className }) => {
  const [screenY, setScreenY] = useState(0)

  useScrollPosition(({ prevPos, currPos }) => {
    setScreenY(currPos.y)
  })

  let style = {}

  screenY < -800 && scrollAware === true
    ? (style = { opacity: 0 })
    : (style = { opacity: 1 })

  return (
    <div className={className}>
      {social.map((item, index) => {
        return (
          <a
            key={index}
            style={style}
            target="_blank"
            rel="noopener noreferrer"
            href={item.href}
          >
            <i className={item.icon} aria-hidden="true"></i>
          </a>
        )
      })}
    </div>
  )
}

export default Social
