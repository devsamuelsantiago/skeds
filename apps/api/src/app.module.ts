import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PingController } from './ping/ping.controller';

@Module({
  imports: [],
  controllers: [AppController, PingController],
  providers: [],
})
export class AppModule {}
