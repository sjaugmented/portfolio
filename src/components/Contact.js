import React, { useState } from "react"

const Contact = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("submitted!")
  }

  const handleChange = (e) => {
    setContact({ [e.target.name]: e.target.value })
  }

  return (
    <section id="contact">
      <div className="wrap">
        <h2>Drop me a line</h2>
        <form className="contact" onSubmit={handleSubmit}>
          <input
            type="text"
            value={contact.name}
            onChange={handleChange}
            placeholder="Who are you?"
            className="col-third"
          />
          <input
            type="email"
            value={contact.email}
            onChange={handleChange}
            placeholder="What's your email?"
            className="col-third"
          />
          <input
            type="text"
            value={contact.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="col-third"
          />
          <textarea
            name=""
            value={contact.message}
            onChange={handleChange}
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
