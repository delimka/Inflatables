import React, { useState } from 'react';
import { useTransition, animated } from '@react-spring/web';
import './PhotoCollage.css';
import Modal from 'react-modal';

const PhotoCollage = ({ imageFilenames }) => {
  const [selectedPhoto, setSelectedPhoto] = useState(false);

  const transitions = useTransition(imageFilenames, {
    from: { opacity: 0.5, transform: 'scale(0)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0)' },
    config: { duration: 150 },
  });

  const openModal = (photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(false);
  };

  return (
    <div className='collage-container'>
      {transitions((style, image, index) => (
        <animated.div
          key={index}
          style={style}
          className='collage-item'
          onClick={() => openModal(image)}
        >
          <img src={image} alt={`photo_${index + 1}`} className='collage-image' />
        </animated.div>
      ))}
      <Modal
        isOpen={!!selectedPhoto} 
        onRequestClose={closeModal}
        className='modal'
        overlayClassName='modal-overlay'
      >
        {selectedPhoto && (
          <img src={selectedPhoto} alt='selected_photo' className='selected-photo' />
        )}
        <button className='close-button' onClick={closeModal}>
          &#x2715;
        </button>
      </Modal>
    </div>
  );
};

export default PhotoCollage;
