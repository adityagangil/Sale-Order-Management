import React from "react";

const ViewSaleOrderModal = ({ order, onClose }) => {
  const handleCloseModal = () => {
    onClose();
  };

  return (
    <div>
      <h3>View Sale Order</h3>
      <button onClick={handleCloseModal}>Close</button>
    </div>
  );
};

export default ViewSaleOrderModal;
