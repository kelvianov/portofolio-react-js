import React from "react";
import "../styles/Project1.css";
import Header from "../components/Header";

const Project = () => {
  return (
    <div className="project-page">
      <Header />
      <div className="project-content">
        <div className="project-meta">
          <span className="project-date">FEBRUARY 12, 2022</span>
        </div>
        <h1 className="project-title">SEVENTY SEVEN</h1>
        <p className="project-desc">
          Seventy Seven is a bold, minimal garage portfolio showcasing projects with striking visuals. Ideal for designers and creators seeking a sleek, impactful presence.
        </p>
        <button className="project-live-btn">LIVE PREVIEW</button>
      </div>
    </div>
  );
};

export default Project;
