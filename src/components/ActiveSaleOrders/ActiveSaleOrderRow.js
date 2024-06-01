import React, { useState } from "react";
import EditSaleOrderModal from "./EditSaleOrderModal";

const ActiveSaleOrderRow = ({ order, onSave }) => {
  const [showModal, setShowModal] = useState(false);

  const handleEditClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <tr>
      <td>{order.customerName}</td>
      <td>{order.price}</td>
      <td>{order.lastModified}</td>
      <td>
        <button onClick={handleEditClick}>Edit</button>
      </td>
      {showModal && (
        <EditSaleOrderModal
          order={order}
          onClose={handleCloseModal}
          onSave={onSave}
        />
      )}
    </tr>
  );
};

export default ActiveSaleOrderRow;
