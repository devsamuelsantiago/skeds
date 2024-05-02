import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PingController } from './ping/ping.controller';

@Module({
  imports: [UsersModule],
  controllers: [AppController, PingController],
  providers: [AppService],
})
export class AppModule {}
