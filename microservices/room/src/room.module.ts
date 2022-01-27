import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RoomController } from './room.controller';
import { RoomService } from './room.service';
import { RoomSchema } from './schemas/room.schema';

import Config from './config/keys';

@Module({
  imports: [
    MongooseModule.forRoot(Config.mongoURI),
    MongooseModule.forFeature([
      {
        name: 'Room',
        schema: RoomSchema,
        collection: 'rooms',
      },
    ]),
  ],
  controllers: [RoomController],
  providers: [RoomService],
})
export class RoomModule {}
