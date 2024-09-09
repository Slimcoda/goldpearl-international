// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import Products from './pages/Products'; // Example product page
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <Footer />
    </Router>
    
  );
}

export default App;
