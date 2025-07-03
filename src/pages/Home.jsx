import React, { useEffect } from 'react';
import '../styles/Home.css';
import NavMenu from '../components/NavMenu';

const Home = () => {
  // Scroll ke atas saat component dimount
  useEffect(() => {
    // Disable scroll restoration
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    
    // Function untuk scroll ke atas
    const scrollToTop = () => {
      // Scroll ke atas dengan instant behavior
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
      
      // Backup scroll reset untuk browser yang tidak support scrollTo options
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };
    
    // Scroll ke atas saat component mount
    scrollToTop();
    
    // Event listener untuk beforeunload (saat refresh)
    const handleBeforeUnload = () => {
      scrollToTop();
    };
    
    // Event listener untuk pageshow (saat halaman dimuat)
    const handlePageShow = (event) => {
      if (event.persisted) {
        scrollToTop();
      }
    };
    
    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('pageshow', handlePageShow);
    
    // Cleanup event listeners
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('pageshow', handlePageShow);
    };
  }, []);

  return (
    <div className="home-container">
      {/* Header Navigation */}
      <header className="header">
        <div className="logo">
          KELVIANOV/2025
        </div>
        <NavMenu currentPage="home" />
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
            <div className="nav-point">
              <span className="dot"></span>
              <span className="label">CERTIFICATES</span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="hero-image">
            <img src="/images/home1.jpeg" alt="Home Portrait" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
