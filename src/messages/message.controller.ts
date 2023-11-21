import { Controller,Get } from "@nestjs/common";

import { MessageService} from "./message.service";
import { Message } from './message.entity';

@Controller('messages')
export class MessagesController{
    constructor(private readonly messagesservice: MessageService){}

        @Get()
        findAll(){
            return this.messagesservice.findAll()
        
    }

    @Get()
    findbyId(id: number): Promise<Message| undefined>{
        return this.messagesservice.findById(id)

    }
}