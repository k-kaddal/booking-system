import {
  Inject,
  Body,
  Controller,
  Get,
  Post,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { zip } from 'rxjs';
import { CreateBooking } from './interfaces/create-booking.interface';
import { SigninUser, LoginUser } from './interfaces/create-user.interface';

@Controller()
export class AppController {
  constructor(
    @Inject('USER') private readonly userClient: ClientProxy,
    @Inject('ROOM') private readonly roomClient: ClientProxy,
    @Inject('BOOKING') private readonly bookingClient: ClientProxy,
  ) {}

  // USER SERVICE
  @Post('signin')
  async signinUser(@Body() user: SigninUser) {
    return this.userClient.send({ cmd: 'create_user' }, user);
  }

  @Post('login')
  async loginUser(@Body() user: LoginUser) {
    let foundUser = await this.userClient
      .send({ cmd: 'validate_user' }, user)
      .toPromise();

    if (!foundUser)
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);

    return foundUser;
  }

  // ROOM SERVICE
  @Post('rooms')
  async getRooms(@Body() company: String) {
    return this.roomClient.send({ cmd: 'get_rooms' }, company);
  }

  // BOOKING SERVICE
  @Post('book')
  async createBooking(@Body() { userId, roomId, time }: CreateBooking) {
    // Create Booking
    let booked = await this.bookingClient
      .send({ cmd: 'create_booking' }, { userId, roomId, time })
      .toPromise();

    let updateBookings = zip(
      await this.userClient.emit(
        { cmd: 'create_booking' },
        { userId, bookingId: booked._id },
      ),
      await this.roomClient.emit(
        { cmd: 'create_booking' },
        { time, roomId, bookingId: booked._id },
      ),
    );

    return booked;
  }
}
