import React from "react";
import "./Navbar.css";
import { useEffect } from "react";
import { useState } from "react";

export default function Navbar() {
  const [clicked, setclicked] = useState(false);

  useEffect(() => {
    var change = document.getElementsByClassName("toggle")[0].style;
    clicked ? (change.display = "block") : (change.display = "none");
  }, [clicked]);

  const changeClass = () => {
    setclicked(!clicked);
  };

  return (
    <>
      <div className="navbar">
        <button className="navbar_button" onClick={changeClass}>
          <i class="fa-solid fa-bars"></i>
        </button>
        <ul className="navbar_ul">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact me</a>
          </li>
        </ul>
      </div>

      <div className="toggle">
        <ul className="toggle_ul">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact me</a>
          </li>
        </ul>
      </div>
    </>
  );
}
