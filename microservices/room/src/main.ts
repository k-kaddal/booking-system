import { NestFactory } from '@nestjs/core';
import { Transport , MicroserviceOptions} from '@nestjs/microservices';
import { RoomModule } from './room.module';

async function bootstrap() {
  const app = await NestFactory.create(RoomModule);
  app.connectMicroservice({
    transport: Transport.TCP,
    options: { host: '0.0.0.0', port: 5002 },
  });
  await app.startAllMicroservices();
  await app.listen(5002);
}
bootstrap();
