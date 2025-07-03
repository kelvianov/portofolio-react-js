import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Header Navigation */}
      <header className="header">
        <div className="logo">
          LOCAL/194756
        </div>
        <nav className="nav-menu">
          <div className="menu-dots">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
        <div className="header-right">
          <button className="contact-btn">CONTACT NOW</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">KELVIANOV</h1>
          
          {/* Navigation Points */}
          <div className="nav-points">
            <div className="nav-point active">
              <span className="dot"></span>
              <span className="label">DEVELOPER</span>
            </div>
            <div className="nav-point">
              <span className="dot"></span>
              <span className="label">MY PROJECTS</span>
            </div>
            <div className="nav-point">
              <span className="dot"></span>
              <span className="label">ABOUT ME</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
