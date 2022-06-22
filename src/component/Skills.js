import React from "react";
import "./Skills.css";

export default function Skills() {
  return (
    <>
      <div id="skills" className="skill">
        <h1>Skills</h1>
        <div className="skill_skills container">
          <div className="skill_skills_flex">
            <i class="fa-brands fa-html5"></i>HTML
          </div>
          <div className="skill_skills_flex">
            <i class="fa-brands fa-css3-alt"></i>CSS
          </div>
          <div className="skill_skills_flex">
            <i class="fa-brands fa-js"></i>JAVASCRIPT
          </div>
          <div className="skill_skills_flex">
            <i class="fa-brands fa-react"></i>REACTJS
          </div>
          <div className="skill_skills_flex">
            <i class="fa-brands fa-node"></i>NODEJS
          </div>
          <div className="skill_skills_flex">
            <i class="fa-solid fa-database"></i>MONGODB
          </div>
        </div>
      </div>
    </>
  );
}
