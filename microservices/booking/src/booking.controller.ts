import { Controller, Get } from '@nestjs/common';
import { Booking } from './schemas/booking.schema';
import { BookingService } from './booking.service';
import { MessagePattern, EventPattern } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Controller()
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @MessagePattern({ cmd: 'create_booking' })
  createBooking(booking: Booking): Promise<Booking> {
    return this.bookingService.createBooking(booking);
  }
}

// //   - **/booking/search** (POST) - finds available rooms
// //   - **/booking/reservation** (POST) - books a room
// //   - **/booking** (POST) - find previously booked room
// //   - **/booking/cancel** (POST) - cancel a previously booked room

// @Get()
// findAll(): Promise<Booking[]> {
//   return this.bookingService.findAll();
// }

// // @Get(':id')
// // findOne(@Param('id') id): Promise<Booking> {
// //   return this.bookingsService.findOne(id);
// // }

// @Post()
// create(@Body() createBookingDto: CreateBookingDto): Promise<Booking> {
//   return this.bookingService.create(createBookingDto);
// }

// @Delete(':id')
// delete(@Param('id') id): Promise<Booking> {
//   return this.bookingService.delete(id);
// }

// @Put(':id')
// update(
//   @Body() updateBookingDto: UpdateBookingDto,
//   @Param('id') id,
// ): Promise<Booking> {
//   return this.bookingService.update(id, updateBookingDto);
// }
