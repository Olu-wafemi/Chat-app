import { Controller,Get } from "@nestjs/common";

import { MessageService} from "./message.service";

@Controller('messages')
export class MessagesController{
    constructor(private readonly messagesservice: MessageService){}

        @Get()
        findAll(){
            return this.messagesservice.findAll()
        
    }
}