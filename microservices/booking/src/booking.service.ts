import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Booking } from './schemas/booking.schema';

@Injectable()
export class BookingService {
  constructor(
    @InjectModel('Booking') private readonly bookingModel: Model<Booking>,
  ) {}

  async createBooking(booking: Booking): Promise<Booking> {
    // Check if already booked
    const isBooked = await this.bookingModel.findOne(booking);

    if (isBooked)
      throw new HttpException('Already booked', HttpStatus.BAD_REQUEST);

    // Book
    const createdBooking = new this.bookingModel(booking);
    return await createdBooking.save();
  }
}
