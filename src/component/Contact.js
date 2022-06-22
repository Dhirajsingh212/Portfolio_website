import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div id="contact" className="contact container">
      <ul className="contact_ul">
        <li>
          <a href="https://www.facebook.com/">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/?hl=en">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/Dhirajsingh212">
            <i className="fa-brands fa-github-square"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/signup">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>
      </ul>
      <ul className="contact_ul email">
        <li>
          <i className="fa-solid fa-envelope"></i>
          dhirajsingh0229@gmail.com
        </li>
      </ul>
    </div>
  );
}
