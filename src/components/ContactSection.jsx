import React from 'react';
import '../styles/ContactSection.css';

const ContactSection = () => {
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
          <span>DRIBBBLE ↗</span>
          <span>TWITTER ↗</span>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
