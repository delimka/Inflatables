import React, { useEffect, useState } from 'react';
import images from '../../constants/images';
import './NavBar.css';

const NavBar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const navbar = document.querySelector('.navbar');
    const scrollThreshold = 300;
    const scrollThresholdDown = 780;
    const scrollThresholdProductsMin = 1650;
    const scrollThresholdProductsMax = 2000;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
    
      if (currentScrollPos > scrollThreshold) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    
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

  return (
    <nav className={`navbar fixed top-0 w-full flex sm:flex-row justify-between items-center z-10`}>
      <div>
        <img src={images.logo} alt="Logo" className="logo" />
      </div>
      <ul className="menu flex flex-col sm:flex-row z-20 list-none">
        <li className="menuList sm:mb-0">Home</li>
        <li className="menuList sm:mb-0">About us</li>
        <li className="menuList sm:mb-0">Products</li>
        <li className="menuList sm:mb-0">Contact us</li>
      </ul>
    </nav>
  );
};

export default NavBar;
