import React from "react"
import "../../App.css"
import Burger from "./Burger"
import { nav } from "../../data/navItems.json"

const Nav = () => {
  return (
    <nav>
      <Burger />
      <ul>
        {nav.map((item, index) => {
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
