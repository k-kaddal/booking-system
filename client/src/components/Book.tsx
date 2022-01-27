import React, { useState } from "react";
import Rooms from "./Rooms";
import { Button } from "./styles/styles";
import { useStores } from "../store/StoresProvider";
import { observer } from "mobx-react-lite";

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

  // FUNCTIONS
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

  const logoutUser = () => {
    let logout = userStore.logoutUser;
    props.setStage(0);
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
        <Button onClick={handleBooking}>Confirm Booking</Button>
        <Button onClick={() => logoutUser()}>Logout</Button>
      </div>
      {error != "" ? <h3>{error}</h3> : null}

      <Rooms booking={booking} setBooking={setBooking} />
    </div>
  );
};

export default observer(Book);
