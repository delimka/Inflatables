import React from 'react';
import { images } from '../../constants';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';

const Header = () => (
  <div className="header bg-cover bg-no-repeat bg-center " name="home" style={{ backgroundImage: `url(${images.introBg})`, backgroundSize: 'cover', filter: 'contrast(200%)' }}>
    <div className="dark-overlay"></div>
    <div className="header__container">
      <div className="header__container--mission">
        <p className="p__mission">
          <strong>DPinflatables</strong> offers inflatable products for businesses, corporate events, parties and a variety of other occasions. 
        </p>
      </div>
      <div className="header__check--button">
      <Link to="products" smooth={true} duration={500} className="text-xl font-semibold capitalize relative hover:underline 
        3xl:text-3xl 4xl:text-4xl 5xl:text-5xl flex items-center"
      >
        <span className="mr-4">CHECK OUR PRODUCT</span>
        <FontAwesomeIcon icon={faArrowRight} className="fa-beat" size="2x" />
      </Link>
    </div>
    </div>
  </div>
);


export default Header;
