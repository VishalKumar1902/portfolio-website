import React from "react";
import "../CSS/Projects.css";
import ProjectCards from "./ProjectCards";
import Project1 from "../assets/Notely.png";
import Project2 from "../assets/hangmanProject.png";
import Project3 from "../assets/blogProject.png";
import Project4 from "../assets/quizProject.png";
import Project5 from "../assets/nike.png";
const Projects = () => {
  const ProjectCardData = [
    {
      name: "Notely - Notes App",
      imageUrl: Project1,
      description: "Created using React.js, Node.js, Express.js and MongoDB",
      codeLink: "https://github.com/VishalKumar1902/NotesApp",
      demoLink: "https://notely-notesapp.netlify.app/",
    },
    {
      name: "QuizByte - Quiz App",
      imageUrl: Project4,
      description: "Created using React.js, CSS and react-router-dom",
      codeLink: "https://github.com/VishalKumar1902/Quiz-app",
      demoLink: "https://quizbyte-learning.netlify.app/",
    },
    {
      name: "Blogging App",
      imageUrl: Project3,
      description: "Created using React.js, Firebase and CSS",
      codeLink: "https://github.com/VishalKumar1902/BlogApplication",
      demoLink: "https://blog-app-by-vishal.netlify.app/",
    },
    {
      name: "Hangman Game",
      imageUrl: Project2,
      description: "Created using HTML, CSS and JavaScript",
      codeLink: "https://github.com/VishalKumar1902/Hangman-game",
      demoLink: "https://vishalkumar1902.github.io/Hangman-game/",
    },
    {
      name: "Nike Landing page",
      imageUrl: Project5,
      description: "Created using React.js and Tailwind CSS",
      codeLink: "https://github.com/VishalKumar1902/NikeLandingPage",
      demoLink: "https://nike4u.netlify.app/",
    },
  ];
  return (
    <div>
      <ProjectCards ProjectCardData={ProjectCardData} />
    </div>
  );
};

export default Projects;
