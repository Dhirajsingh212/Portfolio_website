import React from "react";
import "./Projects.css";

export default function Projects() {
  return (
    <>
      <div id="projects" className="projects">
        <h1>Projects</h1>
        <ul className="projects_ul container">
          <li>Expense manager using MERN STACK.</li>
          <li>Todo manager using MERN STACK.</li>
          <li>News web application using REACTJS and newsAPI.</li>
          <li>Blog web application using MERN STACK.</li>
          <li>Food Delivering Front-end web page using REACTJS.</li>
        </ul>
      </div>
    </>
  );
}
