import React, { useEffect, useState } from 'react';
import images from '../../constants/images';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';


const NavBar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [menuVisible, setMenuVisible] = useState(false);
  
 

  useEffect(() => {
    const navbar = document.querySelector('.navbar');
    const scrollThresholdDown = 780;
    const scrollThresholdProductsMin = 1560;
    const scrollThresholdProductsMax = 2000;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos > prevScrollPos && currentScrollPos > scrollThresholdDown) {
        navbar.classList.add('hidden');
      } else if (currentScrollPos > scrollThresholdProductsMin && currentScrollPos < scrollThresholdProductsMax) {
        navbar.classList.add('hidden');
      } else {
        navbar.classList.remove('hidden');
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const handleBurgerClick = () => {
    setMenuVisible((prev) => !prev);
  };

  const handleCloseClick = () => {
    setMenuVisible(false);
  };

  return (
    <nav className={`navbar fixed top-0 w-full flex justify-between items-center z-10`}>
      <div>
        <img src={images.logo} alt="Logo" className="logo" />
      </div>
      <div className="menu-icon" onClick={handleBurgerClick}>
        <div className={`bar ${menuVisible ? 'active' : ''}`}></div>
        <div className={`bar ${menuVisible ? 'active' : ''}`}></div>
        <div className={`bar ${menuVisible ? 'active' : ''}`}></div>
      </div>
      <ul className={`menu ${menuVisible ? 'visible' : ''} list-none`}>

        {/* smooth navigation */}
       
        <li className="menuList">
          <Link
            to="home" 
            spy={true}
            smooth={true}
            duration={300}
            offset={-80} 
            onClick={handleCloseClick}
          >
            Home
          </Link>
        </li>
        <li className="menuList">
          <Link
           
            to="about" 
            spy={true}
            smooth={true}
            duration={300}
            offset={-80}
            onClick={handleCloseClick}
          >
            About us
          </Link>
        </li>
        <li className="menuList">
          <Link
            to="products" 
            spy={true}
            smooth={true}
            duration={300}
            offset={-80}
            onClick={handleCloseClick}
          >
            Products
          </Link>
        </li>
        <li className="menuList">
          <Link
           
            to="contact" 
            spy={true}
            smooth={true}
            duration={500}
            offset={-80}
            onClick={handleCloseClick}
          >
            Contact us
          </Link>
        </li>
      </ul>
      {menuVisible && (
        <div className="close-icon" onClick={handleCloseClick}>
          <FontAwesomeIcon icon={faTimes} />
        </div>
      )}
    </nav>
  );
      }
export default NavBar;
