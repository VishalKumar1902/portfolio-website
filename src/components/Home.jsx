import React from "react";
import "../CSS/Home.css";

const Home = () => {
  return (
    <div id="Home" className="Allcontainer Home-container">
      <div className="Home-left">
        <h1>Welcome to my portfolio!</h1>

        <p>
          Here, you'll find a showcase of my journey, skills, and projects in
          the exciting realm of web development. Feel free to explore and get in
          touch—I'm excited to connect and collaborate with you on innovative
          ventures!
        </p>
      </div>
      <div className="Home-right">
        <img
          src="https://s3-us-west-2.amazonaws.com/robogarden-new/Articles/upload/blogs/lg-5-skills-can-kids-develop-from-coding.jpg"
          className="Profile-img"
        />
      </div>
    </div>
  );
};

export default Home;
