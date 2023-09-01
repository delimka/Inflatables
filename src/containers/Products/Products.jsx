import React, { useState, useEffect, useRef } from "react";
import "./Products.css";
import data from "./products.json";
import PhotoCollage from "../../components/PhotoCollage/PhotoCollage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import images from "../../constants/collageData/images";
import ContactUsModal from "../../components/ContactUsModal/ContactUsModal";

const Products = () => {

  const defaultOption = "INFLATABLE PRODUCTS";
  const defaultSubOption = "Arches";

  const [selectedOption, setSelectedOption] = useState(() => {
    const storedOption = localStorage.getItem("selectedOption");
    return storedOption ? storedOption : defaultOption;
  });

  const [selectedSubOption, setSelectedSubOption] = useState(() => {
    const storedSubOption = localStorage.getItem("selectedSubOption");
    return storedSubOption ? storedSubOption : defaultSubOption;
  });

  const Options = ["INFLATABLE PRODUCTS", "TENTS"];
  const subOptions = {
    "INFLATABLE PRODUCTS": [
      "Arches",
      "Bottles",
      "Screens",
      "Balloons",
      "Mini",
      "Party",
    ],
    TENTS: ["Airone", "Marquee", "Pagoda", "Duplex", "Standing"],
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setSelectedSubOption(subOptions[option][0]);
    localStorage.setItem("selectedOption", option);
    localStorage.setItem("selectedSubOption", subOptions[option][0]);
  };

  const [fadeOut, setFadeOut] = useState(false);

  const handleSubOptionClick = (option) => {
    setFadeOut(true);
    const timeout = setTimeout(() => {
      setSelectedSubOption(option);

      const imageFilenames = images[option.toLowerCase()];
      setMenuItems(imageFilenames);
      localStorage.setItem("selectedSubOption", option);

      setFadeOut(false);
    }, 150);
    return () => clearTimeout(timeout);
  };

  const [menuItems, setMenuItems] = useState([]); // description of products

  useEffect(() => {
    const filteredItems = data.filter(
      (item) => item.name === selectedSubOption
    );

    // Apply fade-in effect to the products display
    const productItems = document.querySelectorAll(".container-fade");
    productItems.forEach((item) => {
      item.classList.add("fade-in");
    });

    const timeout = setTimeout(() => {
      productItems.forEach((item) => {
        item.classList.remove("fade-in");
      });
    }, 300);
    setMenuItems(filteredItems);
    return () => clearTimeout(timeout);
  }, [selectedSubOption]);

  const [arrowDown, setArrowDown] = useState(true);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const row2Ref = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      //changing arrow direction in contact us
      setArrowDown(window.innerWidth >= 768.5);

      // Creating adaptive line between row 1 and row 2
      setScreenWidth(window.innerWidth);

      if (row2Ref.current) {
        const row2Width = row2Ref.current.offsetWidth;

        // Update --line-width
        document.documentElement.style.setProperty(
          "--line-width",
          `${row2Width}px`
        );
      }
    };

    handleResize();

    // for window resize
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [selectedOption]);

  // modal for contact button:
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    if (modalIsOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [modalIsOpen]);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="container products__container" name="products">
      <div className="heading-1">
        <h1>Check our Products</h1>
      </div>

      <div className="row-tabs1">
        {Options.map((option) => (
          <button
            key={option}
            className={`rounded-button row1__rounded-button ${
              selectedOption === option ? "active" : ""
            }`}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="space"> </div>

      <div className="row-tabs2" ref={row2Ref}>
        {subOptions[selectedOption].map((option) => (
          <button
            key={option}
            className={`rounded-button row2__rounded-button ${
              selectedSubOption === option ? "active" : ""
            }`}
            onClick={() => handleSubOptionClick(option)}
          >
            {option}
          </button>
        ))}
      </div>
      <div className={`container-fade ${fadeOut ? "fade-out" : "fade-in"}`}>
        <div className="about-product">
          {selectedSubOption === "Arches" && (
            <div className="menu-item">
              <h2 className="heading-2">{menuItems[0]?.name}</h2>
              <p>{menuItems[0]?.description}</p>
            </div>
          )}
          {menuItems.length > 0 && selectedSubOption !== "Arches"
            ? menuItems.map((data, index) => (
                <div key={index} className="menu-item">
                  <h2 className="heading-2">{data.name}</h2>
                  <p>{data.description}</p>
                </div>
              ))
            : null}

          <div className="container-contact-us">
            {screenWidth > 760 && <p>For more information and orders </p>}

            {arrowDown && (
              <div className="arrow">
                <FontAwesomeIcon
                  icon={faArrowDown}
                  className="fa-beat"
                  size="2x"
                />
              </div>
            )}
            <button
              className="btn__contact"
              onClick={() => {
                openModal();
              }}
            >
              Contact Us
            </button>
            <ContactUsModal isOpen={modalIsOpen} onRequestClose={closeModal} />
          </div>
        </div>

        <div className="image-list">
          {images[selectedSubOption.toLowerCase()] ? (
            <PhotoCollage
              key={selectedSubOption} //re-rendered when the selectedSubOption changes
              imageFilenames={images[selectedSubOption.toLowerCase()]}
            />
          ) : (
            <p>No images found for the selected product.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
