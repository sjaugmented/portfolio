import React from "react"
import "../App.css"

const navItems = [
  {
    href: "#skills",
    text: "Skills",
  },
  {
    href: "#gallery",
    text: "Projects",
  },
  {
    href: "#about",
    text: "About",
  },
  {
    href: "#contact",
    text: "Contact",
  },
]

const Nav = () => {
  return (
    <nav>
      <a className="hamburger" href="">
        <i className="fa fa-bars" />
      </a>
      <ul>
        {navItems.map((item) => {
          return (
            <li>
              <a href={item.href}>{item.text}</a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Nav
