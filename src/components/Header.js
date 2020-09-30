import React from "react"
import "../App.css"

const Header = () => {
  return (
    <header className="vertical-center">
      {/* <div className="bg-image">
        <img src="https://i.imgur.com/59mojbA.jpg" alt="background" />
      </div> */}
      <div className="title">
        <h1>
          <a href="#contact">Seth Johnson</a>
        </h1>
        <h2>
          A Software Engineer Who <span className="underline">Won't</span>{" "}
          Kidnap and Murder You
        </h2>
      </div>
    </header>
  )
}

export default Header
