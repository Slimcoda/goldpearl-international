import React, { useState, useEffect } from 'react';
import './CustomerSatisfactionCounter.css';

const CustomerSatisfactionCounter = () => {
  const [count, setCount] = useState(0);  // Initial counter value
  const targetCount = 414250;  // Target value for customer satisfaction

  useEffect(() => {
    const incrementCounter = () => {
      if (count < targetCount) {
        setCount(prevCount => prevCount + 1250);  // Increment the count
      }
    };

    const intervalId = setInterval(incrementCounter, 30);  // Adjust speed (50ms per increment)

    return () => clearInterval(intervalId);  // Cleanup interval when component unmounts
  }, [count, targetCount]);

  return (
    <div className="counter-container">
      <h2>Customer Satisfaction</h2>
      <p className="counter-number">{count}</p>  {/* Display the count */}
      <p><small><cite>Satisfied clients since 2009</cite></small></p>
    </div>
  );
};

export default CustomerSatisfactionCounter;
