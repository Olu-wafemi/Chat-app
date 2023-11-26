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
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/user.entity';
import { Room } from '../room/room.entity';
import { Message } from 'src/messages/message.entity';
import { WebsocketGateway } from '../websocket/websocket.gateway';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([User, Room, Message])],
  controllers: [AppController, UserController, MessagesController,RoomController],
  providers: [AppService, Userservice, RoomService, MessageService,WebsocketGateway],
  exports:[Userservice,RoomService,MessageService]
})
export class AppModule {}
