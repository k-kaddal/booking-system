import { Controller, Get } from '@nestjs/common';
import { Booking } from './schemas/booking.schema';
import { BookingService } from './booking.service';
import { MessagePattern, EventPattern } from '@nestjs/microservices';

@Controller()
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @MessagePattern({ cmd: 'create_booking' })
  createBooking(booking: Booking): Promise<Booking> {
    return this.bookingService.createBooking(booking);
  }
}
