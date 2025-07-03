import React, { useState } from 'react';
import './NavMenu.css';

const NavMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
      <div className={`fullscreen-menu ${isMenuOpen ? 'active' : ''}`}>
        {/* Header */}
        <header className="menu-header">
          <div className="menu-logo">
            LOCAL/46°28'58.6272"N
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
            <div className="menu-item">
              <span className="menu-label gray">HOME</span>
            </div>
            <div className="menu-item">
              <span className="menu-label white">WORK</span>
            </div>
            <div className="menu-item">
              <span className="menu-label gray">PHOTOGRAPHY</span>
            </div>
            <div className="menu-item">
              <span className="menu-label white">ARTICLE</span>
            </div>
            <div className="menu-item">
              <span className="menu-label white">CONTACT</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="menu-footer">
          <div className="menu-footer-left">
            <span>©2024 ALL RIGHTS RESERVED</span>
          </div>
          <div className="menu-footer-right">
            <span>INSTAGRAM ↗</span>
            <span>DRIBBBLE ↗</span>
          </div>
        </footer>
      </div>
    </>
  );
};

export default NavMenu;
