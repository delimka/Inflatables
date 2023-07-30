import React from 'react';
import './PhotoCollage.css';

const PhotoCollage = ({ imageFilenames }) => {
  return (
    <div className='collage-container'>
      {imageFilenames.map((image, index) => (
        <div key={index} className='collage-item'>
          <img src={image} alt={`photo_${index}`} className='collage-image' />
        </div>
      ))}
    </div>
  );
};

export default PhotoCollage;
