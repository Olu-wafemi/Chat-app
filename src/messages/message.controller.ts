import { Body, Controller, Get, Param, Post, Delete, UsePipes, ValidationPipe } from '@nestjs/common';

import { MessageService} from "./message.service";
import { Message } from './message.entity';
import { WebsocketGateway } from 'src/websocket/websocket.gateway';

@Controller('messages')
export class MessagesController{
    constructor(
        private readonly messagesservice: MessageService,
        private readonly websocketgaeway: WebsocketGateway

        ){}

        @Get()
        findAll(){
            return this.messagesservice.findAll()
        
    }

    @Get(':id')
    findbyId(@Param('id') id: String): Promise<Message| undefined>{
        return this.messagesservice.findById(Number(id))

    }
    @Get('room/:roomId')
    findByRoom(@Param('roomId') roomId: string): Promise<Message[]>{
        return this.messagesservice.findByRoom(Number(roomId))
    }

    @Post()
    @UsePipes(ValidationPipe)

    create(@Body() message: Partial<Message>): Promise<Message>{

        const newMessage = this.messagesservice.create(message)
        this.websocketgaeway.handleChat(null, {roomId: message.room, message:newMessage})
        return newMessage
    }

    @Delete(':id')
    
    delete(@Param('id') id: string): Promise<void>{
        return this.messagesservice.delete(Number(id))

    }
}