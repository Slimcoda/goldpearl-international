import React from 'react';
import './PartnersSlider.css';

const PartnersSlider = () => {
  const partners = [
    '../src/assets/logos/partner1.png',
    '../src/assets/logos/partner2.png',
    '../src/assets/logos/partner3.png',
    '../src/assets/logos/partner4.png',
    '../src/assets/logos/partner5.png',
    '../src/assets/logos/partner6.png',
    // Add more logos as needed
  ];

  return (
    <div className="slider-container">
      <div className="slider">
        {/* Duplicate the logos to create an infinite scroll effect */}
        {[...partners, ...partners].map((logo, index) => (
          <div className="slider-item" key={index}>
            <img src={logo} alt={`Partner ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnersSlider;
