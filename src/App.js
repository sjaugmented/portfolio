import React, { useState } from "react"
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
      <Skills />
      <Projects />
      <About />
      <Contact />
      <Foot />
    </div>
  )
}

export default App
