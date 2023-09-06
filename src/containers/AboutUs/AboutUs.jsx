import React, { useRef} from "react";
import "./AboutUs.css";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import images from "../../constants/sliderData/images";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../../components/customHooks/useScrollAnimation";

const About = () => {
  const containerRef = useRef(null);
  const controls = useScrollAnimation(containerRef);


  return (
    <div
      className="container aboutus__grid-container"
      name="about"
      ref={containerRef}
    >
      <motion.div
        className="heading-1"
        initial={{ opacity: 0, y: -100 }} 
        animate={controls}
        transition={{ duration: 0.6 }}
      >
        <h1>About Us</h1>
      </motion.div>

      <motion.div
        className="p__aboutus"
        initial={{ opacity: 0, y: 100 }} 
        animate={controls}
        transition={{ duration: 0.6 }}
      >
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
      </motion.div>

      <motion.div
          initial={{ opacity: 0, y: 100}} 
          animate={controls}
          transition={{ duration: 1.5 }}
          className="photo-slider">
        <ImageSlider images={images} />
      </motion.div>


   

    </div>
  );
};

export default About;
