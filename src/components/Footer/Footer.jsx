import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo">
        {}
        Logo
      </div>
      <div className="links">
        <a href="/">Link 1</a>
        <a href="/">Link 2</a>
        <a href="/">Link 3</a>
      </div>
      <div className="social-media-icons">
        {}
        Icons
      </div>
      <div className="divider"></div>
      <div className="copyright">
        © {new Date().getFullYear()} Dpinflatables. All rights reserved. Created by delimka.
      </div>
    </footer>
  );
};

export default Footer;
