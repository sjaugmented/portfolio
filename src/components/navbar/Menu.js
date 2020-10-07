import React from "react"
import { nav, social } from "../../data/navItems.json"
import { Link } from "react-scroll"
import styled from "styled-components"
import resume from "../../data/resume.pdf"

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
    height: 525px;
    width: 100vw;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    a {
      color: #fff;
    }
    a i {
      font-size: 30px;
      font-size: 2rem;
      color: rgb(3, 195, 209);
    }
  }
`

const Menu = ({ open, setOpen }) => {
  return (
    <Ul open={open}>
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
                offset={0}
                duration={750}
                onClick={() => setOpen(!open)}
              >
                {item.text}
              </Link>
            ) : (
              <a href={resume} download="seth-johnson-cv.pdf">
                {item.text}⇣
              </a>
            )}
          </li>
        )
      })}
      <li key={nav.length + social.length}>
        {social.map((item, index) => {
          if (item.name !== "Instagram") {
            return (
              <a
                key={index}
                target="_blank"
                rel="noopener noreferrer"
                href={item.href}
              >
                <i className={item.icon} aria-hidden="true"></i>
              </a>
            )
          } else return ""
        })}
      </li>
    </Ul>
  )
}

export default Menu
