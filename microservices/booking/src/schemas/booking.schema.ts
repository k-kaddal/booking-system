import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BookingDocument = Booking & Document;

@Schema()
export class Booking {
  @Prop({ required: true })
  time: string;

  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  roomId: string;
}

export const BookingSchema = SchemaFactory.createForClass(Booking);
