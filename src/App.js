import React from "react";
import "./App.css";
import Header from "./component/Header";
import Skillsr from "./component/Skills";
import Projects from "./component/Projects";
import Navbar from "./component/Navbar";
import Contact from "./component/Contact";

export default function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Skillsr />
      <Projects />
      <Contact />
    </>
  );
}
