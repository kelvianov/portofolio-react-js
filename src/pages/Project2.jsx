
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/project/Project2.css";

import Header from "../components/Header";
import InfiniteMarquee from "../components/InfiniteMarquee";
import ContactSection from "../components/ContactSection";

const Project2 = () => {

  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleLivePreview = () => {
    window.open("https://kosku-react.vercel.app/", "_blank");
  };


  return (
    <div className="project-page">
      <Header currentPage="projects" />
      <div className={`project-content ${isLoaded ? 'fade-in' : ''}`}>
        <div className="project-meta">
          <span className="project-date">JULY 12, 2025</span>
        </div>
        <h1 className="project-title">KOSKU</h1>
        <p className="project-desc">
          KosKu is a modern commercial website for property rental, designed with a focus on usability and clean visuals.
          The platform streamlines the search and booking process, making it easy for users to find and rent properties.
        </p>
        <button className="project-live-btn" onClick={handleLivePreview}>
          LIVE PREVIEW
        </button>
      </div>

      {/* Gambar project2.0.png di bawah project-content */}
      <div className={`project-image-block ${isLoaded ? 'fade-in' : ''}`}>
        <img
          src="/images/project2.0.png"
          alt="KosKu Project"
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
          <span className="project-info-value">KOSKU</span>
        </div>
        <div className="project-info-item">
          <span className="project-info-label">CATEGORY</span>
          <span className="project-info-value">COMMERCIAL WEBSITE</span>
        </div>
        <div className="project-info-item">
          <span className="project-info-label">PRODUCT DURATION</span>
          <span className="project-info-value">2-3 WEEKS</span>
        </div>
      </div>
      {/* Research Section */}
      <div className="project-section research-section">
        <div className="research-title">RESEARCH</div>
        <div className="research-desc">
          Research for KosKu focused on understanding the needs of property seekers and owners, identifying pain points in the rental process, and validating features that improve user experience and trust.
        </div>
      </div>

      {/* Design Section */}

      <div className="project-section design-section">
        <div className="design-title">DESIGN</div>
        <div className="design-desc">
          The design emphasizes clarity, accessibility, and a modern look. Every interface element is crafted to guide users intuitively, with a color palette and typography that reflect professionalism and approachability.
        </div>
      </div>

      {/* Gambar project2.1.png di bawah Design Section */}
      <div className={`project-image-block ${isLoaded ? 'fade-in' : ''}`} style={{ marginTop: '170px' }}>
        <img
          src="/images/project2.1.png"
          alt="Design Section Project"
          className="project-main-image"
        />
      </div>

      {/* Development Section */}

      <div className="project-section development-section">
        <div className="development-title">DEVELOPMENT</div>
        <div className="development-desc">
          KosKu is built with React and modern web technologies, ensuring fast load times, responsive layouts, and a seamless experience across devices. The codebase is optimized for maintainability and scalability.
        </div>
      </div>

      {/* Gambar project2.2.png di bawah Development Section */}
      <div className={`project-image-block ${isLoaded ? 'fade-in' : ''}`} style={{ marginTop: '120px' }}>
        <img
          src="/images/project2.2.png"
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
          className="portfolio-card project-more-works-card portofolio-card"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setTimeout(() => {
              navigate('/project3');
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
            src="/images/project3.0.png"
            alt="Portofolio Project"
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
              <div className="portfolio-card-title">Portofolio Project</div>
              <div className="portfolio-card-subtitle">LENSWORK SHOWCASE</div>
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
              navigate('/project1');
            }, 200); // beri delay agar animasi smooth jika ada
          }}
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
          style={{ cursor: 'pointer' }}
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
                <span key={i} className={i <= 1 ? "dot active" : "dot"} />
              ))}
            </div>
            <div className="portfolio-card-footer-content">
              <div className="portfolio-card-title">Company Profile Project</div>
              <div className="portfolio-card-subtitle">WEBSITE</div>
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

export default Project2;
