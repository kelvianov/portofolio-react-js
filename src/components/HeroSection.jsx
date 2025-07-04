import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">KELVIANOV</h1>
        
        {/* Navigation Points */}
        <div className="nav-points">
          <div className="nav-point">
            <div className="icon location-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
            <div className="info">
              <span className="label">BASED IN BANDUNG,</span>
              <span className="sublabel">INDONESIA</span>
            </div>
          </div>
          <div className="nav-point">
            <div className="icon globe-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
            </div>
            <div className="info">
              <span className="label">"OPEN TO WORK"</span>
              <span className="sublabel">WORLDWIDE</span>
            </div>
          </div>
          <div className="nav-point">
            <div className="icon design-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <div className="info">
              <span className="label">WEB DEVELOPER</span>
              <span className="sublabel">+ FULL STACK DEVELOPER</span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="hero-image">
          <img src="/images/home1.jpeg" alt="Home Portrait" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
