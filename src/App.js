import React from "react"
import { Route, Link, Switch } from "react-router-dom"
import "./App.css"
import { Nav, Header, Skills, Projects, About } from "./components"

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Skills />
      <Projects />
      <About />
    </div>
  )
}

export default App
