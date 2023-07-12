import React from 'react';
import { images } from '../../constants';
import { BsArrowRight } from 'react-icons/bs';

const Header = () => (
  <div className="header bg-cover bg-no-repeat bg-center relative flex items-center" style={{ backgroundImage: `url(${images.introBg})`, minHeight: 'calc(100vh)' }}>
    <div className="container mx-auto flex flex-col items-center justify-center">
      <div className="flex flex-col items-center text-center text-white mt-20">
        <a href="#booking" className="text-xl font-semibold">
          BOOK A TABLE
        </a>
        <BsArrowRight className="icon_arrow mt-2" />
      </div>
      <div className="p__mission-block text-center mt-8">
        <p className="p__mission text-white">
          Our mission is to provide our guests with a memorable and unique dining experience. We create lasting memories
          at our restaurant with innovative dishes and a carefully curated wine selection.
        </p>
      </div>
    </div>
  </div>
);

export default Header;
