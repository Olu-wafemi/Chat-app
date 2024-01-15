import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { MessagesController } from '../messages/message.controller';
import { MessageService } from '../messages/message.service';
import { Message } from '../messages/message.entity';

@Controller('messages')
export class RoomController {
    constructor(private readonly messageService: MessageService){}

    @Get()
    findAll(): Promise<Message[]>{
        return this.messageService.findAll();
    }
    @Get('id')
    findbyId(@Param('id')id: string): Promise<Message| undefined>{
        return this.messageService.findById(Number(id))

    }

    //This is a test spacer

    @Get('room/:roomId')
    findByRoom(@Param('roomId') roomId: string): Promise<Message[]>{
        return this.messageService.findByRoom(Number(roomId));
    }
    @Post()
    create(@Body() message: Partial<Message>): Promise<Message>{
        return this.messageService.create(message)
    }
    @Delete(':id')
    delete(@Param('id') id: string): Promise<void>{
        return this.messageService.delete(Number(id))
    }

}