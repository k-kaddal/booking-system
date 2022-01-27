import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { BookingModule } from './booking.module';

async function bootstrap() {
  const app = await NestFactory.create(BookingModule);
  app.connectMicroservice({
    transport: Transport.TCP,
    options: { host: 'booking', port: 5003 },
  });
  await app.startAllMicroservices();
  await app.listen(8003);
}
bootstrap();
