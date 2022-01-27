import { NestFactory } from '@nestjs/core';
import { Transport, TcpOptions } from '@nestjs/microservices';
import { UserModule } from './user.module';

async function bootstrap() {
  const app = await NestFactory.create(UserModule);
  app.connectMicroservice({
    transport: Transport.TCP,
    options: { host: 'user', port: 5001 },
  });
  await app.startAllMicroservices();
  await app.listen(8001);
}
bootstrap();
