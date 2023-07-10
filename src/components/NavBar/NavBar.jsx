import React from 'react';
import logoImage from '../../assets/logo.png';

const NavBar = () => {
  return (
    <div className="navBar flex flex-col sm:flex-row justify-between items-center pt-5 pr-4 sm:pr-20 pb-4 pl-4 sm:pl-11">
      <div>
        <img src={logoImage} alt="Logo" className="logo" style={{ width: '300px', height: '90px' }} />
      </div>
      <div className="menu flex flex-col sm:flex-row gap-2 sm:gap-8">
        <li className="menuList text-whiteColor hover:text-blueColor">Jobs</li>
        <li className="menuList text-whiteColor hover:text-blueColor">Jobs</li>
        <li className="menuList text-whiteColor hover:text-blueColor">Jobs</li>
        <li className="menuList text-whiteColor hover:text-blueColor">Jobs</li>
        <li className="menuList text-whiteColor hover:text-blueColor">Jobs</li>
      </div>
    </div>
  );
};

export default NavBar;