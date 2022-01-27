import React, { useState } from "react";
import { Page, Button } from "./styles/styles";
import { useStores } from "../store/StoresProvider";
import Book from "./Book";

interface IProps {
  setStage: any;
}

const Confirmed = (props: IProps) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h3>Booking Confirmed !</h3>
      <Button onClick={() => props.setStage(1)}>Book another Room</Button>
    </div>
  );
};

export default Confirmed;
