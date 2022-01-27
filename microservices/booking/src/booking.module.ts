import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BookingController } from './booking.controller';
import { BookingService } from './booking.service';
import { BookingSchema } from './schemas/booking.schema';

import Config from './config/keys';

@Module({
  imports: [
    MongooseModule.forRoot(Config.mongoURI),
    MongooseModule.forFeature([
      {
        name: 'Booking',
        schema: BookingSchema,
        collection: 'bookings',
      },
    ]),
  ],
  controllers: [BookingController],
  providers: [BookingService],
})
export class BookingModule {}
