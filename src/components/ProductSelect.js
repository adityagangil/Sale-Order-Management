import React from "react";

const ProductSelect = () => {
  const products = [
    { value: "product1", label: "Product 1" },
    { value: "product2", label: "Product 2" },
  ];

  return (
    <select>
      {products.map((product) => (
        <option key={product.value} value={product.value}>
          {product.label}
        </option>
      ))}
    </select>
  );
};

export default ProductSelect;
