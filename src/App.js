import React, { useState } from "react"
import Routes from "./config/routes"
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
import Popup from "reactjs-popup"

function App() {
  const [visibile, setVisible] = useState(false)

  const resetPopup = () => {
    setVisible(false)
  }

  return (
    <div className="App">
      <Nav />
      <Header />
      <Social scrollAware={true} className="social-links" />
      <Skills />
      <Projects />
      <About />
      <Contact visible={visibile} setVisible={setVisible} />
      <Foot />
      <Popup open={visibile} closeOnDocumentClick onClose={resetPopup}>
        <div className="modal">
          <p>Thanks! I'll get back to you as soon as I can.</p>
          <button onClick={resetPopup}>Cool beans.</button>
        </div>
      </Popup>
    </div>
  )
}

export default App
