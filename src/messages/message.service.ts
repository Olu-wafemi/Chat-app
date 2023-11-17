import {Injectable } from "@nestjs/common"

import { InjectRepository } from "@nestjs/typeorm"

import { Repository } from "typeorm"

import { Message  } from "./message.entity"
@Injectable()
export class MessageService{
    constructor(
    @InjectRepository(Message)
    private readonly messageRepository: Repository<Message>, 
    ) {}

    async findAll(): Promise<Message[]>{
        return await this.messageRepository.find();
    }

    async findById(id:number): Promise<Message| undefined>{
        return await this.messageRepository.findOne({where: {id}})
    }

    async findByRoom(roomId: number): Promise<Message[]>{
        return await this.messageRepository.find({where: {room: {id: roomId}}})
    }

    async create(message: Partial<Message>): Promise<Message>{
        const newMessage = this.messageRepository.create(message)
        return await this.messageRepository.save(newMessage)
    }

    async delete(id: number): Promise<void>{
        await this.messageRepository.delete(id)
    }

}