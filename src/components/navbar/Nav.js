import React from "react"
import "../../App.css"
import Burger from "./Burger"
import { nav } from "../../data/navItems.json"
import { Link } from "react-scroll"

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
                <a
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={item.href}
                >
                  {item.text}
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
