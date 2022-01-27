import { NestFactory } from '@nestjs/core';
import {
  Transport,
  TcpOptions,
  MicroserviceOptions,
} from '@nestjs/microservices';
import { UserModule } from './user.module';

// async function bootstrap() {
//   const app = await NestFactory.createMicroservice<MicroserviceOptions>(
//     UserModule,
//     {
//       transport: Transport.TCP
//     }
//   )
//   app.listen()
// }
// bootstrap();


async function bootstrap() {
  const app = await NestFactory.create(UserModule);
  app.connectMicroservice({
    transport: Transport.TCP,
    options: { host: '0.0.0.0', port: 5001 },
  });
  await app.startAllMicroservices();
  await app.listen(5001);
}
bootstrap();
