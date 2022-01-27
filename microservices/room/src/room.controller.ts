import { Controller, Get, Param } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { AddBooking, GetRooms } from './interfaces/room.interface';
import { RoomService } from './room.service';
import { Room } from './schemas/room.schema';

@Controller()
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @MessagePattern({ cmd: 'create_room' })
  createRoom(dto: Room) {
    this.roomService.createRoom(dto);
  }

  @MessagePattern({ cmd: 'get_rooms' })
  getRooms(company: GetRooms): Promise<Room[]> {
    return this.roomService.getRooms(company);
  }

  @EventPattern({ cmd: 'create_booking' })
  createBooking(dto: AddBooking) {
    this.roomService.addBooking(dto);
  }
}
