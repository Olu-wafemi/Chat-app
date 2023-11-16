import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { User } from '../user/user.entity';
import { Room } from '../room/room.entity';

@Entity()
export class Message{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    content: string

    //A mnay to one relationship wuth the User entitiy indicating a many to one relkationship with the user,, many messages can be sent with one user
    @ManyToOne(()=> User, (user)=> user.messages)
    user: User


    //Indicating that a message can belongs to one room
    @ManyToOne(()=> Room, (room)=> room.messages)
    room: Room


}