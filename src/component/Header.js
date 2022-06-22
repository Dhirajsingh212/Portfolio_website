import React from "react";
import Fixed from "./Fixed";
import "./Header.css";

export default function header() {
  return (
    <>
      <div id="home" className="header">
        <h1 className="header_gap">HELLO!</h1>
        <h2 className="header_gap">I'm a Full-Stack Web Developer</h2>
        <p className="header_gap">Want a great looking website?</p>
        <button className="header_gap">
          <a href="#contact">Hire me</a>
        </button>
      </div>
      <Fixed />
    </>
  );
}
