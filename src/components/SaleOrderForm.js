import React, { useState } from "react";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./SaleOrderForm.css";

const SaleOrderForm = ({ onAddOrder }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [selectedDate, setSelectedDate] = useState(null);

  const onSubmit = (data) => {
    data.invoiceDate = selectedDate;
    data.id = Date.now();
    data.lastModified = new Date().toLocaleString();
    onAddOrder(data);
    setSelectedDate(null); // Reset selected date
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="sale-order-form">
      <label>
        Customer:
        <select {...register("customer", { required: true })}>
          <option value="">Select Customer</option>
          <option value="Customer 1">Customer 1</option>
          <option value="Customer 2">Customer 2</option>
        </select>
      </label>
      {errors.customer && <p className="error-message">Customer is required</p>}
      <br />
      <label>
        Product:
        <select {...register("product", { required: true })}>
          <option value="">Select Product</option>
          <option value="Product 1">Product 1</option>
          <option value="Product 2">Product 2</option>
        </select>
      </label>
      {errors.product && <p className="error-message">Product is required</p>}
      <br />
      <label>
        SKU:
        <select {...register("sku", { required: true })}>
          <option value="">Select SKU</option>
          <option value="SKU 1">SKU 1</option>
          <option value="SKU 2">SKU 2</option>
        </select>
      </label>
      {errors.sku && <p className="error-message">SKU is required</p>}
      <br />
      <label>
        Quantity:
        <input type="number" {...register("quantity", { required: true })} />
      </label>
      {errors.quantity && <p className="error-message">Quantity is required</p>}
      <br />
      <label>
        Invoice Date:
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
        />
      </label>
      <br />
      <button type="submit" className="submit-button">
        Create Sale Order
      </button>
    </form>
  );
};

export default SaleOrderForm;
