import { Module} from "@nestjs/common";
import { TypeOrmModule} from "@nestjs/typeorm";
import { Message } from "src/messages/message.entity";
import { Room } from '../room/room.entity';
import { User } from '../user/user.entity';


@Module({

    imports:[
        TypeOrmModule.forRoot({
            type: 'postgres',
            host:'localhost',
            port:5432,
            username:'effemm',
            password:'Oluwafemi',
            database: 'chat_app',
            entities: [Message, Room, User],
            synchronize: true
        })
    ]
})


export class DatabaseModule {}