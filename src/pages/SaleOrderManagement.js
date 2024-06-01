import React, { useState } from "react";
import ActiveSaleOrders from "../components/ActiveSaleOrders/ActiveSaleOrders";
import CompletedSaleOrders from "../components/CompletedSaleOrders/CompletedSaleOrders";
import SaleOrderForm from "../components/SaleOrderForm";
import ThemeToggle from "../components/ThemeToggle";
import "./SaleOrderManagement.css";

const SaleOrderManagement = () => {
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

  const handleAddOrder = (order) => {
    setActiveOrders((prevOrders) => [...prevOrders, order]);
  };

  return (
    <div className="sale-order-management-container">
      <h2>Sale Order Management</h2>
      <ThemeToggle />
      <div className="sections-container">
        <div className="section">
          <h3>Active Sale Orders</h3>
          <ActiveSaleOrders orders={activeOrders} />
        </div>
        <div className="section">
          <h3>Completed Sale Orders</h3>
          <CompletedSaleOrders />
        </div>
      </div>
      <SaleOrderForm onAddOrder={handleAddOrder} />
    </div>
  );
};

export default SaleOrderManagement;
