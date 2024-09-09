// src/components/Navbar.jsx
import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">GoldPearl Int'l</Link>
      </div>
      <button className={`navbar-toggler ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
        <span className="toggler-icon">☰</span>
      </button>
      <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/products" className="nav-item">Products</Link>
        <Link to="/about" className="nav-item">About</Link>
        <Link to="/contact" className="nav-item">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
