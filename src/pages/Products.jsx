// src/pages/Products.jsx
import { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch or hardcode product data
    const productData = [
      { id: 1, 
        name: 'Emerald Necklace', 
        description: '24k pure gold', 
        price: 2500,
        image: './necklace_PNG126.png',
        number:'112/35/AC'},

      { id: 2, 
        name: 'Pearl Earrings', 
        description: 'Elegant pearl design', 
        price: 1200 ,
        image: './necklace_PNG20.png',
        number:'112/35/AD'},
    ];
    setProducts(productData);
  }, []);

  return (
    <div className="products">
      <h1>Our Products</h1>
      <p className='products-page-info'>We have variety and large range of products carefully crafted to meet your luxurious desires</p>
      <ProductList products={products} />
    </div>
  );
};

export default Products;
