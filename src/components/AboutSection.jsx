import React from 'react';

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-header">
        <span className="section-number">01</span>
        <span className="section-title">//APPROACH</span>
        <span className="section-subtitle">THREE PHASES</span>
      </div>
      
      <div className="about-content">
        <h2 className="about-title">
          I'M KELVIANOV BASED IN BANDUNG, INDONESIA.
        </h2>
        
        <p className="about-description">
          I employed responsive designskills to maintain<br />
          consistency across all devices.
        </p>
        
        <div className="process-indicators">
          <div className="indicator active">01</div>
          <div className="indicator">02</div>
          <div className="indicator">03</div>
        </div>
        
        <div className="process-phases">
          <div className="phase">
            <div className="phase-dots">
              <div className="dot-indicator">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
            </div>
            <div className="phase-images">
              <div className="image-thumb"></div>
              <div className="image-thumb"></div>
              <div className="image-thumb"></div>
              <div className="image-thumb"></div>
            </div>
            <h3 className="phase-title">DISCOVER AND ANALYSIS</h3>
            <p className="phase-description">
              Discover opportunities and refine<br />
              strategies for decisions.
            </p>
          </div>
          
          <div className="phase">
            <div className="phase-dots">
              <div className="dot-indicator">
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
            </div>
            <div className="phase-images">
              <div className="image-thumb"></div>
              <div className="image-thumb"></div>
              <div className="image-thumb"></div>
            </div>
            <h3 className="phase-title">DESIGN AND IMPLEMENT</h3>
            <p className="phase-description">
              Design and implement solutions to<br />
              transform ideas.
            </p>
          </div>
          
          <div className="phase">
            <div className="phase-dots">
              <div className="dot-indicator">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
            </div>
            <div className="phase-images">
              <div className="image-thumb"></div>
              <div className="image-thumb"></div>
            </div>
            <h3 className="phase-title">DELIVER AND MONITOR</h3>
            <p className="phase-description">
              Ensure efficient execution and<br />
              performance tracking.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
