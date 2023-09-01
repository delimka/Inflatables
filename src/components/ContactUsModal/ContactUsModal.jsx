import React from 'react';
import Modal from 'react-modal';
import { useMediaQuery } from 'react-responsive';
import './ContactUsModal.css';
import images from '../../constants/images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faSkype, faInstagram,  faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faPhone,
  faMapMarker
} from '@fortawesome/free-solid-svg-icons'; 

const ContactUsModal = ({ isOpen, onRequestClose }) => {
  const isMobile = useMediaQuery({ maxWidth: 993 });

  
  return (
    <Modal
      name="contact-us-form"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Contact Us Modal"
      className="contact-us-modal"
      overlayClassName="overlay"
    >
      <div className="contact-form">
        <div className="contact-form-box__left">
          <div className='logo-container_contact'>
        <img src={images.logo} alt="Logo" className="logo" />
        </div>
        <div className='icons_heading-container'>
          <div className='contact-heading'>
          <strong><h3 className="m-b-10 m-t-5">Get in touch</h3></strong>
          </div>
          {isMobile && (
              <div className="contact-icons">
                <a href="https://www.skype.com/" target="_blank"> <FontAwesomeIcon icon={faSkype}  color="#0078D4" /></a>
                <a href="https://www.instagram.com/dailydevelopmentdpgroup/" target="_blank"><FontAwesomeIcon icon={faInstagram}  color="#E4405F"/></a>
                <a href="https://www.linkedin.com/company/dpointgroup/" target="_blank"><FontAwesomeIcon icon={faLinkedin}  color="#0A66C2"/></a>
              </div>
            )}
        </div>
          <hr />
         
          <div>
          <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />

            <p>
            <a href="mailto:info@dpointgroup.com" target="_blank">info@dpointgroup.com</a>
            </p>
          </div>
          <div>
          <FontAwesomeIcon icon={faPhone} className="contact-icon" />
            <p>
            <a href="tel:+34625766008" target="_blank">+34 625 76 60 08</a>
            </p>
          </div>
          <div>
          <FontAwesomeIcon icon={faMapMarker} className="contact-icon" />
        
            <p>
            <a href="https://goo.gl/maps/532cSrcrR1hQUtYR6"target="_blank"> C/ de Pere IV, 51, 08018 Barcelona, Spain</a>
            </p>
          </div>
          {!isMobile && (
            <div className="contact-icons">
              <a className='icon-link' target="_blank" href="https://www.skype.com/"><FontAwesomeIcon icon={faSkype}  size= '2x' color="white" /></a>
              <a className='icon-link' href="https://www.instagram.com/dailydevelopmentdpgroup/" target="_blank"><FontAwesomeIcon icon={faInstagram} size= '2x'  color="white"/></a>
                <a className='icon-link'href="https://www.linkedin.com/company/dpointgroup/" target="_blank"><FontAwesomeIcon icon={faLinkedin} size= '2x'  color="white"/></a>
            </div>
          )}
        </div>
        <div className="contact-form-box__right">
          <h3 className="m-b-10">Contact Us</h3>
          <hr />
          <form>
            <div className="lab-grid mb-1">
              <div className="lab-grid-cell lab-grid-cell--mb-2x w-third--d w-half--t w-full--m">
                <div className="floating-label-wrap">
                  <input
                    type="text"
                    className="floating-label-field floating-label-field--s1"
                    id="field-1"
                    placeholder="Full Name"
                  />
                  <label htmlFor="field-1" className="floating-label">
                    Full Name
                  </label>
                </div>
              </div>

              <div className="lab-grid-cell lab-grid-cell--mb-2x w-third--d w-half--t w-full--m">
                <div className="floating-label-wrap">
                  <input
                    type="email"
                    className="floating-label-field floating-label-field--s1"
                    id="field-2"
                    placeholder="Email"
                  />
                  <label htmlFor="field-2" className="floating-label">
                    Email ID
                  </label>
                </div>
              </div>

              <div className="lab-grid-cell lab-grid-cell--mb-2x w-third--d w-half--t w-full--m">
                <div className="floating-label-wrap">
                  <input
                    type="url"
                    className="floating-label-field floating-label-field--s1"
                    id="field-3"
                    placeholder="Website"
                  />
                  <label htmlFor="field-3" className="floating-label">
                    Website
                  </label>
                </div>
              </div>

              <div className="lab-grid-cell lab-grid-cell--mb-2x w-third--d w-half--t w-full--m">
                <div className="floating-label-wrap">
                  <input
                    type="tel"
                    className="floating-label-field floating-label-field--s1"
                    id="field-4"
                    placeholder="Contact Number"
                  />
                  <label htmlFor="field-4" className="floating-label">
                    Contact Number
                  </label>
                </div>
              </div>
              <div className="lab-grid-cell lab-grid-cell--mb-1x w-full">
                <div className="floating-label-wrap">
                  <textarea
                    className="floating-label-field floating-label-field--s1"
                    id="field-5"
                    placeholder="Textarea"
                    rows="2"
                  ></textarea>
                  <label htmlFor="field-5" className="floating-label">
                    Message
                  </label>
                </div>
              </div>
            </div>
            <div className='btns__contact-container'>
            <button
              className="btn__submit"
            >
              Submit
            </button>
            <button
              className="btn__cancel"
            >
             Cancel
            </button>
            </div>
          </form>
          
        </div>
        <button className='close-button-contact' onClick={onRequestClose}>
          &#x2715;
        </button>
      </div>
    </Modal>
  );
};

export default ContactUsModal;
