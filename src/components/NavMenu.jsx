import React, { useState } from 'react';
import './NavMenu.css';

const NavMenu = ({ currentPage = 'home' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
      <div className={`fullscreen-menu ${isMenuOpen ? 'active' : ''}`}>
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
              <div key={index} className="menu-item">
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
