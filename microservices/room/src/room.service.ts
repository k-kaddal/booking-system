import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Room } from './schemas/room.schema';
import { AddBooking, GetRooms } from './interfaces/room.interface';

@Injectable()
export class RoomService {
  constructor(@InjectModel('Room') private readonly roomModel: Model<Room>) {}

  async createRoom(dto: Room) {
    const newRoom = new this.roomModel(dto);
    await newRoom.save();
  }

  async getRooms(dto: GetRooms): Promise<Room[]> {
    return this.roomModel.find({ company: dto.company });
  }

  async addBooking(dto: AddBooking) {
    await this.roomModel.findByIdAndUpdate(dto.roomId, {
      $push: { bookings: dto.bookingId },
      $pull: { availableAt: dto.time },
    });
  }
}
