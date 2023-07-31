import React from 'react';
import { useTransition, animated } from 'react-spring';
import './PhotoCollage.css';

const PhotoCollage = ({ imageFilenames }) => {
  console.log(imageFilenames); // Add this line to check the image filenames received

  const transitions = useTransition(imageFilenames, {
    from: { opacity: 0.5, }, 
    enter: { opacity: 1, }, 
    leave: { opacity: 0, },
    config: { duration: 300 }, 
    
  });

  return (
    <div className='collage-container'>
      {transitions((style, image) => (
        <animated.div style={style} key={image} className={"collage-item"}>
          <img src={image} alt={`photo_${image}`} className='collage-image' />
        </animated.div>
      ))}
    </div>
  );
};

export default PhotoCollage;
