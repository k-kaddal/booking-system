import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { RoomModule } from './room.module';

async function bootstrap() {
  const app = await NestFactory.create(RoomModule);
  app.connectMicroservice({
    transport: Transport.TCP,
    options: { host: 'room', port: 5002 },
  });
  await app.startAllMicroservices();
  await app.listen(8002);
}
bootstrap();
