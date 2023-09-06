import React, { useRef } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../../components/customHooks/useScrollAnimation";

const Header = () => {
  const containerRef = useRef(null);
  const controls = useScrollAnimation(containerRef);

  return (
    <div className="header bg-cover bg-no-repeat bg-center" name="home">
      <div className="dark-overlay"></div>
      <div className="header__container">
        <div className="header__container--mission" ref={containerRef}>
          <motion.p
            className="p__mission"
            initial={{ opacity: 0, y: 100 }}
            animate={controls} 
            transition={{ duration: 1.5 }}
          >
            <strong>DPinflatables</strong> provides a wide range of inflatable products suitable for businesses, corporate gatherings, parties, and various other occasions.
          </motion.p>
        </div>
        <div className="header__check--button" ref={containerRef}>
          <Link
            to="products"
            smooth={true}
            duration={500}
            className="text-xl font-semibold capitalize relative hover:underline 
        3xl:text-3xl 4xl:text-4xl 5xl:text-5xl flex items-center"
          >
            <motion.div
              className="flex flex-1 items-center"
              initial={{ opacity: 0, y: 100 }}
              animate={controls}
              transition={{ duration: 1 }}
            >
              CHECK OUR PRODUCT
              <FontAwesomeIcon icon={faArrowRight} className="fa-beat arrow" size="2x" />
            </motion.div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
