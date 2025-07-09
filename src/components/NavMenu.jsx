import React, { useState, useEffect } from 'react';
import '../styles/NavMenu.css';

const NavMenu = ({ currentPage = 'home' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsAnimating(true);
      setTimeout(() => {
        setIsMenuOpen(false);
        setIsAnimating(false);
      }, 300);
    } else {
      setIsMenuOpen(true);
    }
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
      if (scrollY) window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
    };
  }, [isMenuOpen]);

  const menuItems = [
    { name: 'HOME', page: 'home' },
    { name: 'CERTIFICATES', page: 'certificates' },
    { name: 'PROJECTS', page: 'projects' },
    { name: 'ABOUT', page: 'about' },
    { name: 'CONTACT', page: 'contact' }
  ];

  return (
    <>
      {/* Menu Dots Trigger */}
      <nav className="nav-menu">
        <div className="menu-dots" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* Fullscreen Navigation Menu */}
      <div className={`fullscreen-menu ${isMenuOpen ? 'active' : ''} ${isAnimating ? 'closing' : ''}`}>
        {/* Header */}
        <header className="menu-header">
          <div className="menu-logo">
            KELVIANOV/2025
          </div>
          <div className="menu-close" onClick={toggleMenu}>
            ×
          </div>
          <div className="menu-contact-btn">
            CONTACT NOW
          </div>
        </header>

        {/* Menu Content */}
        <div className="menu-content">
          <div className="menu-items">
            {menuItems.map((item, index) => (
              <div key={index} className="menu-item"
                onClick={() => {
                  if (item.page === 'home') {
                    window.location.href = '/';
                  } else if (item.page === 'certificates') {
                    window.location.href = '/certificates';
                  } else if (item.page === 'projects') {
                    window.location.href = '/portfolio';
                  } else if (item.page === 'about') {
                    window.location.href = '/about';
                  } else if (item.page === 'contact') {
                    window.location.href = '/contact';
                  }
                }}
              >
                <span className={`menu-label ${currentPage === item.page ? 'gray' : 'white'}`}>
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
     <footer className="menu-footer">
          <div className="menu-footer-left">
            <span>©2025 ALL RIGHTS RESERVED</span>
          </div>
          <div className="menu-footer-right">
            <a href="https:/www.instagram.com/kelvianov/" target="_blank" rel="noopener noreferrer">
              <span>INSTAGRAM ↗</span>
            </a>
            <a href="https://github.com/kelvianov" target="_blank" rel="noopener noreferrer">
              <span>GITHUB ↗</span>
            </a>
            <a href="https://www.linkedin.com/in/kelvianov/" target="_blank" rel="noopener noreferrer">
              <span>LINKEDIN ↗</span>
            </a>
          </div>
        </footer>
      </div>
    </>
  );
};

export default NavMenu;
