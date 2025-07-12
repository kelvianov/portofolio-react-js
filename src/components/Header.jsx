import React from 'react';
import NavMenu from './NavMenu';
import '../styles/Header.css';
import Lanyard from './Lanyard/Lanyard';

const Header = ({ currentPage = "home" }) => {
  return (
    <header className="header">
      <div className="logo">
        KELVIANOV.
      </div>
      <NavMenu currentPage={currentPage} onMenuIconClick={() => window.location.href = '/navmenufullscreen'} />
      <div className="header-right hide-when-navopen">
        <button className="contact-btn">CONTACT NOW</button>
      </div>
      <Lanyard />
    </header>
  );
};

export default Header;
