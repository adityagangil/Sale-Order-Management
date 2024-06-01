import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SaleOrderManagement from "./pages/SaleOrderManagement";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/sale-order-management" element={<SaleOrderManagement />} />
    </Routes>
  );
};

export default App;
