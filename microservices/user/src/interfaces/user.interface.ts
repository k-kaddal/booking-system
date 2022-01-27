export interface CreateUser {
  name: string;
  email: string;
  password: string;
  company: string;
}

export interface AddBooking {
  userId: string;
  bookingId: string;
}
