import React, { useState, useEffect } from "react";
import "./Products.css";
import data from "./products.json";

const Products = () => {
  const [selectedOption, setSelectedOption] = useState("Appetizers");
  const [selectedOption2, setSelectedOption2] = useState("Appetizers");
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    // filter the menu data based on the selected option
    const filteredItems = data.filter((item) => item.category === selectedOption);
    setMenuItems(filteredItems);
  }, [selectedOption]);

  const options = ["Appetizers", "Entrees", "Desserts", "Beverages", "Alcohol drinks", "Non-alcohol drinks"];
  const nextOptions = ["Appetizers", "Entrees", "Desserts", "Beverages", "Alcohol drinks", "Non-alcohol drinks"];

  return (
    <div className="products_container">
      <div className="h">
        <h1>Check our Products</h1>
      </div>
      <div className="row_tabs1">
        {options.map((option) => (
          <button
            key={option}
            className={`button ${selectedOption === option ? "active" : ""}`}
            onClick={() => setSelectedOption(option)}
          >
            {option}
          </button>
        ))}
      </div>
      <div className="space"></div>
      <div className="row_tabs2" >  <button
            key={nextOptions}
            className={`button ${selectedOption2 === nextOptions ? "active" : ""}`}
            onClick={() => setSelectedOption2(nextOptions)}
          >
            {nextOptions}
          </button></div>

          <div className="about_product">
             {data.length > 0 ? (
             data.map((item, index) => (
            <div key={index} className="menu-item">
            <h3>{item.name}</h3>
             <p>{item.description}</p>
         </div>
    ))
  ) : (
    <p>No items found</p>
  )}
</div>

      
      <div className="contact_us"></div>
      <div className="image_list"></div>
    </div>
  );
};

export default Products;
