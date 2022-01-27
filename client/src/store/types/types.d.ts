export type Booking = {
  time: string | undefined;
  userId: string | undefined;
  roomId: string | undefined;
};

export type Room = {
  _id: string;
  id?: string;
  company: string;
  bookings: string[];
  availableAt: any;
};

export type User = {
  _id?: string;
  name?: string;
  email: string;
  password?: string;
  company?: string;
};
