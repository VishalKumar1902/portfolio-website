import React from "react";
import "../CSS/Projects.css";
import ProjectCards from "./ProjectCards";

import Project1 from "../assets/quizProject.png";
import Project2 from "../assets/blogProject.png";
import Project3 from "../assets/hangmanProject.png";
const Projects = () => {
  const ProjectCardData = [
    {
      name: "Quiz Application",
      imageUrl: Project1,
      description: "Created using React.js, CSS and react-router-dom",
      codeLink: "https://github.com/VishalKumar1902/Quiz-app",
      demoLink: "https://quizbyte-learning.netlify.app/",
    },

    {
      name: "Blogging App",
      imageUrl: Project2,
      description: "Created using React.js, Firebase and CSS",
      codeLink: "https://github.com/VishalKumar1902/BlogApplication",
      demoLink: "https://blog-app-by-vishal.netlify.app/",
    },
    {
      name: "Hangman Game",
      imageUrl: Project3,
      description: "Created using HTML, CSS and JavaScript",
      codeLink: "https://github.com/VishalKumar1902/Hangman-game",
      demoLink: "https://vishalkumar1902.github.io/Hangman-game/",
    },
  ];
  return (
    <div>
      <ProjectCards ProjectCardData={ProjectCardData} />
    </div>
  );
};

export default Projects;
