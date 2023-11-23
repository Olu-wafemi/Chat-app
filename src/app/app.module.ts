import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from '../database/database.module';
import { UserController } from '../user/user.controller';
import { RoomController } from '../room/room.controller';
import { Userservice } from '../user/user.service';
import { RoomService } from '../room/room.service';
import { MessageService } from '../messages/message.service';
import { MessagesController } from '../messages/message.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [AppController, UserController, MessagesController,RoomController],
  providers: [AppService, Userservice, RoomService, MessageService],
})
export class AppModule {}
