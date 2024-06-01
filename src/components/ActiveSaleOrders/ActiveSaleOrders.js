import React, { useState } from "react";
import ActiveSaleOrderRow from "./ActiveSaleOrderRow";

const ActiveSaleOrders = () => {
  const [activeOrders, setActiveOrders] = useState([
    {
      id: 1,
      customerName: "Spider ap2000",
      price: 100,
      lastModified: "24/5/2024 (11:07 PM)",
    },
    {
      id: 2,
      customerName: "Spider ap2000",
      price: 210,
      lastModified: "24/5/2024 (11:30 PM)",
    },
  ]);

  const handleSave = (updatedOrder) => {
    setActiveOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === updatedOrder.id ? updatedOrder : order
      )
    );
  };

  return (
    <div>
      <h2>Active Sale Orders</h2>
      <table>
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Price</th>
            <th>Last Modified</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {activeOrders.map((order) => (
            <ActiveSaleOrderRow
              key={order.id}
              order={order}
              onSave={handleSave}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ActiveSaleOrders;
