import React from 'react';
import { useMedicineContext } from '../../contextstore/MedicineContext';

const MedicineCart = () => {
  const { cart } = useMedicineContext();

  return (
    <div>
      <h2>Medicine Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        <ul>
          {cart.map((medicine, index) => (
            <li key={index}>{medicine}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MedicineCart;
