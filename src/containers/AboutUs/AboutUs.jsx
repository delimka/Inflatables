import React from "react";
import "./AboutUs.css";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import images from "../../constants/sliderData/images";

const About = () => {
  return (
    <div className="container aboutus__grid-container" name="about">
      <div className="heading-1">
        <h1>About Us</h1>
      </div>
      <div className="p__aboutus">
        <p>
          Dpinflatables manufactures inflatable tents for companies, events,
          exhibition stands, and other events or special occasions. We employ
          highly qualified engineers and draftsmen who provide excellent results
          with regards to the creation and manufacture of our products.
        </p>{" "}
        <br />
        <p>
          In the world of events, dpinflatables is the business solution for
          easy-to-use tents which are convenient to transport, high quality,
          resistant, durable, and fast to assemble. Creating environments using
          inflatable tents from dpinflatables is practical, simple, fast, and
          economical.
        </p>
      </div>

      <div className="photo-slider">
        <ImageSlider images={images} />
      </div>
    </div>
  );
};

export default About;
