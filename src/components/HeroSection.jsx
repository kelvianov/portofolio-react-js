import React from 'react';
import '../styles/HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section" style={{ minHeight: 500, position: 'relative' }}>
      <div className="hero-content hero-content-left">
        <div className="hero-subtitle">
          I’m Specialized in<br />
          Creating Website Design.
        </div>
        <h1 className="hero-title">KELVIANOV</h1>
      </div>
    </section>
  );
};

export default HeroSection;
