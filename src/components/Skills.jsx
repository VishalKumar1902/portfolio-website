import React from "react";
import "../CSS/Skills.css";

const Skills = () => {
  const mySkills = [
    {
      name: "HTML",
      icon: "fab fa-html5 icon",
    },
    {
      name: "CSS",
      icon: "fab fa-css3-alt icon",
    },
    {
      name: "JavaScript",
      icon: "fab fa-js icon",
    },
    {
      name: "Java",
      icon: "fab fa-java icon",
    },
    {
      name: "SQL",
      icon: "fas fa-database icon",
    },
    {
      name: "MongoDB",
      icon: "fa-brands fa-envira icon",
    },

    {
      name: "Node.js",
      icon: "fab fa-node-js icon",
    },

    {
      name: "Express.js",
      icon: "fas fa-cogs",
    },

    {
      name: "React",
      icon: "fab fa-react icon",
    },

    {
      name: "Python",
      icon: "fab fa-python icon",
    },

    {
      name: "Bootstrap",
      icon: "fab fa-bootstrap icon",
    },

    {
      name: "Tailwind css",
      icon: "fas fa-wind icon",
    },
  ];
  return (
    <div id="Skills" className="Allcontainer Skill-container">
      <div className="section-title-container">
        <h3 className="title">My Skills</h3>
      </div>

      <div className="Skill-cards">
        {mySkills.map((skill, index) => (
          <div key={index} className="Skill-card">
            <div className="icons">
              <i className={skill.icon}></i>
            </div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
