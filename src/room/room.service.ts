import { InjectRepository } from "@nestjs/typeorm";
import { Room } from './room.entity';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';


@Injectable()
export class RoomService {
    constructor(
        @InjectRepository(Room)
        private readonly roomRepository: Repository<Room>,
    ){}

    async findAll(): Promise<Room[]>{
        return this.roomRepository.find()
    }

    async findById(id:number): Promise<Room| undefined>{
        return await this.roomRepository.findOne({ where: {id}})
    }

    async create(room: Partial<Room>): Promise<Room>{
        const newRoom = this.roomRepository.create(room)
        return await this.roomRepository.save(newRoom)
    }

    async update(id:number, updateRoom: Partial<Room>): Promise<Room| undefined>{
        await this.roomRepository.update(id, updateRoom);
        return await this.findById(id)
    }

    async delete(id: number): Promise<void>{
        await this.roomRepository.delete(id)
    }
}