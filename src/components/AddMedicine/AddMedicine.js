import React, { useState } from 'react';
import { useMedicineContext } from '../../contextstore/MedicineContext';

const AddMedicine = () => {
  const { medicineList, setMedicineList } = useMedicineContext();
  const [medicine, setMedicine] = useState('');

  const handleAddMedicine = () => {
    if (medicine.trim() !== '') {
      setMedicineList([...medicineList, medicine]);
      setMedicine('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={medicine}
        onChange={(e) => setMedicine(e.target.value)}
      />
      <button onClick={handleAddMedicine}>Add Medicine</button>
    </div>
  );
};

export default AddMedicine;
