import React from 'react';
import './Footer.css';
import images from '../../constants/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSkype, faYoutube, faInstagram, faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-scroll';


const Footer = () => {
  return (
    <footer className="footer">

      <div className="logo-container">
        <img src={images.logo} alt="Logo" className="logo" />
      </div>

      <div className='links__icon-container'>

        <div className="links">
          <li>
          <Link
            to="home" 
            spy={true}
            smooth={true}
            duration={300}
            offset={-80}           >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about" 
            spy={true}
            smooth={true}
            duration={300}
            offset={-80}           >
            About us
          </Link>
        </li>
          <a href="/">Contact us</a>
        </div>

        <div className="social-media-icons"> 
          <a href="https://www.skype.com/"><FontAwesomeIcon icon={faSkype} size="2x" color="#0078D4" /></a>
          <a href="https://www.youtube.com/"><FontAwesomeIcon icon={faYoutube} size="2x" color="#FF0000"/></a>
          <a href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} size="2x" color="#E4405F"/></a>
          <a href="https://www.twitter.com/"><FontAwesomeIcon icon={faTwitter} size="2x" color="#1DA1F2" /></a>
          <a href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook} size="2x" color="#1877F2" /></a>
          <a href="https://www.linkedin.com/"><FontAwesomeIcon icon={faLinkedin} size="2x" color="#0A66C2"/></a>
        </div>
      </div>

      <div className="divider"></div>

      <div className="copyright">
        <a href="https://www.github.com/delimka" target="_blank" rel="noopener noreferrer">
          © {new Date().getFullYear()} Dpinflatables. All rights reserved. Created by delimka.
        </a>
      </div>
    </footer>
  );
};

export default Footer;
