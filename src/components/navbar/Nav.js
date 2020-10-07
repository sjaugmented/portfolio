import React from "react"
import "../../App.css"
import Burger from "./Burger"
import { nav } from "../../data/navItems.json"
import { Button, Link } from "react-scroll"

import resume from "../../data/resume.pdf"

const Nav = () => {
  return (
    <nav>
      <Burger />
      <ul>
        {nav.map((item, index) => {
          return (
            <li key={index}>
              {item.link !== undefined ? (
                <Link
                  key={index}
                  activeClass="active"
                  to={item.link}
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={750}
                >
                  {item.text}
                </Link>
              ) : (
                <a href={resume} download="seth-johnson-cv.pdf">
                  {item.text}↓
                </a>
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Nav
