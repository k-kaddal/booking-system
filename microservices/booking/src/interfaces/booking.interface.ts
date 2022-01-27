export class CreateBookingDto {
  readonly time: Date;
  readonly userId: string;
  readonly roomId: string;
}

export class UpdateBookingDto {
  readonly time: Date;
  readonly userId: string;
  readonly roomId: string;
}

export class CancelBookingDto {
  readonly time: Date;
  readonly userId: string;
  readonly roomId: string;
}
