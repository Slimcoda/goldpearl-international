// src/pages/Reserve.jsx
import { useState } from 'react';
import ReservationForm from '../components/ReservationForm';

const Reserve = () => {
  const [product] = useState({ id: 1, name: 'Gold Necklace', price: 2500 });
  

  return (
    <div className="reserve">
      <h1>Reserve a Product</h1>
      <ReservationForm product={product} />
    </div>
  );
};

export default Reserve;
