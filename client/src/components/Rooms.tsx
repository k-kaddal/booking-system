import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useStores } from "../store/StoresProvider";
import { Container, Grid, Card, Select } from "./styles/styles";

interface IProps {
  setBooking: any;
  booking: {
    roomId?: String;
    time?: String;
  };
}

const Rooms = (props: IProps) => {
  const { roomsStore, userStore } = useStores();
  const { rooms } = roomsStore;

  useEffect(() => {
    roomsStore.fetchRooms(userStore.activeUser.company);
  }, []);

  const times = [
    "9AM",
    "10AM",
    "11AM",
    "12PM",
    "1PM",
    "2PM",
    "3PM",
    "4PM",
    "5PM",
  ];

  return (
    <Container style={{ display: "flex", flexDirection: "column" }}>
      <Select
        defaultValue=""
        onChange={(e) =>
          props.setBooking({
            ...props.booking,
            roomId: "",
            time: e.target.value,
          })
        }
      >
        <option value="" disabled hidden>
          Available at
        </option>
        {times.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </Select>

      <Grid>
        {rooms.map((room) => {
          if (room.availableAt.includes(props.booking.time))
            return (
              <Card
                key={room._id}
                style={{
                  background:
                    room.id === props.booking.roomId ? "red" : "black",
                }}
              >
                <div
                  onClick={() =>
                    props.setBooking({ ...props.booking, roomId: room.id })
                  }
                >
                  <h3>Room: {room.id}</h3>
                </div>
              </Card>
            );
        })}
      </Grid>
    </Container>
  );
};

export default observer(Rooms);
