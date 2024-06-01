import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CustomDatePicker = ({ selectedDate, handleDateChange }) => {
  return <DatePicker selected={selectedDate} onChange={handleDateChange} />;
};

export default CustomDatePicker;
