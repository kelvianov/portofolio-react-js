import React from 'react';
import '../styles/Home.css';
import NavMenu from '../components/NavMenu';

const Home = () => {
  return (
    <div className="home-container">
      {/* Header Navigation */}
      <header className="header">
        <div className="logo">
          KELVIANOV/2025
        </div>
        <NavMenu />
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
