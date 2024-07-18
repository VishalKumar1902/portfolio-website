import React from "react";

const ProjectCards = ({ ProjectCardData }) => {
  return (
    <div id="Projects" className="Allcontainer">
      <div className="section-title-container">
        <h3 className="title">My Projects</h3>
      </div>

      <div className="projects-card-container">
        {ProjectCardData.map((data, index) => (
          <div key={index} className="Project-cards">
            <img className="Project-img" src={data.imageUrl} />

            <div className="Project-name">{data.name}</div>
            <div className="description">{data.description}</div>
            <div className="Project-card-buttons">
              <a href={data.codeLink} className="Project-card-btn">
                <i className="fab fa-github-square icon"></i>
              </a>
              <a href={data.demoLink} className="Project-card-btn">
                <i className="fa fa-play-circle icon"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCards;
