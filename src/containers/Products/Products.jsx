import React, { useState, useEffect } from "react";
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

  const Options = ["INFLATABLE PRODUCTS", "INFLATABLE MASCOTS", "HELIUM SPHERE", "DSDSDSD", "DSADASDAS", "DASDSA"];
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

  return (
    <div className="products-container">
      <div className="heading">
        <h1>Check our Products</h1>
      </div>
      <div className="row-tabs1">
        {Options.map((option) => (
          <button
            key={option}
            className={`rounded-button ${selectedOption === option ? "active" : ""}`}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </button>
        ))}
      </div>
      <div className="space"> <svg xmlns="http://www.w3.org/2000/svg" width="1202" height="2" viewBox="0 0 1202 2" fill="none">
  <g opacity="0.2">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M1 1H1201H1Z" fill="#0A142F"/>
    <path d="M1 1H1201" stroke="#2B3D51" stroke-linecap="square"/>
  </g>
</svg></div>
      <div className="row-tabs2">
        {subOptions[selectedOption].map((option) => (
          <button
            key={option}
            className={`row2__rounded-button ${selectedSubOption === option ? "active" : ""}`}
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
