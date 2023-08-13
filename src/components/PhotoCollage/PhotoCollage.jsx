import React, { useState, useEffect } from 'react';
import './PhotoCollage.css';
import Modal from 'react-modal';
import ImageSlider from '../ImageSlider/ImageSlider';

const PhotoCollage = ({ imageFilenames }) => {
  const [selectedPhoto, setSelectedPhoto] = useState(false);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(false);
  };

  useEffect(() => {
    const lastItem = document.querySelector('.collage-container .collage-item:last-child');

    if (lastItem) {
      // Check if the number of images is odd
      if (imageFilenames.length % 2 !== 0) {
        lastItem.classList.add('last-child-odd');
      } else {
        lastItem.classList.remove('last-child-odd');
      }
    }
  }, [imageFilenames]);

  return (
    <div className='collage-container'>
      {imageFilenames.map((image, index) => (
        <div key={index} className='collage-item' onClick={() => openModal(image)}>
          <img src={image} alt={`photo_${index + 1}`} className='collage-image' loading='lazy' />
        </div>
      ))}
      <Modal
        isOpen={!!selectedPhoto}
        onRequestClose={closeModal}
        className='modal'
        overlayClassName='modal-overlay'
      >
        {selectedPhoto && (
          <ImageSlider images={imageFilenames} alt='selected_photo' className='selected-photo' />
        )}
        <button className='close-button' onClick={closeModal}>
          &#x2715;
        </button>
      </Modal>
    </div>
  );
};

export default PhotoCollage;
