import React from "react";

const SKUSelect = () => {
  const skus = [
    { value: "sku1", label: "SKU 1" },
    { value: "sku2", label: "SKU 2" },
  ];

  return (
    <select>
      {skus.map((sku) => (
        <option key={sku.value} value={sku.value}>
          {sku.label}
        </option>
      ))}
    </select>
  );
};

export default SKUSelect;
