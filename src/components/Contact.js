import React from "react"

const Contact = () => {
  return (
    <section id="contact">
      <div className="wrap">
        <h2>Drop me a line</h2>
        <form className="contact">
          <input type="text" placeholder="Who are you?" className="col-third" />
          <input
            type="email"
            placeholder="What's your email?"
            className="col-third"
          />
          <input type="text" placeholder="Subject" className="col-third" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="What's up?"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
