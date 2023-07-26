import React, { useEffect } from 'react';
import images from '../../constants/images';
import './NavBar.css';

const NavBar = () => {


  useEffect(() => {
    const navbar = document.querySelector('.navbar');
    const scrollThreshold = 300; 

    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > scrollThreshold) {
        navbar.classList.add('scrolled');
  
      } 
      else {
        navbar.classList.remove('scrolled');
      
      }
    };

   

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="navbar fixed top-0 w-full flex sm:flex-row justify-between items-center z-10">
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
