import React from "react";
import CompletedSaleOrderRow from "./CompletedSaleOrderRow";

const CompletedSaleOrders = () => {
  const completedOrders = [
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
  ];

  return (
    <div>
      <h2>Completed Sale Orders</h2>
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
          {completedOrders.map((order) => (
            <CompletedSaleOrderRow key={order.id} order={order} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompletedSaleOrders;
