import React, { Component } from "react"

class Contact extends Component {
  state = {
    name: "",
    email: "",
    subject: "",
    message: "",
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
    this.setState({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <section id="contact">
        <div className="wrap">
          <h2>Drop me a line</h2>
          <form className="contact" onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="Who are you?"
              className="col-third"
            />
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              placeholder="What's your email?"
              className="col-third"
            />
            <input
              type="text"
              name="subject"
              value={this.state.subject}
              onChange={this.handleChange}
              placeholder="Subject"
              className="col-third"
            />
            <textarea
              name="message"
              value={this.state.message}
              onChange={this.handleChange}
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
}

export default Contact
