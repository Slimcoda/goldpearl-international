// src/pages/Home.jsx
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to Goldpearl International</h1>
      <p>Your trusted source for luxurious products.</p>
      <p className='more-info'><Link to="/products">Explore Products</Link></p>
    </div>
  );
};

export default Home;
