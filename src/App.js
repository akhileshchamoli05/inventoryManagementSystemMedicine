import React from 'react';
import MedicineProvider from './contextstore/MedicineContext';
import AddMedicine from './components/AddMedicine/AddMedicine';
import MedicineCart from './components/MedicineCart/MedicineCart';

const App = () => {
  return (
    <MedicineProvider>
      <div>
        <h1>Inventory Medicine</h1>
        <AddMedicine />
        <MedicineCart />
      </div>
    </MedicineProvider>
  );
};

export default App;