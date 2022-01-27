import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RoomDocument = Room & Document;

@Schema()
export class Room {
  @Prop()
  id: String;

  @Prop()
  company: String;

  @Prop()
  bookings: String[];

  @Prop()
  availableAt: String[];
}

export const RoomSchema = SchemaFactory.createForClass(Room);
