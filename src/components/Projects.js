import React from "react"
import App from "../App.css"
import ProjectCard from "./ProjectCard"

const gallery = [
  {
    imgUrl: "https://i.imgur.com/JYdWeK1.png",
    name: "TravelBook",
    description:
      "TravelBook is a WIP app for iOS that will track everything about your trips - miles traveled, types of transportation used, types of activites, favorite foods and places, photo memories, percentage of a country visited, etc. It will also feature friend-tagging and Trophies you can earn for various milestones in your travel life.",
    appLink: "",
    repoLink: "https://github.com/sjaugmented/travel-book-client",
    tech: {
      js: true,
      node: true,
      mongo: true,
      native: true,
      ios: true,
    },
  },
  {
    imgUrl: "https://i.imgur.com/q1kmvua.png",
    name: "Vote-ify",
    description:
      "Vote-ify brings Democracy to music. Using the Spotify API, users can listen to and contribute songs to 12 playlists, all curated and managed by the community. When a user suggests a song, it is sent into a queue where it has two weeks to earn enough votes to be officially added to the playlist.",
    appLink: "https://vote-ify.herokuapp.com/",
    repoLink: "https://github.com/sjaugmented/project3-api",
    tech: {
      js: true,
      node: true,
      mongo: true,
      react: true,
    },
  },
  {
    imgUrl: "https://i.imgur.com/5tKEvOS.png",
    name: "Uno",
    description:
      "For my first ever solo JS project, I wanted to create something that was fun, simple yet stylish, and accurately modeled the rules of one of my favorite card games. As a stretch goal, I decided to see if I could model a convincing and challenging CPU opponent, one that wouldn’t just blindly play it’s best cards every time but use strategy and revenge to respond to the player’s moves. Give it a whirl and let me know how I did!",
    appLink: "https://sjaugmented.github.io/Project1-Uno/",
    repoLink: "https://github.com/sjaugmented/Project1-Uno",
    tech: {
      js: true,
    },
  },
  {
    imgUrl: "https://i.imgur.com/4vorNdV.png",
    name: "ZooKeeper",
    description:
      "An app for pretend zookeepers to manage a pretend zoo. This project was all about the backend and making sure it had reliable CRUD functionality. This was also my first time working with Auth and Passport.",
    appLink: "https://project-zoo-keeper.herokuapp.com",
    repoLink: "https://github.com/sjaugmented/Project-ZooKeeper",
    tech: {
      js: true,
      node: true,
      mongo: true,
    },
  },
]

const Projects = () => {
  return (
    <section id="gallery">
      <div className="wrap">
        <h2>Project Gallery</h2>
        <div>
          {gallery.map((project) => {
            return (
              <ProjectCard
                imgSrc={project.imgUrl}
                name={project.name}
                description={project.description}
                appLink={project.appLink}
                repoLink={project.repoLink}
                tech={project.tech}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
