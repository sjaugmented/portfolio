import React from "react"
import navItems from "../../data/navItems.json"
import styled from "styled-components"

const Ul = styled.ul`
  display: none;
  @media (max-width: 560px) {
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    li {
      padding: 24px 10px;
    }
    flex-flow: column nowrap;
    background-color: rgb(100, 100, 100);
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
    top: -15px;
    left: 0;
    height: 40vh;
    width: 100vw;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    a {
      color: #fff;
    }
  }
`

const Menu = ({ open, setOpen }) => {
  return (
    <Ul open={open}>
      {navItems.map((item, index) => {
        return (
          <li key={index}>
            <a href={item.href} onClick={() => setOpen(!open)}>
              {item.text}
            </a>
          </li>
        )
      })}
    </Ul>
  )
}

export default Menu
