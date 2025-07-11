import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/project/Project3.css";

import Header from "../components/Header";
import InfiniteMarquee from "../components/InfiniteMarquee";
import ContactSection from "../components/ContactSection";

const Project3 = () => {
  const navigate = useNavigate();
  const handleLivePreview = () => {
    window.open("https://portofolio-tau-lovat.vercel.app/", "_blank");
  };

  const heroAnimRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="project-page">
      <Header currentPage="projects" />
      <div className={`project-content ${isLoaded ? 'fade-in' : ''}`} ref={heroAnimRef}>
        <div className="project-meta">
          <span className="project-date">JULY 12, 2025</span>
        </div>
        <h1 className="project-title">PORTOFOLIO</h1>
        <p className="project-desc">
          This portfolio website showcases a collection of my best works, designed and developed with a focus on modern UI/UX and smooth user experience. Explore various projects and see the creative process behind each one.
        </p>
        <button className="project-live-btn" onClick={handleLivePreview}>
          LIVE PREVIEW
        </button>
      </div>

      {/* Gambar project3.0.png di bawah project-content */}
      <div className={`project-image-block ${isLoaded ? 'fade-in' : ''}`}> 
        <img
          src="/images/project3.0.png"
          alt="Portofolio Project"
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
          <span className="project-info-value">PERSONAL</span>
        </div>
        <div className="project-info-item">
          <span className="project-info-label">CATEGORY</span>
          <span className="project-info-value">PORTOFOLIO</span>
        </div>
        <div className="project-info-item">
          <span className="project-info-label">PRODUCT DURATION</span>
          <span className="project-info-value">2 WEEKS</span>
        </div>
      </div>
      {/* Research Section */}
      <div className="project-section research-section">
        <div className="research-title">RESEARCH</div>
        <div className="research-desc">
          Research for this portfolio focused on identifying the best ways to present work, highlight skills, and create a seamless navigation experience for visitors.
        </div>
      </div>

      {/* Design Section */}
      <div className="project-section design-section">
        <div className="design-title">DESIGN</div>
        <div className="design-desc">
          The design is bold, minimalist, and highly visual, using a dark theme and strong typography to make each project stand out. Animations and transitions are used to enhance engagement.
        </div>
      </div>

      {/* Gambar project3.1.png di bawah Design Section */}
      <div className={`project-image-block ${isLoaded ? 'fade-in' : ''}`} style={{ marginTop: '170px' }}>
        <img
          src="/images/project3.1.png"
          alt="Design Section Project"
          className="project-main-image"
        />
      </div>

      {/* Development Section */}
      <div className="project-section development-section">
        <div className="development-title">DEVELOPMENT</div>
        <div className="development-desc">
          Built with React and modern web tools, this portfolio is optimized for performance, accessibility, and responsiveness. The codebase is clean and modular for easy updates.
        </div>
      </div>

      {/* Gambar project3.2.png di bawah Development Section */}
      <div className={`project-image-block ${isLoaded ? 'fade-in' : ''}`} style={{ marginTop: '120px' }}>
        <img
          src="/images/project3.2.png"
          alt="Development Section Project"
          className="project-main-image"
        />
      </div>

      {/* Infinite Marquee Section */}
      <InfiniteMarquee />

      {/* More Works Cards Section */}
      <div className="project-more-works-cards-row" style={{ marginBottom: '120px' }}>
        {/* Card 1 */}
        <div
          className="portfolio-card project-more-works-card"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setTimeout(() => {
              navigate('/project1');
            }, 200);
          }}
          style={{ cursor: 'pointer' }}
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
            src="/images/project1.0.png"
            alt="Company Profile Project"
            className="portfolio-img"
            style={{ borderRadius: '12px' }}
          />
          <div className="portfolio-card-footer">
            <div className="portfolio-dots">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={i <= 0 ? "dot active" : "dot"} />
              ))}
            </div>
            <div className="portfolio-card-footer-content">
              <div className="portfolio-card-title">Company Profile</div>
              <div className="portfolio-card-subtitle">WEBSITE</div>
            </div>
            <div className="portfolio-arrow">→</div>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="portfolio-card project-more-works-card"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setTimeout(() => {
              navigate('/project2');
            }, 200);
          }}
          style={{ cursor: 'pointer' }}
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
              <div className="portfolio-card-subtitle">COMMERCIAL WEBSITE</div>
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

export default Project3;
