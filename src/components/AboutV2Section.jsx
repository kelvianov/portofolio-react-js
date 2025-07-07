import React from 'react';
import '../styles/AboutV2Section.css';

const AboutV2Section = () => {
  return (
    <section className="aboutv2-section">
      <div className="aboutv2-section-header">
        <span className="aboutv2-section-index">03</span>
        <span className="aboutv2-section-titlebar">//WHO AM I</span>
        <span className="aboutv2-section-since">SINCE 2000</span>
      </div>
      <div className="aboutv2-section-content">
        <h1 className="aboutv2-section-title-main">MORE ABOUT<br/>GREYOLA<span className="aboutv2-section-copyright">©</span></h1>
      </div>
    </section>
  );
};

export default AboutV2Section;
