import React, { useState, useEffect, useRef } from "react";
import "./Products.css";
import data from "./products.json";
import PhotoCollage from "../../components/PhotoCollage/PhotoCollage";
import images from "../../constants/collageData/images";

const Products = () => {
  const [selectedOption, setSelectedOption] = useState(() => {
    return localStorage.getItem("selectedOption") || "INFLATABLE PRODUCTS";
  });

  const [selectedSubOption, setSelectedSubOption] = useState(() => {
    // Get the selected sub-option from localStorage or set a default value
    return localStorage.getItem("selectedSubOption") || "Arches";
  });

  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    // filter the menu data based on the selected option
    const filteredItems = data.filter((item) => item.name === selectedSubOption);
    setMenuItems(filteredItems);
  }, [selectedSubOption]);

  const Options = ["INFLATABLE PRODUCTS", "INFLATABLE MASCOTS", "HELIUM SPHERE"];
  const subOptions = {
    "INFLATABLE PRODUCTS": ["Arches", "Bottles", "Film screen", "Balloons", "Mini-Inflatables", "Sports"],
    "INFLATABLE MASCOTS": ["Arc2", "Bott", "Film", "Ballo", "Mini-Infl", "Spdasdds"],
    "HELIUM SPHERE": ["Arcada", "Bottdasd", "Filmdasd", "Ballodsad", "Mini-Inflds", "Spdasdas"],
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setSelectedSubOption(subOptions[option][0]); // Set the first sub-option as default for the selected top-level option
    localStorage.setItem("selectedOption", option);
    localStorage.setItem("selectedSubOption", subOptions[option][0]);
  };

  const handleSubOptionClick = (option) => {
    setSelectedSubOption(option);
    localStorage.setItem("selectedSubOption", option); // Save the selected sub-option to localStorage
  };

// Creating adaptive line between row 1 and row 2 lists of products
  const row2Ref = useRef(null);

  // update the line width when the component mounts and whenever the window is resized
  useEffect(() => {
    const handleResize = () => {
      if (row2Ref.current) {
        const row2Width = row2Ref.current.offsetWidth;

        // Update --line-width with the row2Width value
        document.documentElement.style.setProperty("--line-width", `${row2Width}px`);
      }
    };

    handleResize();

    // for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="container products__grid-container">
      <div className="heading-1">
        <h1>Check our Products</h1>
      </div>
      <div className="row-tabs1">
        {Options.map((option) => (
          <button
            key={option}
            className={`rounded-button row1__rounded-button ${selectedOption === option ? "active" : ""}`}
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
            className={`rounded-button row2__rounded-button ${selectedSubOption === option ? "active" : ""}`}
            onClick={() => handleSubOptionClick(option)} // Call handleSubOptionClick to update the sub-option
          >
            {option}
          </button>
        ))}
      </div>

      <div className="about-product">
        {selectedSubOption === "Arches" && (
          <div className="menu-item">
            <h3>{menuItems[0]?.name}</h3>
            <p>{menuItems[0]?.description}</p>
          </div>
        )}
        {menuItems.length > 0 && selectedSubOption !== "Arches" ? (
          menuItems.map((data, index) => (
            <div key={index} className="menu-item">
              <h3>{data.name}</h3>
              <p>{data.description}</p>
            </div>
          ))
        ) : null}
        <div className="contact-us"> </div>
      </div>

      
      <div className="image-list">
      <PhotoCollage images={images} />
      </div>
    </div>
  );
};

export default Products;
