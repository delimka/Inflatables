import React, { useState, useEffect, useRef } from "react";
import "./Products.css";
import data from "./products.json";
import PhotoCollage from "../../components/PhotoCollage/PhotoCollage";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
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
    "INFLATABLE PRODUCTS": ["Arches", "Bottles", "Screens", "Balloons", "Mini-Inflatables", "Sports"],
    "INFLATABLE MASCOTS": ["Arc2", "Bott", "Film", "Ballo", "Mini-Infl", "Spdasdds"],
    "HELIUM SPHERE": ["Arcada", "Bottdasd", "Filmdasd", "Ballodsad", "Mini-Inflds", "Spdasdas"],
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setSelectedSubOption(subOptions[option][0]); 
    localStorage.setItem("selectedOption", option);
    localStorage.setItem("selectedSubOption", subOptions[option][0]);
  };

  const handleSubOptionClick = (option) => {
    setSelectedSubOption(option);
  
    // Determine the correct image directory based on the selected sub-option
    let selectedImageDirectory;
  
    if (option === "Arches") {
      selectedImageDirectory = "arches";
    } else if (option === "Bottles") {
      selectedImageDirectory = "bottles";
    } else if (option === "Mini-Inflatables") {
      selectedImageDirectory = "mini-inflatables";
    } else {
      // Add more conditions for other sub-options if needed
    }
  
    // Get the total number of images available for the selected sub-option
    const totalImages = 8; // Assuming there are 8 images for each sub-option
  
    // Generate an array of image filenames for the selected sub-option
    const imageFilenames = Array.from({ length: totalImages }, (_, index) =>
      `../../assets/collage/${selectedImageDirectory}/${selectedImageDirectory}-${index + 1}.jpg`
    );
    console.log(imageFilenames); // Add this line to check the image filenames

    setMenuItems(imageFilenames); // Set the image filenames for the selected sub-option
  
    localStorage.setItem("selectedSubOption", option);
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
            <h2 className="heading-2">{menuItems[0]?.name}</h2>
            <p>{menuItems[0]?.description}</p>
          </div>
        )}
        {menuItems.length > 0 && selectedSubOption !== "Arches" ? (
          menuItems.map((data, index) => (
            <div key={index} className="menu-item">
              <h2 className="heading-2">{data.name}</h2>
              <p>{data.description}</p>
            </div>
          ))
        ) : null}


        <div className="container-contact-us">
          <p>
            <u>For more information and orders</u>
          </p>
          <div className="arrow">
          <FontAwesomeIcon icon={faArrowDown } className="fa-beat" />
           </div>
           <button className="btn__contact"> Contact us</button>
        </div>
      </div>

      
      <div className="image-list">
        {images[selectedSubOption.toLowerCase()] ? (
          <PhotoCollage imageFilenames={images[selectedSubOption.toLowerCase()]} />
        ) : (
          <p>No images found for the selected product.</p>
        )}      </div>
      
    </div>
  );
};

export default Products;
