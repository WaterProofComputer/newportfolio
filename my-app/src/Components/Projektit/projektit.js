import React, { useState, useEffect } from 'react';
import './projektit.scss';

const Projektit = () => {
  const [current, setCurrent] = useState(0);
  const images = [
    'wizardtower.png',
    'maalaus.jpg',
    'maalaus.png',
    'logo512.png',
  ]; // Add other image URLs as needed

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="galleria">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Gallery Image ${index + 1}`}
          className={index === current ? 'active' : ''}
          style={{
            position: 'absolute',
            transition: '1s',
            objectFit: 'contain',
          }}
        />
      ))}
    </div>
  );
};

export default Projektit;