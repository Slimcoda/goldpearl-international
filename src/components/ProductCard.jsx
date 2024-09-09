// src/components/ProductCard.jsx
import React from 'react';

import goldNecklaceImage from '../assets/images/necklace_PNG126.png';
import pearlEarringsImage from '../assets/images/necklace_PNG20.png';

const ProductCard = ({ product }) => {
     // Use the imported image based on product data
     const getProductImage = () => {
        switch (product.name) {
          case 'Emerald Necklace':
            return goldNecklaceImage;
          case 'Pearl Earrings':
            return pearlEarringsImage;
          default:
            return ''; // Fallback image if needed
        }
      };

    return (
      <div className="product-card">
         <img src={getProductImage()} alt={product.name} className="product-image" />
        <div className="produc-info">
            <h3>{product.name}</h3>
            <p><cite>Item Code: </cite>{product.number}</p>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <button type="submit">Reserve Now</button>
        </div>
    </div>
      
    );
  };
  
  export default ProductCard;
  
   