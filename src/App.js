import React from "react"
// import { Route, Link, Switch } from "react-router-dom"
import "./App.css"
import {
  Nav,
  Header,
  Skills,
  Projects,
  About,
  Contact,
  Foot,
  Social,
} from "./components"

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Social />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Foot />
    </div>
  )
}

export default App
