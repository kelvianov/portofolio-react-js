import React from 'react';
import NavMenu from './NavMenu';
import '../styles/Header.css';

const Header = ({ currentPage = "home" }) => {
  return (
    <header className="header">
      <div className="logo">
        KELVIANOV/2025
      </div>
      <NavMenu currentPage={currentPage} />
      <div className="header-right">
        <button className="contact-btn">CONTACT NOW</button>
      </div>
    </header>
  );
};

export default Header;
