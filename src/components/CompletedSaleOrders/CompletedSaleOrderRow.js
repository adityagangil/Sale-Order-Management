import React, { useState } from "react";
import ViewSaleOrderModal from "./ViewSaleOrderModal";

const CompletedSaleOrderRow = ({ order }) => {
  const [showModal, setShowModal] = useState(false);

  const handleViewClick = () => {
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
        <button onClick={handleViewClick}>View</button>
      </td>
      {showModal && (
        <ViewSaleOrderModal order={order} onClose={handleCloseModal} />
      )}
    </tr>
  );
};

export default CompletedSaleOrderRow;
