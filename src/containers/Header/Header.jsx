import React from 'react';
import { images } from '../../constants';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Header = () => (
  <div className="header bg-cover bg-no-repeat bg-center " style={{ backgroundImage: `url(${images.introBg})`, backgroundSize: 'cover', filter: 'contrast(200%)' }}>
    <div className="header__container">
      <div className="header__container--mission">
        <p className="p__mission text-white">
          Dpinflatables offers inflatable bubbles for businesses, corporate events, parties and a variety of other occasions. 
        </p>
      </div>
      <div className="header__check--button">
        <a href="#booking" className="text-xl text-white font-semibold capitalize relative hover:underline 
            xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl 5xl:text-5xl flex items-center">
          <span className="mr-4">
            CHECK OUR PRODUCTS
          </span>
          <FontAwesomeIcon icon={faArrowRight} className="fa-beat" size='2x' />
        </a>
      </div>
    </div>
  </div>
);


export default Header;
