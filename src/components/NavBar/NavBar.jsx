import React, { useEffect, useState } from "react";
import images from "../../constants/images";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
import ContactUsModal from "../ContactUsModal/ContactUsModal";

const MenuItem = ({ to, text, onClick }) => (
  <li className="menuList">
    <Link
      to={to}
      spy={true}
      smooth={true}
      duration={300}
      offset={-80}
      onClick={onClick}
    >
      {text}
    </Link>
  </li>
);

const NavBar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [menuVisible, setMenuVisible] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const navbar = document.querySelector(".navbar");
    const scrollThresholdDown = 780;
    const scrollThresholdProductsMin = 1560;
    const scrollThresholdProductsMax = 2000;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (
        (currentScrollPos > prevScrollPos &&
          currentScrollPos > scrollThresholdDown) ||
        (currentScrollPos > scrollThresholdProductsMin &&
          currentScrollPos < scrollThresholdProductsMax)
      ) {
        navbar.classList.add("slide-up");
      } else {
        navbar.classList.remove("slide-up"); // slide-down
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const handleBurgerClick = () => {
    setMenuVisible(true);
  };

  const handleCloseClick = () => {
    setMenuVisible(false);
  };

  useEffect(() => {
    if (modalIsOpen || menuVisible) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [modalIsOpen, menuVisible]);

  const openModal = () => {
    setModalIsOpen(true);
    setMenuVisible(false);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <nav
      className={`navbar  ${
        modalIsOpen ? "hidden" : ""
      } fixed top-0 w-full flex justify-between items-center z-10`}
    >
      <div>
        <img src={images.logo} alt="Logo" className="logo" />
      </div>
      <Link
        to="contact-us-form"
        className="menu-icon"
        spy={true}
        smooth={true}
        duration={300}
        offset={-80}
        onClick={handleBurgerClick}
      >
        <div className={`bar ${menuVisible ? "active" : ""}`}></div>
        <div className={`bar ${menuVisible ? "active" : ""}`}></div>
        <div className={`bar ${menuVisible ? "active" : ""}`}></div>
      </Link>

      <ul className={`menu ${menuVisible ? "visible" : ""} list-none`}>
        <img src={images.logo} alt="Logo" className="burgerlogo" />
        <MenuItem to="home" text="Home" onClick={handleCloseClick} />
        <MenuItem to="about" text="About us" onClick={handleCloseClick} />
        <MenuItem to="products" text="Products" onClick={handleCloseClick} />
        <li className="menuList">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={300}
            offset={-80}
            onClick={() => {
              handleCloseClick();
              openModal();
            }}
          >
            Contact us
          </Link>
          <ContactUsModal isOpen={modalIsOpen} onRequestClose={closeModal} />
        </li>
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
