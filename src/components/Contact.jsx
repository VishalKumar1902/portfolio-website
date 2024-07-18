import React, { useState } from "react";
import "../CSS/Contact.css";
import emailjs from "emailjs-com";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;

    const userId = import.meta.env.VITE_USER_ID;

    const params = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs.send(serviceId, templateId, params, userId).then(
      (result) => {
        console.log(result.text);
        alert("Message sent successfully!");
      },
      (error) => {
        console.log(error.text);
        alert("An error occurred, please try again.");
      }
    );

    // Clear form fields after sending
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div id="Contact" className="Allcontainer">
      <div className="Contact-form">
        <div className="section-title-container">
          <h3 className="title" style={{ margin: "0px" }}>
            Contact me
          </h3>
        </div>

        <input
          type="text"
          placeholder="Your name"
          className="input-field"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Your Email"
          className="input-field"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Write your message"
          className="input-field"
          rows="4"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="Submit-btn" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Contact;
