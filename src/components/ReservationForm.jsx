// src/components/ReservationForm.jsx
import { useState } from 'react';

const ReservationForm = ({ product }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [itemNumber, setItemNumber] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Reservation Info:', { name, address, itemNumber, email, message, product });
    alert(`Reservation successful for ${product.name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Reserve: {product.name}</h2>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <label>
        Address:
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
      </label>
      <label>
        Item Number:
        <input placeholder="please quote item number here" value={itemNumber} onChange={(e) => setItemNumber(e.target.value)} required />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </label>
      <label>
        Message:
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
      </label>
      <button type="submit">Submit Reservation</button>
    </form>
  );
};

export default ReservationForm;
