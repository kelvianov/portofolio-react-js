import React from "react";
import "../styles/Project1.css";

import Header from "../components/Header";
import InfiniteMarquee from "../components/InfiniteMarquee";
import ContactSection from "../components/ContactSection";

const Project = () => {
  const handleLivePreview = () => {
    window.open("https://company-profile-react-js.vercel.app/", "_blank");
  };

  return (
    <div className="project-page">
      <Header />
      <div className="project-content">
        <div className="project-meta">
          <span className="project-date">FEBRUARY 12, 2022</span>
        </div>
        <h1 className="project-title">COMPANY PROFILE</h1>
        <p className="project-desc">
          I’m a digital designer crafting bold, minimalist experiences that elevate brands.
          Clean visuals and purposeful design — built to leave a lasting impression.
        </p>
        {/* Opsi 1: Menggunakan onClick handler (recommended) */}
        <button className="project-live-btn" onClick={handleLivePreview}>
          LIVE PREVIEW
        </button>
      </div>

      {/* Gambar project1.0.png di bawah project-content */}
      <div className="project-image-block">
        <img
          src="/images/project1.0.png"
          alt="Company Profile Project"
          className="project-main-image"
        />
      </div>

      {/* Info Grid Section */}
      <div className="project-info-grid">
        <div className="project-info-item">
          <span className="project-info-label">YEAR</span>
          <span className="project-info-value">2025</span>
        </div>
        <div className="project-info-item">
          <span className="project-info-label">CLIENT</span>
          <span className="project-info-value">MONYENYO</span>
        </div>
        <div className="project-info-item">
          <span className="project-info-label">CATEGORY</span>
          <span className="project-info-value">COMPANY PROFILE</span>
        </div>
        <div className="project-info-item">
          <span className="project-info-label">PRODUCT DURATION</span>
          <span className="project-info-value">3-4 WEEKS</span>
        </div>
      </div>
        {/* Research Section */}
      <div className="project-section research-section">
        <div className="research-title">RESEARCH</div>
        <div className="research-desc">
          It’s a focused process of exploring questions, identifying problems, and discovering insights that drive real progress. Through thoughtful investigation, we validate ideas, uncover new possibilities, and shape solutions that move brands and experiences forward.
        </div>
      </div>

      {/* Design Section */}
      <div className="project-section design-section">
        <div className="design-title">DESIGN</div>
        <div className="design-desc">
          Design is how I communicate — with clarity, emotion, and intention.
          It’s not just about how things look, but how they feel and how they work.
          I craft every detail to create experiences that connect and resonate.
        </div>
      </div>

      {/* Gambar project1.1.png di bawah Design Section */}
      <div className="project-image-block" style={{ marginTop: '170px' }}>
        <img
          src="/images/project1.1.png"
          alt="Design Section Project"
          className="project-main-image"
        />
      </div>

      {/* Development Section */}
      <div className="project-section development-section">
        <div className="development-title">DEVELOPMENT</div>
        <div className="development-desc">
          This website is built with modern web technologies to deliver a smooth, fast, and responsive experience across all devices.
          Every element — from subtle transitions to clean layouts — is carefully optimized to showcase each product with elegance and clarity.
          The goal is simple: to serve quality and taste, even before the first bite.
        </div>
      </div>

      {/* Gambar project1.2.png di bawah Development Section */}
      <div className="project-image-block" style={{ marginTop: '120px' }}>
        <img
          src="/images/project1.2.png"
          alt="Development Section Project"
          className="project-main-image"
        />
      </div>

      {/* Infinite Marquee Section */}
      <InfiniteMarquee />

      {/* More Works Cards Section */}
      <div className="project-more-works-cards-row" style={{ marginBottom: '120px' }}>
        {/* Card 1 */}
        <div className="portfolio-card project-more-works-card"
          onMouseEnter={() => {
            const cursor = document.querySelector('.portfolio-img-cursor');
            if(cursor) {
              cursor.classList.add('active');
              cursor.classList.add('dark');
            }
          }}
          onMouseMove={e => {
            const cursor = document.querySelector('.portfolio-img-cursor');
            if(cursor) {
              cursor.style.left = e.clientX + 'px';
              cursor.style.top = e.clientY + 'px';
            }
          }}
          onMouseLeave={() => {
            const cursor = document.querySelector('.portfolio-img-cursor');
            if(cursor) {
              cursor.classList.remove('active');
              cursor.classList.remove('dark');
            }
          }}
        >
          <img
            src="/images/project3.0.png"
            alt="Portofolio Project"
            className="portfolio-img"
            style={{ borderRadius: '12px' }}
          />
          <div className="portfolio-card-footer">
            <div className="portfolio-dots">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={i <= 1 ? "dot active" : "dot"} />
              ))}
            </div>
            <div className="portfolio-card-footer-content">
              <div className="portfolio-card-title">Portofolio</div>
              <div className="portfolio-card-subtitle">LENSWORK SHOWCASE</div>
            </div>
            <div className="portfolio-arrow">→</div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="portfolio-card project-more-works-card"
          onMouseEnter={() => {
            const cursor = document.querySelector('.portfolio-img-cursor');
            if(cursor) cursor.classList.add('active');
          }}
          onMouseMove={e => {
            const cursor = document.querySelector('.portfolio-img-cursor');
            if(cursor) {
              cursor.style.left = e.clientX + 'px';
              cursor.style.top = e.clientY + 'px';
            }
          }}
          onMouseLeave={() => {
            const cursor = document.querySelector('.portfolio-img-cursor');
            if(cursor) cursor.classList.remove('active');
          }}
        >
          <img
            src="/images/project2.0.png"
            alt="KosKu Project"
            className="portfolio-img"
            style={{ borderRadius: '12px' }}
          />
          <div className="portfolio-card-footer">
            <div className="portfolio-dots">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={i <= 2 ? "dot active" : "dot"} />
              ))}
            </div>
            <div className="portfolio-card-footer-content">
              <div className="portfolio-card-title">KosKu</div>
              <div className="portfolio-card-subtitle">Commercial Website</div>
            </div>
            <div className="portfolio-arrow">→</div>
          </div>
        </div>
      </div>

      {/* Custom Cursor for More Works Card (same as PortfolioSection) */}
      <div className="portfolio-img-cursor" style={{left:0,top:0,transform:'translate(-50%,-50%)'}}>VIEW</div>
      {/* Contact Section persis seperti komponen utama */}
      <ContactSection />
    </div>
  );
};

export default Project;