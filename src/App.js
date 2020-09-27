import React from "react"
import { Route, Link, Switch } from "react-router-dom"
import "./App.css"
import { Nav, Header, Skills, Projects, About, Contact } from "./components"

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
