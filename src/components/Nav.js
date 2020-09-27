import React from "react"
import "../App.css"

const navItems = [
  // {
  //   href: "#skills",
  //   text: "Skills",
  // },
  {
    href: "#about",
    text: "My Story",
  },
  {
    href: "#gallery",
    text: "Projects",
  },
  {
    href: "#contact",
    text: "Contact",
  },
]

const Nav = () => {
  return (
    <nav>
      {/* <a className="hamburger" href="">
        <i className="fa fa-bars" />
      </a> */}
      <ul>
        {navItems.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.href}>{item.text}</a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Nav
