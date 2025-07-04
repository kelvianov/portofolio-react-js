import React from 'react';
import NavMenu from './NavMenu';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        KELVIANOV/2025
      </div>
      <NavMenu currentPage="home" />
      <div className="header-right">
        <button className="contact-btn">CONTACT NOW</button>
      </div>
    </header>
  );
};

export default Header;
