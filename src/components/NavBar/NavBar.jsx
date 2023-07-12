import React from 'react';
import images from '../../constants/images';

const NavBar = () => {
  return (
    <nav className="navbar fixed top-0 w-full bg-transparent flex flex-col sm:flex-row justify-between items-center pt-5 z-10" style={{ paddingLeft: '150px', paddingRight: '180px' }}>
      <div>
        <img src={images.logo} alt="Logo" className="logo" style={{ width: '300px', height: '90px' }} />
      </div>
      <div className="menu flex flex-col sm:flex-row gap-2 sm:gap-8 z-20">
        <li className="menuList text-whiteColor hover:text-blueColor">Jobs</li>
        <li className="menuList text-whiteColor hover:text-blueColor">Jobs</li>
        <li className="menuList text-whiteColor hover:text-blueColor">Jobs</li>
        <li className="menuList text-whiteColor hover:text-blueColor">Jobs</li>
        <li className="menuList text-whiteColor hover:text-blueColor">Jobs</li>
      </div>
    </nav>
  );
};

export default NavBar;
