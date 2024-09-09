// src/pages/LandingPage.jsx
import React from 'react';
import CustomerSatisfactionCounter from '../components/CustomerSatisfactionCounter';
import PartnersSlider from '../components/PartnersSlider';

import './LandingPage.css';


const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to GoldPearl International</h1>
          <p>Elegance crafted in pearls and gold jewelry, where sophistication meets timeless design.</p>
          <a href="/products" className="cta-button">Explore Now</a>
        </div>
        <img className="hero-image" src="../src/assets/images/hero-image1.png" alt="Gold and Pearl Jewelry" />
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why GoldPearl?</h2>
        <div className="features-container">
          <div className="feature-item">
            <h3>Premium Quality</h3>
            <p>Our products are crafted with the finest materials for timeless beauty and elegance.</p>
          </div>
          <div className="feature-item">
            <h3>Exclusive Designs</h3>
            <p>Discover unique designs tailored for every occasion and taste.</p>
          </div>
          <div className="feature-item">
            <h3>Trusted by Customers</h3>
            <p>We prioritize your satisfaction with dedicated service and exceptional quality.</p>
          </div>
        </div>
         {/* Place the counter below the hero section */}
         <section className="satisfaction-section">
            <CustomerSatisfactionCounter />
        </section>
      </section>

      {/* Product Highlights */}
      <section className="products">
        <h2>Featured Products</h2>
        
        <div className="product-grid">
          <div className="product-card">
            <img src="../src/assets/images/R (2).png" alt="Gold Necklace" />
            <div className='product-info'>
            <h3>Gold Necklace</h3>
            <p>A stunning gold necklace perfect for formal and casual events.</p>
            <a href="/products" className="cta-button">Shop Now</a>
          </div>
          </div>
          <div className="product-card">
            <img src="../src/assets/images/OIP (2).jpg" alt="Pearl Earrings" />
            <div className='product-info'>
            <h3>Pearl Earrings</h3>
            <p>Beautifully crafted pearl earrings that define elegance.</p>
            <a href="/products" className="cta-button">Shop Now</a>
          </div></div>
          <div className="product-card">
            <img src="../src/assets/images/OIP (1).jpg" alt="Pearl Earrings" />
            <div className='product-info'>
            <h3>Pearl Earrings</h3>
            <p>Beautifully crafted pearl earrings that define elegance.</p>
            <a href="/products" className="cta-button">Shop Now</a>
          </div></div>
        </div>
        
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-container">
        <div className="testimonial">
          <p>"Goldpearl offers the finest jewelry with unmatched quality and service!"</p>
          <img src="../src/assets/images/OIP(5).jpg" alt="Happy Client" className="testimonial-image" />
          <h4>— Sarah L.</h4>
        </div>
        <div className="testimonial">
          <p>"Their designs are so unique, I always receive compliments when I wear Goldpearl pieces."</p>
          <img src="../src/assets/images/OIP(6).jpg" alt="Happy Client" className="testimonial-image" />
          <h4>— Hanny K.</h4>
        </div>
        <div className="testimonial">
          <p>"Their designs are so unique, I always receive compliments when I wear Goldpearl pieces."</p>
          <img src="../src/assets/images/OIP(6).jpg" alt="Happy Client" className="testimonial-image" />
          <h4>— Hanny K.</h4>
        </div>
        
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2>Ready to Find Your Perfect Jewelry?</h2>
       
           
       
        
        <a href="/products" className="cta-button">Shop Now</a>
        <section className="partners-section">
        <h2>Our Partners & Supporters</h2>
        <PartnersSlider />
      </section>
        
      </section>
    </div>
  );
};

export default LandingPage;
