import React from "react";

const CustomerSelect = () => {
  const customers = [
    { value: "customer1", label: "Customer 1" },
    { value: "customer2", label: "Customer 2" },
  ];

  return (
    <select>
      {customers.map((customer) => (
        <option key={customer.value} value={customer.value}>
          {customer.label}
        </option>
      ))}
    </select>
  );
};

export default CustomerSelect;
