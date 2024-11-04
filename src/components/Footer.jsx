import React from "react";
import "../CSS/Footer.css";
const Footer = () => {
  const Accounts = [
    {
      class: "fab fa-facebook-square icon",
      Url: "https://www.facebook.com/Vishalkumar192000",
    },
    {
      class: "fab fa-instagram-square icon",
      Url: "https://www.instagram.com/vishal_kmr._?igsh=dm5zazA0bGluaDg1",
    },
    {
      class: "fab fa-github-square icon",
      Url: "https://github.com/VishalKumar1902",
    },
    {
      class: "fab fa-linkedin icon",
      Url: "https://in.linkedin.com/in/vishal-kumar-b27bba291",
    },
  ];
  return (
    <div className="footer-container">
      <div className="footer-title">
        <h3 className="title">Feel free to connect with me</h3>
        <h4>Find me on</h4>
      </div>
      <ul className="Accounts-list">
        {Accounts.map((account, index) => (
          <li key={index} className="Accounts-list-items">
            <a href={account.Url}>
              <i className={account.class}></i>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
