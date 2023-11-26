import { Body, Controller, Get, Param, Post, Delete } from '@nestjs/common';

import { MessageService} from "./message.service";
import { Message } from './message.entity';

@Controller('messages')
export class MessagesController{
    constructor(private readonly messagesservice: MessageService){}

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
    create(@Body() message: Partial<Message>): Promise<Message>{
        return this.messagesservice.create(message)
    }

    @Delete(':id')
    
    delete(@Param('id') id: string): Promise<void>{
        return this.messagesservice.delete(Number(id))

    }
}