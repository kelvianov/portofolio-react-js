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
            BASED IN INDONESIA, I’M A SOFTWARE ENGINEER COMBINING CLEAN CODE, MINIMALIST DESIGN, AND SEAMLESS USER EXPERIENCES TO CRAFT IMPACTFUL DIGITAL SOLUTIONS.
          </span>
          <span className="contact-section-extra-right">WEB DEVELOPER<br /><span className="contact-section-extra-sub">+ FULL STACK DEVELOPER</span></span>
        </div>
        <div className="contact-section-social-row">
          <a
            href="https://www.instagram.com/kelvianov/?next=%2F"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <span>INSTAGRAM ↗</span>
          </a>
          <a
            href="https://github.com/kelvianov"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <span>GITHUB ↗</span>
          </a>
          <a
            href="https://www.linkedin.com/in/kelvianov/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <span>LINKEDIN ↗</span>
          </a>
        </div>
        <div className="contact-section-backtotop-row">
          <span className="contact-section-backtotop" onClick={handleBackToTop} style={{ cursor: 'pointer' }}>
            BACK TO TOP
          </span>
        </div>
        <div className="contact-section-copyright">
          <span>©2025 KELVIANOV DESIGN</span>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
