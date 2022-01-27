import { Booking, Room, User } from "../store/types/types";

export const getBookings = async (): Promise<Booking[]> => {
  return fetch("http://localhost:5000/bookings").then((res) => res.json());
};

// Get available rooms by company
export const getRooms = async (company?: string): Promise<Room[]> => {
  const url = "http://localhost:5000/rooms";
  const credentials = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ company }),
  };

  return await fetch(url, credentials)
    .then((res) => res.json())
    .catch((error) => console.log(error.message));
};

// Get available rooms by company
export const loginUser = async (user: User): Promise<User> => {
  const url = "http://localhost:5000/login";
  const credentials = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  };

  return fetch(url, credentials).then((res) => {
    if (res.ok) return res.json();
    else return false;
  });
};

export const createBooking = async (booking: Booking) => {
  const url = "http://localhost:5000/book";
  const credentials = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(booking),
  };

  return await fetch(url, credentials).then((res) => {
    if (res.ok) return res.json();
    else return false;
  });
};

const handleErrors = (res: any) => {
  if (!res.ok) throw Error(res.statusText);
  return res;
};
