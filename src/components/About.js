import React from "react"

const About = () => {
  return (
    <section id="about" className="callout about">
      <article className="wrap">
        <img
          className="self"
          src="https://i.imgur.com/5KPInk0.jpg"
          alt="my selfie"
        />
        <h1>Who I Am</h1>
        <p>
          As human beings, <strong>we are built on stories</strong>. From the
          minutia of a morning commute to the vast scope of our careers,
          relationships, and lives, our entire identity is built around a
          narrative, a single thread that unifies everything. That's the
          question that needs to drive how we think about designing tech: what's
          the thread? What is the journey we want the user to take? What's the
          journey <em>they</em> want to go on?
        </p>
        <p>
          My life began with storytelling. It was what always interested me. I
          started as a writer then combined my love of story with my love of
          photography and Mastered in Cinematography, working as a professional
          Cinematographer for over a decade.
        </p>

        <p>Now I write code.</p>

        {/* <p>
          Creative problem solving and team management are the pillars of my
          professional experience. I thrive in high stress environments and
          maintain a calm, relaxed, goal-focused attitude. I bring the same
          level-headed approach to my code and Full Stack development: What is
          the feeling we want to evoke in the user; what are the limiting
          factors of the project; what’s the best way forward? These are the
          central questions that define everything I do.
        </p> */}

        <p>
          When I’m not programming or shooting features or commercials, you can
          find me hiking, perfecting my homemade cold-brew (of course you can
          try it), or chilling with a good story - no matter where it might come
          from.
        </p>

        <p>
          If you are looking for a creative full stack developer with an eye
          toward user experience and narrative design, we should talk. We
          probably have a lot in common.
        </p>
      </article>
    </section>
  )
}

export default About
