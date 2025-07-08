import React from 'react';
import '../styles/ContactSection.css';

const ContactSection = () => {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="contact-section">
      <div className="contact-center">
        <div className="contact-section-header">
          <span className="contact-section-number">05</span>
          <span className="contact-section-titlebar">//CONTACT ME</span>
          <span className="contact-section-since">SINCE 2025</span>
        </div>
        <h2 className="contact-title">
          LET'S WORK<br />TOGETHER
        </h2>
        <a href="#contact" className="contact-section-btn">CONTACT NOW</a>
        <div className="contact-section-extra-row">
          <span className="contact-section-extra-left">BASED IN INDONESIA,<br /><span className="contact-section-extra-sub">BANDUNG</span></span>
          <span className="contact-section-extra-center">
            BASED IN USA, I AM AN INNOVATIVE DESIGNER AND DIGITAL ARTIST. MY PASSION FOR MINIMALIST AESTHETICS, ELEGANT TYPOGRAPHY, AND INTUITIVE DESIGN IS EVIDENT IN MY WORK.
          </span>
          <span className="contact-section-extra-right">WEB DEVELOPER<br /><span className="contact-section-extra-sub">+ FULL STACK DEVELOPER</span></span>
        </div>
        <div className="contact-section-social-row">
          <span>INSTAGRAM ↗</span>
          <span>GITHUB ↗</span>
          <span>LINKEDIN ↗</span>
        </div>
        <div className="contact-section-backtotop-row">
          <span className="contact-section-backtotop" onClick={handleBackToTop} style={{ cursor: 'pointer' }}>
            BACK TO TOP
          </span>
        </div>
        <div className="contact-section-copyright">
          <span>©2024 KELVIANOV DESIGN</span>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
