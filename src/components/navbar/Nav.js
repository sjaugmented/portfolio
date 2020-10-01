import React from "react"
import "../../App.css"
import Burger from "./Burger"
import { nav } from "../../data/navItems.json"
import { Link, animateScroll as scroll } from "react-scroll"

const Nav = () => {
  return (
    <nav>
      <Burger />
      <ul>
        {nav.map((item, index) => {
          return (
            <li key={index}>
              <Link
                activeClass="active"
                to={item.link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {item.text}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Nav
