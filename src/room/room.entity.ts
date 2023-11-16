import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from '../user/user.entity';
import { Message } from '../messages/message.entity';



@Entity()

export class Room{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name: string;

    //A mnay to one realtionship with user entuty, indicating that a room is owned by one user
    @ManyToOne(()=> User, (user)=> user.ownedRooms)
    owner: User;

    //A one to many realtionship with messages indicating that a room can have multiple messages
    @OneToMany(()=> Message, (message)=> message.room)
    messages: Message[]


}