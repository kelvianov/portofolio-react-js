import React from "react";
import "../styles/Project.css";
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

      {/* Info Grid Section */}
      <div className="project-info-grid">
        <div className="project-info-item">
          <span className="project-info-label">YEAR</span>
          <span className="project-info-value">2022</span>
        </div>
        <div className="project-info-item">
          <span className="project-info-label">CLIENT</span>
          <span className="project-info-value">CLIVE QUINN</span>
        </div>
        <div className="project-info-item">
          <span className="project-info-label">CATEGORY</span>
          <span className="project-info-value">PORTFOLIO</span>
        </div>
        <div className="project-info-item">
          <span className="project-info-label">PRODUCT DURATION</span>
          <span className="project-info-value">3-4 WEEKS</span>
        </div>
      </div>

      {/* Gambar project1.0.png di bawah project-content */}
      <div className="project-image-block">
        <img
          src="/images/project1.0.png"
          alt="Company Profile Project"
          className="project-main-image"
        />
      </div>
    </div>
  );
};

export default Project;
