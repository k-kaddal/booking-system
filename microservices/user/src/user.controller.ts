import { Controller, Get } from '@nestjs/common';
import { MessagePattern, EventPattern } from '@nestjs/microservices';
import { AddBooking } from './interfaces/user.interface';
import { User } from './schemas/user.schema';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @EventPattern({ cmd: 'create_booking' })
  async addBooking(dto: AddBooking) {
    return this.userService.addBooking(dto);
  }

  @MessagePattern({ cmd: 'validate_user' })
  validateUser(dto: User): Promise<User> {
    return this.userService.getUser(dto);
  }
}
