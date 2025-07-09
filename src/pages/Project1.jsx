import React from "react";
import "../styles/Project1.css";


import Header from "../components/Header";
import InfiniteMarquee from "../components/InfiniteMarquee";
import ContactSection from "../components/ContactSection";

const Project = () => {
  return (
    <div className="project-page">
      <Header />
      <div className="project-content">
        <div className="project-meta">
          <span className="project-date">FEBRUARY 12, 2022</span>
        </div>
        <h1 className="project-title">COMPANY PROFILE</h1>
        <p className="project-desc">
          Seventy Seven is a bold, minimal garage portfolio showcasing projects with striking visuals. Ideal for designers and creators seeking a sleek, impactful presence.
        </p>
        <button className="project-live-btn">LIVE PREVIEW</button>
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
          Research is the cornerstone of innovation and progress, involving the systematic investigation of questions, problems, or phenomena to uncover new knowledge or insights. It enables us to validate theories, develop solutions, and deepen our understanding of the world.
        </div>
      </div>

      {/* Design Section */}
      <div className="project-section design-section">
        <div className="design-title">DESIGN</div>
        <div className="design-desc">
          Design plays a crucial role in shaping perceptions and creating memorable experiences. A well-crafted design not only communicates ideas effectively but also evokes emotions, captures attention, and builds trust. From striking visuals to thoughtful layouts, every element of design contributes to telling a unique story.
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
          Seventy Seven is meticulously crafted with cutting-edge web technologies to ensure a seamless user experience. The portfolio is built for speed, responsiveness, and adaptability across devices, making it accessible to all audiences. Every detail, from interactive elements to smooth animations, has been carefully optimized to create an engaging and modern digital showcase.
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