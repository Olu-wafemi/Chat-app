import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';


@Injectable()
export class Userservice{
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
        
    ){}

    async findAll(): Promise<User[]>{
        return await this.userRepository.find()
    }

    async findById(id: number): Promise<User| undefined>{
        return await this.userRepository.findOne({where:{id}});
    }

    async findByUsername(username: string): Promise<User| undefined>{
        return await this.userRepository.findOne({where: {username}})

    }

    async create(user:Partial<User>): Promise<User|undefined>{
        const newUser =  this.userRepository.create(user);
        return await this.userRepository.save(newUser)
    }

    async update(id: number, updateUser: Partial<User>): Promise<User| undefined>{
        await this.userRepository.update(id, updateUser);
        return await this.findById(id)

    }

    async delete(id: number): Promise<void>{
        await this.userRepository.delete(id)
    }


}