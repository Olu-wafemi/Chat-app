import { Message } from '../messages/message.entity';
import { Room } from '../room/room.entity';
import { Entity, Column, PrimaryGeneratedColumn
,OneToMany } from "typeorm";

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    username: string;

    //A one-to-many relationship with the room entitiy, indicating that a user can own many rooms
    @OneToMany(()=> Room, (room)=> room.owner)
    ownedRooms: Room[];

    //a one-to-many relatonship with the message entity, indicatiing that a user can send multiole messages
    @OneToMany(()=> Message, (message)=> message.user)
    messages: Message[]
}