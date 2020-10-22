import React, { Component } from "react"
import * as emailjs from "emailjs-com"
import Social from "./Social.js"

class Contact extends Component {
  state = {
    name: "",
    email: "",
    subject: "",
    message: "",
  }

  resetForm = () => {
    this.setState({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault()

    let templateParams = {
      from_name: this.state.name,
      from_email: this.state.email,
      to_name: "Seth",
      subject: this.state.subject,
      message: this.state.message,
    }

    await emailjs.send(
      "default_service",
      "template_0piu4nl",
      templateParams,
      "user_igXlX8R7998fKkVyLJC1s"
    )

    this.resetForm()
    this.props.setVisible(true)
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <section id="contact">
        <div className="wrap">
          <h1 className="form-header">Drop me a line</h1>
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
          <Social scrollAware={false} className="contact-social" />
        </div>
      </section>
    )
  }
}

export default Contact
