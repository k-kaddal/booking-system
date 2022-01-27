import React, { useState, Component } from "react";
import { Select } from "./styles/styles";

// interface IProps {
//   list: any[];
//   onSelect: any;
// }
interface IProps {
  list: String[];
  booking: any;
  setBooking?: any;
}

const Dropdown = (props: IProps) => {
  const handleSelection = (e: any) => {
    props.setBooking({ ...props.booking, time: e.target.value });
  };

  return (
    <Select defaultValue="" onChange={handleSelection}>
      <option value="" disabled hidden>
        Available at
      </option>
      {props.list.map((item: any, index: number) => (
        <option key={index} value={item}>
          {item}
        </option>
      ))}
    </Select>
  );
};

export default Dropdown;
