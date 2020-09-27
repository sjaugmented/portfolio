import React from "react"
import App from "../App.css"
import ProjectCard from "./ProjectCard"
import projects from "../data/projects.json"

// const gallery = [
//   {
//     imgUrl: "https://i.imgur.com/JYdWeK1.png",
//     name: "TravelBook",
//     description:
//       "TravelBook is a WIP app for iOS that will track everything about your trips - miles traveled, types of transportation used, types of activites, favorite foods and places, photo memories, percentage of a country visited, etc. It will also feature friend-tagging and Trophies you can earn for various milestones in your travel life.",
//     process:
//       "The goal of this was to try something new and uncomfortable, to see how far I could push myself, and React Native was an exciting and unknown area worth exploring. Also, as the spouse of a travel junkie, this is exactly the kind of app my wife and I have been looking for.",
//     appLink: "",
//     repoLink: "https://github.com/sjaugmented/travel-book-client",
//     tech: {
//       js: true,
//       node: true,
//       mongo: true,
//       native: true,
//       ios: true,
//     },
//   },
//   {
//     imgUrl: "https://i.imgur.com/q1kmvua.png",
//     name: "Vote-ify",
//     description:
//       "Vote-ify brings Democracy to playlists. Using the Spotify API, users can listen to and contribute songs to 12 playlists, all curated and managed by the community. When a user suggests a song, it is sent into a queue where it has two weeks to earn enough votes to be officially added to the playlist.",
//     process:
//       "Overall, we had a lot of struggles with Spotify. It might be straight-forward for programmers with more than 9 weeks experience, but we definitely had some hurdles to overcome - mainly working with access and refresh tokens. Still haven't exactly mastered those, but we were able to get the app to a place that works.",
//     appLink: "https://vote-ify.herokuapp.com/",
//     repoLink: "https://github.com/sjaugmented/project3-api",
//     tech: {
//       js: true,
//       node: true,
//       mongo: true,
//       react: true,
//     },
//   },
//   {
//     imgUrl: "https://i.imgur.com/5tKEvOS.png",
//     name: "Uno",
//     description:
//       "For my first ever solo JS project, I wanted to create something that was fun, simple yet stylish, and accurately modeled the rules of one of my favorite card games. As a stretch goal, I decided to see if I could model a convincing and challenging CPU opponent, one that wouldn’t just blindly play it’s best cards every time but use strategy and revenge to respond to the player’s moves. Give it a whirl and let me know how I did!",
//     process:
//       'The biggest challenge was making the CPU feel as human as possible, complete with delays for decision making and a varying strategy of when to play what cards. The CPU even has a "vengeance factor," remembering if and when the player hit it with a draw card, and responding in kind if it has draw cards of its own.',
//     appLink: "https://sjaugmented.github.io/Project1-Uno/",
//     repoLink: "https://github.com/sjaugmented/Project1-Uno",
//     tech: {
//       js: true,
//     },
//   },
//   {
//     imgUrl: "https://i.imgur.com/4vorNdV.png",
//     name: "ZooKeeper",
//     description:
//       "A simple management app for pretend zookeepers to manage a pretend zoo. It utilizes RESTful routes, CRUD, and two models to give users control over enclosures and the animals within them.",
//     process:
//       "My focus here was backend, setting up the server, getting the Atlas DB hooked up, defining routes and controllers, and making sure it all had reliable CRUD functionality. This was also my first time working with Passport and Google Auth.",
//     appLink: "https://project-zoo-keeper.herokuapp.com",
//     repoLink: "https://github.com/sjaugmented/Project-ZooKeeper",
//     tech: {
//       js: true,
//       node: true,
//       mongo: true,
//     },
//   },
// ]

const Projects = () => {
  return (
    <section id="gallery">
      <div className="wrap">
        <h2>Project Gallery</h2>
        <div>
          {projects.map((project) => {
            return (
              <ProjectCard
                imgSrc={project.imgUrl}
                name={project.name}
                description={project.description}
                process={project.process}
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
