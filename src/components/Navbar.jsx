import React from "react";
import "../CSS/Navbar.css";
const Navbar = () => {
  return (
    <nav className="Navbar">
      <ul>
        <li>
          <a href="#Home">
            <i className="fas fa-home icon"></i>
          </a>
        </li>
        <li>
          <a href="#About">
            <i className="fas fa-user icon"></i>
          </a>
        </li>
        <li>
          <a href="#Skills">
            <i className="fas fa-pencil-alt icon"></i>
          </a>
        </li>
        <li>
          <a href="#Projects">
            <i className="fas fa-cogs icon"></i>
          </a>
        </li>
        <li>
          <a href="#Contact">
            <i className="fas fa-envelope icon"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
