import React, { useState, useEffect } from 'react';
import './Footer.css';
import images from '../../constants/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSkype, faYoutube, faInstagram, faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-scroll';
import ContactUsModal from '../../components/ContactUsModal/ContactUsModal';



const Footer = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false); // for contact button

  useEffect(() => {
    if (modalIsOpen) {
      document.body.classList.add('modal-open');
      
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [modalIsOpen]);
  

  const openModal = () => {
    setModalIsOpen(true);

  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

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
        <li> <Link
           
           to="contact" 
           spy={true}
           smooth={true}
           duration={800}
           offset={-80}
           onClick={() => {
             openModal();
           }}
         >
           Contact us
         </Link>
         <ContactUsModal isOpen={modalIsOpen} onRequestClose={closeModal} /> 
         </li>
          
        </div>

        <div className="social-media-icons"> 
          <a target="_blank" href="https://www.skype.com/"><FontAwesomeIcon icon={faSkype} size="2x" color="#0078D4" /></a>
          <a target="_blank" href="https://www.youtube.com/user/artisticservices"><FontAwesomeIcon icon={faYoutube} size="2x" color="#FF0000"/></a>
          <a target="_blank" href="https://www.instagram.com/dpoint_group/"><FontAwesomeIcon icon={faInstagram} size="2x" color="#E4405F"/></a>
          <a target="_blank" href="https://twitter.com/danielbukin"><FontAwesomeIcon icon={faTwitter} size="2x" color="#1DA1F2" /></a>
          <a target="_blank" href="https://www.facebook.com/dpointgroupespana/"><FontAwesomeIcon icon={faFacebook} size="2x" color="#1877F2" /></a>
          <a target="_blank" href="https://www.linkedin.com/company/dpointgroup/"><FontAwesomeIcon icon={faLinkedin} size="2x" color="#0A66C2"/></a>
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
