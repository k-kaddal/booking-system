import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { AddBooking } from './interfaces/user.interface';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async createUser(dto: User): Promise<User> {
    const newUser = new this.userModel(dto);
    return await newUser.save();
  }

  async addBooking(dto: AddBooking) {
    await this.userModel.findByIdAndUpdate(dto.userId, {
      $push: { bookings: dto.bookingId },
    });
  }

  async getUser(dto: User): Promise<User> {
    return await this.userModel.findOne({
      email: dto.email,
      password: dto.password,
    });
  }
}
