import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and Description */}
        <div className="footer-section about">
          <h3>Goldpearl International</h3>
          <p>Discover the finest selection of gold and pearl jewelry, crafted with elegance and precision to match your exquisite taste.</p>
        </div>

        {/* Navigation Links */}
        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-section contact">
          <h4>Contact Us</h4>
          <p>Email: support@goldpearl.com</p>
          <p>Phone: +1 234 567 890</p>
          <p>Address: 123 Gold Street, Pearl City, USA</p>
        </div>

        {/* Social Media Links */}
        <div className="footer-section social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com"><i className="fab fa-facebook-f"></i></a>
            <a href="https://twitter.com"><i className="fab fa-twitter"></i></a>
            <a href="https://instagram.com"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>&copy; 2024 Goldpearl International | All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
