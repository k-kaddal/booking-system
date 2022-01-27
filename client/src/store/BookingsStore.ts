import { makeAutoObservable } from "mobx";
import { Booking } from "./types/types";
import { getBookings, createBooking } from "../api/api";

export class BookingsStore {
  bookings: Booking[] = [];
  isLoading: boolean = true;

  constructor() {
    makeAutoObservable(this);
  }

  createBooking = async (booking: Booking) => {
    let confirmedBooking = await createBooking(booking);
    if (confirmedBooking) this.bookings.push(confirmedBooking);
    return confirmedBooking;
  };
}
