import React from 'react';
import './Header.css'; 

const Header = () => {
  return (
    <div className="header">
      <img src="/images/Star_Wars_Logo.svg.png" alt="Logo" />
      <div className="custom-font-container"><h3 className="title">DATABASE</h3></div>
    </div>
  );
}

export default Header;