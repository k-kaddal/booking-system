import React, { useState } from "react";
import Rooms from "./Rooms";
import { Container, Button } from "./styles/styles";
import Dropdown from "./Dropdown";
import { useStores } from "../store/StoresProvider";
import { observer } from "mobx-react-lite";
import { setTokenSourceMapRange } from "typescript";

interface IProps {
  setStage: any;
}

const Book = (props: IProps) => {
  const { userStore, bookingsStore, roomsStore } = useStores();

  const [booking, setBooking] = useState({
    time: "9AM",
    roomId: "",
    userId: userStore.activeUser._id,
  });
  const [error, setError] = useState("");

  const handleBooking = () => {
    if (!booking.time || !booking.roomId)
      setError("Select room and time to confirm your booking");

    let chosenRoom = roomsStore.getRoom(booking.roomId);

    let confirmedBooking = bookingsStore.createBooking({
      time: booking.time,
      userId: userStore.activeUser._id,
      roomId: chosenRoom?._id,
    });

    if (!confirmedBooking) return setError("Already Booked");
    props.setStage(2);
  };

  return (
    <div>
      <div
        style={{
          border: "thin solid red",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
          }}
        >
          <div>Room: {booking.roomId}</div>
          <div>At: {booking.time}</div>
        </div>
        {/* <Dropdown list={times} onSelect={setTime} /> */}
        <Button onClick={handleBooking}>Confirm Booking</Button>
        <Button onClick={userStore.logoutUser}>Logout</Button>
      </div>
      {error != "" ? <h3>{error}</h3> : null}

      {/* <Rooms room={room} selectRoom={setRoom} /> */}
      <Rooms booking={booking} setBooking={setBooking} />
    </div>
  );
};

export default observer(Book);
