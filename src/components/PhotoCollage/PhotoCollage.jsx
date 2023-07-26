import React from 'react';
import './PhotoCollage.css';

const PhotoCollage = ({ images }) => {
  const slides = Object.values(images);

  return (
    <div className='collage-container'>
      {slides.map((slide, index) => (
        <div key={index} className='collage-item'>
          <img src={slide} alt={`photo_${index}`} className='collage-image' />
        </div>
      ))}
    </div>
  );
};

export default PhotoCollage;
