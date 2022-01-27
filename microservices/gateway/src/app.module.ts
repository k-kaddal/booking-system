import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'USER',
        transport: Transport.TCP,
        options: { host: 'user', port: 5001 },
      },
      {
        name: 'ROOM',
        transport: Transport.TCP,
        options: { host: 'room', port: 5002 },
      },
      {
        name: 'BOOKING',
        transport: Transport.TCP,
        options: { host: 'booking', port: 5003 },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
