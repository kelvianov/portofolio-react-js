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
      </div>
    </section>
  );
};

export default ContactSection;
