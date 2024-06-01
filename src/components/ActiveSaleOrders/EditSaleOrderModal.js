import React, { useState } from "react";

const EditSaleOrderModal = ({ order, onClose, onSave }) => {
  const [customerName, setCustomerName] = useState(order.customerName);
  const [price, setPrice] = useState(order.price);

  const handleSave = () => {
    onSave({ ...order, customerName, price });
    onClose();
  };

  return (
    <div className="modal">
      <h3>Edit Sale Order</h3>
      <label>
        Customer Name:
        <input
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
        />
      </label>
      <label>
        Price:
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </label>
      <button onClick={handleSave}>Save</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default EditSaleOrderModal;
