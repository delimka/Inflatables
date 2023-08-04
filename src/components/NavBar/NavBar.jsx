import React, { useEffect, useState } from 'react';
import images from '../../constants/images';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    const navbar = document.querySelector('.navbar');
    const scrollThresholdDown = 780;
    const scrollThresholdProductsMin = 1650;
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
        <li className="menuList">Home</li>
        <li className="menuList">About us</li>
        <li className="menuList">Products</li>
        <li className="menuList ">Contact us</li>
      </ul>
      {menuVisible && (
        <div className="close-icon" onClick={handleCloseClick}>
          <FontAwesomeIcon icon={faTimes} />
        </div>
      )}
    </nav>
  );
};

export default NavBar;
